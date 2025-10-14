// Adapter to map backend API data to frontend data structures
import { Branch as ApiBranch, GalleryImage as ApiGalleryImage } from './api';

// Frontend data structures (matching current Branches.ts format)
export interface FrontendBranch {
  id: number;
  name: string;
  ladies: boolean;
  place: string;
  branchNumber: string;
  location: string;
  phone: string;
  address: string;
  image: string;
  heroImage: string;
  description: string;
  rooms: Array<{
    id: number;
    name: string;
    price: number;
    capacity: number;
    image: string;
    images: string[];
    features: string[];
    rating: number;
    description: string;
  }>;
  roomsPrice: Record<string, number>;
  locationPerks: Array<{
    name: string;
    distance: string;
    walk: string;
  }>;
  amenities: string[];
  nearbyEssentials: string[];
  cookingFee: number;
}

export interface FrontendGalleryImage {
  src: string;
  title: string;
  branch: string;
  description: string;
}

// Map API branch to frontend format
export function mapBranchToFrontend(apiBranch: ApiBranch): FrontendBranch {
  // Extract branch metadata from name or use defaults
  const nameLower = apiBranch.name.toLowerCase();
  const isLadies = nameLower.includes('ladies') || nameLower.includes('women');
  
  // Extract place from name (e.g., "NYXTA LADIES HOSTEL - EDAPPALLY" -> "Edappally")
  const placeMatch = apiBranch.name.match(/[-–]\s*(.+?)(?:\s*\(|$)/i);
  const place = placeMatch ? placeMatch[1].trim() : 'Kochi';
  
  // Extract branch number from name or use id
  const branchNumberMatch = apiBranch.name.match(/branch\s*(\d+)/i);
  const branchNumber = branchNumberMatch ? branchNumberMatch[1] : String(apiBranch.id);

  return {
    id: apiBranch.id,
    name: apiBranch.name,
    ladies: isLadies,
    place: place,
    branchNumber: branchNumber,
    location: apiBranch.gmap_link,
    phone: apiBranch.contact_no[0] || '',
    address: apiBranch.address,
    image: `/hostels/frontbranch${branchNumber.padStart(2, '0')}.jpg`,
    heroImage: `/locations/${place.toLowerCase()}.jpg`,
    description: `Modern hostel accommodation in ${place}`,
    rooms: [], // Will be populated separately if needed
    roomsPrice: apiBranch.room_rate,
    locationPerks: apiBranch.prime_location_perks,
    amenities: [...apiBranch.amenities, ...apiBranch.property_features],
    nearbyEssentials: [], // Not in backend schema yet
    cookingFee: 350, // Default
  };
}

// Map API gallery image to frontend format
export function mapGalleryImageToFrontend(
  apiImage: ApiGalleryImage,
  branches: ApiBranch[]
): FrontendGalleryImage {
  const branch = branches.find(b => b.id === apiImage.branch_id);
  const branchName = branch ? `Branch ${extractBranchNumber(branch.name)}` : `Branch ${apiImage.branch_id}`;
  
  return {
    src: apiImage.image_url,
    title: apiImage.title,
    branch: branchName,
    description: apiImage.description,
  };
}

// Helper to extract branch number from name
function extractBranchNumber(name: string): string {
  const match = name.match(/branch\s*(\d+)/i);
  return match ? match[1] : '01';
}

// Map frontend enquiry to API format
export function mapEnquiryToApi(data: {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  branchId?: number;
  source?: string;
}) {
  return {
    name: data.name,
    phone: data.phone,
    email: data.email,
    message: data.message,
    branch_id: data.branchId,
    source: data.source || 'website',
  };
}
