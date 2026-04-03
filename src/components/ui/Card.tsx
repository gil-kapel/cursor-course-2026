import React, { forwardRef } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'flat';
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className = '',
  padding = 'md',
  variant = 'default',
}, ref) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantClasses = {
    default: 'bg-white rounded-3xl border-0 shadow-[0_4px_20px_rgba(0,0,0,0.08)]',
    flat: 'bg-white rounded-3xl border border-slate-100',
  };

  return (
    <div
      ref={ref}
      className={`${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
