"use client";
import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Satisfaction = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const originalLineDraw = ctx.stroke;

      ctx.stroke = function () {
        ctx.save();
        if (this._datasetIndex === 0) {
          // Shadow for "Last Month" (blue)
          ctx.shadowColor = "rgba(59, 130, 246, 0.3)"; // Blue shadow
        } else if (this._datasetIndex === 1) {
          // Shadow for "This Month" (green)
          ctx.shadowColor = "rgba(16, 185, 129, 0.3)"; // Green shadow
        }
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        originalLineDraw.apply(this, arguments);
        ctx.restore();
      };
    }
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Last Month",
        data: [20, 22, 28, 34, 25, 30, 35],
        borderColor: "rgba(59, 130, 246, 1)", // Blue color for both line and border
        backgroundColor: "rgba(59, 130, 246, 0.5)", // Solid blue fill under the line
        fill: true, // Fill the area under the line
        tension: 0.4, // Smoother curve for the line
        pointRadius: 5, // Adjust point size
        pointHoverRadius: 8, // Point size on hover
      },
      {
        label: "This Month",
        data: [12, 14, 18, 25, 28, 34,30], // The values exceed the Y-axis range of 40
        borderColor: "rgba(16, 185, 129, 1)", // Green color for both line and border
        backgroundColor: "rgba(16, 185, 129, 0.5)", // Solid green fill under the line
        fill: true, // Fill the area under the line
        tension: 0.4, // Smoother curve for the line
        pointRadius: 5, // Adjust point size
        pointHoverRadius: 8, // Point size on hover
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
        text: "Customer Satisfaction Rate",
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
      },
      y: {
        beginAtZero: false,
        min: 10, // Set the minimum Y-axis value to 10
        max: 40, // Increased the maximum Y-axis value to 50 to fit the "This Month" data
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          color: "#1f2937",
          font: {
            size: 14,
          },
          stepSize: 10, // Set step size to 10 to show 10, 20, 30, 40, 50
        },
      },
    },
  };

  return (
    <div>
      {/* Container for graph and boxes */}
      <div
        className="flex flex-col bg-white p-4 rounded-lg space-y-4 shadow-lg"
        style={{
          width: "380px",  // Adjust to match Target vs Reality
          height: "380px", // Adjust to match Target vs Reality
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Added custom box-shadow for four sides
        }}
      >
        {/* Small Customer Satisfaction Line Chart */}
        <div
          className="bg-white p-3 rounded-lg shadow-md"
          style={{
            width: "350px", // Adjust to match Target vs Reality
            height: "250px", // Adjust to match Target vs Reality
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Added custom box-shadow for four sides
          }}
        >
          <Line ref={chartRef} data={data} options={options} />
        </div>

        {/* Customer Satisfaction Boxes in one line */}
        <div
          className="flex justify-between items-center space-x-3"
          style={{ width: "350px", height: "80px" }} // Same width and height as Target vs Reality
        >
          {/* Last Month Satisfaction Box */}
          <div
            className="flex items-center bg-blue-100 rounded-lg p-2 shadow-md space-x-2 w-1/2 h-full"
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Added custom box-shadow for four sides
            }}
          >
            <div className="bg-blue-200 p-1 rounded-md">
              <i className="fas fa-chart-line text-blue-600"></i> {/* Line Chart Icon */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-600">$3,004</span>
              <span className="text-gray-500 text-sm">Last Month</span>
            </div>
          </div>

          {/* This Month Satisfaction Box */}
          <div
            className="flex items-center bg-green-100 rounded-lg p-2 shadow-md space-x-2 w-1/2 h-full"
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Added custom box-shadow for four sides
            }}
          >
            <div className="bg-green-200 p-1 rounded-md">
              <i className="fas fa-chart-line text-green-600"></i> {/* Line Chart Icon */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-green-600">$4,504</span>
              <span className="text-gray-500 text-sm">This Month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satisfaction;
