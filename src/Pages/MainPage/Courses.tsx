import React, { useState, useMemo } from 'react';
import { useCourses } from '../../hooks/useAPI';

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
  examType: string;
}

interface CourseCategory {
  id: string;
  name: string;
  description: string;
  examType: string;
  color: string;
  courses: Course[];
  icon: string;
}

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch courses from API
  const { data: apiCourses, loading, error } = useCourses();

  // Transform API data to match our interface
  const courses: Course[] = useMemo(() => {
    if (!apiCourses || !Array.isArray(apiCourses)) return [];
    
    return (apiCourses as any[]).map((course: any) => ({
      id: course.id || String(Math.random()),
      title: course.title || course.name || 'Untitled Course',
      category: course.category || 'General',
      level: course.level || 'Beginner',
      duration: course.duration || '8 weeks',
      students: course.students || course.enrolledStudents || 0,
      rating: course.rating || 4.5,
      price: course.price || 0,
      description: course.description || course.summary || 'No description available',
      instructor: course.instructor || course.teacher || 'Unknown Instructor',
      image: course.image || 'fundamentals',
      examType: course.examType || 'NCLEX-RN'
    }));
  }, [apiCourses]);

  // Updated courses organized by exam type (commented out - now using API data)
  /*
  const courses: Course[] = [
    // NCLEX-RN Courses
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
      image: 'fundamentals',
      examType: 'NCLEX-RN'
    },
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
      image: 'physiology',
      examType: 'NCLEX-RN'
    },
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
      image: 'respiratory',
      examType: 'NCLEX-RN'
    },
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
      image: 'cardiac',
      examType: 'NCLEX-RN'
    },
    {
      id: '5',
      title: 'GI System Nursing',
      category: 'Systems',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 523,
      rating: 4.6,
      price: 269,
      description: 'GI assessment, digestive disorders, and nutritional nursing care',
      instructor: 'Dr. Arjun Malhotra',
      image: 'gastrointestinal',
      examType: 'NCLEX-RN'
    },
    {
      id: '6',
      title: 'Endocrine System and Diabetes Nursing',
      category: 'Systems',
      level: 'Intermediate',
      duration: '11 weeks',
      students: 678,
      rating: 4.7,
      price: 289,
      description: 'Endocrine disorders, diabetes management, and hormone therapy nursing',
      instructor: 'Prof. Sunita Iyer',
      image: 'endocrine',
      examType: 'NCLEX-RN'
    },
    {
      id: '7',
      title: 'Renal System and Kidney Disease Nursing',
      category: 'Systems',
      level: 'Intermediate',
      duration: '9 weeks',
      students: 567,
      rating: 4.5,
      price: 259,
      description: 'Renal assessment, dialysis care, and kidney disease management',
      instructor: 'Prof. Meera Reddy',
      image: 'renal',
      examType: 'NCLEX-RN'
    },
    {
      id: '8',
      title: 'Reproductive Health Nursing',
      category: 'Specialized',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 445,
      rating: 4.4,
      price: 239,
      description: 'Women\'s health, reproductive disorders, and family planning nursing',
      instructor: 'Dr. Kavita Verma',
      image: 'reproductive',
      examType: 'NCLEX-RN'
    },
    {
      id: '9',
      title: 'Skin and Burn Care Nursing',
      category: 'Specialized',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 345,
      rating: 4.4,
      price: 229,
      description: 'Skin assessment, wound care, and burn treatment nursing',
      instructor: 'Prof. Shweta Joshi',
      image: 'dermatology',
      examType: 'NCLEX-RN'
    },
    {
      id: '10',
      title: 'Eye and Ear Care Nursing',
      category: 'Specialized',
      level: 'Intermediate',
      duration: '7 weeks',
      students: 298,
      rating: 4.3,
      price: 219,
      description: 'Eye and ear assessment, vision and hearing disorders nursing',
      instructor: 'Dr. Sanjay Nair',
      image: 'ophthalmology',
      examType: 'NCLEX-RN'
    },
    {
      id: '11',
      title: 'Neurological System Nursing',
      category: 'Specialized',
      level: 'Advanced',
      duration: '13 weeks',
      students: 456,
      rating: 4.8,
      price: 329,
      description: 'Neurological assessment, stroke care, and brain injury rehabilitation',
      instructor: 'Dr. Vikram Desai',
      image: 'neurological',
      examType: 'NCLEX-RN'
    },
    {
      id: '12',
      title: 'Musculoskeletal System Nursing',
      category: 'Systems',
      level: 'Intermediate',
      duration: '9 weeks',
      students: 389,
      rating: 4.5,
      price: 249,
      description: 'Orthopedic nursing, fracture care, and rehabilitation nursing',
      instructor: 'Prof. Deepika Kapoor',
      image: 'musculoskeletal',
      examType: 'NCLEX-RN'
    },
    {
      id: '13',
      title: 'Pediatric Nursing and Child Health',
      category: 'Pediatrics',
      level: 'Advanced',
      duration: '14 weeks',
      students: 456,
      rating: 4.8,
      price: 329,
      description: 'Child health assessment, pediatric disorders, and family-centered care',
      instructor: 'Dr. Priyanka Shah',
      image: 'pediatrics',
      examType: 'NCLEX-RN'
    },

    // DHA Exam Courses
    {
      id: '14',
      title: 'DHA Fundamentals of Nursing',
      category: 'Fundamentals',
      level: 'Beginner',
      duration: '10 weeks',
      students: 890,
      rating: 4.7,
      price: 279,
      description: 'Essential nursing principles for DHA licensing exam preparation',
      instructor: 'Dr. Ahmed Al-Rashid',
      image: 'fundamentals',
      examType: 'DHA'
    },
    {
      id: '15',
      title: 'DHA Medical-Surgical Nursing',
      category: 'Systems',
      level: 'Intermediate',
      duration: '12 weeks',
      students: 678,
      rating: 4.6,
      price: 299,
      description: 'Comprehensive medical-surgical nursing for DHA exam',
      instructor: 'Dr. Fatima Al-Zahra',
      image: 'cardiac',
      examType: 'DHA'
    },
    {
      id: '16',
      title: 'DHA Critical Care Nursing',
      category: 'Specialized',
      level: 'Advanced',
      duration: '14 weeks',
      students: 445,
      rating: 4.8,
      price: 349,
      description: 'Advanced critical care nursing concepts for DHA licensing',
      instructor: 'Dr. Omar Al-Mansouri',
      image: 'respiratory',
      examType: 'DHA'
    },
    {
      id: '17',
      title: 'DHA Pediatric Nursing',
      category: 'Pediatrics',
      level: 'Intermediate',
      duration: '11 weeks',
      students: 567,
      rating: 4.5,
      price: 289,
      description: 'Pediatric nursing care and child health for DHA exam',
      instructor: 'Dr. Aisha Al-Hassan',
      image: 'pediatrics',
      examType: 'DHA'
    },
    {
      id: '18',
      title: 'DHA Mental Health Nursing',
      category: 'Specialized',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 423,
      rating: 4.4,
      price: 269,
      description: 'Mental health and psychiatric nursing for DHA licensing',
      instructor: 'Dr. Khalid Al-Sabah',
      image: 'neurological',
      examType: 'DHA'
    },

    // IELTS Preparation Courses
    {
      id: '19',
      title: 'IELTS Academic Writing',
      category: 'Language',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 1234,
      rating: 4.6,
      price: 199,
      description: 'Master academic writing skills for IELTS exam success',
      instructor: 'Prof. Sarah Johnson',
      image: 'fundamentals',
      examType: 'IELTS'
    },
    {
      id: '20',
      title: 'IELTS Speaking and Pronunciation',
      category: 'Language',
      level: 'Intermediate',
      duration: '6 weeks',
      students: 987,
      rating: 4.7,
      price: 179,
      description: 'Improve speaking fluency and pronunciation for IELTS',
      instructor: 'Prof. Michael Chen',
      image: 'respiratory',
      examType: 'IELTS'
    },
    {
      id: '21',
      title: 'IELTS Reading Comprehension',
      category: 'Language',
      level: 'Intermediate',
      duration: '7 weeks',
      students: 876,
      rating: 4.5,
      price: 189,
      description: 'Enhance reading skills and comprehension for IELTS',
      instructor: 'Dr. Emily Rodriguez',
      image: 'cardiac',
      examType: 'IELTS'
    },
    {
      id: '22',
      title: 'IELTS Listening Skills',
      category: 'Language',
      level: 'Intermediate',
      duration: '5 weeks',
      students: 765,
      rating: 4.6,
      price: 169,
      description: 'Develop listening skills and note-taking for IELTS',
      instructor: 'Prof. David Thompson',
      image: 'neurological',
      examType: 'IELTS'
    },


  ];
  */

  // Course categories organized by exam type
  const courseCategories: CourseCategory[] = [
    {
      id: '1',
      name: 'NCLEX-RN Preparation',
      description: 'Comprehensive nursing courses covering all major systems and specialties for NCLEX-RN exam success',
      examType: 'NCLEX-RN',
      color: 'blue',
      icon: '🏥',
      courses: courses.filter(course => course.examType === 'NCLEX-RN')
    },
    {
      id: '2',
      name: 'DHA Exam Preparation',
      description: 'Specialized courses designed for Dubai Health Authority (DHA) licensing examination',
      examType: 'DHA',
      color: 'green',
      icon: '🏛️',
      courses: courses.filter(course => course.examType === 'DHA')
    },
    {
      id: '3',
      name: 'IELTS Preparation',
      description: 'English language courses to achieve your target IELTS score for nursing registration',
      examType: 'IELTS',
      color: 'purple',
      icon: '🌍',
      courses: courses.filter(course => course.examType === 'IELTS')
    },

  ];

  const categories = ['All', 'NCLEX-RN', 'DHA', 'IELTS'];

  // Filter courses based on search and category
  const filteredCategories = useMemo(() => {
    let filtered = courseCategories;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = courseCategories.filter(category => category.examType === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.map(category => ({
        ...category,
        courses: category.courses.filter(course =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.courses.length > 0);
    }
    
    return filtered;
  }, [selectedCategory, searchTerm, courseCategories]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Loading courses...</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Courses</h2>
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
  if (!courses || courses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No Courses Found</h2>
              <p className="text-gray-600">There are currently no courses available.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getCategoryColor = (examType: string) => {
    switch (examType) {
      case 'NCLEX-RN':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'DHA':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'IELTS':
        return 'bg-purple-100 text-purple-800 border-purple-200';

      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryGradient = (examType: string) => {
    switch (examType) {
      case 'NCLEX-RN':
        return 'from-blue-500 via-blue-600 to-indigo-700';
      case 'DHA':
        return 'from-green-500 via-emerald-600 to-teal-700';
      case 'IELTS':
        return 'from-purple-500 via-pink-600 to-rose-700';

      default:
        return 'from-gray-500 via-slate-600 to-gray-700';
    }
  };

  const getCourseImage = (imageType: string) => {
    const gradients = {
      'fundamentals': 'from-blue-400 via-blue-500 to-indigo-600',
      'physiology': 'from-green-400 via-emerald-500 to-teal-600',
      'respiratory': 'from-cyan-400 via-blue-500 to-indigo-600',
      'cardiac': 'from-red-400 via-pink-500 to-rose-600',
      'renal': 'from-blue-400 via-cyan-500 to-teal-600',
      'reproductive': 'from-pink-400 via-rose-500 to-red-600',
      'gastrointestinal': 'from-orange-400 via-red-500 to-pink-600',
      'endocrine': 'from-purple-400 via-indigo-500 to-blue-600',
      'neurological': 'from-indigo-400 via-purple-500 to-pink-600',
      'musculoskeletal': 'from-gray-400 via-slate-500 to-gray-600',
      'maternity': 'from-pink-400 via-purple-500 to-indigo-600',
      'mental-health': 'from-green-400 via-teal-500 to-cyan-600',
      'dermatology': 'from-orange-400 via-yellow-500 to-amber-600',
      'ophthalmology': 'from-blue-400 via-cyan-500 to-teal-600',
      'hematology': 'from-red-400 via-orange-500 to-yellow-600',
      'pediatrics': 'from-yellow-400 via-orange-500 to-red-600',
      'development': 'from-green-400 via-blue-500 to-indigo-600'
    };
    
    return gradients[imageType as keyof typeof gradients] || 'from-gray-400 via-slate-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            NCLEX-RN & DHA Preparation Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive exam preparation courses for NCLEX-RN, DHA licensing, and IELTS. 
            Master the skills needed for international nursing success with our expert-led programs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200/50">
              <span className="text-2xl font-bold text-indigo-600">{courses.length}</span>
              <span className="text-gray-600 ml-2">Total Courses</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200/50">
              <span className="text-2xl font-bold text-green-600">{courseCategories.length}</span>
              <span className="text-gray-600 ml-2">Exam Types</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200/50">
              <span className="text-2xl font-bold text-purple-600">4.7</span>
              <span className="text-gray-600 ml-2">Avg Rating</span>
            </div>
          </div>
        </div>

        {/* Enhanced Category Filter */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-8 mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Exam Type</h2>
            <p className="text-gray-600">Filter courses by your target examination</p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 shadow-lg"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-xl border border-gray-200/50'
                }`}
              >
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
                <span className="relative z-10">{category}</span>
                {selectedCategory === category && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-b-2xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Course Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category, index) => (
            <div 
              key={category.id} 
              className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden transform hover:scale-[1.01] transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Category Header */}
              <div className={`bg-gradient-to-r ${getCategoryGradient(category.examType)} p-10 text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                  <div className="absolute top-10 right-10 w-24 h-24 bg-white rounded-full opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
                </div>
                
                <div className="relative flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl">{category.icon}</span>
                      <div>
                        <h2 className="text-4xl font-bold mb-3">{category.name}</h2>
                        <p className="text-xl opacity-95 max-w-3xl leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-semibold">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {category.courses.length} Courses Available
                      </span>
                      <span className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-semibold">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                        {category.courses.reduce((sum, course) => sum + course.students, 0)} Students Enrolled
                      </span>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
                      <span className="text-6xl">{category.icon}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Courses Grid */}
              <div className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.courses.map((course) => (
                    <div 
                      key={course.id} 
                      className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] group cursor-pointer relative"
                      onMouseEnter={() => setHoveredCourse(course.id)}
                      onMouseLeave={() => setHoveredCourse(null)}
                    >
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      {/* Enhanced Course Image */}
                      <div className={`h-48 bg-gradient-to-br ${getCourseImage(course.image)} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                            ${course.price}
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getCategoryColor(course.examType)} shadow-lg`}>
                            {course.examType}
                          </span>
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white">
                            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold">View Details</span>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Course Details */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                          {course.description}
                        </p>
                        
                        {/* Enhanced Course Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
                            {course.category}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">
                            {course.level}
                          </span>
                        </div>

                        {/* Enhanced Course Stats */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                            <span className="font-medium">{course.students.toLocaleString()}</span>
                          </div>
                        </div>

                        {/* Enhanced Rating */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-sm font-bold text-gray-700">{course.rating}/5</span>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Instructor</p>
                            <p className="text-sm font-semibold text-gray-700">{course.instructor}</p>
                          </div>
                        </div>

                        {/* Enhanced Enroll Button */}
                        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group-hover:shadow-2xl">
                          <span className="flex items-center justify-center">
                            Enroll Now - ${course.price}
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 z-50 space-y-4">
          {/* Contact Button */}
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </button>
          
          {/* Scroll to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Enhanced Additional Info Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
          </div>
          
          <div className="relative text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Advance Your Nursing Career?
            </h2>
            <p className="text-xl opacity-95 mb-10 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive exam preparation courses cover NCLEX-RN, DHA licensing, and IELTS, 
              providing you with the knowledge and skills needed for international nursing success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                View All Courses
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border border-white/30">
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
