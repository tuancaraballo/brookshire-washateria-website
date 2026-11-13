type IconName =
  | "washer"
  | "basket"
  | "bed"
  | "hanger"
  | "iron"
  | "rug"
  | "money"
  | "needle"
  | "phone"
  | "pin"
  | "clock"
  | "wifi"
  | "shield"
  | "check"
  | "star"
  | "arrow"
  | "menu"
  | "close";

const paths: Record<IconName, React.ReactNode> = {
  washer: (
    <>
      <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
      <circle cx="12" cy="13.5" r="5" />
      <path d="M8.5 13.5c1.2 1 2.3 1 3.5 0s2.3-1 3.5 0" />
      <circle cx="7.5" cy="5.75" r=".75" fill="currentColor" />
      <circle cx="10" cy="5.75" r=".75" fill="currentColor" />
    </>
  ),
  basket: (
    <>
      <path d="M3 9h18l-2 11a1.5 1.5 0 0 1-1.5 1.2h-11A1.5 1.5 0 0 1 5 20L3 9Z" />
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
      <path d="M9 13v4M12 13v4M15 13v4" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3h-7v8" />
      <path d="M3 14h18" />
      <circle cx="7" cy="11" r="2" />
    </>
  ),
  hanger: (
    <>
      <path d="M12 8a2 2 0 1 1 2-2c0 1-2 1.5-2 3v1" />
      <path d="M12 10 2.8 16.4A1.2 1.2 0 0 0 3.5 18.6h17a1.2 1.2 0 0 0 .7-2.2L12 10Z" />
    </>
  ),
  iron: (
    <>
      <path d="M3 17h17v-4a6 6 0 0 0-6-6H8" />
      <path d="M3 17 5 11h15" />
      <path d="M8 7V5" />
    </>
  ),
  rug: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="1.5" />
      <rect x="8" y="7" width="8" height="10" rx="1" />
      <path d="M7 4V2M10 4V2M14 4V2M17 4V2M7 22v-2M10 22v-2M14 22v-2M17 22v-2" />
    </>
  ),
  money: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.75" />
      <path d="M6 9.5v5M18 9.5v5" />
    </>
  ),
  needle: (
    <>
      <path d="M19 5 7 17" />
      <path d="M17 3a2.8 2.8 0 0 1 4 4" />
      <path d="M7 17c-2 0-4 1-4 3s3 1 4-1" />
    </>
  ),
  phone: <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19" r=".9" fill="currentColor" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" fill="currentColor" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export default function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
