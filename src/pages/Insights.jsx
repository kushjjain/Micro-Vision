import React from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Activity,
  Zap,
  Shield,
  Globe,
  Microscope,
  Beaker,
} from "lucide-react";

const Insights = () => {
  const limitations = [
    "Time-Consuming Sample Preparation",
    "High Cost & Specialized Equipment",
    "Limited Field Deployability",
    "Low Throughput",
    "Subjective Classification",
    "Fragment & Fiber Detection Challenges",
  ];

  const features = [
    {
      icon: <Microscope className="h-8 w-8 text-blue-400" />,
      title: "Digital Inline Holography",
      description:
        "Label-free 3D quantitative phase imaging for robust particle detection.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "AI-Powered Analysis",
      description:
        "Machine learning classification with high accuracy for polymer type and size distribution.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Real-time & High Throughput",
      description:
        "Automated pipeline enables rapid screening across many samples.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      title: "Field-Deployable Design",
      description:
        "Portable, low-power, and ruggedized for on-site water quality assessment.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Page Header */}
      <div className="text-center py-20 bg-gray-800 border-b border-gray-700">
        <h1 className="text-4xl font-bold mb-3">Microplastic Insights</h1>
        <p className="text-gray-400 text-lg">
          Understand the challenges, innovations, and impact of μVision
        </p>
      </div>

      {/* Limitations Section */}
      <div className="px-6 py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Limitations of Conventional Methods
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {limitations.map((text, i) => (
              <div
                key={i}
                className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50
                           hover:border-blue-400 hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.4)]
                           hover:shadow-blue-400 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                  <h3 className="font-semibold text-lg">{text}</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  {i === 0 &&
                    "Sample prep steps like filtration and staining take hours to days per sample."}
                  {i === 1 &&
                    "High-end microscopes and spectroscopy systems demand costly setups."}
                  {i === 2 &&
                    "Conventional workflows lack real-time, on-site monitoring capabilities."}
                  {i === 3 &&
                    "Manual counting and analysis lead to slower throughput and inconsistent data."}
                  {i === 4 &&
                    "Human bias affects polymer identification and size estimation."}
                  {i === 5 &&
                    "Smaller or transparent particles often escape detection."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose μVision */}
      <div className="px-6 py-20 bg-gray-800/40">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose μVision?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our technology combines precision optics with AI for unmatched
            accuracy and field-ready performance.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/50
                         hover:border-gray-500 hover:shadow-[0_0_24px_8px_rgba(59,130,246,0.4)]
                         hover:shadow-blue-400 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{f.title}</h3>
              <p className="text-gray-400 text-center text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Crisis & Solution Section */}
      <div className="px-6 py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              The Microplastics Crisis
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                <p>
                  Microplastics contaminate our oceans, soil, and drinking
                  water—impacting ecosystems and human health.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                <p>
                  Traditional lab-based analysis is too slow and costly for
                  real-time intervention.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                <p>
                  Field data collection is limited, reducing our ability to
                  monitor contamination effectively.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Our Solution
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-400 mt-1" />
                <p>AI-driven polymer classification with 96.8% accuracy.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-400 mt-1" />
                <p>
                  Real-time, on-site detection with just 14.5-minute processing.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-400 mt-1" />
                <p>Portable and rugged design for field applications.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-400 mt-1" />
                <p>
                  Comprehensive analytics: size distribution and contamination
                  risk mapping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 px-6 py-8">
        <div className="text-center text-gray-400 text-sm">
          © 2025 μVision — Pioneering the future of microplastics detection.
        </div>
      </div>
    </div>
  );
};

export default Insights;
