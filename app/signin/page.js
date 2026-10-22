import { signIn } from "@/lib/auth";

export default function SignInPage() {
  return (
    <section className="max-w-md mx-auto mt-12 bg-white p-8 border border-slate-200 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-slate-900">Sign In Required</h1>
      <p className="text-slate-600 mb-6">You must sign in to view and submit hardware requisitions.</p>
      
      <form action={signIn} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 outline-none" 
            placeholder="staff@company.com" 
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition">
          Sign In
        </button>
      </form>
    </section>
  );
}