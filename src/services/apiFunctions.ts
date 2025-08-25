import api from './api';

// Auth functions
export const authAPI = {
  signup: (data: { name: string; email: string; password: string; role: string }) =>
    api.post('/api/auth/signup', data),
  
  login: (data: { email: string; password: string }) =>
    api.post('/api/auth/login', data),
};

// Attendance functions
export const attendanceAPI = {
  getCalendar: () => api.get('/api/attendance/calendar'),
};

// Study material functions
export const studyMaterialAPI = {
  getMaterials: (courseId: string) => api.get(`/api/study-material/${courseId}`),
};

// Course functions
export const courseAPI = {
  getCourses: () => api.get('/api/courses'),
  // getMyCourses: () => api.get('/api/courses/my'), // Endpoint doesn't exist on server
};

// Class functions
export const classAPI = {
  getUpcoming: () => api.get('/api/classes/my/upcoming'),
  saveClass: (classId: number) => api.post('/api/classes/save', { classId }),
};

// Recording functions
export const recordingAPI = {
  getDaily: () => api.get('/api/recordings/daily'),
  getSaved: () => api.get('/api/recordings/saved'),
};
