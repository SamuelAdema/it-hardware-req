"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RequisitionForm({ hardwareId }) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const department = formData.get("department");

    try {
      const response = await fetch("/api/requisitions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hardwareId, department }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit requisition");
      }

      const data = await response.json();
      // Redirect to the tracking page for the new request
      router.push(`/requisitions/${data.id}`);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 border-t pt-6">
      <h3 className="font-bold mb-4">Start Requisition</h3>
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label htmlFor="department" className="block text-sm font-medium text-slate-700 mb-1">
            Department
          </label>
          <input
            id="department"
            name="department"
            type="text"
            required
            placeholder="e.g., Engineering"
            className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}