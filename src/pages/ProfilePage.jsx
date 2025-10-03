import React, { useState } from 'react';
import { User, Mail, Lock, Edit2, Save, X, Camera, Shield, Bell, Trash2 } from 'lucide-react';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('profile'); // profile, security, notifications
    const [profileData, setProfileData] = useState({
        name: localStorage.getItem('userName') || 'User Name',
        email: localStorage.getItem('userName') + '@gmail.com',
        role: 'Environmental Researcher',
        organization: 'Marine Research Institute',
        phone: '+91 98765 43210',
        location: 'Mumbai, Maharashtra'
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleProfileChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveProfile = () => {
        localStorage.setItem('userName', profileData.name);
        setIsEditing(false);
        // Add your save logic here
    };

    const handleUpdatePassword = () => {
        // Add password update logic
        setPasswordData({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
                    <p className="text-gray-400">Manage your account settings and preferences</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 space-y-2">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'profile'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }`}
                            >
                                <User className="h-5 w-5" />
                                <span className="font-medium">Profile</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('security')}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'security'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }`}
                            >
                                <Shield className="h-5 w-5" />
                                <span className="font-medium">Security</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('notifications')}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'notifications'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }`}
                            >
                                <Bell className="h-5 w-5" />
                                <span className="font-medium">Notifications</span>
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Profile Tab */}
                        {activeTab === 'profile' && (
                            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-8">
                                {/* Profile Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                                                {profileData.name.charAt(0).toUpperCase()}
                                            </div>
                                            <button className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 hover:bg-blue-700 transition-colors">
                                                <Camera className="h-4 w-4 text-white" />
                                            </button>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">{profileData.name}</h2>
                                            <p className="text-gray-400">{profileData.email}</p>
                                        </div>
                                    </div>
                                    {!isEditing ? (
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                                        >
                                            <Edit2 className="h-4 w-4" />
                                            <span>Edit Profile</span>
                                        </button>
                                    ) : (
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={handleSaveProfile}
                                                className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all"
                                            >
                                                <Save className="h-4 w-4" />
                                                <span>Save</span>
                                            </button>
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
                                            >
                                                <X className="h-4 w-4" />
                                                <span>Cancel</span>
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Profile Form */}
                                <div className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={profileData.name}
                                                onChange={handleProfileChange}
                                                disabled={!isEditing}
                                                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={profileData.email}
                                                onChange={handleProfileChange}
                                                disabled={!isEditing}
                                                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Role</label>
                                            <input
                                                type="text"
                                                name="role"
                                                value={profileData.role}
                                                onChange={handleProfileChange}
                                                disabled={!isEditing}
                                                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Organization</label>
                                            <input
                                                type="text"
                                                name="organization"
                                                value={profileData.organization}
                                                onChange={handleProfileChange}
                                                disabled={!isEditing}
                                                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={profileData.phone}
                                                onChange={handleProfileChange}
                                                disabled={!isEditing}
                                                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Location</label>
                                            <input
                                                type="text"
                                                name="location"
                                                value={profileData.location}
                                                onChange={handleProfileChange}
                                                disabled={!isEditing}
                                                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Security Tab */}
                        {activeTab === 'security' && (
                            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>

                                <div className="space-y-6">
                                    {/* Change Password Section */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Current Password</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="password"
                                                        name="currentPassword"
                                                        value={passwordData.currentPassword}
                                                        onChange={handlePasswordChange}
                                                        placeholder="Enter current password"
                                                        className="w-full bg-gray-900/50 border border-gray-600 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">New Password</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="password"
                                                        name="newPassword"
                                                        value={passwordData.newPassword}
                                                        onChange={handlePasswordChange}
                                                        placeholder="Enter new password"
                                                        className="w-full bg-gray-900/50 border border-gray-600 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Confirm New Password</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="password"
                                                        name="confirmPassword"
                                                        value={passwordData.confirmPassword}
                                                        onChange={handlePasswordChange}
                                                        placeholder="Confirm new password"
                                                        className="w-full bg-gray-900/50 border border-gray-600 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                onClick={handleUpdatePassword}
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                            >
                                                Update Password
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notifications Tab */}
                        {activeTab === 'notifications' && (
                            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Notification Preferences</h2>

                                <div className="space-y-4">
                                    {[
                                        { title: 'Analysis Complete', description: 'Get notified when microplastics analysis is complete' },
                                        { title: 'System Alerts', description: 'Receive alerts about system status and issues' },
                                        { title: 'Weekly Reports', description: 'Get weekly summary of detection activities' },
                                        { title: 'Email Notifications', description: 'Receive notifications via email' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center justify-between bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                                            <div>
                                                <p className="text-white font-medium">{item.title}</p>
                                                <p className="text-gray-400 text-sm">{item.description}</p>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;