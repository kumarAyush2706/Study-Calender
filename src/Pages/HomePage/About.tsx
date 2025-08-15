import React, { useEffect, useRef, useState } from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [animatedElements, setAnimatedElements] = useState({
    header: false,
    title: false,
    description: false,
    features: false,
    button: false,
    image: false,
    quote: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

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
      { ref: titleRef, id: 'title' },
      { ref: descriptionRef, id: 'description' },
      { ref: featuresRef, id: 'features' },
      { ref: buttonRef, id: 'button' },
      { ref: imageRef, id: 'image' },
      { ref: quoteRef, id: 'quote' }
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
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Small Header */}
            <div 
              ref={headerRef}
              className={`transition-all duration-1000 ease-out ${
                animatedElements.header 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 border border-blue-100">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                About Us
              </div>
            </div>
            
            {/* Main Title */}
            <h2 
              ref={titleRef}
              className={`transition-all duration-1000 ease-out delay-200 ${
                animatedElements.title 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight`}
            >
              Welcome To<br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                GE Academy Ltd.
              </span>
            </h2>
            
            {/* Description */}
            <p 
              ref={descriptionRef}
              className={`transition-all duration-1000 ease-out delay-400 ${
                animatedElements.description 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed`}
            >
              Start your rewarding nursing journey with GE Academy Ltd., where commitment and expertise drive success. 
              Led by our esteemed founder, Ramandeep Kaur, our team is dedicated to helping you reach your goals. 
              Enjoy tailored guidance, simplified application steps, and top-notch exam preparation support, setting 
              you on the path to fulfilling your nursing dreams.
            </p>
            
            {/* Feature Points */}
            <div 
              ref={featuresRef}
              className={`transition-all duration-1000 ease-out delay-600 ${
                animatedElements.features 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } space-y-5 mb-10`}
            >
              <div className="flex items-start space-x-4 group">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base lg:text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Personalized support for your nursing career journey.
                </span>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base lg:text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  With 99% accuracy, we guarantee efficient and precise application processing.
                </span>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base lg:text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Join our exam prep programs and experience an impressive 98% pass rate.
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              ref={buttonRef}
              className={`group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-1000 ease-out delay-800 ${
                animatedElements.button 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Button content */}
              <span className="relative z-10">More About Us</span>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Column - Nurse Image with Quote */}
          <div className="space-y-6">
            {/* Nurse Image */}
            <div 
              ref={imageRef}
              className={`transition-all duration-1000 ease-out delay-300 ${
                animatedElements.image 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-10 scale-95'
              }`}
            >
              <div className="relative group">
                <div className="relative h-96 lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]">
                  <img 
                    src="/Nurses.png" 
                    alt="Professional nurse in blue scrubs with stethoscope" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Image overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-600/10 group-hover:from-blue-600/20 group-hover:to-teal-600/20 transition-all duration-500"></div>
                </div>
              </div>
            </div>
            
            {/* Quote Overlay */}
            <div 
              ref={quoteRef}
              className={`transition-all duration-1000 ease-out delay-600 ${
                animatedElements.quote 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <div className="relative group">
                <div className="absolute bottom-0 left-0-translate-y-1/2 bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-1">
                  {/* Quotation Marks */}
                  <div className="text-5xl font-bold text-blue-600 mb-4 leading-none">"</div>
                  
                  {/* Quote Text */}
                  <div className="text-gray-800 font-semibold leading-relaxed text-lg">
                    <p className="mb-2">Inspiring nurses to</p>
                    <p className="mb-2">create a healthier world,</p>
                    <p className="mb-2">one compassionate act</p>
                    <p>at a time.</p>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-6"></div>
                </div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-lg animate-bounce opacity-80"></div>
            <div className="absolute -bottom-2 -right-8 w-6 h-6 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full shadow-lg animate-pulse opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
