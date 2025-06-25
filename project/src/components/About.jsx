import React from 'react';
import { GraduationCap, Calendar, MapPin, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about technology and driven by curiosity to solve complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Education</h4>
                    <p className="text-gray-600">Currently pursuing Bachelor's degree in Computer Science</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-2 rounded-lg">
                    <Calendar className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Age</h4>
                    <p className="text-gray-600">21 years old</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Heart className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Passion</h4>
                    <p className="text-gray-600">Computer Science & Technology Innovation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Drives Me</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about leveraging technology to create meaningful solutions. 
                My journey in computer science has been marked by continuous learning, 
                innovation, and a drive to push the boundaries of what's possible. 
                I believe in the power of code to transform ideas into reality.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">21</div>
                  <div className="text-primary-100">Years Old</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <div className="text-primary-100">Years Coding</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-primary-100">Projects</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-primary-100">Technologies</div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-primary-100 italic">
                  "The best way to predict the future is to create it."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;