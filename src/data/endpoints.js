import { Terminal, Code, Cpu, Package, Mail } from "lucide-react";

export const endpoints = [
    { id: "about", label: "GET /about", icon: Terminal },
    { id: "experience", label: "GET /experience", icon: Code },
    { id: "skills", label: "GET /skills", icon: Cpu },
    { id: "projects", label: "GET /projects", icon: Package },
    { id: "contact", label: "POST /contact", icon: Mail },
];
