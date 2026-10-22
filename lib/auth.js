"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(formData) {
  const email = formData.get("email");
  if (email) {
    // Set a secure, HTTP-only cookie
    (await cookies()).set("session", "authenticated", { httpOnly: true, secure: true });
    redirect("/requisitions");
  }
}

export async function signOut() {
  (await cookies()).delete("session");
  redirect("/");
}

export async function getSession() {
  return (await cookies()).get("session")?.value;
}