import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line, AreaChart, Area, ScatterChart, Scatter, ZAxis } from 'recharts';
import { Camera, AlertTriangle, CheckCircle2, Activity, Eye, TrendingUp, Database, Settings, Zap, Brain } from 'lucide-react';

const MicroplasticsDetectionSystem = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Confidence data for different polymer types
    const polymerConfidenceData = [
        { polymer: 'PE', confidence: 96.8, color: '#3B82F6' },
        { polymer: 'PS', confidence: 87.3, color: '#F97316' },
        { polymer: 'PP', confidence: 78.5, color: '#EF4444' },
        { polymer: 'PHA', confidence: 82.1, color: '#10B981' },
    ];

    const polymerTypeData = [
        { name: 'PE', value: 45, color: '#3B82F6' },
        { name: 'PS', value: 32, color: '#F97316' },
        { name: 'PHA', value: 18, color: '#10B981' },
        { name: 'PP', value: 25, color: '#EF4444' }
    ];

    // Time-based detection data

    // Confidence comparison data
    const confidenceComparisonData = [
        { type: 'PE', avgConfidence: 96.8, detections: 45 },
        { type: 'PS', avgConfidence: 87.3, detections: 32 },
        { type: 'PHA', avgConfidence: 82.1, detections: 18 },
        { type: 'PP', avgConfidence: 78.5, detections: 25 },
    ];

    const systemMetrics = {
        dominantPolymer: 'PE (Polyethylene)',
        confidenceScore: 96.8,
        detectionTime: '14.5 sec',
        batteryLevel: 87,
        sensorStatus: 'Active',
        calibrationDate: '2025-09-04',
        modelAccuracy: 94.2,
        classification: 'Binary + Multi-class'
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const isFrequency = payload[0].payload.name; // Check if it's from polymer frequency data
            return (
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
                    <p className="text-gray-300 text-sm">{`${label || payload[0].payload.polymer || payload[0].payload.name}`}</p>
                    {payload.map((entry, index) => (
                        <p key={index} className="text-white text-sm">
                            {isFrequency ? `Detected: ${entry.value} times` : `Confidence: ${entry.value}%`}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="p-6">
                {/* Key Metrics */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-4 backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-green-400 uppercase tracking-wide">Primary Match</p>
                                    <p className="text-2xl font-bold text-white">PE (Polyethylene)</p>
                                    <p className="text-xs text-gray-400">polymer type</p>
                                </div>
                                <CheckCircle2 className="h-8 w-8 text-green-400 opacity-80" />
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-4 backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-purple-400 uppercase tracking-wide">AI Confidence</p>
                                    <p className="text-2xl font-bold text-white">{systemMetrics.confidenceScore}%</p>
                                    <p className="text-xs text-gray-400">detection accuracy</p>
                                </div>
                                <TrendingUp className="h-8 w-8 text-purple-400 opacity-80" />
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-4 backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-blue-400 uppercase tracking-wide">Model Accuracy</p>
                                    <p className="text-2xl font-bold text-white">{systemMetrics.modelAccuracy}%</p>
                                    <p className="text-xs text-gray-400">overall performance</p>
                                </div>
                                <Brain className="h-8 w-8 text-blue-400 opacity-80" />
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-xl p-4 backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-yellow-400 uppercase tracking-wide">Analysis Time</p>
                                    <p className="text-2xl font-bold text-white">{systemMetrics.detectionTime}</p>
                                    <p className="text-xs text-gray-400">processing speed</p>
                                </div>
                                <Zap className="h-8 w-8 text-yellow-400 opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Analytics Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Confidence Distribution */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Confidence Level Distribution
                        </h3>
                        <ResponsiveContainer width="100%" height={280}>
                            <BarChart data={polymerConfidenceData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="polymer" stroke="#9CA3AF" fontSize={12} />
                                <YAxis stroke="#9CA3AF" fontSize={12} label={{ value: 'Confidence (%)', angle: -90, position: 'insideLeft', style: { fill: '#9CA3AF' } }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar
                                    dataKey="confidence"
                                    radius={[8, 8, 0, 0]}
                                    isAnimationActive={false}
                                >
                                    {polymerConfidenceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Polymer Occurrence Count */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Polymer Detection Frequency</h3>
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie
                                    data={polymerTypeData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={90}
                                    paddingAngle={3}
                                    dataKey="value"
                                    isAnimationActive={false}
                                >
                                    {polymerTypeData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                            {polymerTypeData.map((item, index) => (
                                <div key={index} className="flex items-center justify-between bg-gray-700/30 rounded px-2 py-1">
                                    <div className="flex items-center">
                                        <div
                                            className="w-3 h-3 rounded-full mr-2"
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                        <span className="text-gray-300">{item.name}</span>
                                    </div>
                                    <span className="text-white font-medium">{item.value} times</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Classification Summary & System Health */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Classification Summary */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
                            Classification Summary
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Classification Type</span>
                                <span className="text-white font-medium">{systemMetrics.classification}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Processing Time</span>
                                <span className="text-white font-medium">{systemMetrics.detectionTime}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Primary Detection</span>
                                <span className="text-green-400 font-medium">{systemMetrics.dominantPolymer}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Binary Result</span>
                                <span className="text-green-400 font-medium">Plastic Detected</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">ML Confidence</span>
                                <span className="text-white font-medium">{systemMetrics.confidenceScore}%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Model Accuracy</span>
                                <span className="text-blue-400 font-medium">{systemMetrics.modelAccuracy}%</span>
                            </div>
                        </div>
                    </div>

                    {/* System Health */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Settings className="h-5 w-5 mr-2 text-blue-400" />
                            System Status
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Model Status</span>
                                <span className="text-green-400 font-medium">{systemMetrics.sensorStatus}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Power Level</span>
                                <span className="text-white font-medium">{systemMetrics.batteryLevel}%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Last Calibration</span>
                                <span className="text-white font-medium">{systemMetrics.calibrationDate}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Model Architecture</span>
                                <span className="text-white font-medium">SVM Classifier</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Network Status</span>
                                <span className="text-green-400 font-medium">Connected</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Data Storage</span>
                                <span className="text-white font-medium">85 KB used</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MicroplasticsDetectionSystem;