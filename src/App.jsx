import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProductivityChart from './components/ProductivityChart';
import ProgressList from './components/ProgressList';
import CalendarView from './components/CalendarView';
import MessageView from './components/MessageView';
import NotificationsPanel from './components/NotificationsPanel';
import ArtificiumPage from './components/ArtificiumPage';
import NewProjectModal from './components/NewProjectModal'; // Import the NewProjectModal

function App() {
  const [selectedTab, setSelectedTab] = useState('Dashboard');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [progressFilter, setProgressFilter] = useState('This Week');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false); // State for the modal
  const [projects, setProjects] = useState([]); // State to store projects

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          onNotificationClick={() => setIsNotificationOpen(!isNotificationOpen)}
        />

        {isNotificationOpen && (
          <div className="fixed left-16 top-20 z-50 w-[400px] max-h-[80vh] overflow-y-auto bg-gray-900 text-white rounded-xl shadow-xl p-4">
            <NotificationsPanel isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
          </div>
        )}

        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/messages" element={<MessageView />} />
            <Route path="/mobile-app" element={<ArtificiumPage projects={projects} />} />
            <Route
              path="/"
              element={
                <>
                  <h1>Clavius 🚀</h1>
                </>
              }
            />
            <Route
              path="/Dashboard"
              element={
                <>
                  <Header />
                  {selectedTab === 'Calendar' ? (
                    <CalendarView />
                  ) : selectedTab === 'Messages' ? (
                    <MessageView />
                  ) : (
                    <>
                      <section className="my-6">
                        <h2 className="text-2xl font-bold mb-2">Productivity</h2>
                        <ProductivityChart />
                      </section>
                      <section>
                        <div className="flex justify-between items-center mb-2">
                          <h2 className="text-2xl font-bold">Progress</h2>
                          <select
                            className="bg-gray-700 text-white text-md rounded px-2 py-1"
                            value={progressFilter}
                            onChange={(e) => setProgressFilter(e.target.value)}
                          >
                            <option>This Week</option>
                            <option>Last Week</option>
                            <option>This Month</option>
                            <option>All Time</option>
                          </select>
                        </div>
                        <ProgressList selectedRange={progressFilter} />
                      </section>
                    </>
                  )}
                </>
              }
            />
          </Routes>
        </main>

        <aside className="w-96 bg-[#0e1723] text-white flex flex-col justify-between h-screen py-8 px-4 border-r border-gray-700">
          <div className="w-full">
            <h2 className="text-xl font-semibold text-left mt-4">Today</h2>
            <hr className="border-t border-gray-700 mt-5" />
          </div>

          <div className="text-center">
            <p className="font-semibold text-lg">You've done all your tasks</p>
            <p className="text-mlg text-gray-400 mt-1 mb-100">Time to have some fun!</p>
          </div>
        </aside>
      </div>

      {/* New Project Modal */}
      <NewProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        addProject={addProject}
      />
    </Router>
  );
}

export default App;
