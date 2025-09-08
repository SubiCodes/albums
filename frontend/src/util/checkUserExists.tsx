"use client";

import { useEffect } from "react";
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user, router]);
  if (!user) return null;

  return <>{children}</>;
}
