// src/app/workspaces/[slug]/page.tsx
import { notFound } from "next/navigation";

const offerings = [
  {
    title: "Office Spaces",
    items: ["Managed Offices", "Enterprise Solutions", "Private Cabins"],
  },
  {
    title: "Coworking Spaces",
    items: ["Dedicated Desks", "Hot Desks"],
  },
  {
    title: "Additional Solutions",
    items: ["Meetings & Event Spaces"],
  },
];

function getWorkspaceData(slug: string) {
  const formattedSlug = slug.replace(/-/g, " ").toLowerCase();

  for (const category of offerings) {
    const match = category.items.find(
      (item) => item.toLowerCase() === formattedSlug
    );
    if (match) {
      return {
        title: match,
        category: category.title,
      };
    }
  }

  return null;
}

interface WorkspacePageProps {
  params: {
    slug: string;
  };
}

export default async function WorkspacePage({ params }: WorkspacePageProps) {
  const workspace = getWorkspaceData(params.slug);

  if (!workspace) {
    notFound();
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{workspace.title}</h1>
      <p className="text-gray-600 mt-2">Category: {workspace.category}</p>
    </div>
  );
}
