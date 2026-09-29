'use client';

import React from 'react';
import Link from 'next/link';
import type { Route } from 'next';

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
  /** typedRoutes is on, so this is a route pattern rather than any string. */
  href?: Route;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  blue: 'linear-gradient(135deg, hsl(16, 100%, 66%), hsl(16, 80%, 55%))',
  purple: 'linear-gradient(135deg, hsl(12, 95%, 68%), hsl(12, 85%, 60%))',
  red: 'linear-gradient(135deg, hsl(20, 100%, 70%), hsl(20, 85%, 58%))',
  indigo: 'linear-gradient(135deg, hsl(14, 90%, 64%), hsl(14, 75%, 54%))',
  orange: 'linear-gradient(135deg, hsl(18, 95%, 72%), hsl(18, 85%, 62%))',
  green: 'linear-gradient(135deg, hsl(10, 100%, 65%), hsl(10, 80%, 55%))'
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`grid gap-[5em] grid-cols-2 md:grid-cols-3 mx-auto py-[3em] overflow-visible ${className || ''}`}>
      {items.map((item, index) => {
        const shellClass = `relative bg-transparent outline-none border-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${
          item.customClass || ''
        }`;

        // Rendered as two branches rather than a dynamic element. A `Link | 'div'`
        // union cannot be typed against typedRoutes, which requires href to be a
        // route pattern and present.
        const inner = (
          <>
            <span
              className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] [will-change:transform] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
              style={{
                ...getBackgroundStyle(item.color),
                boxShadow: '0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)'
              }}
            ></span>

            <span
              className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] [will-change:transform] transform group-hover:[transform:translate3d(0,0,2em)]"
              style={{
                boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset'
              }}
            >
              <span className="m-auto flex h-[1.5em] w-[1.5em] items-center justify-center text-white" aria-hidden="true">
                {item.icon}
              </span>
            </span>

            <span
              /* Not whitespace-nowrap: a long label like "Flagship courses
                 and programmes" pushed the grid past the viewport at 390px,
                 because the span still takes layout width while invisible. */
              className="absolute top-full left-1/2 -translate-x-1/2 w-[9em] text-center text-sm leading-snug opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:opacity-100 text-dark-text"
            >
              {item.label}
            </span>
          </>
        );

        return item.href ? (
          <Link key={index} href={item.href} aria-label={item.label} className={shellClass}>
            {inner}
          </Link>
        ) : (
          <div key={index} aria-label={item.label} className={shellClass}>
            {inner}
          </div>
        );
      })}
    </div>
  );
};

export default GlassIcons;
