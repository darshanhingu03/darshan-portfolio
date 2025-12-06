import React from "react";
import { Package, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

const Projects = ({ isDarkMode }) => {
    return (
        <div
            className={`${isDarkMode
                ? "bg-slate-900/50 border-slate-800"
                : "bg-white/70 border-gray-200"
                } backdrop-blur-xl rounded-2xl border p-4 sm:p-8`}
        >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <Package className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-green-400" />
                Projects
            </h2>
            <div className="space-y-6">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`${isDarkMode
                            ? "bg-slate-800/50 border-slate-700 hover:border-green-500/50"
                            : "bg-gray-50 border-gray-200 hover:border-green-500/50"
                            } rounded-xl p-6 border transition-all`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-green-400">
                                    {project.name}
                                </h3>
                                <p
                                    className={`${isDarkMode ? "text-gray-400" : "text-gray-600"
                                        }`}
                                >
                                    {project.type}
                                </p>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`transition-colors ${isDarkMode
                                    ? "text-gray-500 hover:text-green-400"
                                    : "text-gray-400 hover:text-green-600"
                                    }`}
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                        {project.description && (
                            <p
                                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                    } mb-4 leading-relaxed`}
                            >
                                {project.description}
                            </p>
                        )}
                        <div className="mb-4">
                            <p
                                className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                    } mb-2`}
                            >
                                Tech Stack:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`px-3 py-1 ${isDarkMode
                                            ? "bg-slate-900 border-slate-700"
                                            : "bg-gray-100 border-gray-300"
                                            } text-gray-300 rounded-lg text-xs font-mono border`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p
                                className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                    } mb-2`}
                            >
                                Features:
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {project.features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center space-x-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"
                                            }`}
                                    >
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
    );
};

export default Projects;
