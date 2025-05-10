import React, { useState } from "react";
import { FaRocket, FaBell } from 'react-icons/fa';
import NewProjectModal from './NewProjectModal';
import NotificationsPanel from './NotificationsPanel'; // Added import
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const navigate = useNavigate(); // Initialize navigate function
  const [artificiumOpen, setArtificiumOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false); // 🔔 Notification state

  const navigateTo = (section) => {
    if (section === 'Artificium') {
      navigate('/artificium'); // Navigate to ArtificiumPage
    } else {
      console.log(`Navigating to ${section}`);
    }
  };

  return (
    <div className="w-64 min-h-screen bg-[#1E1F25] text-white p-4 space-y-4 relative">
      {/* 🚀 Clavius Header with Bell Icon */}
      <div className="flex items-center justify-between text-lg font-bold mb-4">
        <button
          onClick={() => {
            setSelectedTab('');
            navigate('/');
          }}
          className="text-lg font-bold text-white hover:text-blue-400 focus:outline-none"
        >
          Clavius 🚀
        </button>

        <button
          className="text-gray-400 hover:text-white"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering other click events
            setIsNotificationsOpen(!isNotificationsOpen);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
          </svg>
        </button>
      </div>

      {/* Main Tabs */}
      <div className="space-y-1">
        <div
          className={`rounded px-3 py-2 mb-2 cursor-pointer ${selectedTab === 'Dashboard' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-400'}`}
          onClick={() => {
            setSelectedTab('Dashboard');
            navigate('/dashboard');
          }}
        >
          Dashboard
        </div>
        <div
          className={`rounded px-3 py-2 mb-2 cursor-pointer ${selectedTab === 'Calendar' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-400'}`}
          onClick={() => {
            setSelectedTab('Calendar');
            navigate('/calendar');
          }}
        >
          Calendar
        </div>
        <div
          className={`rounded px-3 py-2 mb-2 cursor-pointer ${selectedTab === 'Messages' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700 text-gray-400'}`}
          onClick={() => {
            setSelectedTab('Messages');
            navigate('/messages');
          }}
        >
          Messages
        </div>
        <div
          className={`rounded px-3 py-2 cursor-pointer ${selectedTab === 'Help & Support' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
          onClick={() => {setSelectedTab('Help-&-Support');
            navigate('/Help-&-Support'); }}
        >
          Help & Support
        </div>
      </div>

      {/* Artificium Dropdown */}
      <div className="mt-6">
        <p
          className="text-lg text-gray-400 cursor-pointer flex items-center justify-between"
          onClick={() => setArtificiumOpen(!artificiumOpen)}
        >
          Artificium
          <span>{artificiumOpen ? '▾' : '▸'}</span>
        </p>
        {artificiumOpen && (
          <ul className="mt-4 space-y-4 ml-6 mb-4 text-sm ">
            <li
              className="cursor-pointer hover:text-blue-400"
              onClick={() => {
            setSelectedTab('Mobile-App');
            navigate('/Mobile-App');
          }}
            >
              ▸ Mobile App
            </li>
            <li
              className="cursor-pointer hover:text-blue-400"
              onClick={() => navigateTo('Web UI/UX')}
            >
              ▸ Web UI/UX
            </li>
            <li
              className="cursor-pointer hover:text-blue-400"
              onClick={() => navigateTo('Marketing Campaign')}
            >
              ▸ Marketing Campaign
            </li>
            <li
              className="cursor-pointer hover:text-blue-400"
              onClick={() => navigateTo('User Research')}
            >
              ▸ User Research
            </li>
          </ul>
        )}
      </div>

      {/* Custom Project Tabs */}
      <nav className="space-y-2">
        <button
          className={`w-full text-left px-3 py-2 rounded ${selectedTab === 'Pheonix' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
          onClick={() => setSelectedTab('Pheonix')}
        >
          Pheonix
        </button>
        <button
          className={`w-full text-left px-3 py-2 rounded ${selectedTab === 'GreenScape Eco' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
          onClick={() => setSelectedTab('GreenScape Eco')}
        >
          GreenScape Eco
        </button>
        <button
          className={`w-full text-left px-3 py-2 rounded ${selectedTab === 'Quantum' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
          onClick={() => setSelectedTab('Quantum')}
        >
          Quantum
        </button>
      </nav>

      {/* New Project Button + Profile */}
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <button
          className="w-full text-sm bg-gray-700 py-2 rounded cursor-pointer hover:bg-blue-400"
          onClick={() => setIsModalOpen(true)}
        >
          + New Project
        </button>
        <div className="mt-4 flex items-center gap-2">
  <div className="relative">
    <img src="https://i.pravatar.cc/40" alt="profile" className="w-8 h-8 rounded-full" />
    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
  </div>
  <div>
    <span className="text-md">Mikołaj Niżnik</span>
    <div className="text-sm text-gray-500">clavius.space</div>
  </div>
</div>


      </div>

      {/* 🔔 Notifications Panel */}
      {isNotificationsOpen && (
        <NotificationsPanel
          isOpen={isNotificationsOpen}
          onClose={() => setIsNotificationsOpen(false)}
        />
      )}

      {/* 🆕 Modal */}
      {isModalOpen && <NewProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Sidebar;
