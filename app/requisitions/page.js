"use client";
import { useState, useEffect } from "react";

export default function RequisitionsPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Only fetch data submitted via the form
    const localData = JSON.parse(localStorage.getItem("myRequests") || "[]");
    setRequests(localData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Hardware Requests</h1>
        <button className="text-red-600 font-medium hover:underline">Sign Out</button>
      </div>

      <div className="bg-white border border-gray-200 rounded-md p-4 mb-6 shadow-sm">
        <p className="text-gray-600 text-sm">Logged in as: <span className="text-green-600 font-bold">authenticated</span></p>
      </div>

      <div className="flex flex-col gap-4">
        {requests.length === 0 ? (
          <div className="p-8 text-center text-gray-500 bg-gray-50 border border-gray-200 rounded-md">
            You have not submitted any hardware requests yet.
          </div>
        ) : (
          requests.map((req, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-md p-5 flex justify-between items-center shadow-sm">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{req.name}</h2>
                <p className="text-gray-500 text-sm mt-1">Request ID: {req.id} &middot; Dept: {req.departmentName}</p>
              </div>
              <div className="text-right flex items-center gap-4">
                <div>
                  <p className="text-blue-600 font-bold text-sm">{req.status}</p>
                  <p className="text-gray-400 text-xs">Submitted: {req.date}</p>
                </div>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                  Track Status
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}