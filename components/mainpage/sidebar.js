"use client";
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/home', label: 'Dashboard', icon: 'fa-chart-pie' },
    { href: '/leaderboard', label: 'Leaderboard', icon: 'fa-chart-line' },
    { href: '/order', label: 'Order', icon: 'fa-shopping-cart' },
    { href: '/products', label: 'Products', icon: 'fa-box' },
    { href: '/sales-report', label: 'Sales Report', icon: 'fa-chart-bar' },
    { href: '/messages', label: 'Messages', icon: 'fa-envelope' },
  ];

  const settingsItems = [
    { href: '/settings', label: 'Settings', icon: 'fa-cog' },
  ];

  const renderLink = (href, label, icon) => (
    <Link href={href} key={href}
      className={`flex items-center p-2 rounded-lg ${
        pathname.startsWith(href) 
          ? 'text-white bg-[#574bfb] shadow-md' 
          : 'text-gray-600 hover:text-[#574bfb] hover:bg-gray-100'
      }`}
    >
      <i className={`fas ${icon} mr-3`}></i> {label}
    </Link>
  );

  return (
    <div className="w-1/5 bg-white min-h-screen p-6 flex flex-col justify-between">
      {/* Logo Section */}
      <div className="text-3xl font-bold mb-8 text-black flex items-center">
        <div className="w-10 h-10 bg-[#574bfb] flex justify-center items-center rounded-full text-white mr-2">
          <i className="fas fa-anchor"></i>
        </div>
        <span>Rapid Sales</span>
      </div>

      {/* Main Menu */}
      <nav className="space-y-4">
        {menuItems.map((item) => renderLink(item.href, item.label, item.icon))}
      </nav>

      {/* Settings & Sign Out */}
      <div className="mt-8">
        {settingsItems.map((item) => renderLink(item.href, item.label, item.icon))}
        <button
          onClick={() => signOut()}
          className="flex items-center p-2 rounded-lg text-gray-600 hover:text-red-500 hover:bg-gray-100 w-full"
        >
          <i className="fas fa-sign-out-alt mr-3"></i> Sign Out
        </button>
      </div>

      {/* Pro Feature */}
      <div className="bg-[#574bfb] text-white rounded-lg p-4 text-center mt-6">
        <div className="flex justify-center items-center mb-3">
          <i className="fas fa-gem text-2xl"></i>
        </div>
        <p className="font-bold text-sm">Rapid Sales Pro</p>
        <p className="text-xs mt-2">Get access to all features on tetumbas</p>
        <button className="mt-4 bg-white text-[#574bfb] py-2 px-4 rounded-full text-sm">Get Pro</button>
      </div>
    </div>
  );
};

export default Sidebar;
