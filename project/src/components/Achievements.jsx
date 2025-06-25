import React from 'react';
import { Trophy, Award, Star, Target, Zap, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: (
        <>
          <p>Maintained high GPA and completed foundational IT courses:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-primary-700">
            <li>
              <a href="https://coursera.org/verify/professional-cert/EYG6C9LZW76N" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-800">
                Google IT Automation with Python
              </a>
            </li>
            <li>
              <a href="https://coursera.org/verify/H7BDMMUUSFDY" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-800">
                Programming Basics
              </a>
            </li>
          </ul>
        </>
      ),
      category: "Academic",
      color: "primary"
    },
    {
      icon: Award,
      title: "Programming Competitions",
      description: (
        <>
          <p>Enhanced coding speed and efficiency through practical challenges:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-accent-700">
            <li>
              <a href="https://coursera.org/verify/HR2CTBL68T96" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-800">
                HTML, CSS & JavaScript for Web Developers
              </a>
            </li>
            <li>
              <a href="https://coursera.org/verify/4YC6H3W3MS2C" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-800">
                Programming with JavaScript
              </a>
            </li>
          </ul>
        </>
      ),
      category: "Competition",
      color: "accent"
    },
    {
      icon: Star,
      title: "Project Leadership",
      description: (
        <>
          <p>Led collaborative web development projects and capstone work:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-primary-700">
            <li>
              <a href="https://coursera.org/verify/professional-cert/EYG6C9LZW76N" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-800">
                Meta Front-End Developer Certificate
              </a>
            </li>
            <li>
              <a href="https://coursera.org/verify/WTSZQL4C9P79" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-800">
                Java Programming & Software Engineering Fundamentals
              </a>
            </li>
          </ul>
        </>
      ),
      category: "Leadership",
      color: "primary"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: (
        <>
          <p>Solved numerous algorithmic tasks through structured programming:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-accent-700">
            <li>
              <a href="https://coursera.org/verify/WTSZQL4C9P79" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-800">
                Java Programming & Software Engineering Fundamentals
              </a>
            </li>
            <li>
              <a href="https://coursera.org/verify/HR2CTBL68T96" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-800">
                HTML, CSS & JavaScript for Web Developers
              </a>
            </li>
          </ul>
        </>
      ),
      category: "Technical",
      color: "accent"
    },
    {
      icon: Zap,
      title: "Innovation Award",
      description: (
        <>
          <p>Introduced creative ideas and implemented responsive designs:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-primary-700">
            <li>
              <a href="https://coursera.org/verify/VMLABWR2R7QC" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-800">
                Responsive Web Design
              </a>
            </li>
            <li>
              <a href="https://coursera.org/verify/FRWUZEBV4NMP" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-800">
                Introduction to Front-End Development
              </a>
            </li>
          </ul>
        </>
      ),
      category: "Innovation",
      color: "primary"
    },
    {
      icon: Medal,
      title: "Technical Certifications",
      description: (
        <>
          <p>Completed verified certification programs on Coursera:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-accent-700">
            <li>
              <a href="https://coursera.org/verify/professional-cert/EYG6C9LZW76N" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-800">
                Meta Front-End Developer
              </a>
            </li>
            <li>
              <a href="https://coursera.org/verify/professional-cert/BR5C7WBQQ3RX" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-800">
                Google IT Support
              </a>
            </li>
          </ul>
        </>
      ),
      category: "Certification",
      color: "accent"
    }
  ];

  const stats = [
    { number: "3.8+", label: "GPA", color: "primary" },
    { number: "15+", label: "Projects Completed", color: "accent" },
    { number: "500+", label: "Problems Solved", color: "primary" },
    { number: "8", label: "Certifications", color: "accent" }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milestones that reflect my dedication to excellence in computer science
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold text-${stat.color}-600 mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const colorClass = achievement.color;

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl bg-${colorClass}-100 mb-6`}>
                  <IconComponent className={`text-${colorClass}-600`} size={28} />
                </div>

                <div className={`inline-block bg-${colorClass}-100 text-${colorClass}-700 px-3 py-1 rounded-full text-xs font-medium mb-4`}>
                  {achievement.category}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {achievement.title}
                </h3>

                <div className="text-gray-600 leading-relaxed text-sm">
                  {achievement.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Continuous Growth
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              These achievements represent just the beginning of my journey. 
              I'm committed to pushing boundaries and reaching new heights in computer science.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-200 transform hover:scale-105"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
