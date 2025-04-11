
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Compatibility Link component that works in both Next.js and React Router environments
 * Use this component during the migration period
 */
const LinkCompat: React.FC<LinkProps> = ({ href, children, className = "", onClick }) => {
  const pathname = usePathname();
  
  // Handle fragment links within the same page
  const isFragmentLink = href.startsWith('#');
  
  if (isFragmentLink) {
    return (
      <a 
        href={href} 
        className={className}
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          if (onClick) onClick();
        }}
      >
        {children}
      </a>
    );
  }
  
  return (
    <NextLink href={href} className={className} onClick={onClick}>
      {children}
    </NextLink>
  );
};

export default LinkCompat;
