import React from "react";
import { endpoints } from "../data/endpoints";
import { ChevronRight } from "lucide-react";

const Sidebar = ({ isDarkMode, activeEndpoint, setActiveEndpoint }) => {
    const [showScrollIndicator, setShowScrollIndicator] = React.useState(true);

    const handleScroll = (e) => {
        const { scrollLeft, scrollWidth, clientWidth } = e.target;
        // Hide indicator if scrolled more than 10px or if reached the end
        if (scrollLeft > 10 || scrollLeft + clientWidth >= scrollWidth - 5) {
            setShowScrollIndicator(false);
        } else {
            setShowScrollIndicator(true);
        }
    };

    return (
        <div className="lg:col-span-1">
            <div
                className={`${isDarkMode
                    ? "bg-slate-900/50 border-slate-800"
                    : "bg-white/70 border-gray-200"
                    } backdrop-blur-xl rounded-2xl border p-4 lg:p-6 lg:sticky lg:top-24 relative group`}
            >
                <h3
                    className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-600"
                        } mb-4 uppercase tracking-wider hidden lg:block`}
                >
                    API Endpoints
                </h3>
                <div
                    className="overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0"
                    onScroll={handleScroll}
                >
                    <div className="flex space-x-3 lg:space-x-0 lg:space-y-2 lg:flex-col min-w-max lg:min-w-0">
                        {endpoints.map((endpoint) => {
                            const Icon = endpoint.icon;
                            const method = endpoint.label.split(" ")[0];
                            const methodColor =
                                method === "GET" ? "bg-green-500" :
                                    method === "POST" ? "bg-yellow-500" :
                                        method === "PUT" ? "bg-blue-500" :
                                            method === "DELETE" ? "bg-red-500" : "bg-gray-500";

                            return (
                                <button
                                    key={endpoint.id}
                                    onClick={() => setActiveEndpoint(endpoint.id)}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap ${activeEndpoint === endpoint.id
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20 text-white"
                                        : isDarkMode
                                            ? "hover:bg-slate-800/50"
                                            : "hover:bg-gray-100"
                                        }`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className={`w-2 h-2 rounded-full ${activeEndpoint === endpoint.id ? "bg-white" : methodColor} animate-pulse lg:hidden`}></div>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-mono">{endpoint.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
                {/* Scroll Indicator for Mobile */}
                <div
                    className={`lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-8 h-full pointer-events-none flex items-center justify-end pr-1 rounded-full ${isDarkMode ? "bg-slate-900/50" : "bg-white/90"} transition-opacity duration-300 ${showScrollIndicator ? "opacity-100" : "opacity-0"}`}
                >
                    <ChevronRight className={`w-5 h-5 animate-pulse ${isDarkMode ? "text-white" : "text-gray-600"}`} />
                </div>
                <div
                    className={`mt-8 pt-6 border-t ${isDarkMode ? "border-slate-800" : "border-gray-200"
                        } hidden lg:block`}
                >
                    <div
                        className={`flex items-center space-x-2 text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"
                            } mb-2`}
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Status: Online</span>
                    </div>
                    <div
                        className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"
                            }`}
                    >
                        <p>Response Time: ~50ms</p>
                        <p>Uptime: 99.9%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
