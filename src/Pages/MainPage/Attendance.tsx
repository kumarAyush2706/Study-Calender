import React, { useState } from 'react';

interface AttendanceData {
  date: number;
  status: 'present' | 'absent' | 'unmarked' | 'future';
}

const Attendance: React.FC = () => {
  const [selectedTeacher, setSelectedTeacher] = useState('Select Teacher');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('February');

  // Mock attendance data for February 2025
  const attendanceData: AttendanceData[] = [
    { date: 1, status: 'present' },
    { date: 2, status: 'present' },
    { date: 3, status: 'unmarked' },
    { date: 4, status: 'present' },
    { date: 5, status: 'unmarked' },
    { date: 6, status: 'present' },
    { date: 7, status: 'present' },
    { date: 8, status: 'present' },
    { date: 9, status: 'unmarked' },
    { date: 10, status: 'unmarked' },
    { date: 11, status: 'absent' },
    { date: 12, status: 'future' },
    { date: 13, status: 'future' },
    { date: 14, status: 'future' },
    { date: 15, status: 'future' },
    { date: 16, status: 'future' },
    { date: 17, status: 'future' },
    { date: 18, status: 'future' },
    { date: 19, status: 'future' },
    { date: 20, status: 'future' },
    { date: 21, status: 'future' },
    { date: 22, status: 'future' },
    { date: 23, status: 'future' },
    { date: 24, status: 'future' },
    { date: 25, status: 'future' },
    { date: 26, status: 'future' },
    { date: 27, status: 'future' },
    { date: 28, status: 'future' }
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
    calendarDays.push({ date: null, status: 'empty' });
  }
  
  // Add all days of February
  calendarDays.push(...attendanceData);

  // Get current date for highlighting today
  const today = new Date();
  const currentDate = today.getDate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Student Attendance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track and manage student attendance with our comprehensive calendar system
          </p>
        </div>
        
        {/* Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Teacher</label>
              <div className="relative">
                <select
                  value={selectedTeacher}
                  onChange={(e) => setSelectedTeacher(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  <option>Select Teacher</option>
                  <option>Dr. Smith</option>
                  <option>Prof. Johnson</option>
                  <option>Ms. Williams</option>
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
                <p className="text-2xl font-bold text-gray-900">6</p>
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
                <p className="text-2xl font-bold text-gray-900">1</p>
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
                <p className="text-2xl font-bold text-gray-900">4</p>
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
                <p className="text-2xl font-bold text-gray-900">17</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calendar Card */}
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl overflow-hidden">
          {/* Days Header */}
          <div className="grid grid-cols-7 bg-gradient-to-r from-gray-50 to-blue-50 border-b-2 border-gray-200 sticky top-0 z-10">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div
                key={day}
                className="p-6 text-center text-sm font-bold text-gray-700 tracking-wider border-r border-gray-200 last:border-r-0 uppercase"
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
                'relative min-h-[100px] sm:min-h-[120px] p-4',
                'border-r border-b border-gray-200 last:border-r-0',
                day.status === 'empty' ? 'bg-gray-50/50' : 'bg-white',
                isWeekend && (day.status === 'empty' || day.status === 'future') ? 'bg-slate-50/50' : '',
                'transition-all duration-200 hover:bg-indigo-50/60 hover:shadow-inner',
                isToday ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
              ].filter(Boolean).join(' ');

              return (
                <div key={index} className={baseCell}>
                  {!!day.date && (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-lg font-bold ${
                          isToday ? 'text-indigo-600' : 'text-gray-900'
                        }`}>
                          {day.date}
                        </span>
                        {isToday && (
                          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            TODAY
                          </span>
                        )}
                      </div>
                      
                      {day.status !== 'future' && (
                        <span className={`inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-bold ${getStatusColor(day.status)}`}>
                          {getStatusText(day.status)}
                        </span>
                      )}
                    </>
                  )}
                </div>
              );
            })}
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

export default Attendance;
