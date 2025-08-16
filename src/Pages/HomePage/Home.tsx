import React, { useState, useEffect } from 'react';
import HomeHeader from './HomeHeader';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Faq from './Faq';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

interface Statistic {
  id: string;
  number: string;
  label: string;
  suffix?: string;
}

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Harmanpreet Kaur',
      role: 'NCLEX RN Graduate',
      content: 'Thanks to GE Academy Ltd., I felt fully prepared for my NCLEX RN exam. The personalized guidance and support I received made all the difference in my success!',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: '2',
      name: 'Mandeep Singh',
      role: 'Nursing Student',
      content: 'The team at GE Academy Ltd. provided exceptional resources and encouragement throughout my nursing journey. I couldn\'t have achieved my goals without their help!',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: '3',
      name: 'Paras',
      role: 'Nursing Graduate',
      content: 'GE Academy Ltd. truly cares about their students. Their expert guidance and streamlined application process helped me secure my place in nursing school with ease!',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const statistics: Statistic[] = [
    { id: '1', number: '2000', label: 'Nurses in Canada', suffix: '+' },
    { id: '2', number: '1500', label: 'Nurses in USA & Australia', suffix: '+' },
    { id: '3', number: '500', label: 'DHA Licensed Nurses', suffix: '+' },
    { id: '4', number: '10', label: 'Years of Experience', suffix: '+' },
    { id: '5', number: '98', label: 'Success Rate', suffix: '%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Home Header */}
      <HomeHeader />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
              Inspiring Aspirations,
              <br />
              <span className="text-5xl md:text-7xl">Shaping Bright Futures</span>
              <br />
              <span className="text-4xl md:text-6xl">in Nursing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Start your rewarding nursing journey with GE Academy Ltd., where commitment and expertise drive success in NCLEX, DHA, and international nursing exams. 
              Led by our esteemed founder, Ramandeep Kaur, our team is dedicated to helping you reach your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-12 py-5 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={stat.id}
                className={`text-center transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
              Our Core Strengths
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="text-gray-900">GE Academy?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the key features that make us the preferred choice for nursing education, NCLEX preparation, and DHA licensing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Comprehensive Guidance */}
            <div className={`group transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-center">
                  {/* Icon Container */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-60 animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse"></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    Comprehensive Guidance
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Personalized mentorship from experienced professionals for a thriving nursing career.
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>

            {/* Card 2 - NCLEX Preparation */}
            <div className={`group transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-center">
                  {/* Icon Container */}
                  <div className="relative w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-60 animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse"></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                    NCLEX RN/REX PN & DHA Exam
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 text-lg leading-relaxed">
                    We provide the support you need to succeed in NCLEX RN, REX PN, and DHA licensing exams.
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>

            {/* Card 3 - 98% Pass Rate */}
            <div className={`group transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-center">
                  {/* Icon Container */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-60 animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse"></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                    98% Pass Rate
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Reach your nursing goals with our impressive pass rates, setting you on the path to success.
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <About />

      
      {/* Services Section */}
      <Services />

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Student Success
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
              Success Stories
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear from our students who have achieved their nursing career goals with our guidance and support
            </p>
          </div>

          {/* Enhanced Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 border border-gray-100/50 relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-300 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Enhanced testimonial content */}
                <div className="relative z-10">
                  {/* Rating stars with enhanced styling */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-gray-700 leading-relaxed text-lg italic mb-8 relative">
                    <span className="text-4xl text-blue-200 absolute -top-2 -left-2 font-serif">"</span>
                    {testimonial.content}
                    <span className="text-4xl text-blue-200 absolute -bottom-2 -right-2 font-serif">"</span>
                  </blockquote>

                  {/* Enhanced author section */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover ring-4 ring-white shadow-lg group-hover:ring-blue-200 transition-all duration-300"
                      />
                      {/* Status indicator */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    <div className="ml-4 lg:ml-6">
                      <h4 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-medium">{testimonial.role}</p>
                      <div className="flex items-center mt-2 text-sm text-blue-600">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Verified Graduate</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200/50 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100/50 max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your Success Story?
              </h3>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Join thousands of nursing students who have transformed their careers with our expert guidance and comprehensive support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started Today
                </button>
                <button className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View More Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Faq Section */}
      <Faq />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                GE Academy Ltd.
              </h3>
              <p className="text-gray-400 mb-4">
                We are dedicated to empowering aspiring nursing professionals through personalized guidance and exceptional resources.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">YouTube</span>
                  📺
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">NCLEX RN Preparation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">IELTS</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">PTE</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">CELPIP</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+1 604-621-0194</li>
                <li>geacademycanada@gmail.com</li>
                <li>info@geacademycanada.ca</li>
                <li>214-2580 Cedar Park Plaza, Abbotsford BC, V2T3S5</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>Copyright © 2024 Ge Academy Ltd., All rights reserved.</p>
            <p className="mt-2">Design by: Alpha View</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
