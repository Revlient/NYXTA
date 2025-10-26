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
  thumbnail?: string; // New field from backend
  heroImage: string;
  description: string;
  rooms: Array<{
    string: number;
    name: string;
    price: number;
    capacity: number;
    image: string;
    images: string[];
    features: string[];
    rating: number;
    description: string;
  }>;
  roomsPrice: Array<{
    title: string;
    rate_per_month: number;
  }>;
  locationPerks: Array<{
    title: string;
    distance: string;
    time_to_reach: string;
  }>;
  amenities: string[] | null;
  nearbyEssentials: string[];
  cookingFee: number | null; // Updated to match backend
  regFee: number;
  isCooking: boolean; // New field from backend
  isMessAvailable: boolean; // New field from backend
  displayOrder: number; // New field from backend
}

export interface FrontendGalleryImage {
  src: string;
  title: string;
  branch: string;
  description: string;
}

// Map API branch to frontend format
export function mapBranchToFrontend(apiBranch: ApiBranch): FrontendBranch {
  // Use is_ladies from backend, fallback to name parsing
  const nameLower = apiBranch.name.toLowerCase();
  const isLadies = apiBranch.is_ladies !== null 
    ? apiBranch.is_ladies 
    : (nameLower.includes('ladies') || nameLower.includes('women'));
  
  // Extract place from name (e.g., "NYXTA LADIES HOSTEL - EDAPPALLY" -> "Edappally")
  const placeMatch = apiBranch.name.match(/[-–]\s*(.+?)(?:\s*\(|$)/i);
  const place = placeMatch ? placeMatch[1].trim() : 'Kochi';
  
  // Extract branch number from name or use id
  const branchNumberMatch = apiBranch.name.match(/branch\s*(\d+)/i);
  const branchNumber = branchNumberMatch ? branchNumberMatch[1] : String(apiBranch.id);

  let toReturn: FrontendBranch =  {
    id: apiBranch.id,
    name: apiBranch.name,
    ladies: isLadies,
    place: place,
    branchNumber: branchNumber,
    location: apiBranch.gmap_link,
    phone: apiBranch.contact_no[0] || '',
    address: apiBranch.address,
    image: `/hostels/frontbranch${branchNumber.padStart(2, '0')}.jpg`,
    thumbnail: apiBranch.thumbnail || undefined, // Map thumbnail from backend
    heroImage: `/locations/${place.toLowerCase()}.jpg`,
    description: `Modern hostel accommodation in ${place}`,
    rooms: [], // Will be populated separately if needed
    roomsPrice: apiBranch.room_rate,
    locationPerks: apiBranch.prime_location_perks,
    amenities: null,
    nearbyEssentials: [], // Not in backend schema yet
    cookingFee: apiBranch.cooking_price, // Use backend value (can be null)
    regFee: apiBranch.reg_fee,
    isCooking: apiBranch.is_cooking || false, // New field from backend
    isMessAvailable: apiBranch.is_mess_available || false, // New field from backend
    displayOrder: apiBranch.display_order || 0, // New field from backend
  };
  if (apiBranch.amenities && apiBranch.property_features) {
    toReturn.amenities = [...apiBranch.amenities, ...apiBranch.property_features];
  }else if (apiBranch.amenities){
    toReturn.amenities = [...apiBranch.amenities];
  }else if(apiBranch.property_features){
    toReturn.amenities = [...apiBranch.property_features];
  }else{
    toReturn.amenities = null;
  }
  return toReturn;
}

// Map API gallery image to frontend format
export function mapGalleryImageToFrontend(
  apiImage: ApiGalleryImage,
  branches: ApiBranch[]
): FrontendGalleryImage {
  // @ts-ignore
  const branch = branches.data.find(b => b.id === apiImage.branch_id);
  const branchName = branch ? `Branch ${extractBranchNumber(branch.name)}` : `Branch ${apiImage.branch_id}`;
  
  // Clean image URL by removing backticks and extra whitespace
  const cleanImageUrl = apiImage.image_url.replace(/`/g, '').trim();
  
  return {
    src: cleanImageUrl,
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
