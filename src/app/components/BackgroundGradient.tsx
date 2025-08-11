"use client";
import { useEffect, useState } from "react";

export const BackgroundGradient = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${
        mounted ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 ease-out`}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bg-pulse"
        style={{
          width: "160vmax",
          height: "160vmax",
          background: `radial-gradient(circle closest-side, rgba(56, 189, 248, 0.4), transparent 70%)`,
        }}
      />
    </div>
  );
};
