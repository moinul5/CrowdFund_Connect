import React from "react";
import { Toaster } from "sonner";

export default function CoinModal() {
  return (
    <Toaster
      richColors
      position="top-right"
      toastOptions={{
        style: {
          marginTop: "80px",
        },
      }}
    />
  );
}
