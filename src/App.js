import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  const [activeEndpoint, setActiveEndpoint] = useState("about");
  const [terminalText, setTerminalText] = useState("");
  const [isTyping] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const startDate = new Date("2023-02-01");
  const currentDate = new Date();

  // Get the difference in milliseconds
  const diffInMs = currentDate - startDate;

  // Convert milliseconds to years (including leap years)
  const msInYear = 1000 * 60 * 60 * 24 * 365.25;
  const totalExperience = diffInMs / msInYear;

  // Round to nearest integer and add +
  const roundedExperience = Math.round(totalExperience) + "+";
  const fullText =
    "$ npm install darshan-hingu\n> Building scalable backend systems...\n> ✓ Ready to deploy amazing solutions";

  useEffect(() => {
    if (isTyping && terminalText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(fullText.slice(0, terminalText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [terminalText, isTyping]);

  const renderContent = () => {
    switch (activeEndpoint) {
      case "about":
        return (
          <About
            isDarkMode={isDarkMode}
            terminalText={terminalText}
            roundedExperience={roundedExperience}
          />
        );
      case "experience":
        return <Experience isDarkMode={isDarkMode} />;
      case "skills":
        return <Skills isDarkMode={isDarkMode} />;
      case "projects":
        return <Projects isDarkMode={isDarkMode} />;
      case "contact":
        return <Contact isDarkMode={isDarkMode} />;
      default:
        return (
          <About
            isDarkMode={isDarkMode}
            terminalText={terminalText}
            roundedExperience={roundedExperience}
          />
        );
    }
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      <div
        className={`fixed inset-0 z-0 ${isDarkMode ? "opacity-20" : "opacity-5"
          }`}
        style={{
          backgroundImage: `radial-gradient(${isDarkMode ? "#4f46e5" : "#000"
            } 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        roundedExperience={roundedExperience}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Sidebar
            isDarkMode={isDarkMode}
            activeEndpoint={activeEndpoint}
            setActiveEndpoint={setActiveEndpoint}
          />

          <div className="lg:col-span-3">
            <div className="space-y-6">{renderContent()}</div>
          </div>
        </div>
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
