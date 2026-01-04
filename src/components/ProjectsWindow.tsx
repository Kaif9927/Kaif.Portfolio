import React, { useState } from 'react';
import { RetroWindow } from './RetroWindow';

interface ProjectsWindowProps {
  onClose?: () => void;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  link?: string;
  github?: string;
}

export const ProjectsWindow: React.FC<ProjectsWindowProps> = ({ onClose }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'completed' | 'in-progress' | 'planned'>('all');

  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Interview.io",
      description: "Cross-platform Electron app with React and TypeScript that uses OCR (Tesseract.js) and Google Gemini AI to analyze interview screenshots and provide real-time intelligent interview assistance.",
      technologies: ["React.js, tessaract , vite  File Management , Machine Learning , google gemini api , electrons , JavaScript , typer"],
      link: "#",
      github: "https://github.com/Kaif9927/Interview-AI/tree/master"
    },
    {
      id: 2,
      title: "Medipro",
      description: "Medpro is an AI-enhanced healthcare management system built with Flask, SQLite, and scikit-learn that offers smart disease prediction, appointment scheduling, secure file storage, and role-based access for patients and admins.",
      status: "completed",
      technologies: [""],
      link: "#",
      github: "https://github.com/Kaif9927/Medpro"
    },
    {
      id: 3,
      title: "Book finder",
      description: "A responsive React + Tailwind web app to search books using the Open Library API. Built for Alex (a college student) to quickly find titles, authors, and publication details.",
      status: "completed",
      technologies: ["React(vite)", "Tailwind CSS", "Open library Search API", "Node.js", "JavaScript"],
      link: "https://alexbookfindrr.netlify.app/"
      github: "https://github.com/Kaif9927/Book_finderrrr"
    },
    {
      id: 4,
      title: "live language converter",
      description: "Real-time task management application with collaborative features and real-time updates.",
      status: "Working",
      technologies: ["React", "Python", "Open API", "Gemini"],
      github: "#"
    }
  ]);

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'planned': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      case 'planned': return '📋';
      default: return '❓';
    }
  };

  return (
    <RetroWindow
      title="Projects.folder"
      onClose={onClose}
      initialSize={{ width: 500, height: 450 }}
    >
      <div className="h-full max-h-full overflow-auto p-2 break-words w-full max-w-[95vw] mx-auto pb-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-retro-green">🚀 My Awesome Projects</h2>
            <div className="text-sm text-muted-foreground">
              {projects.filter(p => p.status === 'completed').length} completed
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`retro-button px-3 py-1 rounded text-xs ${
                filter === 'all' 
                  ? 'bg-blue-900 text-blue-300 border-blue-600' 
                  : 'bg-muted text-muted-foreground border-border'
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`retro-button px-3 py-1 rounded text-xs ${
                filter === 'completed' 
                  ? 'bg-green-900 text-green-300 border-green-600' 
                  : 'bg-muted text-muted-foreground border-border'
              }`}
            >
              Completed ({projects.filter(p => p.status === 'completed').length})
            </button>
            <button
              onClick={() => setFilter('in-progress')}
              className={`retro-button px-3 py-1 rounded text-xs ${
                filter === 'in-progress' 
                  ? 'bg-yellow-900 text-yellow-300 border-yellow-600' 
                  : 'bg-muted text-muted-foreground border-border'
              }`}
            >
              In Progress ({projects.filter(p => p.status === 'in-progress').length})
            </button>
            <button
              onClick={() => setFilter('planned')}
              className={`retro-button px-3 py-1 rounded text-xs ${
                filter === 'planned' 
                  ? 'bg-purple-900 text-purple-300 border-purple-600' 
                  : 'bg-muted text-muted-foreground border-border'
              }`}
            >
              Planned ({projects.filter(p => p.status === 'planned').length})
            </button>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`border border-border p-4 rounded cursor-pointer transition-all hover:border-retro-green ${
                  selectedProject?.id === project.id ? 'border-retro-green bg-green-900/20' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-retro-green text-sm">{project.title}</h3>
                  <span className={`text-xs ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)} {project.status}
                  </span>
                </div>
                
                <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-xs rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-xs rounded border border-border">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <button className="retro-button bg-gray-900 hover:bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-600 text-xs">
                      📁 GitHub
                    </button>
                  )}
                  {project.link && (
                    <button className="retro-button bg-blue-900 hover:bg-blue-800 text-blue-300 px-2 py-1 rounded border border-blue-600 text-xs">
                      🌐 Live Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Project details */}
          {selectedProject && (
            <div className="border-t border-border pt-4 mt-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-retro-green">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                {selectedProject.description}
              </p>
              
              <div className="mb-3">
                <h4 className="text-sm font-bold text-accent mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-sm rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                {selectedProject.github && (
                  <button className="retro-button bg-gray-900 hover:bg-gray-800 text-gray-300 px-3 py-2 rounded border border-gray-600">
                    📁 View on GitHub
                  </button>
                )}
                {selectedProject.link && (
                  <button className="retro-button bg-blue-900 hover:bg-blue-800 text-blue-300 px-3 py-2 rounded border border-blue-600">
                    🌐 Visit Live Site
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </RetroWindow>
  );
};
