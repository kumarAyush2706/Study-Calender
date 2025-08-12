import React, { useState } from 'react';

interface DailyRecording {
  id: number;
  title: string;
  courseLevel: string;
  teacher: string;
  date: string;
  timeSlot: string;
  schedule: string;
  subject: string;
}

const DailyRecording: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedTeacher, setSelectedTeacher] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');

  // Mock data for daily recordings - Nursing courses
  const dailyRecordings: DailyRecording[] = [
    {
      id: 1,
      title: 'Fundamentals of Nursing - Patient Assessment',
      courseLevel: 'NCLEX-RN',
      teacher: 'Dr. Priya Sharma',
      date: '15-01-2025',
      timeSlot: '9:00 AM - 10:30 AM',
      schedule: 'Monday - Friday',
      subject: 'Fundamentals of Nursing'
    },
    {
      id: 2,
      title: 'Cardiovascular System - ECG Interpretation',
      courseLevel: 'NCLEX-RN',
      teacher: 'Dr. Amit Singh',
      date: '14-01-2025',
      timeSlot: '2:00 PM - 3:30 PM',
      schedule: 'Monday - Friday',
      subject: 'Cardiac Nursing'
    },
    {
      id: 3,
      title: 'Respiratory System - Ventilation Management',
      courseLevel: 'NCLEX-RN',
      teacher: 'Dr. Anjali Patel',
      date: '13-01-2025',
      timeSlot: '11:00 AM - 12:30 PM',
      schedule: 'Monday - Friday',
      subject: 'Respiratory Nursing'
    },
    {
      id: 4,
      title: 'Renal System - Dialysis Procedures',
      courseLevel: 'NCLEX-RN',
      teacher: 'Prof. Meera Reddy',
      date: '12-01-2025',
      timeSlot: '3:00 PM - 4:30 PM',
      schedule: 'Monday - Friday',
      subject: 'Renal Nursing'
    },
    {
      id: 5,
      title: 'Mental Health - Crisis Intervention',
      courseLevel: 'NCLEX-RN',
      teacher: 'Dr. Ravi Menon',
      date: '11-01-2025',
      timeSlot: '10:00 AM - 11:30 AM',
      schedule: 'Monday - Friday',
      subject: 'Mental Health Nursing'
    },
    {
      id: 6,
      title: 'Pediatric Care - Growth & Development',
      courseLevel: 'NCLEX-RN',
      teacher: 'Dr. Kavita Desai',
      date: '10-01-2025',
      timeSlot: '1:00 PM - 2:30 PM',
      schedule: 'Monday - Friday',
      subject: 'Pediatric Nursing'
    },
    {
      id: 7,
      title: 'Maternity Nursing - Labor & Delivery',
      courseLevel: 'NCLEX-RN',
      teacher: 'Dr. Sunita Verma',
      date: '09-01-2025',
      timeSlot: '4:00 PM - 5:30 PM',
      schedule: 'Monday - Friday',
      subject: 'Maternity Nursing'
    },
    {
      id: 8,
      title: 'Pharmacology - Medication Administration',
      courseLevel: 'NCLEX-RN',
      teacher: 'Prof. Rajesh Kumar',
      date: '08-01-2025',
      timeSlot: '8:00 AM - 9:30 AM',
      schedule: 'Monday - Friday',
      subject: 'Pharmacology'
    }
  ];

  const courseLevels = ['All', 'NCLEX-RN', 'NCLEX-PN', 'BSN', 'MSN'];
  const teachers = ['All', 'Dr. Priya Sharma', 'Dr. Amit Singh', 'Dr. Anjali Patel', 'Prof. Meera Reddy', 'Dr. Ravi Menon', 'Dr. Kavita Desai', 'Dr. Sunita Verma', 'Prof. Rajesh Kumar'];
  const subjects = ['All', 'Fundamentals of Nursing', 'Cardiac Nursing', 'Respiratory Nursing', 'Renal Nursing', 'Mental Health Nursing', 'Pediatric Nursing', 'Maternity Nursing', 'Pharmacology'];

  // Filter recordings based on selected filters
  const filteredRecordings = dailyRecordings.filter(recording => {
    const matchesCourse = selectedCourse === 'All' || recording.courseLevel === selectedCourse;
    const matchesTeacher = selectedTeacher === 'All' || recording.teacher === selectedTeacher;
    const matchesSubject = selectedSubject === 'All' || recording.subject === selectedSubject;
    return matchesCourse && matchesTeacher && matchesSubject;
  });

  const handlePlayRecording = (recordingId: number) => {
    console.log(`Playing recording: ${recordingId}`);
    // Handle play recording logic here
  };

  const handleSaveRecording = (recordingId: number) => {
    console.log(`Saving recording: ${recordingId}`);
    // Handle save recording logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Daily Recordings</h1>
          <p className="text-lg text-gray-600">
            Access and manage your daily recorded nursing classes and lectures for NCLEX preparation.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Recordings</p>
                <p className="text-2xl font-bold text-gray-900">{dailyRecordings.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Subjects</p>
                <p className="text-2xl font-bold text-gray-900">{new Set(dailyRecordings.map(r => r.subject)).size}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Course Levels</p>
                <p className="text-2xl font-bold text-gray-900">{new Set(dailyRecordings.map(r => r.courseLevel)).size}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Instructors</p>
                <p className="text-2xl font-bold text-gray-900">{new Set(dailyRecordings.map(r => r.teacher)).size}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Course Level Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Course Level</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              >
                {courseLevels.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {/* Teacher Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Instructor</label>
              <select
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              >
                {teachers.map(teacher => (
                  <option key={teacher} value={teacher}>{teacher}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Recordings Table */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Recorded Nursing Classes</h3>
            <p className="text-sm text-gray-600">Showing {filteredRecordings.length} of {dailyRecordings.length} recordings</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredRecordings.map((recording) => (
                  <tr key={recording.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{recording.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{recording.title}</div>
                        <div className="text-xs text-gray-500">{recording.timeSlot} • {recording.schedule}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{recording.subject}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{recording.courseLevel}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{recording.teacher}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{recording.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handlePlayRecording(recording.id)}
                          className="inline-flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          Play Recording
                        </button>
                        <button
                          onClick={() => handleSaveRecording(recording.id)}
                          className="inline-flex items-center px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          Save
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No Results Message */}
        {filteredRecordings.length === 0 && (
          <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 mt-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No recordings found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or check back later</p>
            <button
              onClick={() => {
                setSelectedCourse('All');
                setSelectedSubject('All');
                setSelectedTeacher('All');
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Additional Info Section */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">NCLEX Preparation Recordings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">About Our Recordings</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our daily recorded classes cover essential nursing topics for NCLEX preparation. Each recording focuses on 
                specific nursing concepts, procedures, and clinical scenarios to help you succeed in your nursing career.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Recording Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High-quality video and audio recordings</li>
                <li>• Downloadable content for offline study</li>
                <li>• Organized by nursing subjects and topics</li>
                <li>• Expert instructors with clinical experience</li>
                <li>• NCLEX-focused content and practice questions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyRecording;
