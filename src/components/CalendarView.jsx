import React, { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";

const CalendarView = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Market Research",
      start: new Date(2025, 9, 2),
      end: new Date(2025, 9, 6),
      users: ["👤", "👩‍💻", "🧑‍🔬"],
      color: "bg-blue-500"
    },
    {
      title: "Prototyping & User Interviews",
      start: new Date(2025, 9, 4),
      end: new Date(2025, 9, 12),
      users: ["👤", "👩‍💻", "🧑‍🔬", "👨‍🎨", "🧑‍🚀"],
      color: "bg-green-500"
    },
    {
      title: "Competition Analysis",
      start: new Date(2025, 9, 2),
      end: new Date(2025, 9, 8),
      users: ["👨‍💼", "👩‍💼", "👨‍🎓"],
      color: "bg-indigo-500"
    },
    {
      title: "Product Discovery Workshops",
      start: new Date(2025, 9, 2),
      end: new Date(2025, 9, 11),
      users: ["🧑‍💼", "👨‍💼", "🧑‍🔧"],
      color: "bg-purple-500"
    },
    {
      title: "Kick-off",
      start: new Date(2025, 9, 6),
      end: new Date(2025, 9, 13),
      users: ["👨‍💼"],
      color: "bg-emerald-500"
    },
    {
      title: "Design Sprint",
      start: new Date(2025, 9, 9),
      end: new Date(2025, 9, 13),
      users: ["👩‍🎨"],
      color: "bg-teal-500"
    }
  ]);

  const renderDays = () => {
    const start = startOfWeek(new Date(2025, 9, 1));
    return Array.from({ length: 24 }, (_, i) => (
      <div key={i} className="w-32 text-center text-sm text-gray-400">
        {format(addDays(start, i), "E d")}
      </div>
    ));
  };

  const renderTasks = () => {
  const dayWidth = 8; // Tailwind width unit multiplier
  const randomOffset = () => Math.floor(Math.random() * 50) - 25; // Random offset between -25px and 25px

  return tasks.map((task, index) => {
    const span = Math.floor((task.end - task.start) / (1000 * 60 * 60 * 24)) + 1;
    const additionalOffset = task.title === "Design Sprint" ? 50 : 0; // Add 50px offset for "Design Sprint"

    return (
      <div
        key={index}
        className={`absolute top-[${index * 40}px] w-[${span * dayWidth}rem] h-8 rounded-md ${task.color} text-white shadow-md flex items-center justify-between px-2 text-sm`}
        style={{
          top: `${index * 40}px`,
          left: `${randomOffset() + additionalOffset}px`, // Apply random offset and additional offset for "Design Sprint"
          width: `${span * 128}px`,
          height: '32px',
        }}
      >
        <span>{task.title}</span>
        <span className="flex space-x-1">
          {task.users.map((u, i) => (
            <span key={i}>{u}</span>
          ))}
        </span>
      </div>
    );
  });
};
  return (
    <div className="p-6 bg-gray-900 text-white h-screen overflow-auto">
      <h1 className="text-xl font-bold mb-4">Oct 1 – Oct 24</h1>
      <div className="flex space-x-2 mb-6">{renderDays()}</div>
      <div className="relative h-[600px]">{renderTasks()}</div>
    </div>
  );
};

export default CalendarView;