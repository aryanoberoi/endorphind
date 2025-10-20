import React from 'react';

const Heading = ({
  as: Tag = 'h1',
  children,
  size = 'xl',         // 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  color = '#DE9F3A',
  weight = 'normal',   // 'normal' | 'medium' | 'bold'
  className = '',
}) => {
  const sizeMap = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
    '2xl': 'text-5xl',
    '3xl': 'text-6xl',
    '4xl': 'text-7xl',
  };
  const weightMap = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Outfit:00,900']
      },
      custom: {
        families: ['Robit'], // The font-family name from your @font-face rule
        urls: ['./index.css'] // Path to your CSS file containing the @font-face rule
      },
    });
  }, []);
  return (
    <Tag
      className={`font-myfont ${sizeMap[size]} ${weightMap[weight]} ${className}`}
      style={{ color }}
    >
      {children}
    </Tag>
  );
};

export default Heading;