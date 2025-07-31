// app/workspaces/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";

export default function WorkspacePage() {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold capitalize">
        {slug
          ?.toString()
          .replace(/-/g, " ") // Replace hyphens with spaces
          .replace(/\band\b/g, "&") // Optional: change "and" back to "&" in title if needed
          .replace(/\b\w/g, (c) => c.toUpperCase()) ?? "Loading..."}
      </h1>
      <p className="text-gray-600 mt-2">
        This is the page for: <strong>{slug}</strong>
      </p>
    </div>
  );
}
