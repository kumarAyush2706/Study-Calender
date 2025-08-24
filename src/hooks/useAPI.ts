import { useState, useEffect } from 'react';
import { courseAPI, classAPI, recordingAPI, studyMaterialAPI, attendanceAPI } from '../services/apiFunctions';

// Simple hook for fetching data
export const useAPI = (apiFunction: () => Promise<any>, dependencies: any[] = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiFunction();
        setData(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

// Specific hooks for common use cases
export const useCourses = () => useAPI(courseAPI.getCourses);
// export const useMyCourses = () => useAPI(courseAPI.getMyCourses); // Endpoint doesn't exist
export const useUpcomingClasses = () => useAPI(classAPI.getUpcoming);
export const useDailyRecordings = () => useAPI(recordingAPI.getDaily);
export const useSavedRecordings = () => useAPI(recordingAPI.getSaved);
export const useStudyMaterials = (courseId: string) => useAPI(() => studyMaterialAPI.getMaterials(courseId), [courseId]);
export const useAttendance = () => useAPI(attendanceAPI.getCalendar);
