import React from "react";
import {
    Server,
    Moon,
    Sun,
    Mail,
    Github,
    Linkedin,
    FileText,
    Eye,
    Download,
    ChevronRight,
    Menu,
    X,
} from "lucide-react";

const Navbar = ({ isDarkMode, setIsDarkMode, roundedExperience }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav
            className={`relative z-10 border-b ${isDarkMode
                ? "border-slate-800 bg-slate-900/80"
                : "border-gray-200 bg-white/80"
                } backdrop-blur-xl sticky top-0 z-20`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">

                        <div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Darshan Hingu
                            </h1>
                            <p
                                className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                    }`}
                            >
                                Experience: {roundedExperience} Years
                            </p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"
                                }`}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-slate-700" />
                            )}
                        </button>
                        <a
                            href="mailto:darshanhingu03@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"
                                }`}
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/darshanhingu03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"
                                }`}
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/darshan-hingu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"
                                }`}
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>

                        <div className="relative group">
                            <button
                                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all transform hover:scale-105 ${isDarkMode
                                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                                    : "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/30"
                                    } flex items-center space-x-2`}
                                title="Resume"
                            >
                                <span>Resume</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                                <div
                                    className={`${isDarkMode
                                        ? "bg-slate-900 border-slate-800"
                                        : "bg-white border-gray-200"
                                        } border rounded-xl shadow-xl overflow-hidden p-1`}
                                >
                                    <a
                                        href="/darshan-hingu-resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-lg ${isDarkMode
                                            ? "text-gray-300 hover:bg-slate-800"
                                            : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <Eye className="w-4 h-4 text-blue-500" />
                                        <span>View Resume</span>
                                    </a>
                                    <a
                                        href="/darshan-hingu-resume.pdf"
                                        download
                                        className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-lg ${isDarkMode
                                            ? "text-gray-300 hover:bg-slate-800"
                                            : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <Download className="w-4 h-4 text-green-500" />
                                        <span>Download</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"
                                }`}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-slate-700" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"
                                }`}
                        >
                            {isMenuOpen ? (
                                <X className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-black"}`} />
                            ) : (
                                <Menu className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-black"}`} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={`md:hidden px-6 pt-2 pb-6 border-t ${isDarkMode ? "border-slate-800" : "border-gray-200"}`}>
                    <div className="flex flex-col space-y-4 mt-4">
                        <div className="flex items-center justify-around">
                            <a
                                href="mailto:darshanhingu03@gmail.com"
                                className={`p-3 rounded-lg flex items-center justify-center ${isDarkMode ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
                                    }`}
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/darshanhingu03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-lg flex items-center justify-center ${isDarkMode ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
                                    }`}
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/darshan-hingu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-lg flex items-center justify-center ${isDarkMode ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
                                    }`}
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <a
                                href="/darshan-hingu-resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium rounded-lg ${isDarkMode
                                    ? "bg-slate-800 text-white"
                                    : "bg-gray-100 text-black"
                                    }`}
                            >
                                <Eye className="w-4 h-4 text-blue-500" />
                                <span>View Resume</span>
                            </a>
                            <a
                                href="/darshan-hingu-resume.pdf"
                                download
                                className={`flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium rounded-lg ${isDarkMode
                                    ? "bg-slate-800 text-white"
                                    : "bg-gray-100 text-black"
                                    }`}
                            >
                                <Download className="w-4 h-4 text-green-500" />
                                <span>Download</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
