import React, { useState, useEffect, useRef } from 'react';

interface FaqProps {}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = () => {
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const [animatedElements, setAnimatedElements] = useState({
    header: false,
    content: false,
    image: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const faqData: FaqItem[] = [
    {
      id: 1,
      question: "What services does Ge Academy Ltd. offer for nursing students?",
      answer: "We provide personalized guidance, application assistance, and comprehensive exam preparation to help you succeed in your nursing career."
    },
    {
      id: 2,
      question: "How can I schedule an appointment?",
      answer: "You can schedule an appointment by filling out our contact form, calling us directly, or booking through our online scheduling system."
    },
    {
      id: 3,
      question: "What are the pass rates for your exam preparation programs?",
      answer: "Our exam preparation programs have consistently high pass rates, with over 90% of our students successfully passing their nursing exams on the first attempt."
    },
    {
      id: 4,
      question: "Do you offer flexible class schedules?",
      answer: "Yes, we offer flexible class schedules including evening classes, weekend sessions, and online learning options to accommodate your busy lifestyle."
    },
    {
      id: 5,
      question: "Can I get personalized guidance tailored to my career goals?",
      answer: "Absolutely! We provide personalized guidance and career counseling tailored to your specific nursing career goals and aspirations."
    }
  ];

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
      { ref: contentRef, id: 'content' },
      { ref: imageRef, id: 'image' }
    ];

    elements.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute('data-animate', id);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? 0 : id);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Support Center
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Find answers to common questions about our nursing programs, services, and how we can support your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side - Enhanced Professional Image */}
          <div 
            ref={imageRef}
            className={`relative h-96 lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000 ease-out ${
              animatedElements.image 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src="/FAQ.jpg"
              alt="Professional healthcare team in modern hospital setting"
              className="w-full h-full object-cover"
            />
            
            {/* Enhanced overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-700/15 to-purple-800/20"></div>
            
            {/* Professional overlay content with enhanced styling */}
            <div className="absolute bottom-0 inset-0 flex items-center justify-center">
              
            </div>
          </div>

          {/* Right Side - Enhanced FAQ Content */}
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 ease-out ${
              animatedElements.content 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Enhanced FAQ Accordion */}
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div 
                  key={faq.id} 
                  className={`group border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                    activeFaq === faq.id ? 'ring-2 ring-blue-500 ring-opacity-50 shadow-xl' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className={`w-full px-8 py-6 text-left transition-all duration-300 ${
                      activeFaq === faq.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                        : 'bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-bold text-lg leading-relaxed ${
                        activeFaq === faq.id ? 'text-white' : 'text-gray-900'
                      }`}>
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 ml-4 transition-all duration-300 ${
                        activeFaq === faq.id ? 'text-white' : 'text-gray-400 group-hover:text-blue-500'
                      }`}>
                        <svg
                          className={`w-6 h-6 transition-transform duration-300 ${
                            activeFaq === faq.id ? 'rotate-180' : ''
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Answer with enhanced styling */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeFaq === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 py-6 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                      
                      {/* Additional info indicator */}
                      <div className="flex items-center mt-4 text-sm text-blue-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Need more details? Contact our team</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
