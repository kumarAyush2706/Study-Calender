import React, { useState } from 'react';
import SideBar from '../../Components/SideBar';
import Header from '../../Components/Header';
import LoadingAnimation from '../../Components/LoadingAnimation';
import Dashboard from './Dashboard';
import Attendance from './Attendance';
import Profile from './Profile';
import Courses from './Courses';
import MyCourses from './MyCourses';
import UpComingClasses from './UpComingClasses';
import StudyMaterial from './StudyMaterial';

const MainPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNavigation = (page: string) => {
    setIsLoading(true);
    // Simulate realistic data fetching time
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 800);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'attendance':
        return <Attendance />;
      case 'profile':
        return <Profile />;
      case 'courses':
        return <Courses />;
      case 'enrolled-courses':
        return <MyCourses />;
      case 'upcoming-classes':
        return <UpComingClasses />;
      case 'study-material':
        return <StudyMaterial />;
      default:
        return (
          <div className="p-8">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* Calendar Section */}
              <div className="xl:col-span-3 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Study Calendar
                  </h2>
                  <div className="flex items-center space-x-4">
                    <button className="p-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-2xl transition-all duration-300 hover:scale-110 group">
                      <svg className="w-7 h-7 text-gray-600 group-hover:text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <span className="text-xl font-bold text-gray-900 px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200/50">
                      December 2024
                    </span>
                    <button className="p-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-2xl transition-all duration-300 hover:scale-110 group">
                      <svg className="w-7 h-7 text-gray-600 group-hover:text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Enhanced Calendar Grid */}
                <div className="grid grid-cols-7 gap-3">
                  {/* Day Headers */}
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center py-4">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{day}</span>
                    </div>
                  ))}
                  
                  {/* Calendar Days */}
                  {Array.from({ length: 35 }).map((_, index) => (
                    <div
                      key={index}
                      className="aspect-square border border-gray-200/50 rounded-2xl p-3 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 hover:border-indigo-300 cursor-pointer transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-lg"
                    >
                      <div className="flex flex-col h-full">
                        <span className="text-sm font-bold text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">{index + 1}</span>
                        {index === 15 && (
                          <div className="mt-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg"></div>
                          </div>
                        )}
                        {index === 22 && (
                          <div className="mt-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-8">
                {/* Enhanced Today's Schedule */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Today's Schedule
                    </h3>
                    <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">Dec 15, 2024</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4 mt-2 flex-shrink-0 shadow-lg"></div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900">NCLEX Review Session</p>
                        <p className="text-xs text-gray-600 mt-1 font-medium">9:00 AM - 11:00 AM</p>
                        <p className="text-xs text-blue-600 mt-2 font-bold">Cardiovascular System</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-4 mt-2 flex-shrink-0 shadow-lg"></div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900">Practice Test</p>
                        <p className="text-xs text-gray-600 mt-1 font-medium">2:00 PM - 4:00 PM</p>
                        <p className="text-xs text-emerald-600 mt-2 font-bold">75 Questions</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 mt-2 flex-shrink-0 shadow-lg"></div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900">Study Group</p>
                        <p className="text-xs text-gray-600 mt-1 font-medium">7:00 PM - 8:30 PM</p>
                        <p className="text-xs text-purple-600 mt-2 font-bold">Online Meeting</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Progress Overview */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                    Progress Overview
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-gray-600 font-bold">Study Hours</span>
                        <span className="font-bold text-gray-900">24/40 hrs</span>
                      </div>
                      <div className="w-full bg-gray-200/50 rounded-full h-4 overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg" style={{ width: '60%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 font-medium">16 hours remaining this week</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-gray-600 font-bold">Practice Tests</span>
                        <span className="font-bold text-gray-900">8/12</span>
                      </div>
                      <div className="w-full bg-gray-200/50 rounded-full h-4 overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg" style={{ width: '67%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 font-medium">4 tests remaining</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-gray-600 font-bold">Topics Covered</span>
                        <span className="font-bold text-gray-900">18/25</span>
                      </div>
                      <div className="w-full bg-gray-200/50 rounded-full h-4 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg" style={{ width: '72%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 font-medium">7 topics remaining</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Quick Actions */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    <button className="w-full flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-purple-50 rounded-2xl transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mr-4 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                        <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">View Analytics</span>
                    </button>
                    <button className="w-full flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-teal-50 rounded-2xl transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mr-4 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300">
                        <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">Download Report</span>
                    </button>
                    <button className="w-full flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-rose-50 hover:to-pink-50 rounded-2xl transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mr-4 group-hover:from-rose-200 group-hover:to-pink-100 transition-all duration-300">
                        <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-gray-700 group-hover:text-rose-600 transition-colors duration-300">Create Note</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Sidebar */}
      <SideBar onNavigate={handleNavigation} isLoading={isLoading} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto relative">
          {isLoading && <LoadingAnimation />}
          <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainPage;
