import React from "react";
import { Code, Database, Zap, GitBranch } from "lucide-react";

const About = ({ isDarkMode, terminalText, roundedExperience }) => {
    return (
        <>
            <div
                className={`${isDarkMode
                        ? "bg-slate-900/50 border-slate-800/50"
                        : "bg-gray-800 border-gray-700"
                    } backdrop-blur-2xl rounded-2xl border p-6 sm:p-8 overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500`}
            >
                <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                    <span className="ml-2 text-xs text-gray-500 font-mono">
                        darshan@terminal:~
                    </span>
                </div>
                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                    {terminalText}
                    <span className="animate-pulse">_</span>
                </pre>
            </div>

            <div
                className={`${isDarkMode
                        ? "bg-slate-900/50 border-slate-800"
                        : "bg-white/70 border-gray-200"
                    } backdrop-blur-xl rounded-2xl border p-8`}
            >
                <div className="flex items-center space-x-2 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                    <h2 className="text-3xl font-bold">Backend Developer</h2>
                </div>
                <p
                    className={`${isDarkMode ? "text-gray-300" : "text-gray-700"
                        } text-lg leading-relaxed mb-6`}
                >
                    Dedicated Backend Developer with{" "}
                    <span className="text-blue-400 font-semibold">
                        {roundedExperience} years of experience
                    </span>{" "}
                    specializing in building scalable, high-performance systems. Expert in
                    Node.js, Express.js, and microservices architecture, with a strong
                    focus on database optimization using MongoDB and PostgreSQL.
                    Proficient in implementing event-driven solutions with Apache Kafka
                    and Redis caching to ensure system reliability and speed. Passionate
                    about creating robust APIs and efficient server-side logic.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div
                        className={`${isDarkMode
                                ? "bg-slate-800/50 border-slate-700"
                                : "bg-gray-50 border-gray-200"
                            } rounded-xl p-4 border`}
                    >
                        <Code className="w-8 h-8 text-blue-400 mb-2" />
                        <p className="text-2xl font-bold">{roundedExperience}</p>
                        <p
                            className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Years Exp
                        </p>
                    </div>
                    <div
                        className={`${isDarkMode
                                ? "bg-slate-800/50 border-slate-700"
                                : "bg-gray-50 border-gray-200"
                            } rounded-xl p-4 border`}
                    >
                        <Database className="w-8 h-8 text-purple-400 mb-2" />
                        <p className="text-2xl font-bold">10+</p>
                        <p
                            className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Databases
                        </p>
                    </div>
                    <div
                        className={`${isDarkMode
                                ? "bg-slate-800/50 border-slate-700"
                                : "bg-gray-50 border-gray-200"
                            } rounded-xl p-4 border`}
                    >
                        <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                        <p className="text-2xl font-bold">20+</p>
                        <p
                            className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Tech Stack
                        </p>
                    </div>
                    <div
                        className={`${isDarkMode
                                ? "bg-slate-800/50 border-slate-700"
                                : "bg-gray-50 border-gray-200"
                            } rounded-xl p-4 border`}
                    >
                        <GitBranch className="w-8 h-8 text-green-400 mb-2" />
                        <p className="text-2xl font-bold">1000+</p>
                        <p
                            className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Commits
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
