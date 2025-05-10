import { useEffect, useState } from 'react';

const allProgressData = {
  'This Week': [
    { name: 'Artificium', progress: 80, deadline: 'Nov 15, 2023', color: 'green' },
    { name: 'Phoenix', progress: 60, deadline: 'Nov 30, 2023', color: 'orange' },
    { name: 'GreenScape Eco', progress: 90, deadline: 'Dec 10, 2023', color: 'green' },
    { name: 'Quantum', progress: 16, deadline: 'Dec 25, 2023', color: 'red' },
  ],
  'Last Week': [
    { name: 'Artificium', progress: 60, deadline: 'Nov 15, 2023', color: 'green' },
    { name: 'Phoenix', progress: 48, deadline: 'Nov 30, 2023', color: 'orange' },
    { name: 'GreenScape Eco', progress: 77, deadline: 'Dec 1, 2023', color: 'orange' },
    { name: 'Quantum', progress: 20, deadline: 'Dec 5, 2023', color: 'red' },
  ],
  'This Month': [
    { name: 'Artificium', progress: 85, deadline: 'Dec 15, 2023', color: 'green' },
    { name: 'Phoenix', progress: 55, deadline: 'Dec 20, 2023', color: 'orange' },
    { name: 'GreenScape Eco', progress: 70, deadline: 'Dec 1, 2023', color: 'orange' },
    { name: 'Quantum', progress: 30, deadline: 'Dec 25, 2023', color: 'red' },
  ],
  'All Time': [
    { name: 'Artificium', progress: 100, deadline: 'Nov 1, 2023', color: 'green' },
    { name: 'Phoenix', progress: 92, deadline: 'Nov 15, 2023', color: 'green' },
    { name: 'GreenScape Eco', progress: 98, deadline: 'Nov 20, 2023', color: 'green' },
    { name: 'Quantum', progress: 85, deadline: 'Nov 30, 2023', color: 'green' },
  ]
};

export default function ProgressList({ selectedRange }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(allProgressData[selectedRange] || []);
  }, [selectedRange]);

  return (
    <div className="bg-gray-800 p-4 rounded space-y-4">
      {projects.map((p) => (
        <div key={p.name}>
          <div className="flex justify-between">
            <span>{p.name}</span>
            <span className="text-md text-gray-400">{p.deadline}</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded mt-1 text-md">
            <div
              className={`h-2 rounded ${
                p.color === 'green'
                  ? 'bg-green-500'
                  : p.color === 'orange'
                  ? 'bg-orange-400'
                  : 'bg-red-500'
              }`}
              style={{ width: `${p.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
