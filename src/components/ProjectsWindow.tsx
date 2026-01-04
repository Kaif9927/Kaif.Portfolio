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

  const projects: Project[] = [
    {
      id: 1,
      title: "Interview.io",
      description:
        "Cross-platform Electron app using React and TypeScript with OCR (Tesseract.js) and Google Gemini AI to analyze interview screenshots and provide real-time interview assistance.",
      status: "completed",
      technologies: [
        "React",
        "Electron",
        "TypeScript",
        "Tesseract.js",
        "Gemini AI",
        "Tailwind CSS"
      ],
      link: "#",
      github: "https://github.com/Kaif9927/Interview-AI/tree/master"
    },
    {
      id: 2,
      title: "Medipro",
      description:
        "AI-powered healthcare platform built with Flask and ML for disease prediction, secure authentication, and role-based access.",
      status: "completed",
      technologies: [
        "Python",
        "Flask",
        "Scikit-learn",
        "SQLite",
        "AES Encryption"
      ],
      link: "#",
      github: "https://github.com/Kaif9927/Medpro"
    },
    {
      id: 3,
      title: "Book Finder",
      description:
        "Responsive React + Tailwind web app using Open Library API to search books by title, author, and publication details.",
      status: "completed",
      technologies: [
        "React (Vite)",
        "Tailwind CSS",
        "Open Library API",
        "JavaScript"
      ],
      link: "https://alexbookfindrr.netlify.app/",
      github: "https://github.com/Kaif9927/Book_finderrrr"
    },
    {
      id: 4,
      title: "Live Language Converter",
      description:
        "Real-time language and voice conversion system using AI APIs for live translation and speech synthesis.",
      status: "in-progress",
      technologies: [
        "React",
        "Python",
        "Gemini API",
        "Speech Processing"
      ],
      github: "#"
    }
  ];

  const filteredProjects = projects.filter(project =>
    filter === 'all' ? true : project.status === filter
  );

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'in-progress':
        return 'text-yellow-400';
      case 'planned':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🔄';
      case 'planned':
        return '📋';
      default:
        return '❓';
    }
  };

  return (
    <RetroWindow
      title="Projects.folder"
      onClose={onClose}
      initialSize={{ width: 520, height: 480 }}
    >
      <div className="h-full overflow-auto p-3 w-full max-w-[95vw] mx-auto pb-8">
        <div className="space-y-4">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-retro-green">🚀 My Projects</h2>
            <div className="text-sm text-muted-foreground">
              {projects.filter(p => p.status === 'completed').length} completed
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            {(['all', 'completed', 'in-progress', 'planned'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`retro-button px-3 py-1 text-xs ${
                  filter === f
                    ? 'bg-green-900 text-green-300 border-green-600'
                    : 'bg-muted text-muted-foreground border-border'
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`border p-4 rounded cursor-pointer hover:border-retro-green transition ${
                  selectedProject?.id === project.id
                    ? 'border-retro-green bg-green-900/20'
                    : 'border-border'
                }`}
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-retro-green text-sm">{project.title}</h3>
                  <span className={`text-xs ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)} {project.status}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-muted text-xs rounded border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Project */}
          {selectedProject && (
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-bold text-retro-green">
                  {selectedProject.title}
                </h3>
                <button onClick={() => setSelectedProject(null)}>✕</button>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-muted text-sm rounded border">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button bg-gray-900 text-gray-300 px-3 py-2 rounded border"
                  >
                    📁 GitHub
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button bg-blue-900 text-blue-300 px-3 py-2 rounded border"
                  >
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </RetroWindow>
  );
};
