import React, { useEffect, useRef, useState } from 'react';

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  const [animatedElements, setAnimatedElements] = useState({
    header: false,
    title: false,
    description: false,
    cards: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      { ref: cardsRef, id: 'cards' }
    ];

    elements.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute('data-animate', id);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "NCLEX RN Preparation",
      description: "Prepare for NCLEX RN with expert guidance, personalized plans, and proven strategies for success.",
      image: "/121.jpg",
      color: "blue",
      icon: "🏥",
      features: ["Expert guidance", "Personalized plans", "Proven strategies"]
    },
    {
      id: 2,
      title: "IELTS",
      description: "Achieve your desired IELTS score with expert coaching, tailored plans, and intensive practice sessions.",
      image: "/ielts.jpg",
      color: "orange",
      icon: "📚",
      features: ["Expert coaching", "Tailored plans", "Intensive practice"]
    },
    {
      id: 3,
      title: "DHA Exam",
      description: "Prepare for Dubai Health Authority (DHA) licensing exam with comprehensive study materials and expert guidance.",
      image: "/pte.jpg",
      color: "green",
      icon: "🏛️",
      features: ["Comprehensive study materials", "Expert guidance", "Practice tests"]
    }
  ];

  return (
    <section id="services" className="py-32 px-4 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-100/40 via-pink-100/30 to-yellow-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-50/20 to-blue-50/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column - Title */}
          <div 
            ref={titleRef}
            className={`transition-all duration-1200 ease-out ${
              animatedElements.title 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Small Header Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold uppercase tracking-wider mb-8 border border-blue-100 shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Our Services
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Nurturing nursing success,<br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                guiding your path.
              </span>
            </h2>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
          
          {/* Right Column - Description */}
          <div 
            ref={descriptionRef}
            className={`transition-all duration-1200 ease-out delay-300 ${
              animatedElements.description 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed pl-8">
                Your pathway to nursing success: tailored support, streamlined applications and outstanding exam preparation.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Services Cards */}
        <div 
          ref={cardsRef}
          className={`transition-all duration-1200 ease-out delay-500 ${
            animatedElements.cards 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                                 {/* Enhanced Service Image */}
                 <div className="relative h-72 overflow-hidden">
                   <img 
                     src={service.image} 
                     alt={service.title}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   
                   {/* Enhanced Image overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                   
                   {/* Floating Badge */}
                   <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                     service.color === 'orange' ? 'bg-orange-500' : 
                     service.color === 'green' ? 'bg-green-600' : 'bg-blue-600'
                   } shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500`}>
                     {service.color === 'orange' ? 'IELTS' : 
                      service.color === 'green' ? 'DHA' : 'NCLEX'}
                   </div>
                 </div>
                
                {/* Enhanced Service Content */}
                <div className="p-8">
                  {/* Title with enhanced styling */}
                  <h3 className={`text-2xl font-bold mb-4 ${
                    service.color === 'orange' ? 'text-orange-600' : 
                    service.color === 'green' ? 'text-green-600' : 'text-blue-800'
                  } group-hover:scale-105 transition-transform duration-300`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          service.color === 'orange' ? 'bg-orange-500' : 
                          service.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced Learn More Link */}
                  <a 
                    href="#" 
                    className={`inline-flex items-center font-semibold text-sm transition-all duration-300 group-hover:underline ${
                      service.color === 'orange' ? 'text-orange-600 hover:text-orange-700' : 
                      service.color === 'green' ? 'text-green-600 hover:text-green-700' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                
                {/* Hover Effect Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  service.color === 'orange' 
                    ? 'from-orange-400 to-orange-600' 
                    : service.color === 'green'
                    ? 'from-green-400 to-green-600'
                    : 'from-blue-400 to-blue-600'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
