import React from "react";
import { Search, Bell, Calendar, ChevronDown, Menu } from "lucide-react";

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white border-b border-gray-200 h-16 fixed top-0 right-0 left-64 z-40">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={20} />
          </button>

          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for anything..."
              className="pl-10 pr-4 py-2 w-64 lg:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Calendar */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50">
            <Calendar size={18} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Today: Nov 15, 2024
            </span>
          </button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <span className="text-sm font-bold text-blue-600">JD</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
