import React, { useState, useMemo } from 'react';
import { useUpcomingClasses } from '../../hooks/useAPI';

interface ScheduledEvent {
  id: string;
  title: string;
  date: string;
  duration: string;
  courseLevel: string;
  startTime: string;
  meetingId: string;
  password: string;
  meetingLink?: string;
  type: 'classes' | 'webinars';
  hasCancelOption?: boolean;
}

const UpComingClasses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classes' | 'webinars'>('classes');

  // Fetch upcoming classes from API
  const { data: apiUpcomingClasses, loading, error } = useUpcomingClasses();

  // Transform API data to match our interface
  const scheduledEvents: ScheduledEvent[] = useMemo(() => {
    // Check if data is nested in a 'data' property (common API response structure)
    let actualData: any = apiUpcomingClasses;
    
    if (apiUpcomingClasses && typeof apiUpcomingClasses === 'object' && 'data' in apiUpcomingClasses) {
      actualData = (apiUpcomingClasses as any).data;
      console.log('Found nested data structure, extracted:', actualData);
    }
    
    if (!actualData || !Array.isArray(actualData)) {
      console.log('No valid data found:', actualData);
      console.log('API Data type:', typeof apiUpcomingClasses);
      console.log('API Data structure:', apiUpcomingClasses);
      return [];
    }
    
    console.log('Processing data array:', actualData);
    console.log('Data length:', Array.isArray(actualData) ? actualData.length : 'Not an array');
    
    return (actualData as any[]).map((classItem: any, index: number) => {
      console.log(`Processing item ${index}:`, classItem);
      
      // Parse the scheduledAt date and format it properly
      let eventDate = new Date().toISOString().split('T')[0]; // fallback
      if (classItem.scheduledAt) {
        try {
          const date = new Date(classItem.scheduledAt);
          eventDate = date.toISOString().split('T')[0];
          console.log(`Date parsed for item ${index}:`, classItem.scheduledAt, '→', eventDate);
        } catch (e) {
          console.error('Error parsing date:', e);
        }
      }
      
      // Extract time from scheduledAt if available
      let eventTime = '19:00 IST'; // fallback
      if (classItem.scheduledAt) {
        try {
          const date = new Date(classItem.scheduledAt);
          eventTime = date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
          }) + ' IST';
          console.log(`Time parsed for item ${index}:`, classItem.scheduledAt, '→', eventTime);
        } catch (e) {
          console.error('Error parsing time:', e);
        }
      }
      
      // Map API fields to component interface based on your API response
      const transformedItem = {
        id: classItem.id || classItem._id || String(Math.random()),
        title: classItem.title || classItem.name || classItem.className || `Class ${index + 1}`,
        date: eventDate,
        duration: classItem.duration || classItem.length || classItem.classDuration || '90 Min',
        courseLevel: classItem.courseLevel || classItem.level || classItem.examType || classItem.classLevel || 'NCLEX-RN',
        startTime: eventTime,
        meetingId: classItem.meetingId || classItem.zoomId || classItem.zoomLink || '00000000000',
        password: classItem.password || classItem.meetingPassword || classItem.zoomPassword || 'CLASS@123',
        meetingLink: classItem.meetingLink || classItem.zoomLink || classItem.meetingUrl || '',
        type: 'classes' as const, // All your API events are classes
        hasCancelOption: false // Default to false since your API doesn't have this field
      };
      
      console.log(`Transformed item ${index}:`, transformedItem);
      return transformedItem;
    });
  }, [apiUpcomingClasses]);

  const filteredEvents: ScheduledEvent[] = scheduledEvents.filter(event => {
    console.log('Filtering event:', event, 'Active tab:', activeTab); // Debug log
    if (activeTab === 'classes') return event.type === 'classes';
    return event.type === 'webinars';
  });

  console.log('Filtered events:', filteredEvents); // Debug log
  console.log('Total scheduled events:', scheduledEvents.length); // Debug log

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const handleJoinMeeting = (eventId: string, meetingLink?: string) => {
    console.log(`Joining meeting: ${eventId}`, meetingLink);
    
    if (meetingLink) {
      // Open the meeting link in a new tab
      window.open(meetingLink, '_blank');
    } else {
      // Fallback: show alert if no meeting link
      alert('Meeting link not available');
    }
  };

  const handleCancelDemo = (eventId: string) => {
    console.log(`Canceling demo: ${eventId}`);
    // Handle cancel demo logic here
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Loading upcoming classes...</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Classes</h2>
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
  if (!scheduledEvents || scheduledEvents.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No Upcoming Classes</h2>
              <p className="text-gray-600 mb-4">There are currently no upcoming classes or webinars scheduled.</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Debug Info:</p>
                <p>API Data: {apiUpcomingClasses ? 'Received' : 'None'}</p>
                <p>Data Type: {Array.isArray(apiUpcomingClasses) ? 'Array' : typeof apiUpcomingClasses}</p>
                <p>Data Length: {apiUpcomingClasses && Array.isArray(apiUpcomingClasses) ? (apiUpcomingClasses as any[]).length : 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback: if no filtered events, show all events
  const displayEvents: ScheduledEvent[] = filteredEvents.length > 0 ? filteredEvents : scheduledEvents;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">NCLEX-RN Classes & Webinars</h1>
          <p className="text-xl text-gray-600 mb-6">Join our expert-led NCLEX-RN preparation sessions to ace your nursing exam</p>
          
          {/* Tab Navigation */}
          <div className="flex space-x-12 border-b-2 border-gray-200">
            <button
              onClick={() => setActiveTab('classes')}
              className={`pb-5 px-2 relative transition-all duration-200 ${
                activeTab === 'classes'
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-xl tracking-wide">EXAM PREP CLASSES</span>
              {activeTab === 'classes' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-full shadow-lg"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('webinars')}
              className={`pb-5 px-2 relative transition-all duration-200 ${
                activeTab === 'webinars'
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-xl tracking-wide">WEBINARS</span>
              {activeTab === 'webinars' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-full shadow-lg"></div>
              )}
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              {/* Card Header */}
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{event.duration}</span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-4 space-y-3">
                {/* Event Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {event.title}
                </h3>

                {/* Course Level */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Course Level:</span>
                  <span className="text-sm font-semibold text-orange-600">{event.courseLevel}</span>
                </div>

                {/* Start Time */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Start Time:</span>
                  <span className="text-sm font-semibold text-orange-600">{event.startTime}</span>
                </div>

                {/* Meeting ID */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Meeting ID:</span>
                  <span className="text-sm font-semibold text-blue-600">{event.meetingId}</span>
                </div>

                {/* Password */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Password:</span>
                  <span className="text-sm font-semibold text-blue-600">{event.password}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0">
                                 {event.hasCancelOption ? (
                   <div className="flex space-x-3">
                     <button
                       onClick={() => handleJoinMeeting(event.id, event.meetingLink)}
                       className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                     >
                       Join
                     </button>
                     <button
                       onClick={() => handleCancelDemo(event.id)}
                       className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                     >
                       Cancel Demo
                     </button>
                   </div>
                 ) : (
                   <button
                     onClick={() => handleJoinMeeting(event.id, event.meetingLink)}
                     className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                   >
                     Join
                   </button>
                 )}
              </div>
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No {activeTab === 'classes' ? 'classes' : 'webinars'} scheduled</h3>
            <p className="text-gray-600">Check back later for upcoming events!</p>
          </div>
        )}

        {/* Summary Section */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {scheduledEvents.filter(e => e.type === 'classes').length}
              </div>
              <div className="text-gray-600 font-medium">Total Classes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {scheduledEvents.filter(e => e.type === 'webinars').length}
              </div>
              <div className="text-gray-600 font-medium">Total Webinars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {scheduledEvents.length}
              </div>
              <div className="text-gray-600 font-medium">Total Events</div>
            </div>
          </div>
        </div>

        {/* Debug Section - Remove this after fixing */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Debug Information</h3>
          <div className="text-sm text-yellow-700 space-y-1">
            <p><strong>Raw API Data:</strong> {JSON.stringify(apiUpcomingClasses, null, 2)}</p>
            <p><strong>Transformed Events:</strong> {scheduledEvents.length} events</p>
            <p><strong>Filtered Events:</strong> {filteredEvents.length} events</p>
            <p><strong>Display Events:</strong> {displayEvents.length} events</p>
            <p><strong>Active Tab:</strong> {activeTab}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingClasses;
