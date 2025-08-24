import React, { useState } from 'react';

interface StudentAttendance {
  id: string;
  name: string;
  email: string;
  status: 'present' | 'absent' | 'unmarked' | 'future';
  lastSeen?: string;
  totalClasses: number;
  attendanceRate: number;
}

interface AttendanceData {
  date: number;
  students: StudentAttendance[];
}

const TeacherAttendance: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('Select Course');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('February');
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  // Mock course data
  const courses = [
    'NCLEX-RN Fundamentals',
    'Pharmacology & Drug Administration',
    'Medical-Surgical Nursing',
    'Pediatric Nursing',
    'Mental Health Nursing'
  ];

  // Mock student attendance data for February 2025
  const students: StudentAttendance[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      status: 'present',
      lastSeen: '2 hours ago',
      totalClasses: 15,
      attendanceRate: 93
    },
    {
      id: '2',
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      status: 'absent',
      lastSeen: '1 day ago',
      totalClasses: 12,
      attendanceRate: 80
    },
    {
      id: '3',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      status: 'present',
      lastSeen: '30 minutes ago',
      totalClasses: 18,
      attendanceRate: 100
    },
    {
      id: '4',
      name: 'Alex Rodriguez',
      email: 'alex.rodriguez@email.com',
      status: 'unmarked',
      lastSeen: '3 hours ago',
      totalClasses: 14,
      attendanceRate: 87
    },
    {
      id: '5',
      name: 'Jessica Kim',
      email: 'jessica.kim@email.com',
      status: 'present',
      lastSeen: '1 hour ago',
      totalClasses: 16,
      attendanceRate: 94
    }
  ];

  // Mock attendance data for February 2025
  const attendanceData: AttendanceData[] = [
    { date: 1, students: students.map(s => ({ ...s, status: 'present' as const })) },
    { date: 2, students: students.map(s => ({ ...s, status: 'present' as const })) },
    { date: 3, students: students.map(s => ({ ...s, status: 'unmarked' as const })) },
    { date: 4, students: students.map(s => ({ ...s, status: 'present' as const })) },
    { date: 5, students: students.map(s => ({ ...s, status: 'unmarked' as const })) },
    { date: 6, students: students.map(s => ({ ...s, status: 'present' as const })) },
    { date: 7, students: students.map(s => ({ ...s, status: 'present' as const })) },
    { date: 8, students: students.map(s => ({ ...s, status: 'present' as const })) },
    { date: 9, students: students.map(s => ({ ...s, status: 'unmarked' as const })) },
    { date: 10, students: students.map(s => ({ ...s, status: 'unmarked' as const })) },
    { date: 11, students: students.map(s => ({ ...s, status: 'absent' as const })) },
    { date: 12, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 13, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 14, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 15, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 16, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 17, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 18, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 19, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 20, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 21, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 22, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 23, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 24, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 25, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 26, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 27, students: students.map(s => ({ ...s, status: 'future' as const })) },
    { date: 28, students: students.map(s => ({ ...s, status: 'future' as const })) }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg';
      case 'absent':
        return 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg';
      case 'unmarked':
        return 'bg-gradient-to-r from-slate-600 to-gray-700 text-white shadow-lg';
      case 'future':
        return 'bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 ring-2 ring-amber-200';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'present':
        return 'PRESENT';
      case 'absent':
        return 'ABSENT';
      case 'unmarked':
        return 'UNMARKED';
      case 'future':
        return '';
      default:
        return '';
    }
  };

  // Calculate the starting day of the month (February 1, 2025 is a Saturday)
  const startDay = 6; // Saturday = 6 (0 = Sunday, 1 = Monday, etc.)
  
  // Create calendar grid with empty cells for days before the month starts
  const calendarDays = [];
  
  // Add empty cells for days before February 1st
  for (let i = 0; i < startDay; i++) {
    calendarDays.push({ date: null, students: [] });
  }
  
  // Add all days of February
  calendarDays.push(...attendanceData);

  // Get current date for highlighting today
  const today = new Date();
  const currentDate = today.getDate();

  // Calculate attendance statistics
  const totalStudents = students.length;
  const presentCount = students.filter(s => s.status === 'present').length;
  const absentCount = students.filter(s => s.status === 'absent').length;
  const unmarkedCount = students.filter(s => s.status === 'unmarked').length;
  const futureCount = students.filter(s => s.status === 'future').length;

  const handleMarkAttendance = (studentId: string, status: 'present' | 'absent') => {
    console.log(`Marking ${studentId} as ${status}`);
    // Handle attendance marking logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Student Attendance Tracker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor and manage student attendance across all your courses with our comprehensive tracking system
          </p>
        </div>
        
        {/* Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Course</label>
              <div className="relative">
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  <option>Select Course</option>
                  {courses.map(course => (
                    <option key={course}>{course}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Year</label>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Month</label>
              <div className="relative">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</label>
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/* Attendance Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Present</p>
                <p className="text-2xl font-bold text-gray-900">{presentCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Absent</p>
                <p className="text-2xl font-bold text-gray-900">{absentCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Unmarked</p>
                <p className="text-2xl font-bold text-gray-900">{unmarkedCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Future</p>
                <p className="text-2xl font-bold text-gray-900">{futureCount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Student List and Calendar Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {/* Student List */}
          <div className="xl:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-700">Students ({totalStudents})</h3>
                <p className="text-sm text-gray-600 mt-1">Click to mark attendance</p>
              </div>
              <div className="p-4 max-h-96 overflow-y-auto">
                {students.map((student) => (
                  <div key={student.id} className="mb-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{student.name}</h4>
                        <p className="text-xs text-gray-500">{student.email}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(student.status)}`}>
                        {getStatusText(student.status)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <span>Classes: {student.totalClasses}</span>
                      <span>Rate: {student.attendanceRate}%</span>
                    </div>
                    {student.status === 'unmarked' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleMarkAttendance(student.id, 'present')}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                        >
                          Present
                        </button>
                        <button
                          onClick={() => handleMarkAttendance(student.id, 'absent')}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                        >
                          Absent
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calendar Card */}
          <div className="xl:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl overflow-hidden">
              {/* Days Header */}
              <div className="grid grid-cols-7 bg-gradient-to-r from-gray-50 to-blue-50 border-b-2 border-gray-200 sticky top-0 z-10">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div
                    key={day}
                    className="p-4 text-center text-sm font-bold text-gray-700 tracking-wider border-r border-gray-200 last:border-r-0 uppercase"
                  >
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Days Grid */}
              <div className="grid grid-cols-7">
                {calendarDays.map((day, index) => {
                  const columnIndex = index % 7;
                  const isWeekend = columnIndex === 0 || columnIndex === 6;
                  const isToday = day.date === currentDate && selectedMonth === 'February' && selectedYear === '2025';
                  
                  const baseCell = [
                    'relative min-h-[80px] p-3',
                    'border-r border-b border-gray-200 last:border-r-0',
                    day.date === null ? 'bg-gray-50/50' : 'bg-white',
                    isWeekend && (day.date === null || day.date > currentDate) ? 'bg-slate-50/50' : '',
                    'transition-all duration-200 hover:bg-indigo-50/60 hover:shadow-inner',
                    isToday ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                  ].filter(Boolean).join(' ');

                  return (
                    <div key={index} className={baseCell}>
                      {!!day.date && (
                        <>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-sm font-bold ${
                              isToday ? 'text-indigo-600' : 'text-gray-900'
                            }`}>
                              {day.date}
                            </span>
                            {isToday && (
                              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-1 py-0.5 rounded-full font-semibold">
                                TODAY
                              </span>
                            )}
                          </div>
                          
                          {/* Attendance Summary for the day */}
                          {day.students.length > 0 && (
                            <div className="text-xs space-y-1">
                              <div className="flex justify-between">
                                <span className="text-green-600">●</span>
                                <span className="text-gray-600">{day.students.filter(s => s.status === 'present').length}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-red-600">●</span>
                                <span className="text-gray-600">{day.students.filter(s => s.status === 'absent').length}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">●</span>
                                <span className="text-gray-600">{day.students.filter(s => s.status === 'unmarked').length}</span>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Attendance Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Present</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-r from-rose-500 to-red-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Absent</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Unmarked</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Future</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAttendance;

