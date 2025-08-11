import React, { useState } from 'react';

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
}

const MyCourses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');

  const enrolledCourses: EnrolledCourse[] = [
    {
      id: '1',
      title: 'French A1',
      level: 'A1',
      lessons: 7,
      hours: 40,
      instructor: 'AASTHA',
      instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      progress: 0,
      status: 'active'
    }
  ];

  const activeCourses = enrolledCourses.filter(course => course.status === 'active');
  const completedCourses = enrolledCourses.filter(course => course.status === 'completed');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            My Enrolled Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your learning progress and manage your enrolled courses with detailed insights
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex justify-center space-x-16 border-b-2 border-gray-200">
            <button
              onClick={() => setActiveTab('active')}
              className={`pb-6 px-4 relative transition-all duration-300 ${
                activeTab === 'active'
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-xl tracking-wider font-semibold">ACTIVE COURSES</span>
              {activeTab === 'active' && (
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-full shadow-lg"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`pb-6 px-4 relative transition-all duration-300 ${
                activeTab === 'completed'
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-xl tracking-wider font-semibold">COMPLETED COURSES</span>
              {activeTab === 'completed' && (
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-full shadow-lg"></div>
              )}
            </button>
          </div>
        </div>

        {/* Course Content */}
        <div className="space-y-8">
          {activeTab === 'active' && (
            <>
              {activeCourses.length > 0 ? (
                activeCourses.map((course) => (
                  <div key={course.id} className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl border border-gray-200/50">
                    {/* Course Header - Yellow Section */}
                    <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 relative p-8">
                      {/* Grid Pattern Overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                          backgroundSize: '24px 24px'
                        }}></div>
                      </div>
                      
                      {/* Hamburger Menu Icon */}
                      <div className="absolute top-6 left-6">
                        <div className="w-8 h-8 bg-red-600 rounded-xl flex items-center justify-center shadow-xl hover:bg-red-700 transition-all duration-200 cursor-pointer transform hover:scale-110">
                          <div className="space-y-1">
                            <div className="w-4 h-0.5 bg-white rounded-full"></div>
                            <div className="w-4 h-0.5 bg-white rounded-full"></div>
                            <div className="w-4 h-0.5 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Course Title Box */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-6 text-center mx-auto max-w-sm relative z-10 shadow-2xl border border-gray-100/50">
                        <h2 className="text-4xl font-black text-gray-900 uppercase tracking-wider leading-tight">
                          {course.title} {course.level}
                        </h2>
                        <p className="text-red-600 font-bold uppercase text-sm mt-3 tracking-widest">
                          COURSE
                        </p>
                      </div>
                      
                      {/* Decorative Quarter Circle */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-tl-full shadow-xl"></div>
                    </div>

                    {/* Course Details */}
                    <div className="p-8">
                      {/* Lessons and Hours */}
                      <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 rounded-2xl border border-blue-100 shadow-lg">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600 font-medium">Lessons</span>
                            <div className="text-2xl font-bold text-gray-900">{course.lessons}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 rounded-2xl border border-purple-100 shadow-lg">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600 font-medium">Hours</span>
                            <div className="text-2xl font-bold text-gray-900">{course.hours}</div>
                          </div>
                        </div>
                      </div>
 
                      {/* Course Title */}
                      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        {course.title} {course.level}
                      </h3>
 
                      {/* Divider */}
                      <div className="border-t-2 border-gray-200 mb-8"></div>
 
                      {/* Instructor and Progress */}
                      <div className="space-y-8">
                        {/* Instructor */}
                        <div className="flex items-center space-x-6 bg-gradient-to-r from-gray-50 via-white to-blue-50 p-6 rounded-2xl border border-gray-100 shadow-lg">
                          <div className="relative">
                            <img
                              src={course.instructorImage}
                              alt={course.instructor}
                              className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-xl"
                            />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600 font-medium uppercase tracking-wider">Instructor</span>
                            <div className="text-2xl font-bold text-gray-900 uppercase">
                              {course.instructor}
                            </div>
                          </div>
                        </div>
 
                        {/* Progress Bar */}
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-700">Course Progress</span>
                            <span className="text-lg font-bold text-indigo-600">0%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner border border-gray-300">
                            <div 
                              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-6 flex items-center justify-center text-white text-sm font-bold shadow-lg"
                              style={{ width: '100%' }}
                            >
                              0% Complete
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No active courses found</h3>
                  <p className="text-gray-600">Start your learning journey by enrolling in a course!</p>
                </div>
              )}
            </>
          )}

          {activeTab === 'completed' && (
            <>
              {completedCourses.length > 0 ? (
                completedCourses.map((course) => (
                  <div key={course.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200/50">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {course.title} {course.level}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-green-600 font-semibold text-lg">✓ Completed</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
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

        {/* Additional Actions */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for More Learning?</h2>
            <p className="text-gray-600 mb-6">Explore our extensive course catalog and continue your educational journey</p>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Browse More Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
