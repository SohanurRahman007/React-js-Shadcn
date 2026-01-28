import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardContent from "./components/DashboardContent";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div
        className={`transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`}
      >
        <Topbar toggleSidebar={toggleSidebar} />
        <main className="pt-16 p-6">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default App;
