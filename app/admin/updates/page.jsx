'use client'
import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    async function fetchUploads() {
      const response = await fetch('/api/admin/userupdates');
      const data = await response.json();
      setUploads(data);
    }

    fetchUploads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 text-black">
      <div className="relative py-3  sm:mx-auto w-3/5">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-10">
          <h1 className="text-2xl font-bold text-center text-gray-800">Admin Dashboard</h1>
          <div className="mt-6">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Week No.</th>
                  <th className="py-2">Day No.</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Description</th>
                  <th className="py-2">Files</th>
                  <th className="py-2">Uploaded At</th>
                </tr>
              </thead>
              <tbody>
                {uploads.map((upload) => (
                  <tr key={upload._id} className="text-center border-b">
                    <td className="py-2 px-4">{upload.week}</td>
                    <td className="py-2 px-4">{upload.day}</td>
                    <td className="py-2 px-4">{upload.email}</td>
                    <td className="py-2 px-4">{upload.description}</td>
                    <td className="py-2 px-4">
                      {upload.files.map((fileUrl, index) => (
                        <div key={index} className="py-1">
                          <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            File {index + 1}
                          </a>
                        </div>
                      ))}
                    </td>
                    <td className="py-2 px-4">
                      {new Date(upload.uploadedAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
