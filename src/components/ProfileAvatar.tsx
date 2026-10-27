import { useState } from 'react';
import profileImg from '../profile.jpeg';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showStatus?: boolean;
}

export default function ProfileAvatar({
  size = 'md',
  className = '',
  showStatus = false,
}: ProfileAvatarProps) {
  const [imgError, setImgError] = useState(false);

  // Size configurations
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-16 h-16 text-base',
    lg: 'w-28 h-28 text-2xl',
    hero: 'w-36 h-36 sm:w-44 sm:h-44 text-3xl',
  };

  return (
    <div className={`relative inline-block flex-shrink-0 ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-2xl overflow-hidden border border-border hover:border-accent/60 transition-all duration-300 bg-bg-secondary relative group flex items-center justify-center shadow-lg shadow-black/40`}
      >
        {!imgError ? (
          <img
            src={profileImg}
            alt="Rohit Patil"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#161A17] to-[#0D100E] flex flex-col items-center justify-center p-2 text-center select-none border border-border">
            <span className="font-display font-bold text-accent tracking-wider">RP</span>
            <span className="font-mono text-[8px] text-text-muted mt-1 uppercase tracking-widest hidden sm:inline-block">
              Rohit
            </span>
          </div>
        )}

        {/* Ambient border glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: 'inset 0 0 15px rgba(199, 243, 107, 0.15)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Online / Available status pill */}
      {showStatus && (
        <span
          className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center"
          title="Available for opportunities"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent border-2 border-bg-primary" />
        </span>
      )}
    </div>
  );
}
