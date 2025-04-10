// components/FeatureCard.tsx
import { IconType } from '../types/types';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
  align: 'left' | 'right';
}

const iconMap: Record<string, IconType> = {
  'ion-ios-pricetags-outline': 'tags',
  'ion-ios-bookmarks-outline': 'bookmark',
  'ion-ios-upload-outline': 'upload',
  'ion-ios-bell-outline': 'bell',
  'ion-ios-search': 'search',
  'ion-ios-camera-outline': 'camera'
};

const FeatureCard = ({ icon, title, description, onClick, align }: FeatureCardProps) => {
  const getIconComponent = () => {
    switch (iconMap[icon]) {
      case 'tags':
        return <TagsIcon />;
      case 'bookmark':
        return <BookmarkIcon />;
      case 'upload':
        return <UploadIcon />;
      case 'bell':
        return <BellIcon />;
      case 'search':
        return <SearchIcon />;
      case 'camera':
        return <CameraIcon />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex ${align === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'} items-center cursor-pointer group`}
      onClick={onClick}
    >
      <div className={`${align === 'right' ? 'ml-4' : 'mr-4'} p-3 rounded-full bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all`}>
        {getIconComponent()}
      </div>
      <div className={`${align === 'right' ? 'mr-auto' : 'ml-auto'}`}>
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Simple SVG icons (you can replace with actual ionicons or other icons)
const TagsIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" /></svg>;
const BookmarkIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>;
const UploadIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>;
const BellIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;
const SearchIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const CameraIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

export default FeatureCard;