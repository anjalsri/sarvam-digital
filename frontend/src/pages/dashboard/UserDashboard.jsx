import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { LayoutDashboard, ShoppingCart, FolderKanban, CreditCard, MessageSquare, Bell, Bot, User } from 'lucide-react';

// Import all User Tools
import UserOverview from '../../components/dashboard/user/UserOverview';
import ServicesTool from '../../components/dashboard/user/ServicesTool';
import ProjectTracking from '../../components/dashboard/user/ProjectTracking';
import UserPayments from '../../components/dashboard/user/UserPayments';
import UserChat from '../../components/dashboard/user/UserChat';
import UserNotifications from '../../components/dashboard/user/UserNotifications';
import UserAITool from '../../components/dashboard/user/UserAITool';
import ProfileTool from '../../components/dashboard/user/ProfileTool';

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'services', label: 'Services Tool', icon: ShoppingCart },
    { id: 'projects', label: 'Project Tracking', icon: FolderKanban },
    { id: 'payments', label: 'Payment Tool', icon: CreditCard },
    { id: 'chat', label: 'Chat Tool', icon: MessageSquare },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'ai', label: 'AI Tool', icon: Bot },
    { id: 'profile', label: 'Profile Tool', icon: User },
  ];

  return (
    <DashboardLayout 
      title="User Dashboard" 
      user={user} 
      sidebarItems={sidebarItems} 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
      onLogout={logout}
    >
      <div className="w-full h-full relative">
        {activeTab === 'overview' && <UserOverview user={user} />}
        {activeTab === 'services' && <ServicesTool />}
        {activeTab === 'projects' && <ProjectTracking />}
        {activeTab === 'payments' && <UserPayments />}
        {activeTab === 'chat' && <UserChat />}
        {activeTab === 'notifications' && <UserNotifications />}
        {activeTab === 'ai' && <UserAITool />}
        {activeTab === 'profile' && <ProfileTool user={user} />}
      </div>
    </DashboardLayout>
  );
}
