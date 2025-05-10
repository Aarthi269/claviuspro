import React, { useState } from "react";
import { FaPaperPlane, FaSearch, FaMicrophone, FaPaperclip, FaEllipsisV } from "react-icons/fa";

const messagesData = [
  { name: "Lara Ochoa", message: "Hey, what's up? 🤓", time: "just now", active: false },
  { name: "Lawrence", message: "Lawrence is typing...", time: "2 sec ago", active: true },
  { name: "Jessamine", message: "🎙️ Voice message", time: "21:06", active: false },
  { name: "Justin", message: "3 images    •   1 file", time: "", unread: 3 },
  { name: "Douglas Kemp", message: "Clavius is amazing! 😁", time: "12:48", active: false },
  { name: "Albert Juan", message: "Sure, see you!", time: "", active: false },
  { name: "Aastha Takur", message: "Really? That's great 💅", time: "", active: false },
  { name: "Austin", message: "WOW! This is a good news 👀", time: "", active: false },
  { name: "Neha", message: "I'll let you know tomorrow.", time: "", active: false },
  { name: "Mavis Barry", message: "Yes! 🔥🔥🔥", time: "", active: false }
];

const MessagesView = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState({
    Lawrence: [
      { sender: "Lawrence", text: "Yeah, sure! Let's talk tomorrow." },
      { sender: "You", text: "Hey Lawrence, have you been using that project management platform lately? I've found it to be quite amazing." },
      { sender: "Lawrence", text: "Yeah, it's been a game-changer for me. The dashboard is so intuitive and helps me keep track of everything." },
      { sender: "You", text: "Absolutely! I love how we can manage our projects with the Kanban view. It makes project organization a breeze." }
    ],
    "Lara Ochoa": [],
    Jessamine: [],
    Justin: [],
    "Douglas Kemp": [],
    "Albert Juan": [],
    "Aastha Takur": [],
    Austin: [],
    Neha: [],
    "Mavis Barry": []
  });
  const [activeChat, setActiveChat] = useState("Lawrence");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => ({
        ...prev,
        [activeChat]: [...prev[activeChat], { sender: "You", text: input }]
      }));
      setInput("");
    }
  };

  return (
    <div className="flex h-full text-white bg-gray-900">
      <aside className="w-80 bg-gray-800 p-4 border-r border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Messages</h2>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        />
        <div className="space-y-2 overflow-y-auto">
          {Object.keys(messages).map((name, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg ${name === activeChat ? "bg-gray-700" : "hover:bg-gray-700"}`}
              onClick={() => setActiveChat(name)}
            >
              <div className="font-medium">{name}</div>
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full" />
            <span className="font-semibold">{activeChat}</span>
            <span className="text-green-500 text-sm">●</span>
          </div>
        </header>

        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages[activeChat].map((msg, i) => (
            <div
              key={i}
              className={`max-w-md p-3 rounded-lg ${msg.sender === "You" ? "self-end bg-blue-600" : "self-start bg-gray-700"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <footer className="p-4 border-t border-gray-700 flex items-center space-x-3">
          <FaMicrophone className="text-gray-400" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Your message"
            className="flex-1 p-2 rounded bg-gray-800 text-white"
          />
          <button
            className="bg-blue-600 p-2 rounded-full"
            onClick={handleSendMessage}
          >
            <FaPaperPlane />
          </button>
        </footer>
      </main>
    </div>
  );
};

export default MessagesView;
