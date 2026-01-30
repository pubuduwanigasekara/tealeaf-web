import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  icon?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  href,
  target,
  rel,
  ...props 
}) => {
  const baseStyles = "group inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 will-change-transform tracking-wide";
  
  const variants = {
    // Primary button uses the Orange Accent for high visibility/CTA
    primary: "bg-brand-accent text-white hover:bg-[#e55a25] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    // Outline button uses the Primary Blue
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
    // Text button
    text: "text-brand-primary hover:text-brand-accent px-0 underline-offset-4 hover:underline bg-transparent"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
      >
        {children}
        {icon && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 duration-300 transition-transform" />}
      </a>
    );
  }

  return (
    <button 
      className={combinedClasses}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 duration-300 transition-transform" />}
    </button>
  );
};