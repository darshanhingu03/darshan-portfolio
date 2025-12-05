import React from "react";
import { endpoints } from "../data/endpoints";

const Sidebar = ({ isDarkMode, activeEndpoint, setActiveEndpoint }) => {
    return (
        <div className="lg:col-span-1">
            <div
                className={`${isDarkMode
                        ? "bg-slate-900/50 border-slate-800"
                        : "bg-white/70 border-gray-200"
                    } backdrop-blur-xl rounded-2xl border p-6 sticky top-8`}
            >
                <h3
                    className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-600"
                        } mb-4 uppercase tracking-wider`}
                >
                    API Endpoints
                </h3>
                <div className="space-y-2">
                    {endpoints.map((endpoint) => {
                        const Icon = endpoint.icon;
                        return (
                            <button
                                key={endpoint.id}
                                onClick={() => setActiveEndpoint(endpoint.id)}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeEndpoint === endpoint.id
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20 text-white"
                                        : isDarkMode
                                            ? "hover:bg-slate-800/50"
                                            : "hover:bg-gray-100"
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span className="text-sm font-mono">{endpoint.label}</span>
                            </button>
                        );
                    })}
                </div>
                <div
                    className={`mt-8 pt-6 border-t ${isDarkMode ? "border-slate-800" : "border-gray-200"
                        }`}
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
