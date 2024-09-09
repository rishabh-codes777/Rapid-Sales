"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Reality = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Reality Sales',
        data: [7.5, 8.0, 7.2, 8.2, 8.8, 9.0, 8.8],
        backgroundColor: '#34d399', // green color
        borderRadius: 10, // Rounded bars
        barThickness: 20, // Adjusting bar thickness to create space between bars
      },
      {
        label: 'Target Sales',
        data: [9.5, 9.8, 8.0, 10.5, 12.0, 12.1, 12.5],
        backgroundColor: '#fbbf24', // yellow color
        borderRadius: 10, // Rounded bars
        barThickness: 20, // Adjusting bar thickness to create space between bars
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333', // Darker color for better contrast
          font: {
            size: 14, // Adjust font size for readability
            family: 'Arial, sans-serif',
          },
        },
      },
      title: {
        display: true,
        text: 'Target vs Reality',
        font: {
          size: 18, // Increase title font size
          weight: 'bold',
        },
        color: '#1f2937', // Text color
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        footerFont: { size: 10 },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          color: '#1f2937', // Darker text color for x-axis labels
          font: {
            size: 14, // Adjust font size for x-axis labels
          },
        },
        barPercentage: 0.4, // Reduce bar width to create more space between bars
        categoryPercentage: 0.7, // Increase category spacing for more gap between groups
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#e5e7eb', // Light grid lines
        },
        ticks: {
          color: '#1f2937', // Darker text color for y-axis labels
          font: {
            size: 14, // Adjust font size for y-axis labels
          },
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
          width: '380px',
          height: '380px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Added custom box-shadow for four sides
        }}
      >
        {/* Small Target vs Reality Chart */}
        <div
          className="bg-white p-3 rounded-lg shadow-md"
          style={{
            width: '350px',
            height: '250px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Added custom box-shadow for four sides
          }}
        >
          <Bar data={data} options={options} />
        </div>
        {/* Reality and Target Sales Boxes in one line */}
        <div
          className="flex justify-between items-center space-x-3"
          style={{ width: '350px', height: '80px' }}
        >
          {/* Reality Sales Box */}
          <div
            className="flex items-center bg-green-100 rounded-lg p-2 shadow-md space-x-2 w-1/2 h-full"
            style={{
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Added custom box-shadow for four sides
            }}
          >
            <div className="bg-green-200 p-1 rounded-md">
              <i className="fas fa-globe text-green-600"></i> {/* Globe Icon */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-green-600">8.823</span>
              <span className="text-gray-500 text-sm">Reality Sales</span>
            </div>
          </div>
          {/* Target Sales Box */}
          <div
            className="flex items-center bg-yellow-100 rounded-lg p-2 shadow-md space-x-2 w-1/2 h-full"
            style={{
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Added custom box-shadow for four sides
            }}
          >
            <div className="bg-yellow-200 p-1 rounded-md">
              <i className="fas fa-briefcase text-yellow-600"></i> {/* Briefcase Icon */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-yellow-600">12.122</span>
              <span className="text-gray-500 text-sm">Target Sales</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reality;
