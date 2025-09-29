import React from "react";
import { Link } from "react-router-dom";
import {
    Users,
    Award,
    Target,
    Lightbulb,
    Heart,
    Globe,
    Microscope,
    Zap,
    Shield,
    ArrowLeft,
    Mail,
    Linkedin,
    Github,
    MapPin,
    Calendar,
    GraduationCap,
    Briefcase
} from "lucide-react";

function AboutUs() {
    const teamMembers = [
        {
            name: "Shashank Naik",
            role: "Team Leader",
            expertise: "Space Tech | Cloud & Embedded Systems",
            education: "Student of Electronics and Telecommunication Engineering",
            linkedin: "https://www.linkedin.com/in/shashank-naik0906/",
            avatar: "🧑‍💻",

        },
        {
            name: "Rahul Singhal",
            role: "Member",
            expertise: "",
            education: "Student of Electronics and Telecommunication Engineering",
            linkedin: "https://www.linkedin.com/in/rahulsinghal1709/",
            avatar: "🧑‍💻",

        },
        {
            name: "Yash Doke",
            role: "Member",
            expertise: "IoT & Machine Learning Enthusiast",
            education: "Student of Electronics and Telecommunication Engineering",
            linkedin: "https://www.linkedin.com/in/yashdoke2004/",
            avatar: "🧑‍💻",

        },
        {
            name: "Kush Jain",
            role: "Member",
            expertise: "",
            education: "Student of Computer Engineering",
            linkedin: "https://www.linkedin.com/in/kush-jain-0a8910299/",
            avatar: "🧑‍💻",

        },
        {
            name: "Anushka Gavankar",
            role: "Member",
            expertise: "",
            education: "Student of Electronics and Telecommunication Engineering",
            linkedin: "https://www.linkedin.com/in/anushka-gavankar/",
            avatar: "🧑‍💻",

        },
        {
            name: "Arshia Shah",
            role: "Member",
            expertise: "Web | AI | Embedded",
            education: "Student of Electronics and Telecommunication Engineering",
            linkedin: "https://www.linkedin.com/in/arshia-shah-813512301/",
            avatar: "🧑‍💻",

        }
    ];

    const values = [
        {
            icon: <Target className="h-8 w-8 text-blue-400" />,
            title: "Precision",
            description: "We strive for the highest accuracy in microplastics detection, ensuring reliable results for environmental protection."
        },
        {
            icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
            title: "Innovation",
            description: "Continuously pushing the boundaries of technology to create more effective solutions for environmental challenges."
        },
        {
            icon: <Heart className="h-8 w-8 text-red-400" />,
            title: "Environmental Stewardship",
            description: "Committed to protecting our planet's water resources through advanced monitoring and detection technologies."
        },
        {
            icon: <Globe className="h-8 w-8 text-green-400" />,
            title: "Global Impact",
            description: "Making microplastics detection accessible worldwide through portable, field-deployable technology."
        }
    ];

    const milestones = [
        {
            year: "2023",
            title: "Project Inception",
            description: "Initial research and development of microplastics detection technology began."
        },
        {
            year: "2024",
            title: "Prototype Development",
            description: "First working prototype with basic microscopy and AI detection capabilities."
        },
        {
            year: "2024",
            title: "Field Testing",
            description: "Successful field trials in multiple water environments with 95%+ accuracy."
        },
        {
            year: "2025",
            title: "System Launch",
            description: "Full deployment of Micro-Vision system with 96.8% detection accuracy."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/"
                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <img src="/image.png" alt="Micro-Vision Logo" className="h-8 w-8 rounded-full object-cover" />
                            <h1 className="text-2xl font-bold text-white">&mu;Vision</h1>
                        </div>
                        <div className="text-sm text-gray-400">
                            About Our Team
                        </div>
                    </div>
                    <nav className="flex items-center space-x-6">
                        <Link
                            to="/microplastics"
                            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                        >
                            <Microscope className="h-4 w-4" />
                            <span>Detection System</span>
                        </Link>

                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
                <div className="relative px-6 py-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                            About Eureka 200
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            We are a passionate team of aspiring engineers dedicated to solving the microplastics crisis through innovative technology.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="px-6 py-20 bg-gray-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                Our mission is to deliver a field-deployable microplastics detection product that combines digital holography and AI to provide fast, accurate, and actionable water-quality insights—anywhere, anytime.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Shield className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-white">Environmental Protection</h3>
                                        <p className="text-gray-400">Protecting aquatic ecosystems from microplastic pollution</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Zap className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-white">Real-time Monitoring</h3>
                                        <p className="text-gray-400">Providing instant detection and analysis capabilities</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Globe className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-white">Global Accessibility</h3>
                                        <p className="text-gray-400">Making advanced detection technology available worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                            <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
                            <p className="text-gray-300 text-center mb-6">
                                A world where microplastics pollution is detected, monitored, and prevented through advanced technology, ensuring clean water for future generations.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            We are an Electronics & Telecommunication engineering team with strengths across embedded systems, IoT, AI/ML, cloud, and web—building a field‑deployable microplastics detection product powered by digital holography and AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl">{member.avatar}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-white mb-1">
                                            {member.linkedin ? (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className="hover:underline hover:text-blue-400 transition-colors"
                                                >
                                                    {member.name}
                                                </a>
                                            ) : (
                                                member.name
                                            )}
                                        </h3>
                                        <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                                        <p className="text-gray-300 text-sm mb-3">{member.description}</p>
                                        <div className="space-y-2 text-xs text-gray-400">
                                            <div className="flex items-center space-x-2">
                                                <GraduationCap className="h-3 w-3" />
                                                <span>{member.education}</span>
                                            </div>
                                            {member.linkedin && (
                                                <div className="flex items-center space-x-2">
                                                    <Linkedin className="h-3 w-3" />
                                                    <a
                                                        href={member.linkedin}
                                                        target="_blank"
                                                        rel="noreferrer noopener"
                                                        className="text-blue-400 hover:text-blue-300"
                                                    >
                                                        LinkedIn Profile
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Footer */}
            <div className="bg-gray-800 border-t border-gray-700 px-6 py-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-white">&mu;Vision</h3>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-400">Microplastics Detection System</span>
                        </div>
                        <div className="flex space-x-6">
                            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                            <Link to="/microplastics" className="text-gray-400 hover:text-white transition-colors">Detection</Link>
                            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
