import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };

// Small local brand marks: current Lucide releases focus on interface icons.
// Keeping these SVGs local avoids adding a second icon library.
export function Github({ size = 24, strokeWidth = 1.8, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 6v-3.9a3.4 3.4 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-4c.2-.5.6-2-.2-4.1 0 0-1.2-.4-4 1.5a13.7 13.7 0 0 0-7 0C5.2-.1 4 .3 4 .3c-.8 2.1-.4 3.6-.2 4.1a5.7 5.7 0 0 0-1.5 4c0 5.7 3.4 6.9 6.7 7.3a3.4 3.4 0 0 0-1 2.7v3.9" transform="translate(1 1) scale(.91)" /></svg>;
}

export function Linkedin({ size = 24, strokeWidth = 1.8, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="9" width="4" height="12" rx=".5" /><circle cx="5" cy="4.5" r="2" /><path d="M11 21V9h4v1.7a4.2 4.2 0 0 1 7 3.3v7h-4v-6c0-2.8-3-2.8-3 0v6z" /></svg>;
}
