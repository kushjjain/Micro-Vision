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
      title: "Digital Inline Holography",
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
      {/* ...existing code... (Navbar will be added globally) */}

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
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{color:"rgb(196, 209, 224)"}}> Eureka_200's</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                &mu;Vision
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
      <div className="px-6 py-10 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose &mu;Vision?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our cutting-edge technology combines precision microscopy with artificial intelligence to deliver unmatched microplastics detection capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors hover:shadow-[0_0_24px_8px_rgba(59,130,246,0.4)] hover:shadow-blue-400"
              >
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
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
