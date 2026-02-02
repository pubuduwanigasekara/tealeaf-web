"use client";

import { useEffect } from "react";
import { ErrorCom } from "@/components/ErrorCom";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorCom reset={reset} />;
}
