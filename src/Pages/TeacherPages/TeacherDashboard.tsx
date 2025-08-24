import React, { useState, useEffect } from 'react';

interface DashboardStats {
  totalStudents: number;
  activeCourses: number;
  todayClasses: number;
  avgProgress: number;
  completedClasses: number;
  pendingSubmissions: number;
  upcomingClasses: number;
}

interface ClassItem {
  id: string;
  time: string;
  subject: string;
  students: number;
  status: 'Starting Soon' | 'In 1 hour' | 'In 2 hours' | 'In 4 hours' | 'Completed';
  type: 'lecture' | 'lab' | 'discussion' | 'review';
  duration: string;
  meetingId: string;
}

interface Submission {
  id: string;
  student: string;
  assignment: string;
  status: 'Graded' | 'Pending' | 'Late';
  score: string;
  submittedAt: string;
  course: string;
}

const TeacherDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeframe, setSelectedTimeframe] = useState<'today' | 'week' | 'month'>('today');

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Mock dashboard statistics
  const dashboardStats: DashboardStats = {
    totalStudents: 156,
    activeCourses: 8,
    todayClasses: 5,
    avgProgress: 78,
    completedClasses: 3,
    pendingSubmissions: 12,
    upcomingClasses: 2
  };

  // Mock upcoming classes data
  const upcomingClasses: ClassItem[] = [
    {
      id: '1',
      time: '9:00 AM',
      subject: 'NCLEX-RN Fundamentals Review',
      students: 25,
      status: 'Starting Soon',
      type: 'lecture',
      duration: '90 Min',
      meetingId: '88246216381'
    },
    {
      id: '2',
      time: '11:30 AM',
      subject: 'Pharmacology & Drug Administration',
      students: 18,
      status: 'In 2 hours',
      type: 'discussion',
      duration: '60 Min',
      meetingId: '82575371817'
    },
    {
      id: '3',
      time: '2:00 PM',
      subject: 'Medical-Surgical Nursing Practice',
      students: 22,
      status: 'In 4 hours',
      type: 'lab',
      duration: '120 Min',
      meetingId: '82575371817'
    }
  ];

  // Mock recent submissions data
  const recentSubmissions: Submission[] = [
    {
      id: '1',
      student: 'Sarah Johnson',
      assignment: 'Week 3 NCLEX Practice Quiz',
      status: 'Graded',
      score: '95%',
      submittedAt: '2 hours ago',
      course: 'NCLEX-RN Prep'
    },
    {
      id: '2',
      student: 'Mike Chen',
      assignment: 'Case Study: Cardiac Patient',
      status: 'Pending',
      score: '-',
      submittedAt: '4 hours ago',
      course: 'Medical-Surgical Nursing'
    },
    {
      id: '3',
      student: 'Emily Davis',
      assignment: 'Pharmacology Final Exam',
      status: 'Graded',
      score: '88%',
      submittedAt: '6 hours ago',
      course: 'Pharmacology Fundamentals'
    },
    {
      id: '4',
      student: 'Alex Rodriguez',
      assignment: 'Pediatric Nursing Assessment',
      status: 'Late',
      score: '72%',
      submittedAt: '1 day ago',
      course: 'Pediatric Nursing'
    }
  ];



  const getSubmissionStatusColor = (status: string) => {
    switch (status) {
      case 'Graded':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Late':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };



  const handleGradeSubmission = (submissionId: string) => {
    console.log(`Grading submission: ${submissionId}`);
    // Handle grading logic here
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Teacher Dashboard</h1>
              <p className="text-xl text-gray-600 mb-2">Welcome back, Professor! Here's your teaching overview.</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {formatTime(currentTime)}
                </span>
                <span>•</span>
                <span>{currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
            
            {/* Timeframe Selector */}
            <div className="mt-4 lg:mt-0">
              <div className="flex bg-white rounded-xl p-1 shadow-lg border border-gray-200">
                {(['today', 'week', 'month'] as const).map((timeframe) => (
                  <button
                    key={timeframe}
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedTimeframe === timeframe
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Total Students */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">{dashboardStats.totalStudents}</span>
                <div className="text-sm text-green-600 font-medium">+12%</div>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600">Total Students</p>
            <div className="mt-3 flex items-center text-xs text-gray-500">
              <span>+18 this month</span>
            </div>
          </div>

          {/* Active Courses */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">{dashboardStats.activeCourses}</span>
                <div className="text-sm text-green-600 font-medium">+2</div>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600">Active Courses</p>
            <div className="mt-3 flex items-center text-xs text-gray-500">
              <span>2 new this month</span>
            </div>
          </div>

          {/* Today's Classes */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">{dashboardStats.todayClasses}</span>
                <div className="text-sm text-blue-600 font-medium">{dashboardStats.completedClasses} completed</div>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600">Today's Classes</p>
            <div className="mt-3 flex items-center text-xs text-gray-500">
              <span>{dashboardStats.upcomingClasses} remaining</span>
            </div>
          </div>

          {/* Student Progress */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">{dashboardStats.avgProgress}%</span>
                <div className="text-sm text-green-600 font-medium">+5%</div>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600">Avg. Progress</p>
            <div className="mt-3 flex items-center text-xs text-gray-500">
              <span>from last week</span>
            </div>
          </div>
        </div>

        {/* Enhanced Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Recent Submissions - Enhanced */}

          {/* Recent Submissions - Enhanced */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Recent Submissions</h3>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full border border-red-200">
                  {dashboardStats.pendingSubmissions} pending
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentSubmissions.map((submission) => (
                  <div key={submission.id} className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{submission.student}</h4>
                        <p className="text-xs text-gray-500 mt-1">{submission.course}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSubmissionStatusColor(submission.status)}`}>
                        {submission.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 mb-3">{submission.assignment}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        Submitted {submission.submittedAt}
                      </div>
                      <div className="flex items-center space-x-2">
                        {submission.score !== '-' && (
                          <span className="text-sm font-bold text-gray-900">{submission.score}</span>
                        )}
                        {submission.status === 'Pending' && (
                          <button
                            onClick={() => handleGradeSubmission(submission.id)}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-xs font-medium transition-colors shadow-sm hover:shadow-md"
                          >
                            Grade
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors">
                  View All Submissions
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats Overview */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Quick Overview</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* Next Class Info */}
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Next Class</h4>
                  {upcomingClasses.length > 0 ? (
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-1">{upcomingClasses[0].subject}</p>
                      <p className="text-xs text-gray-600">{upcomingClasses[0].time} • {upcomingClasses[0].duration}</p>
                      <p className="text-xs text-gray-500 mt-1">{upcomingClasses[0].students} students enrolled</p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No upcoming classes</p>
                  )}
                </div>

                {/* Today's Summary */}
                <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Today's Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Classes:</span>
                      <span className="font-medium text-gray-900">{dashboardStats.todayClasses}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Completed:</span>
                      <span className="font-medium text-green-600">{dashboardStats.completedClasses}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Remaining:</span>
                      <span className="font-medium text-blue-600">{dashboardStats.upcomingClasses}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mt-10 bg-white rounded-2xl shadow-xl border border-gray-200/50 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:bg-gradient-to-br hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="font-medium text-gray-900 text-sm">Create Class</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:bg-gradient-to-br hover:from-green-100 hover:to-emerald-100 transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="font-medium text-gray-900 text-sm">Grade Papers</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 hover:bg-gradient-to-br hover:from-purple-100 hover:to-violet-100 transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium text-gray-900 text-sm">Schedule Class</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 hover:bg-gradient-to-br hover:from-orange-100 hover:to-amber-100 transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="font-medium text-gray-900 text-sm">View Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
