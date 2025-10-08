"use client"

import { DecorativePatternProps } from '@/types/components';

export function DecorativePattern({
  position,
  customPosition,
  opacity = 0.375, // Увеличена яркость на 50% (с 0.25 до 0.375)
  width = "131.58px",
  height = "115px",
  mobileOnly = false,
  desktopOnly = false,
  className = ""
}: DecorativePatternProps) {
  let positionClasses = '';
  
  switch (position) {
    case 'top-right':
      positionClasses = 'top-3 right-2';
      break;
    case 'top-left':
      positionClasses = 'top-3 left-2';
      break;
    case 'bottom-right':
      positionClasses = 'bottom-3 right-2';
      break;
    case 'bottom-left':
      positionClasses = 'bottom-3 left-2';
      break;
    case 'custom':
      positionClasses = customPosition || '';
      break;
  }

  const displayClasses = mobileOnly 
    ? 'lg:hidden' 
    : desktopOnly 
      ? 'hidden lg:block' 
      : '';

  const mobileHeight = mobileOnly ? `calc(${height} * 1.1)` : height;

  return (
    <div 
      className={`absolute ${positionClasses} ${displayClasses} ${className}`} 
      style={{ 
        width, 
        height: mobileOnly ? mobileHeight : height, 
        opacity 
      }}
    >
      <img 
        src="/assets/decorative/dots-pattern.svg" 
        alt="" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
