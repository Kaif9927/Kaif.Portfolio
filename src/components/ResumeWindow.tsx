import React from 'react';
import { RetroWindow } from './RetroWindow';

interface ResumeWindowProps {
  onClose?: () => void;
}

export const ResumeWindow: React.FC<ResumeWindowProps> = ({ onClose }) => {
  return (
    <RetroWindow
      title="Resume"
      onClose={onClose}
      initialSize={{ width: 520, height: 520 }}
    >
      <div className="h-full overflow-auto p-3 w-full max-w-[95vw] mx-auto pb-10">
        <div className="space-y-4 text-sm">

          {/* ================= HEADER ================= */}
          <div className="text-center border-b border-retro-green pb-3">
            <h1 className="text-2xl font-bold text-retro-green">
              Mohd Kaif
            </h1>
            <p className="text-xs text-muted-foreground">
              Full Stack Developer | AI • Backend • DevOps
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-2 text-xs">
              <span>📧 Mohdkaifa909@gmail.com</span>
              <span>📞 +91-9193581958</span>
              <span>📍 India</span>
            </div>
          </div>

          {/* ================= LINKS ================= */}
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <a className="retro-button px-3 py-1">🐙 GitHub</a>
            <a className="retro-button px-3 py-1">💼 LinkedIn</a>
            <a className="retro-button px-3 py-1">🧠 LeetCode</a>
            <a className="retro-button px-3 py-1">🌐 Portfolio</a>
          </div>

          {/* ================= EDUCATION ================= */}
          <div>
            <h2 className="font-bold text-retro-green">🎓 Education</h2>
            <div className="bg-muted p-2 rounded border">
              <p className="font-semibold">
                B.Tech – Computer Science Engineering
              </p>
              <p className="text-xs text-muted-foreground">
                Indian Institute of Information Technology, Kalyani
              </p>
              <p className="text-xs">2022 – 2026 (7th Semester)</p>
            </div>
          </div>

          {/* ================= SKILLS ================= */}
          <div>
            <h2 className="font-bold text-retro-green">🛠️ Skills</h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-muted p-2 rounded border">
                <strong>Programming:</strong> C, C++, Python
              </div>
              <div className="bg-muted p-2 rounded border">
                <strong>Frameworks:</strong> Flask, React, Express
              </div>
              <div className="bg-muted p-2 rounded border">
                <strong>Web:</strong> HTML, CSS, Tailwind, JavaScript, SQL
              </div>
              <div className="bg-muted p-2 rounded border">
                <strong>AI / ML:</strong> Pandas, NumPy, Scikit-learn, LLMs
              </div>
              <div className="bg-muted p-2 rounded border">
                <strong>DevOps:</strong> Docker, CI/CD, Terraform, GitHub Actions
              </div>
              <div className="bg-muted p-2 rounded border">
                <strong>Tools:</strong> Git, Postman, Vercel, Render, Netlify
              </div>
            </div>
          </div>

          {/* ================= EXPERIENCE ================= */}
          <div>
            <h2 className="font-bold text-retro-green">💼 Experience</h2>
            <div className="bg-muted p-2 rounded border space-y-1">
              <p className="font-semibold">
                Web Developer & Co-Founder — MeltedBliss
              </p>
              <p className="text-xs text-muted-foreground">
                Feb 2025 – Jun 2025
              </p>
              <ul className="list-disc list-inside text-xs space-y-1">
                <li>Led 50+ member team to build dairy e-commerce platform</li>
                <li>AES-secured auth with Google verification</li>
                <li>Coupons, dashboards & PayPal integration</li>
                <li>React, Python, SQL, AES, Render</li>
              </ul>
            </div>
          </div>

          {/* ================= PROJECTS ================= */}
          <div>
            <h2 className="font-bold text-retro-green">🚀 Projects</h2>

            <div className="bg-muted p-2 rounded border mb-2">
              <p className="font-semibold">Interview.io (2025)</p>
              <p className="text-xs text-muted-foreground">
                Electron-based AI interview assistant
              </p>
              <ul className="list-disc list-inside text-xs">
                <li>React + Electron desktop app</li>
                <li>Gemini AI + OCR (Tesseract)</li>
                <li>Queue-based screenshot automation</li>
              </ul>
            </div>

            <div className="bg-muted p-2 rounded border">
              <p className="font-semibold">MEDIPRO (2024)</p>
              <p className="text-xs text-muted-foreground">
                Flask healthcare & disease prediction platform
              </p>
              <ul className="list-disc list-inside text-xs">
                <li>41 diseases, 132 symptoms (Random Forest)</li>
                <li>AES encrypted dual-auth system</li>
                <li>30% faster ML predictions</li>
              </ul>
            </div>
          </div>

          {/* ================= ACHIEVEMENTS ================= */}
          <div>
            <h2 className="font-bold text-retro-green">🏆 Achievements</h2>
            <ul className="list-disc list-inside text-xs space-y-1">
              <li>Google Cloud Certified</li>
              <li>Postman API Certified</li>
              <li>Rank 112 – Naukri.com Hackathon</li>
              <li>Status Code-1 Coordinator</li>
              <li>250+ LeetCode problems (1729 rating)</li>
              <li>94.8% in Class 12th</li>
            </ul>
          </div>

          {/* ================= DOWNLOAD ================= */}
          <div className="text-center pt-3">
            <a
              href="https://drive.google.com/uc?export=download&id=1U4fuwAoQWnyTxIUEW3BXp5cBIUcEbcED"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button bg-green-900 hover:bg-green-800 text-green-300 px-6 py-2 rounded border border-green-600 inline-block"
            >
              📄 Download Resume (PDF)
            </a>
          </div>

        </div>
      </div>
    </RetroWindow>
  );
};
