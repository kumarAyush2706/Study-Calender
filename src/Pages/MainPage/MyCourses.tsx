import React, { useState, useMemo } from 'react';
import { useCourses } from '../../hooks/useAPI';

interface EnrolledCourse {
  id: string;
  title: string;
  level: string;
  lessons: number;
  hours: number;
  instructor: string;
  instructorImage: string;
  progress: number;
  status: 'active' | 'completed';
  category: string;
  nextClass?: string;
  lastAccessed?: string;
  totalModules: number;
  completedModules: number;
  averageScore?: number;
  certificate?: string;
}

const MyCourses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch all courses from API (since /api/courses/my doesn't exist)
  const { data: apiCourses, loading, error } = useCourses();

  // Transform API data to match our interface and simulate enrolled courses
  // In a real app, you would have a separate endpoint for enrolled courses
  const enrolledCourses: EnrolledCourse[] = useMemo(() => {
    if (!apiCourses || !Array.isArray(apiCourses)) return [];
    
    // For demo purposes, we'll simulate that the first 3 courses are enrolled
    // In production, you'd filter based on actual enrollment data
    return (apiCourses as any[]).slice(0, 3).map((course: any, index: number) => ({
      id: course.id || String(Math.random()),
      title: course.title || course.name || 'Untitled Course',
      level: course.level || 'Beginner',
      lessons: course.lessons || course.totalLessons || Math.floor(Math.random() * 30) + 10,
      hours: course.hours || course.totalHours || Math.floor(Math.random() * 100) + 50,
      instructor: course.instructor || course.teacher || 'Unknown Instructor',
      instructorImage: course.instructorImage || course.teacherImage || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      progress: course.progress || course.completionPercentage || Math.floor(Math.random() * 100),
      status: course.status || (index === 1 ? 'completed' : 'active'), // Second course is completed for demo
      category: course.category || 'General',
      nextClass: course.nextClass || course.nextSession || (index === 0 ? 'Today, 2:00 PM' : index === 2 ? 'Tomorrow, 10:00 AM' : undefined),
      lastAccessed: course.lastAccessed || course.lastSession || (index === 0 ? '2 hours ago' : index === 1 ? '1 week ago' : '1 day ago'),
      totalModules: course.totalModules || course.modules || Math.floor(Math.random() * 10) + 5,
      completedModules: course.completedModules || course.completedModulesCount || Math.floor(Math.random() * 5),
      averageScore: course.averageScore || course.score || Math.floor(Math.random() * 30) + 70,
      certificate: index === 1 ? 'NCLEX-RN Course Completion' : undefined
    }));
  }, [apiCourses]);

  // Dummy data (commented out - now using API data with simulation)
  /*
  const enrolledCourses: EnrolledCourse[] = [
    {
      id: '1',
      title: 'NCLEX-RN Fundamentals',
      level: 'Beginner',
      lessons: 24,
      hours: 120,
      instructor: 'Dr. Priya Sharma',
      instructorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      progress: 85,
      status: 'active',
      category: 'Fundamentals',
      nextClass: 'Today, 2:00 PM',
      lastAccessed: '2 hours ago',
      totalModules: 8,
      completedModules: 6,
      averageScore: 87
    },
    {
      id: '2',
      title: 'Medical-Surgical Nursing',
      level: 'Intermediate',
      lessons: 32,
      hours: 160,
      instructor: 'Dr. Amit Singh',
      instructorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      progress: 100,
      status: 'completed',
      category: 'Specialized',
      lastAccessed: '1 week ago',
      totalModules: 10,
      completedModules: 10,
      averageScore: 92,
      certificate: 'NCLEX-RN Med-Surg Specialist'
    },
    {
      id: '3',
      title: 'Pediatric Nursing',
      level: 'Intermediate',
      lessons: 28,
      hours: 140,
      instructor: 'Dr. Anjali Patel',
      instructorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      progress: 60,
      status: 'active',
      category: 'Specialized',
      nextClass: 'Tomorrow, 10:00 AM',
      lastAccessed: '1 day ago',
      totalModules: 7,
      completedModules: 4,
      averageScore: 78
    },
    {
      id: '4',
      title: 'Mental Health Nursing',
      level: 'Advanced',
      lessons: 20,
      hours: 100,
      instructor: 'Dr. Ravi Menon',
      instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      progress: 0,
      status: 'active',
      category: 'Specialized',
      nextClass: 'Next Week, Monday 9:00 AM',
      lastAccessed: 'Never',
      totalModules: 6,
      completedModules: 0
    },
    {
      id: '5',
      title: 'Critical Care Nursing',
      level: 'Advanced',
      lessons: 36,
      hours: 180,
      instructor: 'Dr. Sarah Johnson',
      instructorImage: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      progress: 45,
      status: 'active',
      category: 'Critical Care',
      nextClass: 'Friday, 3:00 PM',
      lastAccessed: '3 days ago',
      totalModules: 9,
      completedModules: 4,
      averageScore: 81
    },
    {
      id: '6',
      title: 'Obstetric Nursing',
      level: 'Intermediate',
      lessons: 26,
      hours: 130,
      instructor: 'Dr. Maria Rodriguez',
      instructorImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      progress: 100,
      status: 'completed',
      category: 'Specialized',
      lastAccessed: '2 weeks ago',
      totalModules: 8,
      completedModules: 8,
      averageScore: 89,
      certificate: 'NCLEX-RN OB Specialist'
    }
  ];
  */

  const categories = ['All', 'Fundamentals', 'Specialized', 'Critical Care', 'Systems'];

  const activeCourses = enrolledCourses.filter(course => course.status === 'active');
  const completedCourses = enrolledCourses.filter(course => course.status === 'completed');

  const filteredActiveCourses = activeCourses.filter(course => 
    selectedCategory === 'All' || course.category === selectedCategory
  );

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'from-green-500 to-emerald-600';
    if (progress >= 60) return 'from-blue-500 to-indigo-600';
    if (progress >= 40) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  const getStatusBadge = (status: string, progress: number) => {
    if (status === 'completed') {
      return (
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Completed
        </div>
      );
    }
    
    if (progress >= 80) {
      return (
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Almost Complete
        </div>
      );
    }
    
    if (progress >= 40) {
      return (
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          In Progress
        </div>
      );
    }
    
    return (
      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        Just Started
      </div>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Loading your enrolled courses...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Courses</h2>
              <p className="text-gray-600 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // No data state
  if (!enrolledCourses || enrolledCourses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No Enrolled Courses</h2>
              <p className="text-gray-600 mb-4">You haven't enrolled in any courses yet.</p>
              <button 
                onClick={() => window.location.href = '/courses'} 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">My Enrolled Courses</h1>
              <p className="text-lg text-gray-600">Track your learning progress and manage your enrolled courses</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">{activeCourses.length}</div>
                  <div className="text-sm text-gray-600">Active Courses</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{completedCourses.length}</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-white rounded-xl p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('active')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'active'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Active Courses ({activeCourses.length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'completed'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Completed ({completedCourses.length})
            </button>
          </div>
        </div>

        {/* Course Content */}
        <div className="space-y-6">
          {activeTab === 'active' && (
            <>
              {filteredActiveCourses.length > 0 ? (
                filteredActiveCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Course Header */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b border-gray-100">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                              {course.category}
                            </span>
                            {getStatusBadge(course.status, course.progress)}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {course.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Level: {course.level} • {course.lessons} lessons • {course.hours} hours
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-indigo-600 mb-1">
                            {course.progress}%
                          </div>
                          <div className="text-sm text-gray-500">Complete</div>
                        </div>
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Progress Bar */}
                        <div className="md:col-span-2">
                          <div className="mb-3">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className={`h-3 rounded-full bg-gradient-to-r ${getProgressColor(course.progress)} transition-all duration-500`}
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          {/* Modules Progress */}
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Modules: {course.completedModules}/{course.totalModules}</span>
                            {course.averageScore && (
                              <span>• Average Score: {course.averageScore}%</span>
                            )}
                          </div>
                        </div>

                        {/* Next Class Info */}
                        {course.nextClass && (
                          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                            <div className="flex items-center space-x-2 mb-2">
                              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              <span className="font-medium text-blue-900">Next Class</span>
                            </div>
                            <div className="text-blue-800 font-semibold">{course.nextClass}</div>
                          </div>
                        )}
                      </div>

                      {/* Instructor and Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                          <img
                            src={course.instructorImage}
                            alt={course.instructor}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm text-gray-500">Instructor</div>
                            <div className="font-medium text-gray-900">{course.instructor}</div>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                            Continue Learning
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
                  <p className="text-gray-600">Try selecting a different category or check back later.</p>
                </div>
              )}
            </>
          )}

          {activeTab === 'completed' && (
            <>
              {completedCourses.length > 0 ? (
                completedCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-green-100">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                              {course.category}
                            </span>
                            {getStatusBadge(course.status, course.progress)}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {course.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Level: {course.level} • {course.lessons} lessons • {course.hours} hours
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-green-600 mb-1">
                            100%
                          </div>
                          <div className="text-sm text-green-600 font-medium">Completed</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="md:col-span-2">
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Final Score</span>
                              <span>{course.averageScore}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className="h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
                                style={{ width: '100%' }}
                              ></div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Modules: {course.completedModules}/{course.totalModules}</span>
                            <span>• Completed on: {course.lastAccessed}</span>
                          </div>
                        </div>

                        {course.certificate && (
                          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                            <div className="flex items-center space-x-2 mb-2">
                              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="font-medium text-green-900">Certificate</span>
                            </div>
                            <div className="text-green-800 font-semibold">{course.certificate}</div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                          <img
                            src={course.instructorImage}
                            alt={course.instructor}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm text-gray-500">Instructor</div>
                            <div className="font-medium text-gray-900">{course.instructor}</div>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                            Download Certificate
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            Review Course
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No completed courses yet</h3>
                  <p className="text-gray-600 mb-4">Complete your first course to see it here!</p>
                  <p className="text-gray-500 text-sm">Keep learning and achieving your goals!</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for More Learning?</h2>
            <p className="text-indigo-100 mb-6 text-lg">Explore our extensive course catalog and continue your educational journey</p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Browse More Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
