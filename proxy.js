import { NextResponse } from "next/server";

export default function proxy(request) {
  const session = request.cookies.get("session");

  if (request.nextUrl.pathname.startsWith("/requisitions") && !session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/requisitions/:path*"],
};