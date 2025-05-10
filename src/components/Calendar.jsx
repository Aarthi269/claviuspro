const tasks = [
  {
    title: "Market Research",
    start: "Oct 2",
    end: "Oct 6",
    icon: "🔺",
  },
  {
    title: "Competition Analysis",
    start: "Oct 9",
    end: "Nov 4",
    icon: "🔺",
  },
  {
    title: "Prototyping & User Interviews",
    start: "Oct 4",
    end: "Oct 12",
    icon: "🔷",
  },
  {
    title: "Product Discovery Workshops",
    start: "Oct 2",
    end: "Oct 11",
    icon: "🟣",
  },
  {
    title: "Kick-off",
    start: "Oct 2",
    end: "Oct 4",
    icon: "🟢",
  },
  {
    title: "Design Sprint",
    start: "Oct 9",
    end: "Oct 13",
    icon: "🟢",
  }
];

const Calendar = () => {
  return (
    <div className="p-6">
      <div className="text-xl font-bold mb-4">Oct 1 - Oct 24</div>
      <div className="grid grid-cols-8 gap-2 text-center text-gray-400 border-b border-gray-700 pb-2 mb-4">
        <div>S</div><div>M</div><div>T</div><div>W</div><div className="text-indigo-500">T</div><div>F</div><div>S</div><div>M</div>
      </div>
      <div className="space-y-4">
        {tasks.map((task, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg px-4 py-2 flex justify-between items-center shadow-sm">
            <div>
              <div className="font-semibold">{task.title} {task.icon}</div>
              <div className="text-sm text-gray-400">{task.start} - {task.end}</div>
            </div>
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <img
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-gray-900"
                  src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${task.title}${i}`}
                  alt="avatar"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
