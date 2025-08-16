import React, { useEffect, useRef, useState } from 'react';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [animatedElements, setAnimatedElements] = useState({
    header: false,
    form: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute('data-animate');
          if (elementId) {
            setAnimatedElements(prev => ({
              ...prev,
              [elementId]: true
            }));
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const elements = [
      { ref: headerRef, id: 'header' },
      { ref: formRef, id: 'form' }
    ];

    elements.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute('data-animate', id);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Professional Blue Header Section */}
      <div 
        ref={headerRef}
        className={`py-24 px-4 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative transition-all duration-1000 ease-out ${
          animatedElements.header 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/95 to-blue-900/95"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/nurse-hands.jpg')] bg-cover bg-center bg-no-repeat opacity-10"></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/5 rotate-45"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Professional Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/15 text-white rounded-full text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-md border border-white/20 shadow-lg">
            <span className="w-2 h-2 bg-blue-200 rounded-full mr-3 animate-pulse"></span>
            Make Appointment
            <span className="ml-3 w-2 h-2 bg-blue-200 rounded-full animate-pulse"></span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Start Your Journey Today!
          </h2>
          
          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
            Schedule a consultation with our expert team to discuss your nursing career goals, NCLEX preparation, DHA licensing, and how we can assist you. 
            Fill out the form below, and we'll get back to you shortly!
          </p>
          
          {/* Professional Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-white/70 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/70 text-sm">Free Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Expert</div>
              <div className="text-white/70 text-sm">Guidance</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Form and Image Section */}
      <div className="px-4 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={formRef}
            className={`transition-all duration-1000 ease-out delay-300 ${
              animatedElements.form 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Enhanced Contact Form */}
                <div className="p-10 lg:p-16 bg-gradient-to-br from-gray-50 to-white">
                  <div className="mb-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>
                  
                  {/* Enhanced Form Fields */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 shadow-sm"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 shadow-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 shadow-sm"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          placeholder="Enter your city"
                          className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 shadow-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <textarea
                        placeholder="Tell us about your nursing career goals and how we can help you..."
                        rows={5}
                        className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 shadow-sm resize-none"
                      ></textarea>
                    </div>
                    
                    {/* Enhanced Submit Button */}
                    <button className="group relative w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Button content */}
                      <span className="relative z-10 flex items-center justify-center">
                        <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                        Make Appointment
                      </span>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </button>
                    
                    {/* Trust Indicators */}
                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Secure & Private</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>24h Response</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Professional Nurse Image */}
                <div className="relative lg:h-auto overflow-hidden">
                  {/* Actual Image */}
                  <img 
                    src="/contact-form.jpg" 
                    alt="Professional healthcare consultation" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle overlay for better form readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10"></div>
                  
                  {/* Professional overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/30">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-shadow-lg">Expert Guidance</h4>
                      <p className="text-sm text-white/90 max-w-xs mx-auto text-shadow">
                        Get personalized support from our experienced nursing professionals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
