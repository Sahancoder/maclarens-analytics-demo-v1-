"use client";

import { Suspense } from "react";
import { LoginScreen } from "@/components/auth";

function MDLoginContent() {
  return <LoginScreen role="md" />;
}

export default function MDLogin() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <MDLoginContent />
    </Suspense>
  );
}
