export const projects = [
    {
        name: "Teachifyy - App",
        type: "Mobile App · 2026",
        links: [
            { label: "Play Store", url: "https://play.google.com/store/search?q=teachifyy&c=apps" },
            { label: "App Store", url: "https://apps.apple.com/in/app/teachifyy/id6762552478" },
        ],
        challenge:
            "Teachifyy needed a full-stack application - a React Native mobile app for students and educators on Android and iOS, backed by a production-grade API capable of multi-tier course delivery, secure payment processing, video streaming, community features, real-time notifications, and lead capture workflows.",
        solution:
            "Built the complete Teachifyy application: a React Native mobile app (Android live, iOS in development) powered by a modular monolith backend in Node.js with TypeScript - 13 independent feature modules, chunked video upload with AWS S3 and FFmpeg, Cashfree payments, Socket.io real-time notifications, and a full Docker/PM2 deployment pipeline.",
        tech: [
            "React Native",
            "Node.js",
            "TypeScript",
            "AWS S3",
            "FFmpeg",
            "Cashfree",
            "Socket.io",
            "Docker",
            "PM2",
        ],
        features: [
            "React Native Mobile App (Android & iOS)",
            "Modular Monolith Backend (13 Modules)",
            "Chunked Video Upload with S3 & FFmpeg",
            "Cashfree Payments Integration",
            "Socket.io Real-Time Notifications",
            "Docker & PM2 Deployment Pipeline",
        ],
    },
    {
        name: "Teachifyy - Website",
        type: "Website · 2026",
        links: [
            { label: "Visit Live Site", url: "https://www.teachifyy.com/" },
        ],
        challenge:
            "Every year in India, over 6 lakh teacher graduates enter the job market - yet only 58% find teaching jobs within 12 months of graduation. That's a 42% employment gap representing hundreds of thousands of trained educators who remain unemployed or underemployed despite holding qualifications. The root cause is not a lack of degrees, but a lack of practical, career-ready skills.",
        solution:
            "Built Teachifyy - a platform that rethinks teacher training from the ground up with the proprietary ABCDE Model (Applied Child Development, Built-For-Impact Curriculum, Capability Building, Distinct Voice, Ethical Excellence). Rather than offering another certification course, Teachifyy focuses on career transformation through applied learning and globally recognized development framework.",
        tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "SaaS Platform"],
        features: [
            "Proprietary ABCDE Model Integration",
            "Career Transformation Workflows",
            "Applied Learning & Skill Frameworks",
            "High-Impact Educational UI/UX",
        ],
    },
    {
        name: "ProcureGenie Vendor Portal",
        type: "SaaS Development · 2026",
        links: [
            { label: "Visit Live Site", url: "https://vendors.procuregenie.com/login" },
        ],
        challenge:
            "Organizations using ProcureGenie required a centralized supplier-facing ecosystem where vendors could securely register, manage compliance documents, participate in RFQs, submit quotations, track approvals, and collaborate with procurement teams without relying on fragmented emails, spreadsheets, or offline procurement workflows.",
        solution:
            "Built a cloud-based vendor self-service portal enabling suppliers to onboard digitally, manage compliance documentation, respond to sourcing events, track procurement activities, and collaborate with enterprise procurement teams through structured procurement workflows and audit-ready communication systems.",
        tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Microservices"],
        features: [
            "Vendor Digital Onboarding & Verification",
            "Compliance Document Management",
            "RFQ Participation & Quotation Submission",
            "Audit-Ready Communication System",
        ],
    },
    {
        name: "MiracleMe",
        type: "Mobile App · 2025",
        links: [
            { label: "Visit Live Site", url: "https://www.miracleme.in/" },
        ],
        challenge:
            "In today's fast-paced world, people often struggle to find a trusted space where they can openly discuss their emotions, life decisions, or spiritual questions. Existing solutions are either too clinical, too expensive, or lack the personal and spiritual touch that many users seek. There was a clear gap for a platform that combines emotional wellness with astrology-based guidance in one accessible mobile experience.",
        solution:
            "Our team built Miracle Me - a mobile-first platform that bridges the gap between emotional support and astrology. Users can connect anonymously with verified astrologers and trained emotional listeners at any time of day. The app removes the stigma around seeking help by offering full anonymity and a warm, cosmic-themed experience.",
        tech: ["React Native", "Node.js", "Express.js", "MongoDB", "Real-Time Chat"],
        features: [
            "Mobile-First Emotional Wellness & Astrology Platform",
            "Anonymous 24/7 Connect with Astrologers & Listeners",
            "Cosmic-Themed Intuitive Interface",
            "Privacy-First Secure Consultation Workflows",
        ],
    },
    {
        name: "JustyGet",
        type: "eCommerce Platform",
        link: "https://github.com/darshanhingu03/E-commorce-site---PHP",
        tech: ["PHP", "MySQL", "HTML", "CSS"],
        features: [
            "User Authentication",
            "Admin Panel",
            "Product Management",
            "Shopping Cart",
        ],
        description:
            "A comprehensive e-commerce solution built with PHP and MySQL, featuring user authentication, product management, and a secure shopping cart system.",
    },
];
