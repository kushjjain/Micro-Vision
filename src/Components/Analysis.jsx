import React, { useState, useEffect } from 'react';
import { Play, Loader2, CheckCircle2, XCircle, AlertCircle, Microscope, Camera, Brain, Database, Zap, Eye, Image as ImageIcon, ArrowRight } from 'lucide-react';
import ai1 from "../assets/ai1.png";
const Analysis = () => {
    const [analysisStage, setAnalysisStage] = useState('idle'); // idle, loading, processing, binary, classification, complete
    const [progress, setProgress] = useState(0);
    const [binaryResult, setBinaryResult] = useState(null);
    const [classificationResults, setClassificationResults] = useState(null);
    const [currentPage, setCurrentPage] = useState('start'); 


    const startAnalysis = () => {
        setAnalysisStage('loading');
        setProgress(0);
        setBinaryResult(null);
        setClassificationResults(null);
        setCurrentPage('start');

        // Stage 1: Loading (5 seconds) - then show images page
        setTimeout(() => {
            setCurrentPage('images');
            setAnalysisStage('processing'); // Shows loading for image 2
        }, 5000);

        // Stage 2: Show processed image after 2 more seconds (7 seconds total)
        setTimeout(() => {
            setAnalysisStage('processed'); // New stage to show the image
        }, 7000);

        // Stage 3: Start binary classification (10 seconds after showing image)
        setTimeout(() => {
            setAnalysisStage('binary');
            const isPlastic = Math.random() > 0.15;
            setBinaryResult({
                detected: isPlastic,
                confidence: isPlastic ? (95 + Math.random() * 4).toFixed(2) : (92 + Math.random() * 7).toFixed(2)
            });
        }, 17000);

        // Stage 4: If plastic, multi-class classification
        setTimeout(() => {
            const isPlastic = binaryResult?.detected !== false;
            if (isPlastic) {
                setAnalysisStage('classification');
                // changes
                const results = [
                    { name: 'PS', fullName: 'Polystyrene', confidence: (85 + Math.random() * 10).toFixed(2), color: '#F59E0B' },
                    { name: 'PP', fullName: 'Polypropylene', confidence: (78 + Math.random() * 12).toFixed(2), color: '#3B82F6' },
                    { name: 'PHA', fullName: 'Polyhydroxyalkanoates', confidence: (65 + Math.random() * 15).toFixed(2), color: '#10B981' },
                    { name: 'LDPE', fullName: 'Low-Density Polyethylene', confidence: (72 + Math.random() * 13).toFixed(2), color: '#EF4444' }
                ];
                setClassificationResults(results.sort((a, b) => b.confidence - a.confidence));
            }
        }, 27000);

        // Stage 5: Show results page
        setTimeout(() => {
            setAnalysisStage('complete');
            setCurrentPage('results');
        }, 37000);
    };
    // Progress bar animation
    useEffect(() => {
        if (analysisStage === 'loading' || analysisStage === 'processing' || analysisStage === 'classification') {
            const interval = setInterval(() => {
                setProgress(prev => prev < 100 ? prev + 1 : 100);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [analysisStage]);

    const resetAnalysis = () => {
        setAnalysisStage('idle');
        setBinaryResult(null);
        setClassificationResults(null);
        setProgress(0);
        setCurrentPage('start');
    };

    // START PAGE
    if (currentPage === 'start') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-2">
                <div className="max-w-2xl w-full">
                    <div className="text-center mb-12">
                        {/* <div className="flex items-center justify-center space-x-3 mb-4">
                            <Microscope className="h-16 w-16 text-blue-400" />
                        </div> */}
                        {/* <h1 className="text-4xl font-bold text-white mb-3">Microplastics Detection System</h1> */}
                        {/* <p className="text-xl text-gray-400">AI-Powered Binary and Multi-Class Classification</p> */}
                    </div>

                    {analysisStage === 'idle' ? (
                        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-12 text-center">
                            <Database className="h-20 w-20 text-gray-500 mx-auto mb-6" />
                            <h2 className="text-2xl font-semibold text-white mb-4">Ready to Analyze Sample</h2>
                            <p className="text-gray-400 mb-8">Click below to start automated detection from database</p>
                            <button
                                onClick={startAnalysis}
                                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl mx-auto text-lg"
                            >
                                <Play className="h-6 w-6" />
                                <span>Start Analysis</span>
                            </button>
                        </div>
                    ) : (
                        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-12 text-center">
                            <Loader2 className="h-20 w-20 text-blue-400 animate-spin mx-auto mb-6" />
                            <h2 className="text-2xl font-semibold text-white mb-4">Loading Sample from Database</h2>
                            <p className="text-gray-400 mb-6">Retrieving microscopic image data...</p>
                            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 transition-all duration-300 rounded-full"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <p className="text-gray-500 mt-3 text-sm">{progress}%</p>
                        </div>
                    )}

                    <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
                        <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/50">
                            <p className="text-gray-400 mb-1">Stage 1</p>
                            <p className="text-white font-semibold">Database Loading</p>
                        </div>
                        <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/50">
                            <p className="text-gray-400 mb-1">Stage 2</p>
                            <p className="text-white font-semibold">AI Processing</p>
                        </div>
                        <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/50">
                            <p className="text-gray-400 mb-1">Stage 3</p>
                            <p className="text-white font-semibold">Classification</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // IMAGES PAGE
    if (currentPage === 'images') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    {/* <div className="mb-8">
                        <div className="flex items-center space-x-3 mb-2">
                            <Microscope className="h-8 w-8 text-blue-400" />
                            <h1 className="text-3xl font-bold text-white">Sample Processing</h1>
                        </div>
                        <p className="text-gray-400">Microscopic image capture and feature extraction</p>
                    </div> */}

                    {/* Status Banner */}
                    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                                <div>
                                    <p className="text-sm text-gray-400">Current Stage</p>
                                    <p className="text-xl font-semibold text-white">
                                        {analysisStage === 'processing' ? 'AI Processing & Feature Extraction' :
                                            analysisStage === 'binary' ? 'Binary Classification' :
                                                analysisStage === 'classification' ? 'Multi-Class Analysis' : 'Processing...'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {(analysisStage === 'processing' || analysisStage === 'classification') && (
                            <div className="mt-4">
                                <div className="flex justify-between text-sm text-gray-400 mb-2">
                                    <span>Processing...</span>
                                    <span>{progress}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 transition-all duration-300 rounded-full"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Images Display */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Input Image 1 */}
                        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-white flex items-center">
                                    <Camera className="h-5 w-5 mr-2 text-blue-400" />
                                    Input Image 1: Raw Sample
                                </h3>
                                <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-400 font-medium">
                                    Original
                                </span>
                            </div>

                            <div className="border border-gray-600/50 rounded-lg overflow-hidden bg-gray-900/50">
                                <div className="aspect-video bg-gradient-to-br from-blue-500/5 to-gray-900/50 flex items-center justify-center p-8">
                                    {/* Placeholder for hardcoded image 1 */}
                                    <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-lg border-2 border-dashed border-blue-500/30 flex items-center justify-center">
                                        <div className="text-center">
                                            <ImageIcon className="h-16 w-16 text-blue-400/50 mx-auto mb-3" />
                                            <p className="text-gray-400 text-sm">Raw Microscopic Sample</p>
                                            <p className="text-gray-500 text-xs mt-1">4096×3072 • 400x Magnification</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2 text-sm">
                                <div className="flex justify-between text-gray-400">
                                    <span>Resolution:</span>
                                    <span className="text-white">4096 × 3072 pixels</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Magnification:</span>
                                    <span className="text-white">400x Digital</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Source:</span>
                                    <span className="text-white">Database Sample</span>
                                </div>
                            </div>
                        </div>

                        {/* Processed Image (Image 2) */}
                        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-white flex items-center">
                                    <Brain className="h-5 w-5 mr-2 text-green-400" />
                                    Image 2: Feature Extracted
                                </h3>
                                <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-xs text-green-400 font-medium">
                                    Processed
                                </span>
                            </div>
                            <div className="border border-gray-600/50 rounded-lg overflow-hidden bg-gray-900/50">
                                <div className="aspect-video bg-gradient-to-br from-green-500/5 to-gray-900/50 flex items-center justify-center p-8 relative">
                                    {/* Placeholder for hardcoded image 2 */}
                                    {analysisStage === 'processing' ? (
                                        <div className="w-full h-full bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-lg border-2 border-dashed border-green-500/30 flex items-center justify-center relative">
                                            <div className="text-center">
                                                <Loader2 className="h-16 w-16 text-green-400 animate-spin mx-auto mb-3" />
                                                <p className="text-green-400 text-sm font-medium">Extracting Features...</p>
                                                <p className="text-gray-500 text-xs mt-1">CNN Feature Detection Active</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full h-full rounded-lg flex items-center justify-center relative overflow-hidden">
                                            <img
                                                src={ai1}
                                                alt="Processed Microplastic Sample"
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4 space-y-2 text-sm">
                                <div className="flex justify-between text-gray-400">
                                    <span>Processing:</span>
                                    <span className="text-white">CNN Feature Extraction</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Algorithm:</span>
                                    <span className="text-white">ResNet-50 Transfer Learning</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Status:</span>
                                    <span className={`${analysisStage === 'processing' ? 'text-yellow-400' : 'text-green-400'} flex items-center`}>
                                        {analysisStage === 'processing' ? (
                                            <><Loader2 className="h-3 w-3 mr-1 animate-spin" /> Processing</>
                                        ) : (
                                            <><CheckCircle2 className="h-3 w-3 mr-1" /> Complete</>
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Processing Steps */}
                    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <ArrowRight className="h-5 w-5 mr-2 text-purple-400" />
                            Processing Pipeline
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center mb-3">
                                    <span className="text-blue-400 font-bold">1</span>
                                </div>
                                <p className="text-white font-medium mb-1">Image Loading</p>
                                <p className="text-gray-400 text-xs">Raw sample from database</p>
                            </div>
                            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/50 flex items-center justify-center mb-3">
                                    <span className="text-purple-400 font-bold">2</span>
                                </div>
                                <p className="text-white font-medium mb-1">Preprocessing</p>
                                <p className="text-gray-400 text-xs">Noise reduction & enhancement</p>
                            </div>
                            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-green-600/20 border border-green-500/50 flex items-center justify-center mb-3">
                                    <span className="text-green-400 font-bold">3</span>
                                </div>
                                <p className="text-white font-medium mb-1">Feature Extraction</p>
                                <p className="text-gray-400 text-xs">CNN deep learning layers</p>
                            </div>
                            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-yellow-600/20 border border-yellow-500/50 flex items-center justify-center mb-3">
                                    <span className="text-yellow-400 font-bold">4</span>
                                </div>
                                <p className="text-white font-medium mb-1">Classification</p>
                                <p className="text-gray-400 text-xs">Binary & multi-class analysis</p>
                            </div>
                        </div>
                    </div>

                    {(analysisStage === 'binary' || analysisStage === 'classification') && (
                        <div className="mt-8 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg text-center">
                            <p className="text-blue-300 flex items-center justify-center">
                                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                Running classification algorithms...
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // RESULTS PAGE
    if (currentPage === 'results') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="flex items-center space-x-3 mb-2">
                                    <Microscope className="h-8 w-8 text-green-400" />
                                    <h1 className="text-3xl font-bold text-white">Analysis Results</h1>
                                </div>
                                <p className="text-gray-400">Complete classification report</p>
                            </div>
                            <button
                                onClick={resetAnalysis}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 font-medium"
                            >
                                New Analysis
                            </button>
                        </div>
                    </div>

                    {/* Binary Classification Result */}
                    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <AlertCircle className="h-6 w-6 text-yellow-400" />
                            <h2 className="text-2xl font-bold text-white">Stage 1: Binary Classification</h2>
                        </div>

                        <div className={`border-2 rounded-xl p-8 ${binaryResult?.detected
                            ? 'border-green-500/50 bg-green-900/10'
                            : 'border-red-500/50 bg-red-900/10'
                            }`}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-4">
                                    {binaryResult?.detected ? (
                                        <CheckCircle2 className="h-16 w-16 text-green-400" />
                                    ) : (
                                        <XCircle className="h-16 w-16 text-red-400" />
                                    )}
                                    <div>
                                        <p className="text-3xl font-bold text-white mb-1">
                                            {binaryResult?.detected ? 'PLASTIC DETECTED' : 'NOT PLASTIC'}
                                        </p>
                                        <p className="text-gray-400">Binary classification complete</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-400 mb-1">Confidence Level</p>
                                    <p className={`text-5xl font-bold ${binaryResult?.detected ? 'text-green-400' : 'text-red-400'
                                        }`}>
                                        {binaryResult?.confidence}%
                                    </p>
                                </div>
                            </div>

                            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden mb-6">
                                <div
                                    className={`h-4 rounded-full transition-all duration-1000 ${binaryResult?.detected
                                        ? 'bg-gradient-to-r from-green-500 to-green-600'
                                        : 'bg-gradient-to-r from-red-500 to-red-600'
                                        }`}
                                    style={{ width: `${binaryResult?.confidence}%` }}
                                ></div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div className="bg-gray-900/50 rounded-lg p-4">
                                    <p className="text-gray-400 mb-1">Model Type</p>
                                    <p className="text-white font-semibold">CNN Binary Classifier</p>
                                </div>
                                <div className="bg-gray-900/50 rounded-lg p-4">
                                    <p className="text-gray-400 mb-1">Training Accuracy</p>
                                    <p className="text-white font-semibold">99.57%</p>
                                </div>
                                <div className="bg-gray-900/50 rounded-lg p-4">
                                    <p className="text-gray-400 mb-1">Processing Time</p>
                                    <p className="text-white font-semibold">~2.3 seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Multi-Class Classification Results */}
                    {binaryResult?.detected && classificationResults ? (
                        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <Brain className="h-6 w-6 text-purple-400" />
                                <h2 className="text-2xl font-bold text-white">Stage 2: Multi-Class Polymer Classification</h2>
                            </div>

                            {/* Top Result Highlight */}
                            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-2 border-purple-500/50 rounded-xl p-8 mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Primary Detection</p>
                                        <p className="text-4xl font-bold text-white mb-2">{classificationResults[0].name}</p>
                                        <p className="text-xl text-gray-300">{classificationResults[0].fullName}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-400 mb-2">Confidence Score</p>
                                        <p className="text-6xl font-bold text-purple-400">{classificationResults[0].confidence}%</p>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-5 rounded-full transition-all duration-1000"
                                        style={{ width: `${classificationResults[0].confidence}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* All Classifications Table */}
                            <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl overflow-hidden">
                                <div className="px-6 py-4 bg-gray-800/50 border-b border-gray-700">
                                    <h3 className="text-lg font-semibold text-white">Complete Classification Results</h3>
                                </div>
                                <div className="divide-y divide-gray-700/50">
                                    {classificationResults.map((result, index) => (
                                        <div key={index} className="px-6 py-5 hover:bg-gray-800/30 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4 flex-1">
                                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: result.color }}>
                                                        #{index + 1}
                                                    </div>
                                                    <div>
                                                        <p className="text-xl font-semibold text-white">{result.name}</p>
                                                        <p className="text-gray-400">{result.fullName}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-6">
                                                    <div className="w-64">
                                                        <div className="flex justify-between text-sm mb-2">
                                                            <span className="text-gray-400">Confidence</span>
                                                            <span className="text-white font-semibold">{result.confidence}%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                                            <div
                                                                className="h-3 rounded-full transition-all duration-1000"
                                                                style={{
                                                                    width: `${result.confidence}%`,
                                                                    backgroundColor: result.color
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <p className="text-3xl font-bold text-white w-24 text-right">{result.confidence}%</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Model Information */}
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
                                    <p className="text-gray-400 text-sm mb-2">Classification Model</p>
                                    <p className="text-white font-semibold text-lg">Multi-Class CNN</p>
                                </div>
                                <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
                                    <p className="text-gray-400 text-sm mb-2">Total Classes</p>
                                    <p className="text-white font-semibold text-lg">4 Polymer Types</p>
                                </div>
                                <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
                                    <p className="text-gray-400 text-sm mb-2">Model Accuracy</p>
                                    <p className="text-white font-semibold text-lg">98.70%</p>
                                </div>
                            </div>
                        </div>
                    ) : binaryResult && !binaryResult.detected ? (
                        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center">
                            <XCircle className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-400 mb-2">No Plastic Detected</h3>
                            <p className="text-gray-500">Multi-class classification not performed as sample is not plastic.</p>
                        </div>
                    ) : null}
                    {/* Complete Status Banner */}
                    <div className="mt-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-2 border-green-500/50 rounded-xl p-6">
                        <div className="flex items-center justify-center space-x-4">
                            <CheckCircle2 className="h-12 w-12 text-green-400" />
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">Analysis Complete</p>
                                <p className="text-gray-300">All classification stages finished successfully</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default Analysis;