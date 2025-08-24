import React, { useState } from 'react';

interface TsidebarProps {
  className?: string;
  onNavigate?: (page: string) => void;
  isLoading?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  badge?: string;
}

const Tsidebar: React.FC<TsidebarProps> = ({ className = '', onNavigate, isLoading = false, isOpen = false, onClose }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Overview',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      isActive: true
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
      id: 'attendance',
      label: 'Attendance',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    if (onNavigate) {
      onNavigate(itemId);
    }
    // Close sidebar on mobile after navigation
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`fixed lg:relative bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl h-screen w-80 flex flex-col border-r border-gray-200/50 backdrop-blur-sm z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 ${className}`}>
        {/* Enhanced Welcome Banner with Advanced Gradients */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 py-6 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
          </div>
          
          {/* Mobile Close Button - Only visible on small screens */}
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-xl transition-all duration-200 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
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
          
          {menuItems.map((item) => {
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
                  <p className="text-xs text-gray-600 font-medium">NCLEX Teacher</p>
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
    </>
  );
};

export default Tsidebar;
