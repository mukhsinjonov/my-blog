import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      category: "Web Development",
      icon: Globe,
      color: "primary",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Mobile Task Manager",
      description: "Cross-platform mobile application for task management with real-time synchronization, offline support, and intuitive user interface.",
      technologies: ["React Native", "Firebase", "Redux", "AsyncStorage"],
      category: "Mobile Development",
      icon: Smartphone,
      color: "accent",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics with real-time charts, filtering capabilities, and export functionality.",
      technologies: ["Python", "Django", "PostgreSQL", "Chart.js", "D3.js"],
      category: "Data Science",
      icon: Database,
      color: "primary",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Algorithm Visualizer",
      description: "Educational tool for visualizing sorting and searching algorithms with step-by-step animations and performance comparisons.",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Web APIs"],
      category: "Educational",
      icon: Code,
      color: "accent",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with user management, post creation, real-time messaging, and content moderation.",
      technologies: ["Node.js", "Express", "JWT", "Socket.io", "Redis"],
      category: "Backend Development",
      icon: Globe,
      color: "primary",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot with natural language processing capabilities, context awareness, and integration with external APIs.",
      technologies: ["Python", "TensorFlow", "NLP", "Flask", "OpenAI API"],
      category: "Artificial Intelligence",
      icon: Code,
      color: "accent",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colorClass = project.color;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 bg-${colorClass}-100 p-2 rounded-lg`}>
                    <IconComponent className={`text-${colorClass}-600`} size={20} />
                  </div>
                </div>

                <div className="p-6">
                  <div className={`inline-block bg-${colorClass}-100 text-${colorClass}-700 px-3 py-1 rounded-full text-xs font-medium mb-3`}>
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className={`flex items-center gap-2 bg-${colorClass}-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-${colorClass}-700 transition-colors flex-1 justify-center`}>
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-gray-400 transition-colors">
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-6">
              I'm constantly working on new projects and exploring emerging technologies. 
              Stay tuned for more innovative solutions and creative implementations.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;