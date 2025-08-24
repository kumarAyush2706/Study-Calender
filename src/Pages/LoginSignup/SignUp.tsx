import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  role: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      setIsLoading(true);
    setError(null);
    
    try {
      const success = await signup(formData.name, formData.email, formData.password, formData.role);
      if (success) {
        // Navigate to main page after successful signup
        navigate('/main');
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during signup. Please try again.');
    } finally {
        setIsLoading(false);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const fillDummyCredentials = () => {
    setFormData({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'student'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Enhanced Back to Home Button */}
          <div className="text-center mb-6">
            <button
              onClick={handleBackToHome}
              className="group inline-flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-all duration-300 hover:bg-white/70 rounded-2xl backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/50 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </button>
          </div>

          {/* Enhanced Sign Up Form */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
            
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-[1px]">
              <div className="h-full w-full bg-white rounded-3xl"></div>
            </div>
            
            {/* Content wrapper */}
            <div className="relative z-10">
              {/* Enhanced Logo and Header */}
              <div className="text-center mb-12"> 
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl mx-auto mb-8 transform hover:scale-110 transition-all duration-500 hover:rotate-3">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 leading-tight">
                  Create Account
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">Join NCLEX Calendar and start your nursing journey</p>
                
               
        </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
        <div className="group">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                    Full Name *
          </label>
          <input
            type="text"
                    id="name"
                    name="name"
                    value={formData.name}
            onChange={handleInputChange}
            required
                    className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200/60 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 text-base font-medium shadow-sm hover:shadow-md group-hover:border-gray-300/80 focus:bg-white"
                    placeholder="Enter your full name"
                  />
      </div>

                {/* Email Field */}
      <div className="group">
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
          Email Address *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
                      className="w-full pl-14 pr-5 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200/60 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 text-base font-medium shadow-sm hover:shadow-md group-hover:border-gray-300/80 focus:bg-white"
            placeholder="Enter your email address"
          />
        </div>
      </div>

                {/* Password Field */}
      <div className="group">
        <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-3">
          Password *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
                      className="w-full pl-14 pr-14 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200/60 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 text-base font-medium shadow-sm hover:shadow-md group-hover:border-gray-300/80 focus:bg-white"
            placeholder="Create a strong password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 4.943 14.478 2 10 2a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            )}
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500 font-medium">Password must be at least 8 characters long</p>
      </div>

                {/* Role Field */}
      <div className="group">
                  <label htmlFor="role" className="block text-sm font-bold text-gray-700 mb-3">
                    Role *
        </label>
        <select
                    id="role"
                    name="role"
                    value={formData.role}
          onChange={handleInputChange}
          required
                    className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200/60 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 text-base font-medium shadow-sm hover:shadow-md group-hover:border-gray-300/80 focus:bg-white"
                  >
                    <option value="student">Student</option>
        </select>
      </div>

                {/* Error Display */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                      <span className="text-red-700 font-medium">{error}</span>
      </div>
    </div>
                )}

                {/* Enhanced Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                  className="group relative w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Button content */}
                  <span className="relative z-10 flex items-center justify-center">
                        {isLoading ? (
                          <div className="flex items-center space-x-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Creating account...</span>
                          </div>
                        ) : (
                          <>
                            <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                            Create Account
                          </>
                        )}
                      </span>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </button>
              </form>

              {/* Enhanced Divider */}
              <div className="my-12 flex items-center">
                <div className="flex-1 border-t border-gray-200/60"></div>
                <span className="px-6 text-sm text-gray-500 font-semibold bg-white/95 backdrop-blur-sm">or continue with</span>
                <div className="flex-1 border-t border-gray-200/60"></div>
              </div>

              {/* Enhanced Social Sign Up Button */}
              <div className="space-y-4">
                <button className="group w-full flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200/60 text-gray-700 py-4 px-6 rounded-2xl hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 shadow-md transform hover:-translate-y-1">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-semibold text-base">Continue with Google</span>
                </button>
              </div>

              {/* Enhanced Sign In Link */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 text-base">
                  Already have an account?{' '}
                  <a href="/login" className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors duration-200 hover:underline">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 font-medium">© 2024 NCLEX Calendar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
