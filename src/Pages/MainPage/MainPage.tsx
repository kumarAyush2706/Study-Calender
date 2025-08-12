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
import Assignment from './Assignment';
import AssignmentReport from './AssignmentReport';
import DailyRecording from './DailyRecording';
import SavedRecording from './SavedRecording';
import PurchaseHistory from './PurchaseHistory';
import SharedRecording from './SharedRecording';
import Feedback from './Feedback';

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
      case 'assessments':
        return <Assignment />;
      case 'assignment-report':
        return <AssignmentReport />;
      case 'daily-recordings':
        return <DailyRecording />;
      case 'shared-recordings':
        return <SharedRecording />;
      case 'saved-recordings':
        return <SavedRecording />;
      case 'purchase-history':
        return <PurchaseHistory />;
      case 'feedback':
        return <Feedback />;
      default:
        return (
            <div className='flex justify-center items-center h-full'>Error</div>
        )
        
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
