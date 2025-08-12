import React, { useState, useMemo } from 'react';

interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  description: string;
  instructor: string;
  image: string;
}

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  // Updated mock data with comprehensive nursing subjects
  const courses: Course[] = [
    // Fundamentals of Nursing
    {
      id: '1',
      title: 'Fundamentals of Nursing',
      category: 'Fundamentals',
      level: 'Beginner',
      duration: '12 weeks',
      students: 1250,
      rating: 4.8,
      price: 299,
      description: 'Essential nursing principles, patient care techniques, and clinical skills foundation',
      instructor: 'Dr. Priya Sharma',
      image: 'fundamentals'
    },
    // Fluid and Electrolytes
    {
      id: '2',
      title: 'Fluid and Electrolytes Management',
      category: 'Physiology',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 890,
      rating: 4.7,
      price: 249,
      description: 'Comprehensive study of fluid balance, electrolyte disorders, and nursing interventions',
      instructor: 'Prof. Rajesh Kumar',
      image: 'physiology'
    },
    // Respiratory System
    {
      id: '3',
      title: 'Respiratory System Nursing',
      category: 'Systems',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 756,
      rating: 4.6,
      price: 279,
      description: 'Respiratory assessment, common disorders, and nursing care for respiratory patients',
      instructor: 'Dr. Anjali Patel',
      image: 'respiratory'
    },
    // Cardiac System
    {
      id: '4',
      title: 'Cardiac System and Cardiovascular Nursing',
      category: 'Systems',
      level: 'Advanced',
      duration: '14 weeks',
      students: 634,
      rating: 4.9,
      price: 349,
      description: 'Cardiac assessment, ECG interpretation, and critical care nursing',
      instructor: 'Dr. Amit Singh',
      image: 'cardiac'
    },
    // Renal System
    {
      id: '5',
      title: 'Renal System and Kidney Disease Nursing',
      category: 'Systems',
      level: 'Intermediate',
      duration: '9 weeks',
      students: 567,
      rating: 4.5,
      price: 259,
      description: 'Renal assessment, dialysis care, and kidney disease management',
      instructor: 'Prof. Meera Reddy',
      image: 'renal'
    },
    // Reproductive System
    {
      id: '6',
      title: 'Reproductive Health Nursing',
      category: 'Specialized',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 445,
      rating: 4.4,
      price: 239,
      description: 'Women\'s health, reproductive disorders, and family planning nursing',
      instructor: 'Dr. Kavita Verma',
      image: 'reproductive'
    },
    // Gastrointestinal System
    {
      id: '7',
      title: 'Gastrointestinal System Nursing',
      category: 'Systems',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 523,
      rating: 4.6,
      price: 269,
      description: 'GI assessment, digestive disorders, and nutritional nursing care',
      instructor: 'Dr. Arjun Malhotra',
      image: 'gastrointestinal'
    },
    // Endocrine System
    {
      id: '8',
      title: 'Endocrine System and Diabetes Nursing',
      category: 'Systems',
      level: 'Intermediate',
      duration: '11 weeks',
      students: 678,
      rating: 4.7,
      price: 289,
      description: 'Endocrine disorders, diabetes management, and hormone therapy nursing',
      instructor: 'Prof. Sunita Iyer',
      image: 'endocrine'
    },
    // Neurological Diseases
    {
      id: '9',
      title: 'Neurological Diseases and Brain Injury Nursing',
      category: 'Specialized',
      level: 'Advanced',
      duration: '13 weeks',
      students: 456,
      rating: 4.8,
      price: 329,
      description: 'Neurological assessment, stroke care, and brain injury rehabilitation',
      instructor: 'Dr. Vikram Desai',
      image: 'neurological'
    },
    // Musculoskeletal System
    {
      id: '10',
      title: 'Musculoskeletal System Nursing',
      category: 'Systems',
      level: 'Intermediate',
      duration: '9 weeks',
      students: 389,
      rating: 4.5,
      price: 249,
      description: 'Orthopedic nursing, fracture care, and rehabilitation nursing',
      instructor: 'Prof. Deepika Kapoor',
      image: 'musculoskeletal'
    },
    // Maternity
    {
      id: '11',
      title: 'Maternity Nursing: Antepartum, Intrapartum, Postpartum',
      category: 'Maternity',
      level: 'Advanced',
      duration: '16 weeks',
      students: 567,
      rating: 4.9,
      price: 379,
      description: 'Complete maternity care from pregnancy through postpartum period',
      instructor: 'Dr. Neha Gupta',
      image: 'maternity'
    },
    // Mental Health
    {
      id: '12',
      title: 'Mental Health and Psychiatric Nursing',
      category: 'Specialized',
      level: 'Advanced',
      duration: '12 weeks',
      students: 423,
      rating: 4.6,
      price: 299,
      description: 'Psychiatric assessment, mental health disorders, and therapeutic nursing',
      instructor: 'Dr. Ravi Menon',
      image: 'mental-health'
    },
    // Skin and Burns
    {
      id: '13',
      title: 'Dermatology and Burn Care Nursing',
      category: 'Specialized',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 345,
      rating: 4.4,
      price: 229,
      description: 'Skin assessment, wound care, and burn treatment nursing',
      instructor: 'Prof. Shweta Joshi',
      image: 'dermatology'
    },
    // Eye and Ear
    {
      id: '14',
      title: 'Ophthalmology and ENT Nursing',
      category: 'Specialized',
      level: 'Intermediate',
      duration: '7 weeks',
      students: 298,
      rating: 4.3,
      price: 219,
      description: 'Eye and ear assessment, vision and hearing disorders nursing',
      instructor: 'Dr. Sanjay Nair',
      image: 'ophthalmology'
    },
    // Hematological Diseases
    {
      id: '15',
      title: 'Hematological Diseases and Blood Disorders',
      category: 'Specialized',
      level: 'Advanced',
      duration: '10 weeks',
      students: 234,
      rating: 4.7,
      price: 279,
      description: 'Blood disorders, transfusion therapy, and hematology nursing',
      instructor: 'Prof. Lakshmi Rao',
      image: 'hematology'
    },
    // Pediatric Diseases
    {
      id: '16',
      title: 'Pediatric Nursing and Child Health',
      category: 'Pediatrics',
      level: 'Advanced',
      duration: '14 weeks',
      students: 456,
      rating: 4.8,
      price: 329,
      description: 'Child health assessment, pediatric disorders, and family-centered care',
      instructor: 'Dr. Priyanka Shah',
      image: 'pediatrics'
    },
    // Milestones and Development
    {
      id: '17',
      title: 'Child Development, Milestones, and Vaccines',
      category: 'Pediatrics',
      level: 'Intermediate',
      duration: '9 weeks',
      students: 567,
      rating: 4.6,
      price: 259,
      description: 'Child development stages, milestone tracking, and immunization nursing',
      instructor: 'Prof. Arun Choudhary',
      image: 'development'
    }
  ];

  // Updated categories based on the new course structure
  const categories = ['All', 'Fundamentals', 'Systems', 'Specialized', 'Maternity', 'Pediatrics', 'Physiology'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter courses based on search and filters
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [courses, searchTerm, selectedCategory, selectedLevel]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Fundamentals':
        return 'bg-blue-100 text-blue-800';
      case 'Systems':
        return 'bg-green-100 text-green-800';
      case 'Specialized':
        return 'bg-purple-100 text-purple-800';
      case 'Maternity':
        return 'bg-pink-100 text-pink-800';
      case 'Pediatrics':
        return 'bg-yellow-100 text-yellow-800';
      case 'Physiology':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-emerald-100 text-emerald-800';
      case 'Intermediate':
        return 'bg-amber-100 text-amber-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCourseImage = (imageType: string) => {
    // Generate a gradient background based on image type
    const gradients = {
      'fundamentals': 'from-blue-400 to-indigo-500',
      'physiology': 'from-green-400 to-emerald-500',
      'respiratory': 'from-cyan-400 to-blue-500',
      'cardiac': 'from-red-400 to-pink-500',
      'renal': 'from-blue-400 to-cyan-500',
      'reproductive': 'from-pink-400 to-rose-500',
      'gastrointestinal': 'from-orange-400 to-red-500',
      'endocrine': 'from-purple-400 to-indigo-500',
      'neurological': 'from-indigo-400 to-purple-500',
      'musculoskeletal': 'from-gray-400 to-slate-500',
      'maternity': 'from-pink-400 to-purple-500',
      'mental-health': 'from-green-400 to-teal-500',
      'dermatology': 'from-orange-400 to-yellow-500',
      'ophthalmology': 'from-blue-400 to-cyan-500',
      'hematology': 'from-red-400 to-orange-500',
      'pediatrics': 'from-yellow-400 to-orange-500',
      'development': 'from-green-400 to-blue-500'
    };
    
    return gradients[imageType as keyof typeof gradients] || 'from-gray-400 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Our Nursing Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive nursing education covering all major systems, specialties, and clinical areas. 
            From fundamentals to advanced practice, master the skills needed for exceptional patient care.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Search Courses</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
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
          <p className="text-lg text-gray-700">
            Showing <span className="font-bold text-indigo-600">{filteredCourses.length}</span> of <span className="font-bold text-indigo-600">{courses.length}</span> courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group">
              {/* Course Image */}
              <div className={`h-48 bg-gradient-to-br ${getCourseImage(course.image)} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    ${course.price}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm">{course.instructor}</span>
                  </div>
                </div>
              </div>

              {/* Course Details */}
              <div className="p-6">
                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    <span>{course.students} students</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{course.rating}/5</span>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Enroll Now - ${course.price}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedLevel('All');
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Additional Info Section */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Ready to Advance Your Nursing Career?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our comprehensive nursing courses cover all major systems and specialties, 
              providing you with the knowledge and skills needed for exceptional patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                View All Courses
              </button>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Contact Advisor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
