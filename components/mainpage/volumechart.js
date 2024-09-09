"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Volumechart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Volume",
        data: [500, 700, 600, 800, 750],
        backgroundColor: "#fc5353", // Light Red color for Volume
        barThickness: 20,
        borderRadius: 10,
      },
      {
        label: "Services",
        data: [200, 300, 250, 400, 350],
        backgroundColor: "#d8b4fe", // Light Purple color for Services
        barThickness: 20,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 14,
            family: "Arial, sans-serif",
          },
        },
      },
      title: {
        display: true,
        text: "Volume vs Service Level",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "#1f2937",
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        footerFont: { size: 10 },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#1f2937",
          font: {
            size: 14,
          },
        },
        barPercentage: 0.4,
        categoryPercentage: 0.7,
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          color: "#1f2937",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div>
      <div
        className="flex flex-col bg-white p-4 rounded-lg space-y-4 shadow-lg"
        style={{
          width: "380px",
          height: "380px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="bg-white p-3 rounded-lg shadow-md"
          style={{
            width: "350px",
            height: "250px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Bar data={data} options={options} />
        </div>
        <div
          className="flex justify-between items-center space-x-3"
          style={{ width: "350px", height: "80px" }}
        >
          <div
            className="flex items-center bg-red-100 rounded-lg p-2 shadow-md space-x-2 w-1/2 h-full"
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="bg-red-200 p-1 rounded-md">
              <i className="fas fa-chart-bar text-red-600"></i> {/* Bar Chart Icon */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-red-600">1,135</span>
              <span className="text-gray-500 text-sm">Volume</span>
            </div>
          </div>
          <div
            className="flex items-center bg-purple-100 rounded-lg p-2 shadow-md space-x-2 w-1/2 h-full"
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="bg-purple-200 p-1 rounded-md">
              <i className="fas fa-cogs text-purple-600"></i> {/* Services Icon */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-purple-600">635</span>
              <span className="text-gray-500 text-sm">Services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volumechart;
