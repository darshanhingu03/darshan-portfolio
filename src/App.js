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
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

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
      className={`min-h-screen font-sans transition-colors duration-200 ${
        isDarkMode
          ? "bg-[#0B0F19] text-[#F8FAFC]"
          : "bg-[#F8FAFC] text-[#0F172A]"
      }`}
    >
      <div
        className={`fixed inset-0 z-0 pointer-events-none ${
          isDarkMode ? "opacity-15" : "opacity-4"
        }`}
        style={{
          backgroundImage: `radial-gradient(${
            isDarkMode ? "#6366F1" : "#000"
          } 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
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
