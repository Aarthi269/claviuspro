import React, { useState } from "react";

function NotificationsPanel({ isOpen, onClose }) {
  const [showAll, setShowAll] = useState(false);

  if (!isOpen) return null;

  const notifications = [
    // Initial 3
    {
      id: 1,
      name: "Logan Garner",
      content: "mentioned you in Task 348",
      time: "3 hours ago",
      team: "Artificium",
      avatar: "https://ui-avatars.com/api/?name=Logan+Garner",
      message: "Hey @Mikolaj, I just wanted to let you know we've already finished working on this concept 😁",
    },
    {
      id: 2,
      name: "Bobbi Carey",
      content: "wants to edit the Clavius Design System.fig",
      time: "3 hours ago",
      team: "Phoenix",
      avatar: "https://ui-avatars.com/api/?name=Bobbi+Carey",
      file: {
        name: "Clavius Design System.fig",
        size: "2.1MB",
      },
    },
    {
      id: 3,
      name: "Louis Mason",
      content: "wants to edit the Clavius Design System.fig",
      time: "3 hours ago",
      team: "Phoenix",
      avatar: "https://ui-avatars.com/api/?name=Louis+Mason",
    },
    
    // Additional 7
    ...Array.from({ length: 7 }, (_, i) => ({
      id: i + 4,
      name: `User ${i + 4}`,
      content: `commented on your post`,
      time: `${i + 1} hour${i > 0 ? "s" : ""} ago`,
      team: "Designers",
      avatar: `https://ui-avatars.com/api/?name=User+${i + 4}`,
      message: `Nice work on the project! Keep it up 👏`,
    })),
  ];

  const visibleNotifications = showAll ? notifications : notifications.slice(0, 3);

  return (
    <div className="absolute top-0 left-full ml-2 w-[32rem] h-[40rem] bg-[#2D2F36] text-white rounded-lg shadow-2xl z-50 p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-[#2D2F36] z-10">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <button onClick={onClose} className="text-lg text-gray-400 hover:text-white">✕</button>
      </div>

      <ul className="space-y-4 text-sm">
        {visibleNotifications.map((n) => (
          <li key={n.id} className="bg-[#3A3B41] p-4 rounded">
            <div className="flex items-start gap-3">
              <img src={n.avatar} alt={n.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-sm mb-1">
                  <span className="font-semibold">{n.name}</span> {n.content}
                </p>
                <p className="text-xs text-gray-400 mb-2">{n.time} · <span className="text-blue-400">{n.team}</span></p>

                {n.message && (
                  <div className="bg-gray-700 p-3 rounded mb-2">
                    <p className="text-sm">{n.message}</p>
                    <button className="text-blue-400 text-xs mt-1">Reply @{n.name.split(" ")[0].toLowerCase()}</button>
                  </div>
                )}

                {n.file && (
                  <div className="bg-gray-700 p-3 rounded mb-2 flex justify-between items-center">
                    <div>
                      <p className="text-sm">{n.file.name}</p>
                      <p className="text-xs text-gray-400">{n.file.size}</p>
                    </div>
                    <button className="text-gray-400 hover:text-white">⋮</button>
                  </div>
                )}

                <div className="flex gap-3">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded text-sm">Accept</button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1 rounded text-sm">Decline</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between text-sm mt-4 text-blue-400">
        {!showAll ? (
          <button onClick={() => setShowAll(true)} className="hover:underline">View 7 More</button>
        ) : (
          <span className="text-gray-400 italic">Showing all notifications</span>
        )}
        <button className="hover:underline">Mark all as read</button>
      </div>
    </div>
  );
}

export default NotificationsPanel;
