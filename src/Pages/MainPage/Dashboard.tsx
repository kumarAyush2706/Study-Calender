import React, { useState } from 'react';

interface DashboardStats {
  totalCourses: number;
  completedCourses: number;
  totalHours: number;
  averageScore: number;
  upcomingClasses: number;
  pendingAssignments: number;
}

interface CourseProgress {
  id: string;
  name: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'not-started';
  nextClass?: string;
  instructor: string;
}

interface RecentActivity {
  id: string;
  type: 'class' | 'assignment' | 'assessment' | 'recording';
  title: string;
  time: string;
  status: 'completed' | 'pending' | 'overdue';
}

const Dashboard: React.FC = () => {
  const [stats] = useState<DashboardStats>({
    totalCourses: 12,
    completedCourses: 8,
    totalHours: 156,
    averageScore: 87,
    upcomingClasses: 3,
    pendingAssignments: 5
  });

  const [courseProgress] = useState<CourseProgress[]>([
    {
      id: '1',
      name: 'NCLEX-RN Fundamentals',
      progress: 85,
      status: 'in-progress',
      nextClass: 'Today, 2:00 PM',
      instructor: 'Dr. Priya Sharma'
    },
    {
      id: '2',
      name: 'Medical-Surgical Nursing',
      progress: 100,
      status: 'completed',
      instructor: 'Dr. Amit Singh'
    },
    {
      id: '3',
      name: 'Pediatric Nursing',
      progress: 60,
      status: 'in-progress',
      nextClass: 'Tomorrow, 10:00 AM',
      instructor: 'Dr. Anjali Patel'
    },
    {
      id: '4',
      name: 'Mental Health Nursing',
      progress: 0,
      status: 'not-started',
      instructor: 'Dr. Ravi Menon'
    }
  ]);

  const [recentActivities] = useState<RecentActivity[]>([
    {
      id: '1',
      type: 'class',
      title: 'NCLEX-RN Fundamentals - Cardiovascular System',
      time: '2 hours ago',
      status: 'completed'
    },
    {
      id: '2',
      type: 'assignment',
      title: 'Medical-Surgical Case Study Due',
      time: '4 hours ago',
      status: 'pending'
    },
    {
      id: '3',
      type: 'assessment',
      title: 'Pediatric Nursing Quiz',
      time: '1 day ago',
      status: 'completed'
    },
    {
      id: '4',
      type: 'recording',
      title: 'Mental Health Assessment Techniques',
      time: '2 days ago',
      status: 'completed'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-emerald-500 to-teal-500';
      case 'in-progress':
        return 'from-blue-500 to-indigo-500';
      case 'not-started':
        return 'from-gray-400 to-gray-500';
      case 'pending':
        return 'from-amber-500 to-orange-500';
      case 'overdue':
        return 'from-rose-500 to-pink-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'not-started':
        return 'Not Started';
      case 'pending':
        return 'Pending';
      case 'overdue':
        return 'Overdue';
      default:
        return status;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'class':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        );
      case 'assignment':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'assessment':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'recording':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.923L4.5 13.5V17a1 1 0 01-2 0V3a1 1 0 012 0v3.5L8.383 3.076A1 1 0 011.234-.001z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-10">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Welcome back! Here's your learning progress overview
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              + Add Course
            </button>
            <button className="px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl font-semibold shadow-lg hover:shadow-xl border border-gray-200/50 hover:bg-white transition-all duration-200">
              Export Report
            </button>
          </div>
        </div>

       
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Courses</p>
              <p className="text-3xl font-bold text-gray-800">{stats.totalCourses}</p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <span className="text-emerald-600 font-medium">+2 this month</span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Study Hours</p>
              <p className="text-3xl font-bold text-gray-800">{stats.totalHours}h</p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <span className="text-emerald-600 font-medium">+12h today</span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Average Score</p>
              <p className="text-3xl font-bold text-gray-800">{stats.averageScore}%</p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <span className="text-emerald-600 font-medium">+5% this week</span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Upcoming Classes</p>
              <p className="text-3xl font-bold text-gray-800">{stats.upcomingClasses}</p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <span className="text-rose-600 font-medium">Next: 2:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Progress Section */}
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Course Progress</h2>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              {courseProgress.map((course) => (
                <div key={course.id} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getStatusColor(course.status)}`}></div>
                      <h3 className="font-semibold text-gray-800">{course.name}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(course.status)} text-white`}>
                      {getStatusText(course.status)}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-gray-800">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${getStatusColor(course.status)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Instructor: {course.instructor}</span>
                    {course.nextClass && (
                      <span className="text-indigo-600 font-medium">Next: {course.nextClass}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="lg:col-span-1">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50/50 transition-colors duration-200">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${getStatusColor(activity.status)} flex items-center justify-center flex-shrink-0`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{activity.title}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{activity.time}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(activity.status)} text-white`}>
                        {getStatusText(activity.status)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="mt-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200/50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <p className="font-medium text-gray-800">Join Class</p>
            </button>

            <button className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-medium text-gray-800">Take Quiz</p>
            </button>

            <button className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50 hover:from-purple-100 hover:to-pink-100 transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.923L4.5 13.5V17a1 1 0 01-2 0V3a1 1 0 012 0v3.5L8.383 3.076A1 1 0 011.234-.001z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-medium text-gray-800">Watch Recording</p>
            </button>

            <button className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-rose-200/50 hover:from-rose-100 hover:to-pink-100 transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-medium text-gray-800">Submit Assignment</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
