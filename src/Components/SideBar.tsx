import React, { useState } from 'react';

interface SideBarProps {
  className?: string;
  onNavigate?: (page: string) => void;
  isLoading?: boolean;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  badge?: string;
}

const SideBar: React.FC<SideBarProps> = ({ className = '', onNavigate, isLoading = false }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      isActive: true
    },
    {
      id: 'attendance',
      label: 'Attendance',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
      ),
      badge: '95%'
    },
    {
      id: 'profile',
      label: 'My Profile',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'courses',
      label: 'Courses',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
      ),
      badge: '12'
    },
    {
      id: 'enrolled-courses',
      label: 'Enrolled Courses',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
      ),
      badge: '8'
    },
    {
      id: 'upcoming-classes',
      label: 'Upcoming Classes',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      ),
      badge: '3'
    },
    {
      id: 'study-materials',
      label: 'Study Materials',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: 'New'
    },
    {
      id: 'assessments',
      label: 'Assessments',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: '5'
    },
    {
      id: 'assignment-report',
      label: 'Assignment Report',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'daily-recordings',
      label: 'Daily Recordings',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.923L4.5 13.5V17a1 1 0 01-2 0V3a1 1 0 012 0v3.5L8.383 3.076a1 1 0 011.234-.001z" clipRule="evenodd" />
        </svg>
      ),
      badge: '24'
    },
    {
      id: 'shared-recordings',
      label: 'Shared Recordings',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.923L4.5 13.5V17a1 1 0 01-2 0V3a1 1 0 012 0v3.5L8.383 3.076a1 1 0 011.234-.001z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'saved-recordings',
      label: 'Saved Recordings',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.923L4.5 13.5V17a1 1 0 01-2 0V3a1 1 0 012 0v3.5L8.383 3.076a1 1 0 011.234-.001z" clipRule="evenodd" />
        </svg>
      ),
      badge: '12'
    },
    {
      id: 'purchase-history',
      label: 'Purchase History',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l-.293-.293A1 1 0 015.793 12H15a1 1 0 00.01-.042l1.358-5.43.305-1.222H19a1 1 0 000-2H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      )
    },
    {
      id: 'feedback',
      label: 'Feedback',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    if (onNavigate) {
      onNavigate(itemId);
    }
  };

  return (
    <div className={`bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl h-screen w-80 flex flex-col border-r border-gray-200/50 backdrop-blur-sm ${className}`}>
      {/* Enhanced Welcome Banner with Advanced Gradients */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 py-6 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
              <span className="text-white text-xl font-bold">KR</span>
            </div>
            <div>
              <h2 className="text-white font-bold text-xl">Welcome back!</h2>
              <p className="text-indigo-100 text-sm font-medium">Kuldeep Singh Romana</p>
            </div>
          </div>
          
          {/* Enhanced Progress Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-indigo-100 font-medium">Today's Progress</span>
              <span className="text-white font-bold text-lg">68%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full transition-all duration-1000 ease-out shadow-lg" style={{ width: '68%' }}></div>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs">
              <span className="text-indigo-200">Goal: 40 hrs</span>
              <span className="text-emerald-300 font-medium">+12 hrs today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu with Enhanced Styling */}
      <nav className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2 flex items-center">
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-2"></div>
            Main Navigation
          </h3>
        </div>
        
        {menuItems.slice(0, 1).map((item) => {
          const isActive = activeItem === item.id;
          return (
            <div key={item.id} className="mb-2">
              <button
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center px-4 py-4 text-sm font-bold rounded-2xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl shadow-purple-500/25 transform scale-105'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 hover:shadow-lg hover:scale-105'
                }`}
              >
                <span
                  className={`mr-4 transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-indigo-500'
                  }`}
                >
                  {item.icon}
                </span>
                <span className="flex-1 text-left">{item.label}</span>
                {isLoading && activeItem === item.id && (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                )}
                {item.badge && (
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            </div>
          );
        })}

        {/* Learning Section */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">Learning</h3>
          <nav className="space-y-2">
           
            <button
              onClick={() => handleItemClick('attendance')}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeItem === 'attendance'
                  ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {isLoading && activeItem === 'attendance' && (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              )}
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Attendance
            </button>
            <button
              onClick={() => handleItemClick('study-material')}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeItem === 'study-material'
                  ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {isLoading && activeItem === 'study-material' && (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              )}
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Study Material
            </button>
            <button
              onClick={() => handleItemClick('courses')}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeItem === 'courses'
                  ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {isLoading && activeItem === 'courses' && (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              )}
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Courses
            </button>
            <button
              onClick={() => handleItemClick('enrolled-courses')}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeItem === 'enrolled-courses'
                  ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {isLoading && activeItem === 'enrolled-courses' && (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              )}
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              My Courses
            </button>
            <button
              onClick={() => handleItemClick('upcoming-classes')}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeItem === 'upcoming-classes'
                  ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {isLoading && activeItem === 'upcoming-classes' && (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              )}
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Upcoming Classes
            </button>
          </nav>
        </div>

        {/* Profile Section */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">Profile</h3>
          <nav className="space-y-2">
            <button
              onClick={() => handleItemClick('profile')}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeItem === 'profile'
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {isLoading && activeItem === 'profile' && (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              )}
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              My Profile
            </button>
          </nav>
        </div>

        <div className="mb-6 mt-8">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2 flex items-center">
            <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mr-2"></div>
            Resources
          </h3>
        </div>

        {menuItems.slice(7).map((item) => {
          const isActive = activeItem === item.id;
          return (
            <div key={item.id} className="mb-2">
              <button
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/25'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:text-rose-600 hover:shadow-md'
                }`}
              >
                <span
                  className={`mr-4 transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-rose-500'
                  }`}
                >
                  {item.icon}
                </span>
                <span className="flex-1 text-left">{item.label}</span>
                {isLoading && activeItem === item.id && (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                )}
                {item.badge && (
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </nav>

      {/* Enhanced Footer with Advanced Styling */}
      <div className="px-6 py-6 border-t border-gray-200/50 bg-white/80 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-2xl p-4 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white text-sm font-bold">KR</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Kuldeep Singh</p>
                <p className="text-xs text-gray-600 font-medium">NCLEX Student</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 p-2 hover:bg-white rounded-xl shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
      </button>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500 font-medium">Last login: 2 hours ago</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-600 font-bold">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
