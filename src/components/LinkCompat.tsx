
"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const LinkCompat: React.FC<LinkProps> = ({ href, children, className = "", onClick }) => {
  const pathname = usePathname();
  
  useEffect(() => {
    // Check if we arrived with a hash in the URL
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        // Add a small delay to ensure the page has fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname]);
  
  // Handle fragment links within the same page
  const isFragmentLink = href.startsWith('#');
  
  // Handle links that should redirect to home page sections
  const isHomeSectionLink = href.startsWith('/#');
  
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
  
  if (isHomeSectionLink && pathname !== '/') {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
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

