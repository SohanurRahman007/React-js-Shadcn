import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatsCard = ({ title, value, change, trend, color }) => {
  const isPositive = trend === "up";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        {isPositive ? (
          <TrendingUp size={16} className="text-green-500" />
        ) : (
          <TrendingDown size={16} className="text-red-500" />
        )}
        <span
          className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}
        >
          {change}
        </span>
        <span className="text-sm text-gray-500">from last week</span>
      </div>
    </div>
  );
};

export default StatsCard;
