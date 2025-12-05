import React from "react";
import { Code, ChevronRight } from "lucide-react";
import { experience } from "../../data/experience";

const Experience = ({ isDarkMode }) => {
    return (
        <div
            className={`${isDarkMode
                    ? "bg-slate-900/50 border-slate-800"
                    : "bg-white/70 border-gray-200"
                } backdrop-blur-xl rounded-2xl border p-8`}
        >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Code className="w-8 h-8 mr-3 text-blue-400" />
                Work Experience
            </h2>
            <div className="space-y-6">
                {experience.map((exp, idx) => (
                    <div
                        key={idx}
                        className={`${isDarkMode
                                ? "bg-slate-800/50 border-slate-700 hover:border-blue-500/50"
                                : "bg-gray-50 border-gray-200 hover:border-blue-500/50"
                            } rounded-xl p-6 border transition-all`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                                <p
                                    className={`${isDarkMode ? "text-gray-300" : "text-gray-700"
                                        } font-semibold`}
                                >
                                    {exp.company}
                                </p>
                                <p
                                    className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                        } mt-1`}
                                >
                                    {exp.type}
                                </p>
                            </div>
                            <span
                                className={`text-sm ${isDarkMode
                                        ? "text-gray-400 bg-slate-900"
                                        : "text-gray-600 bg-gray-200"
                                    } px-3 py-1 rounded-full`}
                            >
                                {exp.period}
                            </span>
                        </div>
                        <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                                <li
                                    key={i}
                                    className={`flex items-start space-x-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"
                                        }`}
                                >
                                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                                    <span className="text-sm">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
