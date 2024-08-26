"use client"
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/home', label: 'Overview', icon: 'fa-home' },
    { href: '/resources', label: 'Resources', icon: 'fa-bookmark' },
    { href: '/program', label: 'Program', icon: 'fa-heart' },
    { href: '/sprintearnai', label: 'SprintEarn AI', icon: 'fa-comments' },
    { href: '/calender', label: 'Task Calendar', icon: 'fa-check-circle' },
    { href: '/community', label: 'Community', icon: 'fa-users' },
  ];

  const settingsItems = [
    { href: '/settings', label: 'Profile', icon: 'fa-user' },
    // { href: '/settings', label: 'Setting', icon: 'fa-cog' },
  ];

  const renderLink = (href, label, icon) => (
    <Link href={href} key={href}
        className={`flex items-center p-2 rounded-full ${
          pathname.startsWith(href) ? 'text-[#2d2de1] bg-white border-l-4 border-[#2d2de1] shadow-md' : 'text-gray-700 hover:text-[#2d2de1] hover:bg-white'
        }`}
      >
        <i className={`fas ${icon} mr-3`}></i> {label}
    </Link>
  );

  return (
    <div className="w-1/5 bg-white min-h-screen p-6 pr-14 hidden md:block">
      <div className="text-3xl font-bold mb-8 text-black">
        <span className="font-normal italic">Sprint</span>
        <span>Earn</span>
      </div>
      <nav className="space-y-4">
        <div className="text-sm text-gray-500 uppercase mb-4">Main Menu</div>
        {menuItems.map((item) => renderLink(item.href, item.label, item.icon))}
      </nav>
      <div className="mt-8 space-y-4">
        <div className="text-sm text-gray-500 uppercase mb-4">Setting</div>
        {settingsItems.map((item) => renderLink(item.href, item.label, item.icon))}
        <button 
          onClick={() => signOut()}
          className={`flex items-center p-2 rounded-full text-gray-700 hover:text-[#e12d2d] hover:bg-white`}
          >
            <i className={`fas fa-sign-out-alt mr-3`}></i> Logout 
        </button>
      </div>
    </div>
  );
};



export const BottomBar = () => {
  const pathname = usePathname();

  const bottomMenuItems = [
    { href: '/home', label: 'Overview', icon: 'fa-home' },
    { href: '/resources', label: 'Resources', icon: 'fa-bookmark' },
    { href: '/program', label: 'Program', icon: 'fa-heart' },
    { href: '/sprintearnai', label: 'Sprint AI', icon: 'fa-comments' },
    { href: '/calender', label: 'Task Calendar', icon: 'fa-check-circle' },
  ];

  const renderBottomLink = (href, label, icon) => (
    <Link href={href} key={href}
      className={`flex flex-col items-center justify-center ${
        pathname.startsWith(href) ? 'text-[#2d2de1]' : 'text-gray-700 hover:text-[#2d2de1]'
      }`}
    >
      <i className={`fas ${icon} text-xl`}></i>
      <span className="text-xs">{label}</span>
    </Link>
  );

  return (
    <div className="w-full bg-white fixed bottom-0 left-0 right-0 flex justify-between items-center p-2 md:hidden shadow-lg z-50">
      {bottomMenuItems.map((item) => renderBottomLink(item.href, item.label, item.icon))}
    </div>
  );
};

export default Sidebar;
