"use client"

interface DecorativeElementProps {
  type?: 'dots' | 'snowflake';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'custom';
  customPosition?: string;
  className?: string;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}

export function DecorativeElement({
  type = 'dots',
  position = 'top-right',
  customPosition = '',
  className = '',
  mobileOnly = false,
  desktopOnly = false
}: DecorativeElementProps) {
  // Определяем позицию элемента
  let positionClasses = '';
  
  if (position === 'top-right') {
    positionClasses = 'top-[100px] right-[16px] lg:top-[200px] lg:right-[40px]';
  } else if (position === 'top-left') {
    positionClasses = 'top-[100px] left-[16px] lg:top-[200px] lg:left-[40px]';
  } else if (position === 'bottom-right') {
    positionClasses = 'bottom-[100px] right-[16px] lg:bottom-[200px] lg:right-[40px]';
  } else if (position === 'bottom-left') {
    positionClasses = 'bottom-[100px] left-[16px] lg:bottom-[200px] lg:left-[40px]';
  } else if (position === 'custom' && customPosition) {
    positionClasses = customPosition;
  }

  // Определяем видимость на разных устройствах
  let visibilityClasses = '';
  
  if (mobileOnly) {
    visibilityClasses = 'block lg:hidden';
  } else if (desktopOnly) {
    visibilityClasses = 'hidden lg:block';
  } else {
    visibilityClasses = 'block';
  }

  // Определяем путь к изображению
  let imagePath = '';
  
  if (type === 'dots') {
    imagePath = '/assets/decorative/dots-pattern-packaging.svg';
  } else if (type === 'snowflake') {
    imagePath = '/assets/decorative/snowflake-1.svg';
  }

  return (
    <div className={`absolute ${positionClasses} ${visibilityClasses} w-[100px] h-[100px] lg:w-[132px] lg:h-[115px] opacity-30 ${className}`}>
      <img src={imagePath} alt="" className="w-full h-full" />
    </div>
  );
}
