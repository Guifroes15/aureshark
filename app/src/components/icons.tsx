type IconProps = {
  className?: string;
};

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  "aria-hidden": true,
};

export function HomeIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 7.2 8 2.8l5.5 4.4V13a.6.6 0 0 1-.6.6H3.1a.6.6 0 0 1-.6-.6Z" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinecap="round" className={className}>
      <rect x="2.3" y="3.4" width="11.4" height="10.2" rx="1.4" />
      <path d="M2.3 6.6h11.4M5.6 2.2v2.2M10.4 2.2v2.2" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinejoin="round" className={className}>
      <path d="M8 2.2 9.4 6.2 13.4 7.6 9.4 9 8 13 6.6 9 2.6 7.6 6.6 6.2Z" />
    </svg>
  );
}

export function GridStackIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinecap="round" className={className}>
      <rect x="2.4" y="2.4" width="11.2" height="7" rx="1.4" />
      <path d="M2.4 12h6.4M2.4 14.2h4" />
    </svg>
  );
}

export function CheckSquareIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2.4" y="2.4" width="11.2" height="11.2" rx="2" />
      <path d="M5.4 8.2 7.4 10.2l3.4-3.8" />
    </svg>
  );
}

export function GridFeedIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinecap="round" className={className}>
      <rect x="2.4" y="2.4" width="4.8" height="4.8" rx="1" />
      <rect x="8.8" y="2.4" width="4.8" height="4.8" rx="1" />
      <rect x="2.4" y="8.8" width="4.8" height="4.8" rx="1" />
      <rect x="8.8" y="8.8" width="4.8" height="4.8" rx="1" />
    </svg>
  );
}

export function BarsIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinecap="round" className={className}>
      <path d="M2.6 13.4V9.6M6.2 13.4V4.2M9.8 13.4V7.4M13.4 13.4V2.6" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinecap="round" className={className}>
      <circle cx="6.2" cy="6" r="2.6" />
      <path d="M2.4 13.4c0-2.3 1.7-3.9 3.8-3.9s3.8 1.6 3.8 3.9" />
      <path d="M10.8 4.2a2.4 2.4 0 0 1 0 4.4M12 13.4c0-1.3-.3-2.3-.9-3" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.4 6.6v2.8l8.4 3.2V3.4Z" />
      <path d="M10.8 5.4a2.6 2.6 0 0 1 0 5.2M4.6 9.8v2.6a1 1 0 0 0 2 0v-2" />
    </svg>
  );
}

export function ExternalArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6.2 3.2H3.4a1 1 0 0 0-1 1v8.2a1 1 0 0 0 1 1h8.2a1 1 0 0 0 1-1V9.8M9.4 2.6h4v4M13.4 2.6 7.8 8.2" />
    </svg>
  );
}
