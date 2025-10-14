# NYXTA Frontend - Backend Integration

## Overview
The NYXTA frontend has been integrated with your Neon Postgres backend API.

## Changes Made

### 1. API Service Layer (`src/services/api.ts`)
- Created centralized API client with TypeScript types
- Implements all CRUD operations for:
  - Branches (`/api/branches`)
  - Gallery (`/api/gallery`)
  - Enquiries (`/api/enquiries`)
- Includes error handling and type safety

### 2. Data Adapter (`src/services/dataAdapter.ts`)
- Maps backend schema to frontend data structures
- Handles compatibility between API and existing UI components
- Converts:
  - `Branch` (API) ↔ `FrontendBranch` (UI)
  - `GalleryImage` (API) ↔ `FrontendGalleryImage` (UI)

### 3. Environment Configuration
- Added `.env` file with `VITE_API_URL`
- Updated `vite-env.d.ts` for TypeScript support
- Default API URL: `http://localhost:3000/api`

### 4. Updated Components

#### Hostels Component
- Fetches branches from API on mount
- Shows loading spinner while fetching
- Displays error message with retry button
- Real-time data from database

#### HostelDetails Component
- Fetches individual branch by ID from API
- Shows loading state
- Error handling with fallback UI
- Dynamic data rendering

#### Gallery Component
- Fetches gallery images from API
- Supports branch filtering
- Loading and error states
- Maps data to existing UI structure

### 5. Error Handling
- Added `ErrorBoundary` component to catch React errors
- API error handling with custom `ApiError` class
- User-friendly error messages
- Retry functionality

## Setup

### Prerequisites
1. Backend server running on `http://localhost:3000`
2. Database seeded with sample data

### Installation
```bash
# Install dependencies (if not already done)
npm install

# Start the dev server
npm run dev
```

### Environment Variables
Create or update `.env`:
```
VITE_API_URL=http://localhost:3000/api
```

## API Endpoints Used

### Branches
- `GET /api/branches` - Get all branches
- `GET /api/branches/:id` - Get single branch
- `POST /api/branches` - Create branch (admin)
- `PUT /api/branches/:id` - Update branch (admin)
- `DELETE /api/branches/:id` - Delete branch (admin)

### Gallery
- `GET /api/gallery` - Get all images
- `GET /api/gallery?branch_id=X` - Filter by branch
- `POST /api/gallery` - Upload image (admin)

### Enquiries
- `POST /api/enquiries` - Submit enquiry form
- `GET /api/enquiries` - Get all enquiries (admin)

## Data Flow

```
Backend (Neon Postgres)
  ↓
Express API (localhost:3000)
  ↓
API Service Layer (src/services/api.ts)
  ↓
Data Adapter (src/services/dataAdapter.ts)
  ↓
React Components (Hostels, Gallery, etc.)
  ↓
User Interface
```

## Features

### Implemented ✅
- [x] Live data fetching from backend
- [x] Loading states for all API calls
- [x] Error handling with retry
- [x] Type-safe API client
- [x] Data mapping/adaptation
- [x] Branch listing and details
- [x] Gallery image fetching
- [x] Error boundary for crash recovery

### Pending 🚧
- [ ] Enquiry form submission to API
- [ ] Image upload functionality
- [ ] Admin panel integration
- [ ] Authentication/Authorization
- [ ] Caching and optimistic updates
- [ ] Pagination for large datasets

## Testing

### 1. Start Backend
```bash
cd nyxta_backend
npm run dev
```

### 2. Verify Backend is Running
```bash
curl http://localhost:3000/
# Should return: {"message": "Nyxta Backend API"}
```

### 3. Start Frontend
```bash
cd NYXTA
npm run dev
```

### 4. Test Features
- Visit `http://localhost:5174`
- Check Hostels section - should load from API
- Click on a branch - should show details
- Check Gallery - should load images
- Open browser console to see API calls

## Troubleshooting

### Issue: "Failed to load hostels"
**Solution**: Ensure backend is running and accessible at `http://localhost:3000`

### Issue: CORS errors
**Solution**: Backend should have CORS enabled (already configured)

### Issue: TypeScript errors
**Solution**: Run `npm run build` to check for compile errors

### Issue: Loading spinner never stops
**Solution**: 
1. Check browser console for errors
2. Verify API URL in `.env`
3. Test backend directly with curl

## Next Steps

1. **Connect Contact Form**: Wire up enquiry submission
2. **Add Image Upload**: Implement gallery upload feature
3. **Admin Dashboard**: Create admin panel for managing content
4. **Performance**: Add caching and pagination
5. **Deploy**: Deploy both frontend and backend

## Files Modified/Created

```
NYXTA/
├── .env (new)
├── src/
│   ├── vite-env.d.ts (updated)
│   ├── services/
│   │   ├── api.ts (new)
│   │   └── dataAdapter.ts (new)
│   └── components/
│       ├── ErrorBoundary.tsx (new)
│       ├── Hostels.tsx (updated)
│       ├── HostelDetails.tsx (updated)
│       └── Gallery.tsx (updated)
└── INTEGRATION_README.md (this file)
```

## Support

For issues or questions:
1. Check browser console for errors
2. Verify backend API responses with curl
3. Review `src/services/api.ts` for API client logic
4. Check data mapping in `src/services/dataAdapter.ts`
