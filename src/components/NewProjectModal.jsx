import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

const icons = ['Bolt', 'Flame', 'Star']; // Add more as needed
const colors = [
  'bg-gray-300', 'bg-gray-500', 'bg-gray-700',
  'bg-yellow-500', 'bg-green-500', 'bg-blue-500',
  'bg-teal-500', 'bg-cyan-500', 'bg-purple-500'
];

const NewProjectModal = ({ isOpen, onClose }) => {
  const [projectName, setProjectName] = useState('Flash');
  const [selectedColor, setSelectedColor] = useState('bg-yellow-500');
  const [selectedIcon, setSelectedIcon] = useState('Bolt');

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-gray bg-opacity-50 backdrop-blur-sm">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-[800px] p-10 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-300"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold mb-4">Create a new project</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-1">Project name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter project name"
            />
          </div>
          <div className="mb-4 flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Icon</label>
              <select
                value={selectedIcon}
                onChange={(e) => setSelectedIcon(e.target.value)}
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {icons.map((icon) => (
                  <option key={icon} value={icon}>{icon}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Color</label>
              <div className="flex items-center gap-2">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`w-6 h-6 rounded-full cursor-pointer ${color} ${selectedColor === color ? 'ring-2 ring-indigo-500' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-1">Members</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email, comma separated"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-1">Existing Members</label>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Mikołaj Niżnik</span>
                <span className="text-sm text-gray-500">Owner</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Alaina Saikh</span>
                <span className="text-sm text-gray-500">Editor</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Robbie Harrison</span>
                <span className="text-sm text-gray-500">Viewer</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="text-gray-400 hover:text-white"
              onClick={onClose}
            >
              Discard
            </button>
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
            >
              Create project
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default NewProjectModal;
