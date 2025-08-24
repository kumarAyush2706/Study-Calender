import React, { useState } from 'react';
import Tsidebar from '../../Components/Teacher/Tsidebar';
import Header from '../../Components/Header';
import LoadingAnimation from '../../Components/LoadingAnimation';
import TeacherDashboard from './TeacherDashboard.tsx';
import TeacherUpComingClasses from './TeacherUpComingClasses.tsx';
import TeacherAttendance from './TeacherAttendance.tsx';
import TeacherProfile from './TeacherProfile.tsx';

const TeacherPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleNavigation = (page: string) => {
    setIsLoading(true);
    // Simulate realistic data fetching time
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      // Close sidebar on mobile after navigation
      setIsSidebarOpen(false);
    }, 800);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <TeacherDashboard />;
      case 'upcoming-classes':
        return <TeacherUpComingClasses />;
      case 'attendance':
        return <TeacherAttendance />;
      case 'profile':
        return <TeacherProfile />;
      default:
        return (
          <div className='flex justify-center items-center h-full'>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
              <p className="text-gray-600">The requested page could not be found.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Teacher Sidebar */}
      <Tsidebar 
        onNavigate={handleNavigation} 
        isLoading={isLoading} 
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header 
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        
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

export default TeacherPage;
