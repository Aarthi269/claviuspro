import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure navigate is imported

const members = {
  miko: 'https://i.pravatar.cc/40?u=miko',
  alaina: 'https://i.pravatar.cc/40?u=alaina',
  robbie: 'https://i.pravatar.cc/40?u=robbie',
  ava: 'https://i.pravatar.cc/40?u=ava'
};

const tasks = {
  backlog: [
    {
      title: 'User Interface Design',
      description: 'Design the user interface for the web app, focusing on user experience and visual appeal.',
      tags: ['UI/UX'],
      image: '/assets/ui-preview.png', // use actual image or remove
      members: [members.miko, members.alaina],
      comments: 7,
      files: 1
    },
    {
      title: 'Research AI Algorithms',
      description: 'Research and compile a list of state-of-the-art AI algorithms.',
      tags: ['Research', 'Backend'],
      members: [members.robbie],
      comments: 0,
      files: 0
    }
  ],
  inProgress: [
    {
      title: 'Develop AI Model Architecture',
      description: 'Design and develop the architecture for the AI model.',
      tags: ['Architecture', 'Development'],
      members: [members.alaina, members.robbie],
      file: 'Requirements.docx',
      comments: 3,
      files: 1
    },
    {
      title: 'Data Collection and Cleaning',
      description: 'Collect and clean datasets for training the AI model, ensuring data quality and consistency.',
      tags: ['Development', 'Research'],
      members: [members.ava],
      comments: 2,
      files: 0
    }
  ],
  completed: [
    {
      title: 'Backend Development',
      description: 'Implement the backend infrastructure including server setup and database.',
      tags: ['Development', 'Backend'],
      members: [members.miko, members.robbie],
      comments: 0,
      files: 0
    },
    {
      title: 'User Registration',
      description: 'Develop the user registration functionality.',
      tags: ['UI/UX', 'Frontend'],
      members: [members.miko, members.ava],
      file: 'Dashboard.fig',
      comments: 6,
      files: 1
    }
  ]
};

const Tag = ({ label }) => (
  <span className="px-2 py-0.5 text-xs rounded-full bg-gray-700 text-white mr-1">{label}</span>
);

const TaskCard = ({ task }) => (
  <div className="bg-gray-800 rounded-xl p-4 space-y-2 shadow-md">
    <div className="flex flex-wrap">{task.tags.map((tag, i) => <Tag key={i} label={tag} />)}</div>
    <h3 className="text-white font-semibold">{task.title}</h3>
    <p className="text-gray-400 text-sm">{task.description}</p>
    {task.image && <img src={task.image} alt="" className="rounded mt-2" />}
    {task.file && <div className="mt-2 text-sm bg-blue-900 text-blue-300 px-2 py-1 rounded">{task.file}</div>}
    <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
      <div className="flex -space-x-2">
        {task.members.map((src, i) => (
          <img key={i} src={src} className="w-6 h-6 rounded-full border-2 border-gray-900" alt="member" />
        ))}
      </div>
      <div className="flex space-x-4">
        <span>💬 {task.comments}</span>
        <span>📎 {task.files}</span>
      </div>
    </div>
  </div>
);

const TaskColumn = ({ title, tasks }) => (
  <div className="w-full md:w-1/3 space-y-4">
    <h2 className="text-lg font-semibold text-white">{title}</h2>
    <div className="space-y-4">
      {tasks.map((task, i) => <TaskCard key={i} task={task} />)}
    </div>
  </div>
);

const ArtificiumPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Artificium</h1>
        <p className="text-sm text-gray-400">Mobile App / Web UI/UX / Marketing Campaign / User Research</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-6 text-gray-400 text-sm">
          <span
            className="text-white border-b-2 border-indigo-500 pb-1 cursor-pointer"
            onClick={() => navigate('/tasks')}
          >
            Tasks
          </span>
          <span
            className="cursor-pointer hover:text-white"
            onClick={() => navigate('/overview')}
          >
            Overview
          </span>
          <span
            className="cursor-pointer hover:text-white"
            onClick={() => navigate('/timeline')}
          >
            Timeline
          </span>
          <span
            className="cursor-pointer hover:text-white"
            onClick={() => navigate('/files')}
          >
            Files
          </span>
        </div>
        <button
          className="bg-indigo-600 px-4 py-2 rounded text-white text-sm hover:bg-indigo-700"
          onClick={() => console.log('Invite clicked')}
        >
          + Invite
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-lg font-semibold text-white">🔵 Backlog</h2>
          <button
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
            onClick={() => console.log('Add new task to Backlog')}
          >
            +
          </button>
          <div className="space-y-4">
            {tasks.backlog.map((task, i) => <TaskCard key={i} task={task} />)}
          </div>
        </div>
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-lg font-semibold text-white">🟣 In Progress</h2>
          <button
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
            onClick={() => console.log('Add new task to In Progress')}
          >
            +
          </button>
          <div className="space-y-4">
            {tasks.inProgress.map((task, i) => <TaskCard key={i} task={task} />)}
          </div>
        </div>
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-lg font-semibold text-white">🟢 Completed</h2>
          <button
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
            onClick={() => console.log('Add new task to Completed')}
          >
            +
          </button>
          <div className="space-y-4">
            {tasks.completed.map((task, i) => <TaskCard key={i} task={task} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtificiumPage;
