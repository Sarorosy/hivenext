// types/workspace.ts
export interface WorkspaceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface Workspace {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  image2: string;
  features: WorkspaceFeature[];
  benefits: string[];
  targetAudience: string;
  capacity?: string;
  pricing?: {
    from: number;
    period: string;
  };
  images?: string[];
}
