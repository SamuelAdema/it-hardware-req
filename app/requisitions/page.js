import { getSession, signOut } from "@/lib/auth";
import Link from "next/link";
import { formatDate } from "@/lib/format";

export const instant = false;

export default async function RequisitionsPage() {
  const session = await getSession();

  // Mocking a database fetch using static date strings to pass the Next.js compiler
  const myRequests = [
    {
      id: "REQ-8492",
      name: 'ThinkPad X1 Carbon Gen 11',
      department: "Engineering",
      submittedAt: "2026-10-21T10:00:00.000Z",
      status: "Provisioning Device",
    },
    {
      id: "REQ-1034",
      name: 'Dell UltraSharp 27" 4K',
      department: "Design",
      submittedAt: "2026-10-18T14:30:00.000Z",
      status: "Ready for Pickup",
    }
  ];

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Hardware Requests</h1>
        <form action={signOut}>
          <button className="text-red-600 text-sm font-medium hover:underline">
            Sign Out
          </button>
        </form>
      </div>
      
      <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm mb-6">
        <p className="text-sm text-slate-600">Logged in as: <span className="font-bold text-green-600">{session}</span></p>
      </div>

      <div className="space-y-4">
        {myRequests.map((req) => (
          <div key={req.id} className="bg-white p-5 border border-slate-200 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition">
            <div>
              <h3 className="font-bold text-lg text-slate-900">{req.name}</h3>
              <p className="text-sm text-slate-500">
                Request ID: {req.id} &middot; Dept: {req.department}
              </p>
            </div>
            <div className="text-left md:text-right flex-1">
              <p className="text-sm font-bold text-blue-600">{req.status}</p>
              <p className="text-xs text-slate-400">Submitted: {formatDate(req.submittedAt)}</p>
            </div>
            <Link 
              href={`/requisitions/${req.id}`}
              className="bg-slate-100 text-slate-700 px-4 py-2 rounded font-medium text-sm hover:bg-slate-200 transition text-center whitespace-nowrap"
            >
              Track Status
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}