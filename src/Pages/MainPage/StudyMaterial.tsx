import React, { useState, useMemo } from 'react';

interface StudyNote {
  id: string;
  title: string;
  mediaType: 'DOCUMENT' | 'VIDEO' | 'AUDIO' | 'PDF' | 'PRESENTATION';
  date: string;
  category: string;
  courseLevel: string;
  fileSize: string;
  description: string;
}

const StudyMaterial: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [mediaTypeFilter, setMediaTypeFilter] = useState('All');
  const [sortField, setSortField] = useState<keyof StudyNote>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Updated study materials from assets folder - NCLEX-RN Nursing Systems in requested order
  const studyNotes: StudyNote[] = [
    {
      id: '1',
      title: 'Fundamental',
      mediaType: 'PDF',
      date: '2025-06-05',
      category: 'Fundamentals',
      courseLevel: 'NCLEX-RN',
      fileSize: '825 KB',
      description: 'Comprehensive fundamentals of nursing practice and patient care principles'
    },
    {
      id: '2',
      title: 'Fluid and Electrolytes',
      mediaType: 'PDF',
      date: '2025-06-04',
      category: 'Fluid & Electrolytes',
      courseLevel: 'NCLEX-RN',
      fileSize: '233 KB',
      description: 'Complete guide to fluid and electrolyte balance in nursing practice'
    },
    {
      id: '3',
      title: 'Respiratory System',
      mediaType: 'PDF',
      date: '2025-06-03',
      category: 'Respiratory',
      courseLevel: 'NCLEX-RN',
      fileSize: '3.3 MB',
      description: 'Comprehensive respiratory system notes for NCLEX-RN preparation'
    },
    {
      id: '4',
      title: 'Cardiac System',
      mediaType: 'PDF',
      date: '2025-06-02',
      category: 'Cardiac',
      courseLevel: 'NCLEX-RN',
      fileSize: '10 MB',
      description: 'Detailed cardiac system notes and cardiovascular nursing care'
    },
    {
      id: '5',
      title: 'GI System',
      mediaType: 'PDF',
      date: '2025-06-01',
      category: 'Gastrointestinal',
      courseLevel: 'NCLEX-RN',
      fileSize: '2.1 MB',
      description: 'Gastrointestinal system nursing notes and digestive care'
    },
    {
      id: '6',
      title: 'Endocrine System',
      mediaType: 'PDF',
      date: '2025-05-31',
      category: 'Endocrine',
      courseLevel: 'NCLEX-RN',
      fileSize: '1.1 MB',
      description: 'Complete endocrine system notes and hormonal nursing care'
    },
    {
      id: '7',
      title: 'Renal Diseases',
      mediaType: 'PDF',
      date: '2025-05-30',
      category: 'Renal',
      courseLevel: 'NCLEX-RN',
      fileSize: '206 KB',
      description: 'Urinary system notes and renal disease nursing care'
    },
    {
      id: '8',
      title: 'Reproductive System',
      mediaType: 'PDF',
      date: '2025-05-29',
      category: 'Reproductive',
      courseLevel: 'NCLEX-RN',
      fileSize: '291 KB',
      description: 'Comprehensive reproductive system notes and women\'s health nursing'
    },
    {
      id: '9',
      title: 'Skin and Burn',
      mediaType: 'PDF',
      date: '2025-05-28',
      category: 'Dermatology',
      courseLevel: 'NCLEX-RN',
      fileSize: '402 KB',
      description: 'Skin assessment and burn care nursing notes'
    },
    {
      id: '10',
      title: 'Eye and Ear',
      mediaType: 'PDF',
      date: '2025-05-27',
      category: 'Sensory',
      courseLevel: 'NCLEX-RN',
      fileSize: '209 KB',
      description: 'Ophthalmology and otolaryngology nursing care notes'
    },
    {
      id: '11',
      title: 'Neuro (1-2) files',
      mediaType: 'PDF',
      date: '2025-05-26',
      category: 'Neurological',
      courseLevel: 'NCLEX-RN',
      fileSize: '548 KB',
      description: 'Complete neurological system notes and assessment (Parts 1 & 2)'
    },
    {
      id: '12',
      title: 'Musculoskeletal System',
      mediaType: 'PDF',
      date: '2025-05-24',
      category: 'Musculoskeletal',
      courseLevel: 'NCLEX-RN',
      fileSize: '532 KB',
      description: 'Complete musculoskeletal system notes and orthopedic nursing care'
    },
    {
      id: '13',
      title: 'Pediatric Disease',
      mediaType: 'PDF',
      date: '2025-05-23',
      category: 'Pediatrics',
      courseLevel: 'NCLEX-RN',
      fileSize: '278 KB',
      description: 'Pediatric nursing notes and infectious disease management'
    }
  ];

  const categories = ['All', 'Fundamentals', 'Fluid & Electrolytes', 'Respiratory', 'Cardiac', 'Gastrointestinal', 'Endocrine', 'Renal', 'Reproductive', 'Dermatology', 'Sensory', 'Neurological', 'Musculoskeletal', 'Pediatrics'];
  const mediaTypes = ['All', 'PDF'];

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = studyNotes.filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || note.category === categoryFilter;
      const matchesMediaType = mediaTypeFilter === 'All' || note.mediaType === mediaTypeFilter;
      
      return matchesSearch && matchesCategory && matchesMediaType;
    });

    // Sort data
    filtered.sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];
      
      if (sortField === 'date') {
        aValue = new Date(a.date).getTime();
        bValue = new Date(b.date).getTime();
      }
      
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [studyNotes, searchTerm, categoryFilter, mediaTypeFilter, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentData = filteredAndSortedData.slice(startIndex, endIndex);

  const handleSort = (field: keyof StudyNote) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getMediaTypeIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'DOCUMENT':
        return (
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'VIDEO':
        return (
          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        );
      case 'AUDIO':
        return (
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.757L6 14H3a1 1 0 01-1-1V7a1 1 0 011-1h3l2.383-1.757zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657z" clipRule="evenodd" />
          </svg>
        );
      case 'PDF':
        return (
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
          </svg>
        );
      case 'PRESENTATION':
        return (
          <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleViewMaterial = (noteId: string) => {
    const note = studyNotes.find(n => n.id === noteId);
    if (note) {
      // Create the file path based on the title
      let fileName = '';
      switch (note.title) {
        case 'Fundamental':
          fileName = 'Fundamental.pdf';
          break;
        case 'Fluid and Electrolytes':
          fileName = 'Fluid and electrolytes Nclex-RN pdf._watermark.pdf';
          break;
        case 'Respiratory System':
          fileName = 'Respiratory system -1 Nclex RN - GE.pdf';
          break;
        case 'Cardiac System':
          fileName = 'Cardiac notes.pdf';
          break;
        case 'GI System':
          fileName = 'GI System notes.pdf';
          break;
        case 'Endocrine System':
          fileName = 'Final Endocrine system notes.pdf';
          break;
        case 'Renal Diseases':
          fileName = 'Urinary system notes.pdf';
          break;
        case 'Reproductive System':
          fileName = 'Reproductive system notes.pdf';
          break;
        case 'Skin and Burn':
          fileName = 'Skin and burn_watermark (1).pdf';
          break;
        case 'Eye and Ear':
          fileName = 'Eye and Ear_watermark.pdf';
          break;
        case 'Neuro (1-2) files':
          fileName = 'Neuro 1_watermark.pdf'; // Will open first neuro file
          break;
        case 'Musculoskeletal System':
          fileName = 'Musculoskeltal system_watermark (1).pdf';
          break;
        case 'Pediatric Disease':
          fileName = 'infectious disease and pediatric notes_watermark.pdf';
          break;
        default:
          fileName = 'Fundamental.pdf';
      }
      
      // Open PDF in new tab
      const pdfPath = `/assets/${fileName}`;
      window.open(pdfPath, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            NCLEX-RN Study Materials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive study materials covering all major nursing systems for NCLEX-RN preparation. 
            Access detailed notes on fundamentals, body systems, and specialized nursing care.
          </p>
        </div>

        {/* Controls and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Entries per page */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Entries per page</label>
              <div className="relative">
                <select
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Category</label>
              <div className="relative">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Media Type Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Media Type</label>
              <div className="relative">
                <select
                  value={mediaTypeFilter}
                  onChange={(e) => setMediaTypeFilter(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  {mediaTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Search</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-blue-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => handleSort('title')}
                  >
                    <div className="flex items-center space-x-2">
                      <span>Title</span>
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => handleSort('mediaType')}
                  >
                    <div className="flex items-center space-x-2">
                      <span>Media Type</span>
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => handleSort('date')}
                  >
                    <div className="flex items-center space-x-2">
                      <span>Date</span>
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentData.map((note) => (
                  <tr key={note.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleViewMaterial(note.id)}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                        </svg>
                        View
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{note.title}</div>
                      <div className="text-sm text-gray-500">{note.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getMediaTypeIcon(note.mediaType)}
                        <span className="text-sm font-medium text-gray-900">{note.mediaType}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(note.date)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination and Entry Count */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-700 mb-4 sm:mb-0">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedData.length)} of {filteredAndSortedData.length} entries
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              &lt;&lt;
            </button>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              &lt;
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
              if (pageNum > totalPages) return null;
              
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    currentPage === pageNum
                      ? 'bg-indigo-600 text-white border border-indigo-600'
                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              &gt;
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              &gt;&gt;
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Materials</p>
                <p className="text-2xl font-bold text-gray-900">{studyNotes.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
                              <div>
                  <p className="text-sm text-gray-600">PDF Documents</p>
                  <p className="text-2xl font-bold text-gray-900">{studyNotes.length}</p>
                </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Categories</p>
                <p className="text-2xl font-bold text-gray-900">{new Set(studyNotes.map(n => n.category)).size}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Recent</p>
                <p className="text-2xl font-bold text-gray-900">{studyNotes.filter(n => new Date(n.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;
