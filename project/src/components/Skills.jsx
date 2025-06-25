import React from 'react';
import { Code, Database, Globe, Smartphone, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "TypeScript"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["React", "Node.js", "HTML/CSS", "Express", "REST APIs"],
      color: "accent"
    },
    {
      icon: Database,
      title: "Database & Tools",
      skills: ["MySQL", "MongoDB", "Git", "Docker", "Linux"],
      color: "primary"
    },
    {
      icon: Brain,
      title: "Computer Science",
      skills: ["Algorithms", "Data Structures", "OOP", "Software Design", "Problem Solving"],
      color: "accent"
    },
    {
      icon: Smartphone,
      title: "Mobile & Cloud",
      skills: ["React Native", "AWS", "Firebase", "Mobile UI/UX", "Cloud Computing"],
      color: "primary"
    },
    {
      icon: Zap,
      title: "Soft Skills",
      skills: ["Leadership", "Team Work", "Communication", "Project Management", "Innovation"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through dedication, learning, and hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClass = category.color === 'primary' ? 'primary' : 'accent';
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-xl bg-${colorClass}-100 mb-6`}>
                  <IconComponent className={`text-${colorClass}-600`} size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`inline-block bg-${colorClass}-50 text-${colorClass}-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              languages, and methodologies to stay at the forefront of computer science innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;