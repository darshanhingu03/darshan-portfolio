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
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-green-400">
                                    {project.name}
                                </h3>
                                <p
                                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                        } font-medium mt-0.5`}
                                >
                                    {project.type}
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-3 sm:mt-0">
                                {project.links && project.links.map((l, i) => (
                                    <a
                                        key={i}
                                        href={l.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${isDarkMode
                                            ? "bg-slate-900/80 border-slate-700 text-green-400 hover:bg-slate-800 hover:border-green-500/50"
                                            : "bg-white border-gray-300 text-green-600 hover:bg-gray-100 hover:border-green-500/50"
                                            }`}
                                    >
                                        <span>{l.label}</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                ))}
                                {project.link && !project.links && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-lg transition-colors ${isDarkMode
                                            ? "text-gray-400 hover:text-green-400 hover:bg-slate-800"
                                            : "text-gray-600 hover:text-green-600 hover:bg-gray-200"
                                            }`}
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {project.challenge && (
                            <div className="mb-3">
                                <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? "text-amber-400" : "text-amber-600"}`}>
                                    Challenge
                                </span>
                                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"} mt-1 leading-relaxed`}>
                                    {project.challenge}
                                </p>
                            </div>
                        )}

                        {project.solution && (
                            <div className="mb-4">
                                <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
                                    Solution
                                </span>
                                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"} mt-1 leading-relaxed`}>
                                    {project.solution}
                                </p>
                            </div>
                        )}

                        {project.description && !project.challenge && (
                            <p
                                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                    } mb-4 leading-relaxed`}
                            >
                                {project.description}
                            </p>
                        )}

                        {project.tech && project.tech.length > 0 && (
                            <div className="mb-4">
                                <p
                                    className={`text-xs font-medium uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"
                                        } mb-2`}
                                >
                                    Tech Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-3 py-1 ${isDarkMode
                                                ? "bg-slate-900 border-slate-700 text-gray-300"
                                                : "bg-gray-100 border-gray-300 text-gray-700"
                                                } rounded-lg text-xs font-mono border`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.features && project.features.length > 0 && (
                            <div>
                                <p
                                    className={`text-xs font-medium uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"
                                        } mb-2`}
                                >
                                    Key Highlights
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {project.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-center space-x-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"
                                                }`}
                                        >
                                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
