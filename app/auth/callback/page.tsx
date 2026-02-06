"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Disable static generation for this page
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

export default function AuthCallbackPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In DEMO MODE, just redirect to a default dashboard
    // In production, this would handle OAuth callback and fetch user details
    
    const isDemoMode = process.env.NEXT_PUBLIC_USE_MOCK_DATA !== 'false';
    
    if (isDemoMode) {
      // Demo mode: redirect to system admin dashboard
      setTimeout(() => {
        router.push('/system-admin/dashboard');
      }, 1000);
    } else {
      // Production mode would handle real auth here
      setError("Authentication configuration required");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
        <p className="text-gray-600">{error ? "Access blocked" : "Authenticating..."}</p>
        <p className="text-gray-400 text-sm mt-2">
          {error || "Please wait while we verify your credentials"}
        </p>
      </div>
    </div>
  );
}
