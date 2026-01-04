import React, { useState } from 'react';
import { RetroWindow } from './RetroWindow';
import kaifAvatar from '../assets/kaif_avatar.png'; // replace image if needed

interface AboutWindowProps {
  onClose?: () => void;
}

export const AboutWindow: React.FC<AboutWindowProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'experience'>('about');

  const skills = [
    { name: 'React & TypeScript', level: 85, color: 'bg-blue-500' },
    { name: 'Flask & Express', level: 80, color: 'bg-green-500' },
    { name: 'Python & C/C++', level: 78, color: 'bg-yellow-500' },
    { name: 'AI / ML (Scikit-learn, LLMs)', level: 75, color: 'bg-purple-500' },
    { name: 'Docker & CI/CD', level: 70, color: 'bg-orange-500' },
    { name: 'SQL & Databases', level: 72, color: 'bg-pink-500' }
  ];

  return (
    <RetroWindow
      title="About Mohd Kaif"
      onClose={onClose}
      initialSize={{ width: 620, height: 520 }}
    >
      <div className="h-full overflow-auto p-3 w-full max-w-[95vw] mx-auto pb-8">
        <div className="flex flex-col md:flex-row gap-4">

          {/* ================= PROFILE ================= */}
          <div className="flex-shrink-0 text-center md:text-left">
            <img
              src={kaifAvatar}
              alt="Mohd Kaif"
              className="w-32 h-32 rounded-lg border-2 border-retro-green mx-auto md:mx-0"
            />

            <h2 className="text-xl font-bold text-retro-green mt-3">
              Mohd Kaif
            </h2>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2 text-xs">
              <span className="px-2 py-1 bg-green-900 text-green-300 rounded border">⚛ React</span>
              <span className="px-2 py-1 bg-blue-900 text-blue-300 rounded border">🐍 Python</span>
              <span className="px-2 py-1 bg-purple-900 text-purple-300 rounded border">🤖 AI</span>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="flex-1">

            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              {[
                { id: 'about', label: 'About', icon: '👨‍💻' },
                { id: 'skills', label: 'Skills', icon: '⚡' },
                { id: 'experience', label: 'Experience', icon: '💼' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`retro-button flex-1 px-4 py-2 text-sm ${
                    activeTab === tab.id
                      ? 'bg-green-900 text-green-300 border-green-600'
                      : 'bg-muted text-muted-foreground border-border'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* ================= TAB CONTENT ================= */}
            {activeTab === 'about' && (
              <div className="space-y-3 text-sm">
                <p>
                  👋 Hi, I’m <strong>Mohd Kaif</strong>, a final-year CSE student at
                  IIIT Kalyani with a strong interest in building real-world
                  full-stack and AI-powered applications.
                </p>

                <p>
                  🎯 I enjoy working across the stack — from crafting clean React
                  interfaces to designing secure backend systems and integrating
                  machine-learning models.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-muted p-2 rounded border">
                    📍 <strong>Location:</strong> India
                  </div>
                  <div className="bg-muted p-2 rounded border">
                    🎓 <strong>Education:</strong> B.Tech CSE
                  </div>
                  <div className="bg-muted p-2 rounded border">
                    🧠 <strong>LeetCode:</strong> 250+ solved
                  </div>
                  <div className="bg-muted p-2 rounded border">
                    🚀 <strong>Status:</strong> Open to Internships / Full-time
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-3">
                {skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`${skill.color} h-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-4 text-sm">
                <div className="border-l-2 border-green-500 pl-3">
                  <h4 className="font-medium text-green-400">
                    Web Developer & Co-Founder — MeltedBliss
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Feb 2025 – Jun 2025
                  </p>
                  <p>
                    Led development of a dairy e-commerce platform with secure
                    AES authentication, PayPal payments, and user dashboards.
                  </p>
                </div>

                <div className="border-l-2 border-blue-500 pl-3">
                  <h4 className="font-medium text-blue-400">
                    AI Project Developer
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Personal Projects
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Interview.io – AI interview assistant (Electron)</li>
                    <li>MEDIPRO – ML-based disease prediction platform</li>
                  </ul>
                </div>

                <div className="border-l-2 border-purple-500 pl-3">
                  <h4 className="font-medium text-purple-400">
                    Hackathons & Leadership
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>Status Code-1 Coordinator</li>
                    <li>Rank 112 – Naukri.com Hackathon</li>
                  </ul>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </RetroWindow>
  );
};
