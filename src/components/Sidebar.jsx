import React from "react";
import {
  Home,
  BarChart3,
  Phone,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Bell,
  Search,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", active: true },
    { icon: <BarChart3 size={20} />, label: "Analytics" },
    { icon: <Phone size={20} />, label: "Call Center" },
    { icon: <Calendar size={20} />, label: "Schedule" },
    { icon: <Settings size={20} />, label: "Settings" },
    { icon: <HelpCircle size={20} />, label: "Support" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col fixed left-0 top-0 z-50">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-800 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
          R
        </div>
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          RepairHub
        </h2>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              item.active
                ? "bg-gray-800 text-white border-l-4 border-blue-500"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <span className={item.active ? "text-blue-400" : ""}>
              {item.icon}
            </span>
            <span className="font-medium">{item.label}</span>
            {item.active && (
              <ChevronRight size={16} className="ml-auto text-blue-400" />
            )}
          </a>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-blue-500 overflow-hidden">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold">John Doe</h4>
          <p className="text-xs text-gray-400">Admin</p>
        </div>
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <LogOut size={18} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
