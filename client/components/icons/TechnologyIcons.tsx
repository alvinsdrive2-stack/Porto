import React from "react";

// Custom SVG icons for specific technologies
export const CIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 7L12 12L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PythonIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.686 2 6 4.686 6 8V16C6 19.314 8.686 22 12 22C15.314 22 18 19.314 18 16V8C18 4.686 15.314 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 8C9 7.447 9.447 7 10 7H14C14.553 7 15 7.447 15 8C15 8.553 14.553 9 14 9H10C9.447 9 9 8.553 9 8Z" fill="currentColor"/>
    <path d="M9 16C9 15.447 9.447 15 10 15H14C14.553 15 15 15.447 15 16C15 16.553 14.553 17 14 17H10C9.447 17 9 16.553 9 16Z" fill="currentColor"/>
  </svg>
);

export const LuaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2V12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
  </svg>
);

export const JavaScriptIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 12H9C9 10 9 8 11 8C13 8 13 10 13 12C13 14 13 16 11 16C10 16 9 15.5 9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 16V12C15 11 15 8 17 8C19 8 19 11 19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ActionScriptIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12H12M17 12H12M12 12V7M12 12V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <text x="12" y="16" textAnchor="middle" fontSize="8" fill="currentColor">AS</text>
  </svg>
);

export const LaravelIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12L7 7L12 12L7 17L2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L17 7L22 12L17 17L12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7L12 12M17 7L12 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const NodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
  </svg>
);

export const ReactIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M12 6C16 6 19.5 7 21 9C19.5 11 16 12 12 12C8 12 4.5 11 3 9C4.5 7 8 6 12 6Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 18C16 18 19.5 17 21 15C19.5 13 16 12 12 12C8 12 4.5 13 3 15C4.5 17 8 18 12 18Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const RPAIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 6.5H14M6.5 10V14M17.5 10V14M10 17.5H14" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const UIUXIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="6" cy="6" r="1" fill="currentColor"/>
    <path d="M10 6H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 12C21 14.209 16.9706 16 12 16C7.02944 16 3 14.209 3 12" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 5V19C21 21.209 16.9706 23 12 23C7.02944 23 3 21.209 3 19V5" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12C3 14.209 7.02944 16 12 16C16.9706 16 21 14.209 21 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const CanvasIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="8" r="1" fill="currentColor"/>
    <circle cx="16" cy="16" r="1" fill="currentColor"/>
    <circle cx="16" cy="8" r="1" fill="currentColor"/>
    <circle cx="8" cy="16" r="1" fill="currentColor"/>
  </svg>
);

export const WebGLIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7V17L12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 7V17L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PhysicsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="15" cy="15" r="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M11.5 11.5L12.5 12.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);