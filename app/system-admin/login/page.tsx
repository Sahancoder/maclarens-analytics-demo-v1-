"use client";

import { Suspense } from "react";
import { LoginScreen } from "@/components/auth";

function SystemAdminLoginContent() {
  return <LoginScreen role="system-admin" />;
}

export default function SystemAdminLogin() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <SystemAdminLoginContent />
    </Suspense>
  );
}
