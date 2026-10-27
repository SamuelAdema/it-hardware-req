"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RequisitionForm({ hardwareName = "ThinkPad X1 Carbon Gen 11" }) {
  const [department, setDepartment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    // Check if the user has an active session cookie before allowing submission
    const hasSession = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("session="));

    if (!hasSession) {
      router.push("/signin");
      return;
    }

    if (!department) return; 

    const newRequest = { 
      id: "REQ-" + Math.floor(Math.random() * 10000),
      name: hardwareName,
      departmentName: department, 
      status: "Pending Approval",
      date: new Date().toLocaleDateString()
    };

    const savedRequests = JSON.parse(localStorage.getItem("myRequests") || "[]");
    savedRequests.push(newRequest);
    localStorage.setItem("myRequests", JSON.stringify(savedRequests));
    
    setIsSubmitted(true); 
  }

  return (
    <div className="mt-8 pt-6 border-t border-gray-100">
      {!isSubmitted ? (
        <>
          <label className="block text-gray-900 font-bold mb-3">Request Hardware</label>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              placeholder="Enter Department (e.g. HR)" 
              value={department}
              onChange={(e) => setDepartment(e.target.value)} 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-900"
            />
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              Submit Request
            </button>
          </form>
        </>
      ) : (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
          <p className="font-bold">✅ Request Saved!</p>
          <p>Navigate to the My Requests page to view it.</p>
        </div>
      )}
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