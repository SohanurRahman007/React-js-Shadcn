import React from "react";
import {
  Phone,
  PhoneIncoming,
  PhoneForwarded,
  Calendar,
  PhoneMissed,
  Clock,
  TrendingUp,
  TrendingDown,
  MoreVertical,
} from "lucide-react";

const DashboardContent = () => {
  // Stats cards data
  const statsCards = [
    {
      title: "Total Calls Today",
      value: "127",
      change: "+12%",
      trend: "up",
      icon: Phone,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-100",
    },
    {
      title: "All-Inbound Calls",
      value: "98",
      change: "+17%",
      trend: "up",
      icon: PhoneIncoming,
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      textColor: "text-emerald-100",
    },
    {
      title: "Voice Transfer",
      value: "23",
      change: "+15%",
      trend: "up",
      icon: PhoneForwarded,
      color: "bg-gradient-to-br from-violet-500 to-violet-600",
      textColor: "text-violet-100",
    },
    {
      title: "Appointments Booked",
      value: "34",
      change: "+6%",
      trend: "up",
      icon: Calendar,
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
      textColor: "text-amber-100",
    },
    {
      title: "Missed/Failed Calls",
      value: "6",
      change: "-2%",
      trend: "down",
      icon: PhoneMissed,
      color: "bg-gradient-to-br from-rose-500 to-rose-600",
      textColor: "text-rose-100",
    },
    {
      title: "Avg Call Duration",
      value: "3:42",
      change: "+15%",
      trend: "up",
      icon: Clock,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      textColor: "text-cyan-100",
    },
  ];

  // Recent activities
  const recentActivities = [
    {
      title: "All booked appointments for iPhone 13 across Nepal",
      date: "2 Jan 2023",
      type: "appointment",
    },
    {
      title: "Warm transfer to mechanics - Sushant issue",
      date: "3 Jan 2023",
      type: "transfer",
    },
    {
      title: "Quick preview of past business expenses",
      date: "4 Jan 2023",
      type: "review",
    },
    {
      title: "Call capped after 12 seconds",
      date: "11 Jan 2023",
      type: "call",
    },
  ];

  // Repair requests
  const repairRequests = [
    { name: "Screen Repair", count: 150, color: "bg-blue-500" },
    { name: "Battery Replacement", count: 60, color: "bg-emerald-500" },
    { name: "Face Cleaner", count: 67, color: "bg-violet-500" },
    { name: "Software Issues", count: 45, color: "bg-amber-500" },
  ];

  // Chart data for call trends
  const chartData = [
    { month: "Jan", calls: 85 },
    { month: "Feb", calls: 92 },
    { month: "Mar", calls: 78 },
    { month: "Apr", calls: 105 },
    { month: "May", calls: 120 },
    { month: "Jun", calls: 95 },
    { month: "Jul", calls: 110 },
    { month: "Aug", calls: 127 },
    { month: "Sep", calls: 98 },
    { month: "Oct", calls: 115 },
    { month: "Nov", calls: 132 },
    { month: "Dec", calls: 140 },
  ];

  // Get activity icon based on type
  const getActivityIcon = (type) => {
    switch (type) {
      case "appointment":
        return <Calendar size={16} className="text-blue-500" />;
      case "transfer":
        return <PhoneForwarded size={16} className="text-emerald-500" />;
      case "review":
        return <TrendingUp size={16} className="text-amber-500" />;
      case "call":
        return <Phone size={16} className="text-violet-500" />;
      default:
        return <Phone size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-600">
            Real-time insights and analytics for your call center
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Generate Report
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MoreVertical size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Stats Grid - 6 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {card.title}
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  {card.value}
                </h3>
              </div>
              <div className={`p-2 rounded-lg ${card.color}`}>
                <card.icon size={20} className={card.textColor} />
              </div>
            </div>
            <div className="flex items-center gap-1">
              {card.trend === "up" ? (
                <TrendingUp size={16} className="text-emerald-500" />
              ) : (
                <TrendingDown size={16} className="text-rose-500" />
              )}
              <span
                className={`text-sm font-medium ${card.trend === "up" ? "text-emerald-600" : "text-rose-600"}`}
              >
                {card.change}
              </span>
              <span className="text-xs text-gray-500 ml-1">from yesterday</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Call Trends Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Call Trends - This Week
              </h2>
              <p className="text-sm text-gray-500">
                Monthly call volume overview
              </p>
            </div>
            <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>

          {/* Chart Area */}
          <div className="relative h-64">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-2">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>

            {/* Chart Bars */}
            <div className="ml-8 h-full flex items-end justify-between">
              {chartData.map((item, index) => {
                const height = (item.calls / 150) * 100;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                    style={{ height: "100%" }}
                  >
                    <div
                      className="w-6 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg relative group cursor-pointer"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.calls} calls
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chart Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600">Inbound Calls</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-sm text-gray-600">Outbound Calls</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Recent Activity
              </h2>
              <p className="text-sm text-gray-500">
                Latest activities from your team
              </p>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </button>
          </div>

          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="p-2 bg-gray-100 rounded-lg">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                </div>
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 text-center text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors font-medium">
            Load More Activities
          </button>
        </div>
      </div>

      {/* Top Repair Requests */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Top Repair Requests
            </h2>
            <p className="text-sm text-gray-500">
              Most requested repair services
            </p>
          </div>
          <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
        </div>

        <div className="space-y-4">
          {repairRequests.map((item, index) => {
            const total = repairRequests.reduce(
              (sum, req) => sum + req.count,
              0,
            );
            const percentage = Math.round((item.count / total) * 100);

            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm font-medium text-gray-800">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-gray-800">
                      {item.count} requests
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      ({percentage}%)
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${percentage}%`,
                      background: `linear-gradient(90deg, ${item.color.replace("bg-", "")} 0%, ${item.color.replace("bg-", "").replace("500", "400")} 100%)`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">322</p>
            <p className="text-sm text-blue-800">Total Requests</p>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <p className="text-2xl font-bold text-emerald-600">94%</p>
            <p className="text-sm text-emerald-800">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-500 py-4">
        <p>Data last updated: Today at 14:30 • Next update in 30 minutes</p>
      </div>
    </div>
  );
};

export default DashboardContent;
