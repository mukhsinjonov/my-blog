import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
              <img 
                src="https://ik.imagekit.io/Introvert/IMG_3717.JPG?updatedAt=1748453859832" 
                alt="Mukhsinjonov Nodirbek" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Mukhsinjonov
            <span className="block text-primary-600">Nodirbek</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Computer Science Student & Technology Enthusiast
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            21 years old • Bachelor's Degree Student • Passionate about innovation and problem-solving
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button className="flex items-center gap-2 border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-600 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
