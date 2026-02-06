"use client";

import { Suspense } from "react";
import { LoginScreen } from "@/components/auth";

function FinanceOfficerLoginContent() {
  return <LoginScreen role="finance-officer" />;
}

export default function FinanceOfficerLogin() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <FinanceOfficerLoginContent />
    </Suspense>
  );
}
