"use client";
import { useState } from "react";

export default function HardwareRequisition() {
  const [department, setDepartment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!department) return; 
    
    // Save locally in the background
    const newRequest = { departmentName: department, status: "Pending" };
    localStorage.setItem("hardwareRequest", JSON.stringify(newRequest));
    
    // Trigger a browser popup to confirm submission
    alert(`Success! Your hardware request for the ${department} department has been submitted.`);
    
    // Clear the input field
    setDepartment(""); 
  }

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white border border-gray-200 rounded-lg shadow-sm mt-10">
      <p className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
        HARDWARE SPECIFICATION
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        ThinkPad X1 Carbon Gen 11
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Category: Computers
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Estimated Cost: $1450
      </h2>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <label className="block text-gray-900 font-bold mb-3">Request Hardware</label>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            placeholder="Enter Department (e.g. HR)" 
            value={department}
            onChange={(e) => setDepartment(e.target.value)} 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900"
          />
          <button 
            type="submit" 
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}