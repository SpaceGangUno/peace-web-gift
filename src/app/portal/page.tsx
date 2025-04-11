
"use client";

import { useEffect } from "react";

const CLIENT_PORTAL_URL = "https://thegiftofpeacecw.clientsecure.me/";

export default function ClientPortalRedirect() {
  useEffect(() => {
    window.location.href = CLIENT_PORTAL_URL;
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-md p-6 text-center">
        <p className="text-lg">Redirecting to client portal...</p>
        <div className="mt-4 h-1.5 w-full bg-muted overflow-hidden rounded-full">
          <div className="h-full bg-gold animate-pulse w-4/5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
