"use client";

import { useState, useEffect } from "react";
import { formatCurrency, formatDate } from "@/lib/format";

export default function StatusTracker({ requisition }) {
  const [liveStatus, setLiveStatus] = useState(requisition.status);

  useEffect(() => {
    // Connect to the Server-Sent Events endpoint
    const eventSource = new EventSource(`/api/requisitions/${requisition.id}/stream`);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLiveStatus(data.status);
      
      if (data.status === "Ready for Pickup") {
        eventSource.close();
      }
    };

    return () => {
      eventSource.close(); // Clean up when component unmounts
    };
  }, [requisition.id]);

  return (
    <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm mt-6">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Requisition Details</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-slate-500">Hardware ID</p>
          <p className="font-medium">{requisition.hardwareId}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Estimated Cost</p>
          <p className="font-medium text-slate-900">{formatCurrency(requisition.cost)}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Department</p>
          <p className="font-medium">{requisition.department}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Date Submitted</p>
          <p className="font-medium">{formatDate(requisition.submittedAt)}</p>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded border border-blue-100 transition-colors duration-500">
        <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mb-1">Live Status</p>
        <p className="text-lg font-semibold text-blue-900 animate-pulse">{liveStatus}</p>
      </div>
    </div>
  );
}