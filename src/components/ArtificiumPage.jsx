import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const members = {
  miko: 'https://i.pravatar.cc/40?u=miko',
  alaina: 'https://i.pravatar.cc/40?u=alaina',
  robbie: 'https://i.pravatar.cc/40?u=robbie',
  ava: 'https://i.pravatar.cc/40?u=ava'
};

const initialTasks = {
  backlog: [
    {
      id: '1',
      title: 'User Interface Design',
      description: 'Design the user interface for the web app, focusing on user experience and visual appeal.',
      tags: ['UI/UX'],

      members: [members.miko, members.alaina],
      comments: 7,
      files: 1
    },
    {
      id: '2',
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
      id: '3',
      title: 'Develop AI Model Architecture',
      description: 'Design and develop the architecture for the AI model.',
      tags: ['Architecture', 'Development'],
      members: [members.alaina, members.robbie],
      file: 'Requirements.docx',
      comments: 3,
      files: 1
    },
    {
      id: '4',
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
      id: '5',
      title: 'Backend Development',
      description: 'Implement the backend infrastructure including server setup and database.',
      tags: ['Development', 'Backend'],
      members: [members.miko, members.robbie],
      comments: 0,
      files: 0
    },
    {
      id: '6',
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

const columns = [
  { key: 'backlog', label: '🔵 Backlog' },
  { key: 'inProgress', label: '🟣 In Progress' },
  { key: 'completed', label: '🟢 Completed' }
];

const Tag = ({ label }) => (
  <span className="px-2 py-0.5 text-xs rounded-full bg-gray-700 text-white mr-1">{label}</span>
);

const TaskCard = ({ task, index, onDelete }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        className="bg-gray-800 rounded-xl p-4 space-y-2 shadow-md"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div className="flex justify-between">
          <div className="flex flex-wrap">{task.tags.map((tag, i) => <Tag key={i} label={tag} />)}</div>
          <button className="text-gray-400 hover:text-red-400" onClick={() => onDelete(task.id)}>
            🗑️
          </button>
        </div>
        <h3 className="text-white font-semibold">{task.title}</h3>
        <p className="text-gray-400 text-sm">{task.description}</p>
        {task.image && <img src={task.image} alt="Preview" className="rounded mt-2" />}
        {task.file && (
          <div className="mt-2 text-sm bg-blue-900 text-blue-300 px-2 py-1 rounded">
            {task.file}
          </div>
        )}
        <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
          <div className="flex -space-x-2">
            {task.members.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-6 h-6 rounded-full border-2 border-gray-900"
                alt="member"
              />
            ))}
          </div>
          <div className="flex space-x-4">
            <span>💬 {task.comments}</span>
            <span>📎 {task.files}</span>
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

const TaskColumn = ({ columnKey, label, taskList, onAddTask, onDeleteTask }) => (
  <Droppable droppableId={columnKey}>
    {(provided) => (
      <div
        className="w-full md:w-1/3 space-y-4"
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        <h2 className="text-lg font-semibold text-white">{label}</h2>
        <button
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
          onClick={() => onAddTask(columnKey)}
        >
          + Add Task
        </button>
        <div className="space-y-4">
          {taskList.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              index={index}
              onDelete={(id) => onDeleteTask(columnKey, id)}
            />
          ))}
          {provided.placeholder}
        </div>
      </div>
    )}
  </Droppable>
);

const ArtificiumPage = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(initialTasks);
  const [taskIdCounter, setTaskIdCounter] = useState(100); // for unique task ids

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside a valid destination
    if (!destination) return;

    // If dropped in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Get source and destination columns
    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const [movedTask] = sourceColumn.splice(source.index, 1);

    // Add the task to the destination column
    destColumn.splice(destination.index, 0, movedTask);

    // Update the state
    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  const handleAddTask = (columnKey) => {
    const title = prompt('Enter task title:');
    if (!title) return;

    const description = prompt('Enter task description:');
    if (!description) return;

    const skills = prompt('Enter required skills (comma-separated):');
    const skillsArray = skills ? skills.split(',').map((skill) => skill.trim()) : [];

    const newTask = {
      id: String(taskIdCounter),
      title,
      description,
      tags: skillsArray,
      members: [members.miko],
      comments: 0,
      files: 0
    };

    setTasks((prev) => ({
      ...prev,
      [columnKey]: [...prev[columnKey], newTask]
    }));

    setTaskIdCounter((id) => id + 1);
  };

  const handleDeleteTask = (columnKey, taskId) => {
    setTasks((prev) => ({
      ...prev,
      [columnKey]: prev[columnKey].filter((task) => task.id !== taskId)
    }));
  };

  const handleCreateNewProject = () => {
    const projectName = prompt('Enter the name of the new project:');
    if (!projectName) return;

    console.log(`New project created: ${projectName}`);
    // Add logic here to save the project or update the state if needed
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="p-6 bg-gray-900 min-h-screen text-white">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Artificium</h1>
          <p className="text-sm text-gray-400">
            Mobile App / Web UI/UX / Marketing Campaign / User Research
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-6 text-gray-400 text-sm">
            {['tasks', 'overview', 'timeline', 'files'].map((route) => (
              <span
                key={route}
                className={`cursor-pointer hover:text-white pb-1 ${
                  route === 'tasks' ? 'text-white border-b-2 border-indigo-500' : ''
                }`}
                onClick={() => navigate(`/${route}`)}
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </span>
            ))}
          </div>
          <button
            className="bg-indigo-600 px-4 py-2 rounded text-white text-sm hover:bg-indigo-700"
            onClick={handleCreateNewProject}
          >
            + Create New Project
          </button>
        </div>

        {/* Task Columns */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {columns.map(({ key, label }) => (
            <TaskColumn
              key={key}
              columnKey={key}
              label={label}
              taskList={tasks[key]}
              onAddTask={handleAddTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default ArtificiumPage;
