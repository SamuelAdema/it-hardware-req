"use client";
import { useState, useEffect } from "react";

export default function RequisitionForm() {
  const [department, setDepartment] = useState("");
  const [lastOrder, setLastOrder] = useState(null);

  // 1. READ: Check for a saved sticky note when the page first loads
  useEffect(() => {
    const savedData = localStorage.getItem("hardwareRequest");
    if (savedData) {
      setLastOrder(JSON.parse(savedData)); // Convert text back to a JavaScript object
    }
  }, []);

  // 2. WRITE: Save the sticky note when they submit the form
  function handleSubmit(event) {
    event.preventDefault(); // Stop the page from reloading
    
    const newRequest = { departmentName: department, status: "Pending" };
    
    // Save to the browser's local storage locker
    localStorage.setItem("hardwareRequest", JSON.stringify(newRequest));
    
    // Update the screen immediately
    setLastOrder(newRequest);
    setDepartment(""); // Clear the input box
  }

  return (
    <div className="card">
      <h3>Request Hardware</h3>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Department (e.g. HR)" 
          value={department}
          onChange={(e) => setDepartment(e.target.value)} 
        />
        <button type="submit">Submit Request</button>
      </form>

      {/* 3. DISPLAY: Show the saved data if it exists */}
      {lastOrder && (
        <div style={{ marginTop: "20px", color: "blue" }}>
          <p>📋 You have a saved request for: {lastOrder.departmentName}</p>
        </div>
      )}
    </div>
  );
}