import React from "react";
import { Cpu, Server, Database, Cloud, Code } from "lucide-react";
import { skills } from "../../data/skills";

const Skills = ({ isDarkMode }) => {
    return (
        <div
            className={`${isDarkMode
                    ? "bg-slate-900/50 border-slate-800"
                    : "bg-white/70 border-gray-200"
                } backdrop-blur-xl rounded-2xl border p-8`}
        >
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
                            <span
                                key={skill}
                                className={`px-4 py-2 ${isDarkMode
                                        ? "bg-blue-500/10 border-blue-500/30 text-blue-300"
                                        : "bg-blue-50 border-blue-300 text-blue-700"
                                    } border rounded-lg text-sm font-mono`}
                            >
                                {skill}
                            </span>
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
                            <span
                                key={skill}
                                className={`px-4 py-2 ${isDarkMode
                                        ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                                        : "bg-purple-50 border-purple-300 text-purple-700"
                                    } border rounded-lg text-sm font-mono`}
                            >
                                {skill}
                            </span>
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
                            <span
                                key={skill}
                                className={`px-4 py-2 ${isDarkMode
                                        ? "bg-green-500/10 border-green-500/30 text-green-300"
                                        : "bg-green-50 border-green-300 text-green-700"
                                    } border rounded-lg text-sm font-mono`}
                            >
                                {skill}
                            </span>
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
                            <span
                                key={skill}
                                className={`px-4 py-2 ${isDarkMode
                                        ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-300"
                                        : "bg-yellow-50 border-yellow-300 text-yellow-700"
                                    } border rounded-lg text-sm font-mono`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
