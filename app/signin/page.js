"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSignIn(e) {
    e.preventDefault();
    if (!email) return;

    // Sets the session cookie that your proxy checks
    document.cookie = "session=authenticated; path=/;";
    
    router.push("/requisitions");
  }

  return (
    <section className="max-w-md mx-auto mt-16 p-8 bg-white border border-slate-200 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-slate-900">Sign In to IT Requisitions</h1>
      <form onSubmit={handleSignIn} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 text-slate-900"
            placeholder="staff@company.com"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition-colors">
          Sign In
        </button>
      </form>
    </section>
  );
}