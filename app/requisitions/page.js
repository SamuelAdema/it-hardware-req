import { getSession, signOut } from "@/lib/auth";

export default async function RequisitionsPage() {
  // Page-level authorization check (defense in depth)
  const session = await getSession();

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
      
      <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
        <p className="text-slate-600 mb-2">Logged in state: <span className="font-bold text-green-600">{session}</span></p>
        <p>Your pending and approved hardware requests will appear here.</p>
      </div>
    </section>
  );
}