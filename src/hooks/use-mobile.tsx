
"use client";

import { useState, useEffect } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkIfMobile();

      // Add event listener
      window.addEventListener("resize", checkIfMobile);

      // Cleanup
      return () => {
        window.removeEventListener("resize", checkIfMobile);
      };
    }
    
    // Default to false if running on server
    return () => {};
  }, []);

  return isMobile;
};
