"use client";

import { Suspense } from "react";
import { LoginScreen } from "@/components/auth";

function FinanceDirectorLoginContent() {
  return <LoginScreen role="finance-director" />;
}

export default function FinanceDirectorLogin() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <FinanceDirectorLoginContent />
    </Suspense>
  );
}
