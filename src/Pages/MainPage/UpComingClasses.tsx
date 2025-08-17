import React, { useState } from 'react';

interface ScheduledEvent {
  id: string;
  title: string;
  date: string;
  duration: string;
  courseLevel: string;
  startTime: string;
  meetingId: string;
  password: string;
  type: 'classes' | 'webinars';
  hasCancelOption?: boolean;
}

const UpComingClasses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classes' | 'webinars'>('classes');

  // Mock data for the whole month
  const scheduledEvents: ScheduledEvent[] = [
    // Week 1 - NCLEX-RN Classes
    {
      id: '1',
      title: 'NCLEX-RN Fundamentals Review',
      date: '2025-06-17',
      duration: '90 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '19:00 IST',
      meetingId: '88246216381',
      password: 'NCLEX@123',
      type: 'classes',
      hasCancelOption: true
    },
    {
      id: '2',
      title: 'NCLEX-RN Practice Questions',
      date: '2025-06-18',
      duration: '120 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '20:00 IST',
      meetingId: '82575371817',
      password: 'NCLEX@123',
      type: 'classes'
    },
    {
      id: '3',
      title: 'NCLEX-RN Test Strategies',
      date: '2025-06-19',
      duration: '90 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '19:30 IST',
      meetingId: '82575371817',
      password: 'NCLEX@123',
      type: 'classes'
    },
    {
      id: '4',
      title: 'NCLEX-RN Critical Thinking',
      date: '2025-06-20',
      duration: '120 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '20:00 IST',
      meetingId: '82575371817',
      password: 'NCLEX@123',
      type: 'classes'
    },
    // Week 2 - More NCLEX-RN Classes
    {
      id: '5',
      title: 'NCLEX-RN Pharmacology Review',
      date: '2025-06-23',
      duration: '90 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '18:00 IST',
      meetingId: '82575371817',
      password: 'NCLEX@123',
      type: 'classes'
    },
    {
      id: '6',
      title: 'NCLEX-RN Medical-Surgical Nursing',
      date: '2025-06-24',
      duration: '120 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '19:00 IST',
      meetingId: '82575371817',
      password: 'NCLEX@123',
      type: 'classes'
    },
    {
      id: '7',
      title: 'NCLEX-RN Pediatric Nursing',
      date: '2025-06-25',
      duration: '90 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '18:30 IST',
      meetingId: '82575371817',
      password: 'NCLEX@123',
      type: 'classes'
    },
    {
      id: '8',
      title: 'NCLEX-RN Mental Health Nursing',
      date: '2025-06-26',
      duration: '90 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '19:00 IST',
      meetingId: '82575371817',
      password: 'NCLEX@123',
      type: 'classes'
    },
    // Week 3 - Advanced NCLEX-RN Classes
    {
      id: '9',
      title: 'NCLEX-RN Leadership & Management',
      date: '2025-06-27',
      duration: '90 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '20:00 IST',
      password: 'NCLEX@123',
      meetingId: '82575371817',
      type: 'classes'
    },
    {
      id: '10',
      title: 'NCLEX-RN Community Health',
      date: '2025-06-30',
      duration: '120 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '19:00 IST',
      meetingId: '82575371817',
      password: 'NCLEX@123',
      type: 'classes'
    },
    // Week 4 - Final NCLEX-RN Classes
    {
      id: '11',
      title: 'NCLEX-RN Comprehensive Review',
      date: '2025-07-01',
      duration: '120 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '20:00 IST',
      meetingId: '82575371817',
      password: 'NCLEX@123',
      type: 'classes'
    },
    {
      id: '12',
      title: 'NCLEX-RN Mock Exam Practice',
      date: '2025-07-02',
      duration: '90 Min',
      courseLevel: 'NCLEX-RN',
      startTime: '19:30 IST',
      meetingId: '82575371817',
      password: 'NCLEX@123',
      type: 'classes'
    },
    // NCLEX-RN Webinars
    {
      id: '13',
      title: 'NCLEX-RN Success Strategies',
      date: '2025-06-22',
      duration: '120 Min',
      courseLevel: 'All Levels',
      startTime: '15:00 IST',
      meetingId: '99887766554',
      password: 'WEB@456',
      type: 'webinars'
    },
    {
      id: '14',
      title: 'NCLEX-RN Study Plan Masterclass',
      date: '2025-06-29',
      duration: '150 Min',
      courseLevel: 'All Levels',
      startTime: '14:00 IST',
      meetingId: '11223344556',
      password: 'NCLEX@789',
      type: 'webinars'
    },
    {
      id: '15',
      title: 'NCLEX-RN Exam Day Tips',
      date: '2025-07-05',
      duration: '90 Min',
      courseLevel: 'All Levels',
      startTime: '16:00 IST',
      meetingId: '99887766555',
      password: 'NCLEX@456',
      type: 'webinars'
    },
    {
      id: '16',
      title: 'NCLEX-RN Question Analysis',
      date: '2025-07-06',
      duration: '120 Min',
      courseLevel: 'All Levels',
      startTime: '15:30 IST',
      meetingId: '11223344557',
      password: 'NCLEX@789',
      type: 'webinars'
    }
  ];

  const filteredEvents = scheduledEvents.filter(event => {
    if (activeTab === 'classes') return event.type === 'classes';
    return event.type === 'webinars';
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const handleJoinMeeting = (eventId: string) => {
    console.log(`Joining meeting: ${eventId}`);
    // Handle join meeting logic here
  };

  const handleCancelDemo = (eventId: string) => {
    console.log(`Canceling demo: ${eventId}`);
    // Handle cancel demo logic here
  };

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
          {filteredEvents.map((event) => (
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
                      onClick={() => handleJoinMeeting(event.id)}
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
                    onClick={() => handleJoinMeeting(event.id)}
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
      </div>
    </div>
  );
};

export default UpComingClasses;
