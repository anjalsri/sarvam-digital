import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { LayoutDashboard, Users, Briefcase, FolderKanban, CreditCard, Mail, MessageSquare, Bell, Image as ImageIcon, Bot, Settings } from 'lucide-react';

// Import all Admin Tools
import AdminOverview from '../../components/dashboard/admin/AdminOverview';
import UserManagement from '../../components/dashboard/admin/UserManagement';
import ServiceManagement from '../../components/dashboard/admin/ServiceManagement';
import ProjectManagement from '../../components/dashboard/admin/ProjectManagement';
import PaymentTool from '../../components/dashboard/admin/PaymentTool';
import LeadsCRM from '../../components/dashboard/admin/LeadsCRM';
import ChatTool from '../../components/dashboard/admin/ChatTool';
import NotificationTool from '../../components/dashboard/admin/NotificationTool';
import PortfolioTool from '../../components/dashboard/admin/PortfolioTool';
import AITool from '../../components/dashboard/admin/AITool';
import SettingsTool from '../../components/dashboard/admin/SettingsTool';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'services', label: 'Services Tool', icon: Briefcase },
    { id: 'projects', label: 'Projects Tool', icon: FolderKanban },
    { id: 'payments', label: 'Payment Tool', icon: CreditCard },
    { id: 'leads', label: 'Leads (CRM)', icon: Mail },
    { id: 'chat', label: 'Chat Tool', icon: MessageSquare },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'portfolio', label: 'Portfolio Tool', icon: ImageIcon },
    { id: 'ai', label: 'AI Generator', icon: Bot },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <DashboardLayout 
      title="Admin Dashboard" 
      user={user} 
      sidebarItems={sidebarItems} 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
      onLogout={logout}
    >
      <div className="w-full h-full relative">
        {activeTab === 'overview' && <AdminOverview user={user} />}
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'services' && <ServiceManagement />}
        {activeTab === 'projects' && <ProjectManagement />}
        {activeTab === 'payments' && <PaymentTool />}
        {activeTab === 'leads' && <LeadsCRM />}
        {activeTab === 'chat' && <ChatTool />}
        {activeTab === 'notifications' && <NotificationTool />}
        {activeTab === 'portfolio' && <PortfolioTool />}
        {activeTab === 'ai' && <AITool />}
        {activeTab === 'settings' && <SettingsTool />}
      </div>
    </DashboardLayout>
  );
}
