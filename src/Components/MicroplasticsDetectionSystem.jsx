import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend, ScatterChart, Scatter, Area, AreaChart } from 'recharts';
import { Upload, Camera, FileImage, AlertTriangle, CheckCircle2, Activity, Beaker, Waves, Microscope, Zap, Database, Settings, Eye, TrendingUp } from 'lucide-react';
import image from "../assets/image.png";
import image_ai from "../assets/image_ai.png";

const MicroplasticsDetectionSystem = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const particleSizeData = [
        { size: '10-20μm', polyethylene: 47, polypropylene: 38 },
        { size: '20-50μm', polyethylene: 73, polypropylene: 65 },
        { size: '50-100μm', polyethylene: 28, polypropylene: 34 },
        { size: '100-200μm', polyethylene: 12, polypropylene: 18 },
        { size: '>200μm', polyethylene: 5, polypropylene: 9 },
    ];


    const polymerTypeData = [
        { name: 'Polyethylene (PE)', value: 110, color: '#10b981', particles: 110 },
        { name: 'Polypropylene (PP)', value: 45, color: '#3b82f6', particles: 45 },
        { name: 'Others', value: 10, color: '#D3D3D3', particles: 10 }
    ];


    const systemMetrics = {
        totalParticles: 165,
        concentration: 165.2,
        dominantPolymer: 'Polyethylene (PE)',
        averageSize: '31.7μm',
        confidenceScore: 96.8,
        detectionTime: '14.5 min',
        sampleVolume: '50 mL',
        batteryLevel: 87,
        sensorStatus: 'Active',
        calibrationDate: '2025-09-04'
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
                    <p className="text-gray-300 text-sm">{`${label}`}</p>
                    {payload.map((entry, index) => (
                        <p key={index} className="text-white text-sm">
                            {`${entry.dataKey}: ${entry.value}`}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <h1 className="text-2xl font-bold text-white">&mu;Vision</h1>
                        </div>
                        <div className="text-sm text-gray-400">
                            Field-Deployable Microplastics Detection System
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-300">System Online</span>
                        </div>
                        <div className="text-sm text-gray-400">
                            {currentTime.toLocaleTimeString()}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Total Detected</p>
                                <p className="text-2xl font-bold text-white">{systemMetrics.totalParticles}</p>
                                <p className="text-xs text-gray-500">particles</p>
                            </div>
                            <Activity className="h-8 w-8 text-blue-400" />
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Concentration</p>
                                <p className="text-2xl font-bold text-white">{systemMetrics.concentration}</p>
                                <p className="text-xs text-gray-500">particles/10ml</p>
                            </div>
                            <Beaker className="h-8 w-8 text-red-400" />
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Avg. Size</p>
                                <p className="text-2xl font-bold text-white">{systemMetrics.averageSize}</p>
                                <p className="text-xs text-gray-500">micrometers</p>
                            </div>
                            <Eye className="h-8 w-8 text-green-400" />
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">ML Confidence</p>
                                <p className="text-2xl font-bold text-white">{systemMetrics.confidenceScore}%</p>
                                <p className="text-xs text-gray-500">accuracy</p>
                            </div>
                            <TrendingUp className="h-8 w-8 text-purple-400" />
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Detection Time</p>
                                <p className="text-2xl font-bold text-white">{systemMetrics.detectionTime}</p>
                                <p className="text-xs text-gray-500">minutes</p>
                            </div>
                            <Zap className="h-8 w-8 text-yellow-400" />
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Battery Level</p>
                                <p className="text-2xl font-bold text-white">{systemMetrics.batteryLevel}%</p>
                                <p className="text-xs text-gray-500">remaining</p>
                            </div>
                            <Database className="h-8 w-8 text-orange-400" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Camera className="h-5 w-5 mr-2 text-blue-400" />
                            Raw Microscopic Capture
                        </h3>
                        {/* <div className="border border-gray-600/50 rounded-lg p-4 bg-gray-900/30">
                            <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-gray-900/50 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
                                <div className="text-center z-10">
                                    <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                                    <p className="text-blue-400 font-medium">Live Imaging Active</p>
                                    <p className="text-gray-400 text-sm">400x Digital Magnification</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent h-full animate-bounce"></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>Resolution: 4096×3072</span>
                                <span>Focus: Auto</span>
                                <span>LED: Full Spectrum</span>
                            </div>
                        </div> */}
                        <div className="border border-gray-600/50 rounded-lg p-4 bg-gray-900/30">
                            <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-gray-900/50 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">

                                {/* Full background image */}
                                <img
                                    src={image}
                                    alt="Live Imaging"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Blue gradient pulse overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"></div>

                                {/* Content (spinner + text) */}
                                <div className="text-center z-10">
                                    <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                                    <p className="text-blue-400 font-medium">Live Imaging Active</p>
                                </div>

                                {/* Bottom bounce overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent h-full animate-bounce"></div>
                            </div>

                            <div className="flex justify-between text-xs text-gray-400">
                                <span>Resolution: 3280×2464</span>
                                <span>Focus: Auto</span>
                                <span>LED: Full Spectrum</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Eye className="h-5 w-5 mr-2 text-green-400" />
                            AI-Processed Detection
                        </h3>

                        <div className="border border-gray-600 rounded-lg p-4 bg-gray-900/50">
                            <div className="aspect-video bg-gradient-to-br from-green-900/20 to-gray-900/50 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">

                                {/* Background image */}
                                <img
                                    src={image_ai}
                                    alt="AI Processed Detection"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Foreground content */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                flex items-center gap-2 bg-black/60 text-green-400 
                px-3 py-1 rounded-md text-[16px] shadow-md">
                                    <CheckCircle2 className="h-4 w-4" />
                                    <span>33 Particles Detected</span>

                                </div>

                                {/* Overlay pulse dots */}
                                <div className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                            </div>

                            <div className="flex justify-between text-xs">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                                    <span className="text-gray-400">PE</span>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                                    <span className="text-gray-400">PP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Analytics Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-8">
                    {/* Particle Size Distribution */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Size Distribution Analysis
                        </h3>
                        <ResponsiveContainer width="100%" height={280}>
                            <BarChart data={particleSizeData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="size" stroke="#9CA3AF" fontSize={12} />
                                <YAxis stroke="#9CA3AF" fontSize={12} />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend wrapperStyle={{ fontSize: "12px", color: "#D1D5DB" }} />

                                {/* Polyethylene (Blue) */}
                                <Bar
                                    dataKey="polyethylene"
                                    fill="#3B82F6"
                                    radius={[2, 2, 0, 0]}
                                    isAnimationActive={false}
                                    name="Polyethylene"
                                />

                                {/* Polypropylene (Orange) */}
                                <Bar
                                    dataKey="polypropylene"
                                    fill="#F97316"
                                    radius={[2, 2, 0, 0]}
                                    isAnimationActive={false}
                                    name="Polypropylene"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>


                    {/* Polymer Classification */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Polymer Type Classification</h3>
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie
                                    data={polymerTypeData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={40}
                                    outerRadius={90}
                                    paddingAngle={2}
                                    dataKey="value"
                                    isAnimationActive={false}
                                >
                                    {polymerTypeData.map((entry, index) => {
                                        let fillColor = "#9CA3AF"; // default gray

                                        if (entry.name.toLowerCase().includes("polyethylene")) {
                                            fillColor = "#3B82F6"; // blue
                                        } else if (entry.name.toLowerCase().includes("polypropylene")) {
                                            fillColor = "#F97316"; // orange
                                        }

                                        return <Cell key={`cell-${index}`} fill={fillColor} />;
                                    })}
                                </Pie>

                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                            {polymerTypeData.map((item, index) => {
                                let color = "#9CA3AF"; // default gray

                                if (item.name.toLowerCase().includes("polyethylene")) {
                                    color = "#3B82F6"; // blue
                                } else if (item.name.toLowerCase().includes("polypropylene")) {
                                    color = "#F97316"; // orange
                                }

                                return (
                                    <div key={index} className="flex items-center">
                                        <div
                                            className="w-3 h-3 rounded-full mr-2"
                                            style={{ backgroundColor: color }}
                                        ></div>
                                        <span className="text-gray-300 truncate">
                                            {item.name.split(" ")[0]} ({item.value})
                                        </span>
                                    </div>
                                );
                            })}
                        </div>


                    </div>
                </div>

                {/* System Status & Analysis Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Detection Summary */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
                            Detection Summary
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Sample Volume</span>
                                <span className="text-white font-medium">{systemMetrics.sampleVolume}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Processing Time</span>
                                <span className="text-white font-medium">{systemMetrics.detectionTime}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Dominant Polymer</span>
                                <span className="text-green-400 font-medium">PE (38%)</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Risk Assessment</span>
                                <span className="text-yellow-400 font-medium">Moderate</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">ML Confidence</span>
                                <span className="text-white font-medium">{systemMetrics.confidenceScore}%</span>
                            </div>
                        </div>
                    </div>

                    {/* System Health */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Settings className="h-5 w-5 mr-2 text-blue-400" />
                            System Health
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Sensor Status</span>
                                <span className="text-green-400 font-medium">{systemMetrics.sensorStatus}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Battery Level</span>
                                <span className="text-white font-medium">{systemMetrics.batteryLevel}%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Last Calibration</span>
                                <span className="text-white font-medium">{systemMetrics.calibrationDate}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Data Storage</span>
                                <span className="text-white font-medium">120 KB used</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Network Status</span>
                                <span className="text-green-400 font-medium">Connected</span>
                            </div>
                        </div>
                    </div>
                    {/* 

                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <CheckCircle2 className="h-5 w-5 mr-2 text-green-400" />
                            AI Recommendations
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div className="bg-yellow-900/20 border border-yellow-700 rounded p-3">
                                <p className="text-yellow-300 font-medium">Attention Required</p>
                                <p className="text-gray-300">PE concentration above normal levels</p>
                            </div>
                            <div className="bg-blue-900/20 border border-blue-700 rounded p-3">
                                <p className="text-blue-300 font-medium">Analysis Complete</p>
                                <p className="text-gray-300">Continue monitoring recommended</p>
                            </div>
                            <div className="bg-green-900/20 border border-green-700 rounded p-3">
                                <p className="text-green-300 font-medium">System Optimal</p>
                                <p className="text-gray-300">All sensors functioning normally</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default MicroplasticsDetectionSystem;