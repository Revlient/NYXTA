// API service layer for communicating with the backend

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api';
// Type definitions matching the backend schema
export interface Branch {
  id: number;
  name: string;
  contact_no: string[];
  address: string;
  gmap_link: string;
  thumbnail?: string; // New field - Cloudinary URL for branch thumbnail
  room_rate: Array<{
    title: string;
    rate_per_month: number;
  }>;
  prime_location_perks: Array<{
    title: string;
    distance: string;
    time_to_reach: string;
  }>;
  amenities: string[];
  property_features: string[];
  reg_fee: number;
  is_mess_available: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface GalleryImage {
  id: number;
  branch_id: number;
  image_url: string;
  title: string;
  description: string;
  tags: string[];
  display_order: number;
  created_at?: string;
}

export interface Enquiry {
  id?: number;
  name: string;
  email?: string;
  phone: string;
  message?: string;
  branch_id?: number;
  source?: string;
  created_at?: string;
}

// Generic API error handler
class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new ApiError(response.status, error.message || 'API request failed');
  }
  return response.json();
}

// Branch API
export const branchApi = {
  getAll: async (): Promise<Branch[]> => {
    const response = await fetch(`${API_BASE_URL}/api/branches`)
    
    return handleResponse(response);
  },

  getById: async (id: number): Promise<Branch> => {
    const response = await fetch(`${API_BASE_URL}/api/branches/${id}`);
    return handleResponse(response);
  },

  create: async (data: Omit<Branch, 'id' | 'created_at' | 'updated_at'>): Promise<Branch> => {
    const response = await fetch(`${API_BASE_URL}/api/branches`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  update: async (id: number, data: Partial<Branch>): Promise<Branch> => {
    const response = await fetch(`${API_BASE_URL}/api/branches/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/api/branches/${id}`, {
      method: 'DELETE',
    });
    await handleResponse(response);
  },
};

// Gallery API
export const galleryApi = {
  getAll: async (): Promise<GalleryImage[]> => {
    const response = await fetch(`${API_BASE_URL}/api/gallery`);
    let handledResponse= await handleResponse(response);
    //@ts-ignore
    return handledResponse.data;
  },
  
  getByBranchId: async (branchId: number): Promise<GalleryImage[]> => {
    const response = await fetch(`${API_BASE_URL}/api/gallery/branch/${branchId}`);
    let handledResponse= await handleResponse(response);
    //@ts-ignore
    return handledResponse.data;
  },
  
  create: async (branchId: number, data: Omit<GalleryImage, 'id' | 'branch_id' | 'created_at'>): Promise<GalleryImage> => {
    const response = await fetch(`${API_BASE_URL}/api/gallery/branch/${branchId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },
  
  update: async (branchId: number, imageId: number, data: Partial<GalleryImage>): Promise<GalleryImage> => {
    const response = await fetch(`${API_BASE_URL}/api/gallery/branch/${branchId}/image/${imageId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },
  
  delete: async (branchId: number, imageId: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/api/gallery/branch/${branchId}/image/${imageId}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },
  
  deleteAllByBranchId: async (branchId: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/api/gallery/branch/${branchId}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  }
}

// Enquiries API
export const enquiryApi = {
  getAll: async (branchId?: number): Promise<Enquiry[]> => {
    const url = branchId 
      ? `${API_BASE_URL}/api/enquiries?branch_id=${branchId}`
      : `${API_BASE_URL}/api/enquiries`;
    const response = await fetch(url);
    return handleResponse(response);
  },

  getById: async (id: number): Promise<Enquiry> => {
    const response = await fetch(`${API_BASE_URL}/api/enquiries/${id}`);
    return handleResponse(response);
  },

  create: async (data: Omit<Enquiry, 'id' | 'created_at'>): Promise<Enquiry> => {
    const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  update: async (id: number, data: Partial<Enquiry>): Promise<Enquiry> => {
    const response = await fetch(`${API_BASE_URL}/api/enquiries/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/api/enquiries/${id}`, {
      method: 'DELETE',
    });
    await handleResponse(response);
  },
};

export { ApiError };
