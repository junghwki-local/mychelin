"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    href: "/",
    label: "피드",
    icon: (active: boolean) => (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8} viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/map",
    label: "지도",
    icon: (active: boolean) => (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8} viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/r/new",
    label: "등록",
    icon: () => (
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center -mt-6 shadow-lg">
        <svg width="24" height="24" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    href: "/profile",
    label: "프로필",
    icon: (active: boolean) => (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-background border-t border-border z-50">
      <ul className="flex items-end justify-around px-4 py-2">
        {NAV_ITEMS.map(({ href, label, icon }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex flex-col items-center gap-1 text-xs transition-colors ${
                  active ? "text-primary font-semibold" : "text-muted"
                }`}
              >
                {icon(active)}
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
