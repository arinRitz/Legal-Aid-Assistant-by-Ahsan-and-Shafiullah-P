// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: Request) {
  // Extract the pathname from the request
  const { pathname } = new URL(req.url);

  // Skip middleware for the following paths
  if (pathname === "/api/auth" || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // Get the user's session token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If token exists, the user is authenticated
  if (token) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to the login page
  return NextResponse.redirect(new URL("/api/auth/signin", req.url));
}

// Define paths where middleware should run
export const config = {
  matcher: ["/net"], // Protects the profile page
};
