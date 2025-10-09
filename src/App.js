import React, { useState, useEffect } from "react";
import { Code, Database, Server, Zap, Mail, Github, Linkedin, Twitter, Terminal, ChevronRight, ExternalLink, Cpu, Cloud, GitBranch, Package, Moon, Sun } from "lucide-react";

export default function App() {
  const [activeEndpoint, setActiveEndpoint] = useState("about");
  const [terminalText, setTerminalText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fullText = "$ npm install darshan-hingu\n> Building scalable backend systems...\n> ✓ Ready to deploy amazing solutions";

  useEffect(() => {
    if (isTyping && terminalText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(fullText.slice(0, terminalText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [terminalText, isTyping]);

  const endpoints = [
    { id: "about", label: "GET /about", icon: Terminal },
    { id: "experience", label: "GET /experience", icon: Code },
    { id: "skills", label: "GET /skills", icon: Cpu },
    { id: "projects", label: "GET /projects", icon: Package },
    { id: "contact", label: "POST /contact", icon: Mail },
  ];

  const skills = {
    backend: ["Node.js", "Express.js", "WebSocket", "REST APIs", "Microservices"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Sequelize", "Mongoose", "Prisma"],
    tools: ["Redis", "Apache Kafka", "Docker", "Git", "AWS EC2", "AWS S3"],
    frontend: ["React.js", "Redux", "Material-UI", "Tailwind CSS", "Bootstrap"],
  };

  const experience = [
    {
      role: "Full-Stack Web Developer",
      company: "Procurement Genie Pvt Ltd",
      period: "Nov 2023 - Present",
      type: "Product-Based Company",
      achievements: [
        "Led development of microservices-based SaaS supply chain project",
        "Implemented Redis caching for real-time data access",
        "Integrated Apache Kafka for event-driven architecture",
        "Built responsive UIs with React.js and Material-UI",
        "Deployed applications on remote Linux servers",
      ],
    },
    {
      role: "Full-Stack Developer Intern & Junior Developer",
      company: "Grab The Site",
      period: "Feb 2023 - Sep 2023",
      type: "Service-Based Company",
      achievements: [
        "Developed truck tracking system powered by ULIP",
        "Used Node.js, MongoDB, and Mongoose ORM",
        "Focused on backend development and API design",
        "Collaborated with cross-functional teams",
      ],
    },
  ];

  const projects = [
    {
      name: "JustyGet",
      type: "eCommerce Platform",
      tech: ["React.js", "Node.js", "MongoDB"],
      features: ["User Authentication", "Shopping Cart", "Payment Integration", "Product Management"],
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100" : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 ${isDarkMode ? "bg-blue-500/10" : "bg-blue-500/20"} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 ${isDarkMode ? "bg-purple-500/10" : "bg-purple-500/20"} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: "1s" }}></div>
      </div>

      <nav className={`relative z-10 border-b ${isDarkMode ? "border-slate-800 bg-slate-900/80" : "border-gray-200 bg-white/80"} backdrop-blur-xl`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Darshan Hingu</h1>
                <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Backend Developer API v2.5</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"}`} aria-label="Toggle theme">
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
              <a href="https://github.com/darshanhingu03" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"}`}>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/darshan-hingu" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"}`}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/darshanhingu03" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"}`}>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className={`${isDarkMode ? "bg-slate-900/50 border-slate-800" : "bg-white/70 border-gray-200"} backdrop-blur-xl rounded-2xl border p-6 sticky top-8`}>
              <h3 className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-4 uppercase tracking-wider`}>API Endpoints</h3>
              <div className="space-y-2">
                {endpoints.map((endpoint) => {
                  const Icon = endpoint.icon;
                  return (
                    <button key={endpoint.id} onClick={() => setActiveEndpoint(endpoint.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeEndpoint === endpoint.id ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20 text-white" : isDarkMode ? "hover:bg-slate-800/50" : "hover:bg-gray-100"}`}>
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-mono">{endpoint.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className={`mt-8 pt-6 border-t ${isDarkMode ? "border-slate-800" : "border-gray-200"}`}>
                <div className={`flex items-center space-x-2 text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Status: Online</span>
                </div>
                <div className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                  <p>Response Time: ~50ms</p>
                  <p>Uptime: 99.9%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {activeEndpoint === "about" && (
              <>
                <div className={`${isDarkMode ? "bg-slate-900/50 border-slate-800/50" : "bg-gray-800 border-gray-700"} backdrop-blur-2xl rounded-2xl border p-6 sm:p-8 overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500`}>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                    <span className="ml-2 text-xs text-gray-500 font-mono">darshan@terminal:~</span>
                  </div>
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">{terminalText}<span className="animate-pulse">_</span></pre>
                </div>

                <div className={`${isDarkMode ? "bg-slate-900/50 border-slate-800" : "bg-white/70 border-gray-200"} backdrop-blur-xl rounded-2xl border p-8`}>
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                    <h2 className="text-3xl font-bold">Backend Developer</h2>
                  </div>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-lg leading-relaxed mb-6`}>
                    Backend Developer with <span className="text-blue-400 font-semibold">2.5 years of experience</span> building scalable SaaS applications using Node.js, Express.js, and microservices architecture. Specialized in REST API development, Redis caching, Kafka-based event-driven systems, and WebSocket integration for real-time features.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className={`${isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-gray-50 border-gray-200"} rounded-xl p-4 border`}>
                      <Code className="w-8 h-8 text-blue-400 mb-2" />
                      <p className="text-2xl font-bold">2.5+</p>
                      <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Years Exp</p>
                    </div>
                    <div className={`${isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-gray-50 border-gray-200"} rounded-xl p-4 border`}>
                      <Database className="w-8 h-8 text-purple-400 mb-2" />
                      <p className="text-2xl font-bold">6+</p>
                      <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Databases</p>
                    </div>
                    <div className={`${isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-gray-50 border-gray-200"} rounded-xl p-4 border`}>
                      <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                      <p className="text-2xl font-bold">10+</p>
                      <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Tech Stack</p>
                    </div>
                    <div className={`${isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-gray-50 border-gray-200"} rounded-xl p-4 border`}>
                      <GitBranch className="w-8 h-8 text-green-400 mb-2" />
                      <p className="text-2xl font-bold">500+</p>
                      <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Commits</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeEndpoint === "experience" && (
              <div className={`${isDarkMode ? "bg-slate-900/50 border-slate-800" : "bg-white/70 border-gray-200"} backdrop-blur-xl rounded-2xl border p-8`}>
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <Code className="w-8 h-8 mr-3 text-blue-400" />
                  Work Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div key={idx} className={`${isDarkMode ? "bg-slate-800/50 border-slate-700 hover:border-blue-500/50" : "bg-gray-50 border-gray-200 hover:border-blue-500/50"} rounded-xl p-6 border transition-all`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} font-semibold`}>{exp.company}</p>
                          <p className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-600"} mt-1`}>{exp.type}</p>
                        </div>
                        <span className={`text-sm ${isDarkMode ? "text-gray-400 bg-slate-900" : "text-gray-600 bg-gray-200"} px-3 py-1 rounded-full`}>{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className={`flex items-start space-x-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                            <ChevronRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeEndpoint === "skills" && (
              <div className={`${isDarkMode ? "bg-slate-900/50 border-slate-800" : "bg-white/70 border-gray-200"} backdrop-blur-xl rounded-2xl border p-8`}>
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <Cpu className="w-8 h-8 mr-3 text-purple-400" />
                  Technical Skills
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                      <Server className="w-5 h-5 mr-2" />
                      Backend & APIs
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill) => (
                        <span key={skill} className={`px-4 py-2 ${isDarkMode ? "bg-blue-500/10 border-blue-500/30 text-blue-300" : "bg-blue-50 border-blue-300 text-blue-700"} border rounded-lg text-sm font-mono`}>{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                      <Database className="w-5 h-5 mr-2" />
                      Databases & ORMs
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((skill) => (
                        <span key={skill} className={`px-4 py-2 ${isDarkMode ? "bg-purple-500/10 border-purple-500/30 text-purple-300" : "bg-purple-50 border-purple-300 text-purple-700"} border rounded-lg text-sm font-mono`}>{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                      <Cloud className="w-5 h-5 mr-2" />
                      Tools & Cloud
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <span key={skill} className={`px-4 py-2 ${isDarkMode ? "bg-green-500/10 border-green-500/30 text-green-300" : "bg-green-50 border-green-300 text-green-700"} border rounded-lg text-sm font-mono`}>{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill) => (
                        <span key={skill} className={`px-4 py-2 ${isDarkMode ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-300" : "bg-yellow-50 border-yellow-300 text-yellow-700"} border rounded-lg text-sm font-mono`}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeEndpoint === "projects" && (
              <div className={`${isDarkMode ? "bg-slate-900/50 border-slate-800" : "bg-white/70 border-gray-200"} backdrop-blur-xl rounded-2xl border p-8`}>
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <Package className="w-8 h-8 mr-3 text-green-400" />
                  Projects
                </h2>
                <div className="space-y-6">
                  {projects.map((project, idx) => (
                    <div key={idx} className={`${isDarkMode ? "bg-slate-800/50 border-slate-700 hover:border-green-500/50" : "bg-gray-50 border-gray-200 hover:border-green-500/50"} rounded-xl p-6 border transition-all`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-green-400">{project.name}</h3>
                          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{project.type}</p>
                        </div>
                        <ExternalLink className={`w-5 h-5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`} />
                      </div>
                      <div className="mb-4">
                        <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"} mb-2`}>Tech Stack:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className={`px-3 py-1 ${isDarkMode ? "bg-slate-900 border-slate-700" : "bg-gray-100 border-gray-300"} text-gray-300 rounded-lg text-xs font-mono border`}>{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"} mb-2`}>Features:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, i) => (
                            <div key={i} className={`flex items-center space-x-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeEndpoint === "contact" && (
              <div className={`${isDarkMode ? "bg-slate-900/50 border-slate-800" : "bg-white/70 border-gray-200"} backdrop-blur-xl rounded-2xl border p-8`}>
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <Mail className="w-8 h-8 mr-3 text-blue-400" />
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className={`${isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-gray-50 border-gray-200"} rounded-xl p-6 border`}>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <a href="mailto:darshanhingu03@gmail.com" className={`flex items-center space-x-3 ${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"} transition-colors`}>
                        <Mail className="w-5 h-5" />
                        <span>darshanhingu03@gmail.com</span>
                      </a>
                      <div className={`flex items-center space-x-3 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        <Server className="w-5 h-5" />
                        <span>Ahmedabad, Gujarat</span>
                      </div>
                    </div>
                  </div>

                  <div className={`${isDarkMode ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30" : "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300"} rounded-xl p-6 border`}>
                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-4`}>
                      I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                    <div className="flex space-x-4">
                      <a href="https://github.com/darshanhingu03" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 ${isDarkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-gray-200 hover:bg-gray-300"} rounded-lg transition-colors flex items-center space-x-2`}>
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                      <a href="https://linkedin.com/in/darshan-hingu" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center space-x-2">
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className={`relative z-10 border-t ${isDarkMode ? "border-slate-800 bg-slate-900/80" : "border-gray-200 bg-white/80"} backdrop-blur-xl mt-16`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>© 2025 Darshan Hingu. Built with React & Tailwind CSS</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-600"} font-mono`}>API Version: 2.5.0</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}