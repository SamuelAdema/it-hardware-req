"use client";
import { useState } from "react";
import Link from "next/link";

export default function RequisitionForm() {
  const [department, setDepartment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!department) return; 
    
    // Save to local storage
    const newRequest = { departmentName: department, status: "Pending" };
    localStorage.setItem("hardwareRequest", JSON.stringify(newRequest));
    
    // Hide form and show success message
    setIsSubmitted(true);
  }

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      {!isSubmitted ? (
        <>
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
        </>
      ) : (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
          <p className="font-bold text-lg mb-1">✅ Request Submitted!</p>
          <p>Your hardware request for the <strong>{department}</strong> department has been saved.</p>
        </div>
      )}

      {/* Back to Catalog Button */}
      <div className="mt-6">
        <Link 
          href="/catalog" 
          className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          &larr; Back to Catalog
        </Link>
      </div>
    </div>
  );
}