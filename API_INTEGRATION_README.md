# API Integration Guide

This document explains how to use the API integration system in your NCLEX Calendar application.

## Overview

The API integration is built with a simple, modular approach:
- **Base API Client** (`src/services/api.ts`) - Handles authentication and common configuration
- **API Functions** (`src/services/apiFunctions.ts`) - Contains all API endpoint functions
- **Custom Hooks** (`src/hooks/useAPI.ts`) - React hooks for easy API usage
- **Auth Context** (`src/context/AuthContext.tsx`) - Manages authentication state

## Quick Start

### 1. Using API Hooks in Components

```typescript
import { useCourses, useUpcomingClasses } from '../hooks/useAPI';

const MyComponent = () => {
  const { data: courses, loading, error } = useCourses();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {courses?.map(course => (
        <div key={course.id}>{course.name}</div>
      ))}
    </div>
  );
};
```

### 2. Available API Hooks

- `useCourses()` - Fetch all courses
- `useMyCourses()` - Fetch user's enrolled courses
- `useUpcomingClasses()` - Fetch upcoming classes
- `useDailyRecordings()` - Fetch daily recordings
- `useStudyMaterials()` - Fetch study materials
- `useAttendance()` - Fetch attendance calendar

### 3. Authentication

The system automatically handles authentication tokens. Users can:

```typescript
import { useAuth } from '../context/AuthContext';

const { login, logout, user } = useAuth();

// Login
const handleLogin = async () => {
  const success = await login(email, password);
  if (success) {
    // Redirect or show success
  }
};

// Logout
const handleLogout = () => {
  logout();
  // User will be redirected to home
};
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Courses
- `GET /api/courses` - Fetch all courses
- `GET /api/courses/my` - Fetch user's courses

### Classes & Webinars
- `GET /api/classes/upcoming` - Fetch upcoming classes
- `POST /api/classes/save` - Save a class

### Study Materials
- `GET /api/study-material` - Fetch study materials

### Recordings
- `GET /api/recordings/daily` - Fetch daily recordings
- `GET /api/recordings/saved` - Fetch saved recordings

### Attendance
- `GET /api/attendance` - Fetch attendance calendar

## Configuration

### Base URL
The API base URL is configured in `src/services/api.ts`:

```typescript
const API_BASE_URL = 'http://localhost:4000'; // Development
// Change to your production URL when deploying
```

### Environment Variables
You can use environment variables by creating a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:4000
VITE_SERVER_URL=http://65.0.108.171:4000
```

## Error Handling

The system automatically handles:
- **401 Unauthorized** - Redirects to login page
- **Network errors** - Shows user-friendly error messages
- **Loading states** - Provides loading indicators

## Example Components

See `src/Components/ExampleAPIUsage.tsx` for a complete example of how to use multiple API hooks in a single component.

## Adding New API Endpoints

1. Add the function to `src/services/apiFunctions.ts`:
```typescript
export const newAPI = {
  getData: () => api.get('/api/new-endpoint'),
  postData: (data: any) => api.post('/api/new-endpoint', data),
};
```

2. Add a hook to `src/hooks/useAPI.ts`:
```typescript
export const useNewData = () => useAPI(newAPI.getData);
```

3. Use in your component:
```typescript
const { data, loading, error } = useNewData();
```

## Troubleshooting

### Common Issues

1. **CORS Errors** - Ensure your backend allows requests from your frontend domain
2. **Authentication Errors** - Check if the token is being sent correctly
3. **Network Errors** - Verify the API base URL is correct

### Debug Mode

Enable debug logging by adding this to your browser console:
```javascript
localStorage.setItem('debug', 'true');
```

## Security Notes

- Tokens are stored in localStorage (consider httpOnly cookies for production)
- All API requests automatically include the authentication token
- 401 responses automatically clear the token and redirect to login

