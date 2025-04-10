// types/types.ts
export type IconType = 'tags' | 'bookmark' | 'upload' | 'bell' | 'search' | 'camera';

export interface Feature {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}