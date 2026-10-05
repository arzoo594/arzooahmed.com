"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("./CustomCursor"), {
  ssr: false,
});

export default function ClientShell({ children }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
