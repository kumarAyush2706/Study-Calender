import React from 'react';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 backdrop-blur-sm flex items-center justify-center z-40">
      {/* Enhanced Loader */}
      <div className="text-center">
        {/* Main Spinner */}
        <div className="relative mb-6">
          {/* Outer Ring */}
          <div className="w-20 h-20 mx-auto relative">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 border-4 border-transparent border-r-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          
          {/* Center Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Loading</h3>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Progress Ring */}
        <div className="mt-6">
          <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse" style={{
              animation: 'progress 2s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for progress animation */}
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation; 