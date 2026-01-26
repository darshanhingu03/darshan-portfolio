import React from "react";
import { Mail, Server, Github, Linkedin } from "lucide-react";

const Contact = ({ isDarkMode }) => {
    return (
        <div
            className={`${isDarkMode
                ? "bg-slate-900/50 border-slate-800"
                : "bg-white/70 border-gray-200"
                } backdrop-blur-xl rounded-2xl border p-4 sm:p-8`}
        >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-blue-400" />
                Get In Touch
            </h2>
            <div className="space-y-6">
                <div
                    className={`${isDarkMode
                        ? "bg-slate-800/50 border-slate-700"
                        : "bg-gray-50 border-gray-200"
                        } rounded-xl p-6 border`}
                >
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-3">
                        <a
                            href="mailto:darshanhingu03@gmail.com"
                            className={`flex items-center space-x-3 ${isDarkMode
                                ? "text-gray-300 hover:text-blue-400"
                                : "text-gray-700 hover:text-blue-600"
                                } transition-colors break-all`}
                        >
                            <Mail className="w-5 h-5 flex-shrink-0" />
                            <span>darshanhingu03@gmail.com</span>
                        </a>
                        <div
                            className={`flex items-center space-x-3 ${isDarkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            <Server className="w-5 h-5 flex-shrink-0" />
                            <span>Ahmedabad, Gujarat</span>
                        </div>
                    </div>
                </div>

                <div
                    className={`${isDarkMode
                        ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30"
                        : "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300"
                        } rounded-xl p-6 border`}
                >
                    <p
                        className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-4`}
                    >
                        I'm always interested in hearing about new projects and
                        opportunities. Whether you have a question or just want to say hi,
                        feel free to reach out!
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <a
                            href="https://github.com/darshanhingu03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-6 py-3 ${isDarkMode
                                ? "bg-slate-800 hover:bg-slate-700"
                                : "bg-gray-200 hover:bg-gray-300"
                                } rounded-lg transition-colors flex items-center justify-center space-x-2`}
                        >
                            <Github className="w-5 h-5" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/darshan-hingu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center space-x-2 text-white"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
