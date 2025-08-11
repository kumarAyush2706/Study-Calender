import React, { useState } from 'react';

interface Course {
  id: string;
  name: string;
  language: string;
  backgroundImage: string;
  logoColors: string[];
  isFavorite: boolean;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  category: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: '1',
      name: 'French Language',
      language: 'FRENCH',
      backgroundImage: 'https://images.unsplash.com/photo-1541963463539-d58d1307f76a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      logoColors: ['from-blue-400', 'to-purple-500'],
      isFavorite: false,
      level: 'Beginner',
      duration: '8 weeks',
      students: 1247,
      rating: 4.8,
      price: '$299',
      category: 'Language'
    },
    {
      id: '2',
      name: 'German Language',
      language: 'GERMAN',
      backgroundImage: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      logoColors: ['from-black', 'via-red-600', 'to-yellow-400'],
      isFavorite: false,
      level: 'Intermediate',
      duration: '10 weeks',
      students: 892,
      rating: 4.6,
      price: '$349',
      category: 'Language'
    },
    {
      id: '3',
      name: 'Spanish Language',
      language: 'SPANISH',
      backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      logoColors: ['from-red-600', 'to-yellow-400'],
      isFavorite: false,
      level: 'Beginner',
      duration: '6 weeks',
      students: 2156,
      rating: 4.9,
      price: '$249',
      category: 'Language'
    },
    {
      id: '4',
      name: 'Japanese Language',
      language: 'JAPANESE',
      backgroundImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      logoColors: ['from-white', 'to-red-600'],
      isFavorite: false,
      level: 'Advanced',
      duration: '12 weeks',
      students: 567,
      rating: 4.7,
      price: '$399',
      category: 'Language'
    },
    {
      id: '5',
      name: 'IELTS Preparation',
      language: 'IELTS',
      backgroundImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      logoColors: ['from-red-600', 'via-white', 'to-blue-600'],
      isFavorite: false,
      level: 'All Levels',
      duration: '4 weeks',
      students: 3421,
      rating: 4.9,
      price: '$199',
      category: 'Test Prep'
    },
    {
      id: '6',
      name: 'Chinese Language',
      language: 'MANDARIN',
      backgroundImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      logoColors: ['from-red-600', 'to-yellow-400'],
      isFavorite: false,
      level: 'Intermediate',
      duration: '14 weeks',
      students: 734,
      rating: 4.5,
      price: '$449',
      category: 'Language'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const toggleFavorite = (courseId: string) => {
    setCourses(prev => prev.map(course => 
      course.id === courseId 
        ? { ...course, isFavorite: !course.isFavorite }
        : course
    ));
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.language.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const categories = ['All', 'Language', 'Test Prep'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Our Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive selection of language courses and test preparation programs designed to help you achieve your learning goals
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-indigo-600">{filteredCourses.length}</span> of <span className="font-semibold text-gray-800">{courses.length}</span> courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group">
              {/* Course Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                {/* Background Image */}
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${course.backgroundImage})` }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Course Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {course.category}
                    </span>
                  </div>
                  
                  {/* Heart Icon */}
                  <button
                    onClick={() => toggleFavorite(course.id)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
                  >
                    <svg 
                      className={`w-5 h-5 ${course.isFavorite ? 'text-red-500 fill-current' : 'text-white'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                  </button>
                  
                  {/* Central Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${course.logoColors.join(' ')} flex items-center justify-center relative shadow-2xl`}>
                      {/* Top Text */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          {course.language}
                        </span>
                      </div>
                      
                      {/* Center Text */}
                      <div className="text-center z-10">
                        <div className="text-sm font-bold text-white">The Language</div>
                        <div className="text-lg font-bold text-white">SKOOL</div>
                      </div>
                      
                      {/* Bottom Text */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          {course.language === 'IELTS' ? 'IELTS' : course.language === 'MANDARIN' ? 'CHINESE' : course.language}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Course Details */}
                <div className="p-6">
                  {/* Course Title and Level */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                    <div className="flex items-center space-x-3">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {course.level}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Price and Enroll Button */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-indigo-600">{course.price}</div>
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all available courses.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedLevel('All');
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Clear Filters
            </button>
          </div>
        )}
        
        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already transformed their language skills and achieved their goals with our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Browse All Courses
              </button>
              <button className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
