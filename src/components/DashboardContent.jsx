import React from "react";
import StatsCard from "./StatsCard";
import { Phone, Home, Clock, XCircle, Activity, Calendar } from "lucide-react";

const DashboardContent = () => {
  const statsData = [
    {
      title: "Total Calls",
      value: "127",
      change: "+13%",
      trend: "up",
      icon: Phone,
      color: "bg-blue-500",
    },
    {
      title: "At-Home Calls",
      value: "98",
      change: "+17%",
      trend: "up",
      icon: Home,
      color: "bg-green-500",
    },
    {
      title: "Voice Tuesday",
      value: "23",
      change: "+185%",
      trend: "up",
      icon: Activity,
      color: "bg-purple-500",
    },
    {
      title: "Missed/Failed Calls",
      value: "6",
      change: "-1%",
      trend: "down",
      icon: XCircle,
      color: "bg-red-500",
    },
  ];

  const recentActivities = [
    "At-booth appointment for iPhone 13 across top tier region",
    "Warm transfer to technicians - Software issue",
    "Quote provided for iPad battery replacement",
    "Call capped after 12 seconds",
  ];

  const repairRequests = [
    { name: "Screen Repair", percentage: 35 },
    { name: "Battery Replacement", percentage: 25 },
    { name: "Rich Glass Repair", percentage: 20 },
    { name: "Software Issues", percentage: 15 },
    { name: "Other issues", percentage: 5 },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600">
          Here's what's happening with your repair center today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Call Trends Chart Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Call Trends - This Week
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View Details →
            </button>
          </div>

          {/* Simple Chart Bars */}
          <div className="space-y-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, index) => (
                <div key={day} className="flex items-center gap-4">
                  <span className="w-12 text-sm text-gray-500">{day}</span>
                  <div className="flex-1">
                    <div
                      className="h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      style={{ width: `${20 + index * 15}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {[45, 68, 92, 107, 85, 53, 32][index]}
                  </span>
                </div>
              ),
            )}
          </div>

          {/* Chart Legend */}
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600">Calls</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Resolved</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-700">{activity}</p>
                <span className="ml-auto text-xs text-gray-500">2h ago</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-center text-blue-600 hover:text-blue-700 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
            Load More Activities
          </button>
        </div>
      </div>

      {/* Top Repair Requests */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Top Repair Requests
        </h2>
        <div className="space-y-4">
          {repairRequests.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">{item.name}</span>
                <span className="font-medium text-gray-800">
                  {item.percentage}%
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
