import React from "react";

const Footer = ({ isDarkMode }) => {
    return (
        <footer
            className={`relative z-10 border-t ${isDarkMode ? "border-slate-800" : "border-gray-200"
                } mt-12`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p
                        className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"
                            }`}
                    >
                        © {new Date().getFullYear()} Darshan Hingu. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <span
                            className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                }`}
                        >
                            v2.0.0
                        </span>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span
                                className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                    }`}
                            >
                                All Systems Operational
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
