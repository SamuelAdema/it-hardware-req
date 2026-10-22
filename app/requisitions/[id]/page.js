import { getSession } from "@/lib/auth";
import { notFound, redirect } from "next/navigation";
import StatusTracker from "@/components/StatusTracker";

export const instant = false;

export default async function RequisitionDetailPage({ params }) {
  const session = await getSession();
  if (!session) redirect("/signin");

  const { id } = await params;

  const mockRequisition = {
    id: id,
    hardwareId: "thinkpad-x1",
    department: "Engineering",
    cost: 1450,
    submittedAt: "2026-10-21T10:00:00.000Z",
    status: "Pending IT Approval",
  };

  if (!mockRequisition) notFound();

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Request: {mockRequisition.id}</h1>
        <a href="/requisitions" className="text-blue-600 text-sm hover:underline">
          &larr; Back to Requests
        </a>
      </div>
      
      <StatusTracker requisition={mockRequisition} />
    </section>
  );
}