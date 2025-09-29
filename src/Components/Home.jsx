import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Microscope,
  Shield,
  Zap,
  Globe,
  Users,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Beaker,
  Eye,
  TrendingUp,
  Database,
  Settings
} from "lucide-react";

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const features = [
    {
      icon: <Microscope className="h-8 w-8 text-blue-400" />,
      title: "Digital Holography",
      description: "Label-free 3D quantitative phase imaging with wide field-of-view for robust particle detection"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "AI-Powered Analysis",
      description: "Machine learning classification with high accuracy for polymer type and size distribution"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Real-time & High Throughput",
      description: "Minimal sample prep and automated pipeline enable rapid screening across many samples"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      title: "Field-Deployable Design",
      description: "Portable, low-power, and ruggedized for on-site water quality assessment"
    }
  ];

  const stats = [
    { label: "Detection Accuracy", value: "96.8%", icon: <TrendingUp className="h-6 w-6 text-green-400" /> },
    { label: "Processing Time", value: "14.5 min", icon: <Zap className="h-6 w-6 text-yellow-400" /> },
    { label: "Particles Detected", value: "165+", icon: <Activity className="h-6 w-6 text-blue-400" /> },
    { label: "Sample Volume", value: "50 mL", icon: <Beaker className="h-6 w-6 text-red-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header - Semi-transparent Navbar */}
      <div className="bg-gray-800/70 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src="/image.png" alt="Micro-Vision Logo" className="h-8 w-8 rounded-full object-cover" />
              <h1 className="text-2xl font-bold text-white">&mu;Vision</h1>
            </div>
            <div className="text-sm text-gray-400">
              Field-Deployable Microplastics Detection System
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">System Online</span>
            </div>
            <div className="text-sm text-gray-400">
              {currentTime.toLocaleTimeString()}
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/hero-background.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
          style={{ pointerEvents: 'none' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20 z-10"></div>
        <div className="relative px-6 py-40 md:py-48">
          <div className="max-w-7xl mx-auto z-20 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4"> Eureka 200's</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Micro-Vision
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionary field-deployable microplastics detection system powered by advanced AI and microscopy technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/microplastics"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  <span>Launch Detection System</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  <Users className="h-5 w-5" />
                  <span>The Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Idea Sections (Title, Description, Template, Abstract)
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-2">Idea Title</h2>
              <p className="text-gray-300">Field-Deployable Microplastics Detection System (&mu;Vision)</p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-2">Idea Template</h2>
              <p className="text-gray-300 mb-4">Detailed concept, problem context, approach, and outcomes.</p>
              <div className="flex items-center gap-3">
                <a
                  href="/SIH%20Script.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <span>View PDF</span>
                </a>
                <a
                  href="/SIH%20Script.pdf"
                  download
                  className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-3">Idea Description</h2>
              <p className="text-gray-300">
                A portable microplastics detection product that leverages digital holography (label-free 3D quantitative phase
                imaging) and AI to rapidly identify, size, and classify polymer particles in water samples. The system minimizes
                sample preparation, operates in the field, and delivers real-time analytics including size distribution,
                concentration, and dominant polymer types to support timely environmental decisions.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-3">Abstract / Summary</h2>
              <p className="text-gray-300">
                We address limitations of conventional lab-only methods (slow prep, high cost, low throughput, and limited
                deployability) by combining a compact digital holography module with an AI pipeline for on-device or edge
                inference. Our approach provides wide field-of-view capture, robust detection of fragments and fibers, and
                high-accuracy classification. The solution enables continuous, scalable monitoring of microplastics across
                diverse environments—rivers, lakes, coastal sites—empowering stakeholders with actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Limitations of Existing Methods */}
      <div className="px-6 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Limitations of Conventional Methods</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Traditional microplastics assessment relies on lab-heavy workflows that are slow, costly, and hard to deploy at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">Time-Consuming Sample Prep</h3>
              <p className="text-gray-400 text-sm">
                Density separation, filtration, chemical digestion, and staining steps can take hours to days per sample, delaying decisions.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">High Cost & Specialized Equipment</h3>
              <p className="text-gray-400 text-sm">
                FTIR/Raman spectroscopy and high-end microscopes demand expensive instruments and skilled operators, limiting accessibility.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">Limited Field Deployability</h3>
              <p className="text-gray-400 text-sm">
                Most protocols require controlled lab environments, preventing real-time, in-situ monitoring at remote or resource-limited sites.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">Low Throughput</h3>
              <p className="text-gray-400 text-sm">
                Manual counting and classification create bottlenecks, reducing the number of samples processed and impacting coverage.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">Subjective Classification</h3>
              <p className="text-gray-400 text-sm">
                Human interpretation introduces variability in particle identification, size estimation, and polymer classification.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">Fragment & Fiber Detection Challenges</h3>
              <p className="text-gray-400 text-sm">
                Very small particles (≤20μm), transparent fibers, and biofouled plastics are often missed by conventional workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Micro-Vision?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our cutting-edge technology combines precision microscopy with artificial intelligence to deliver unmatched microplastics detection capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem & Solution Section */}
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Microplastics Crisis</h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <p>Microplastics are contaminating our water sources at an alarming rate, threatening marine life and human health</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <p>Traditional detection methods are time-consuming, expensive, and require laboratory facilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <p>Current monitoring systems lack real-time capabilities and field deployment options</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Real-time Detection</h4>
                    <p className="text-gray-400 text-sm">Instant analysis with 14.5-minute processing time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Field-Ready Design</h4>
                    <p className="text-gray-400 text-sm">Portable system for on-site water quality assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">AI-Powered Accuracy</h4>
                    <p className="text-gray-400 text-sm">96.8% accuracy in polymer classification and particle detection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Comprehensive Analysis</h4>
                    <p className="text-gray-400 text-sm">Size distribution, polymer type classification, and risk assessment</p>
                  </div>
                </div>
              </div>
            </div>
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

export default Home;
