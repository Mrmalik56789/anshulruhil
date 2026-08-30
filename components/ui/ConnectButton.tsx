"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";
import { User } from "lucide-react";

export function ConnectButton({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const ripple = (event: MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const size = 18;
    const span = document.createElement("span");
    span.className = "ripple";
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${event.clientX - rect.left - size / 2}px`;
    span.style.top = `${event.clientY - rect.top - size / 2}px`;
    node.appendChild(span);
    window.setTimeout(() => span.remove(), 600);
  };

  return (
    <Link
      ref={ref}
      href="/#contact"
      className={`connect-btn inline-flex ${className}`}
      onClick={ripple}
    >
      <User size={16} strokeWidth={2.2} />
      Connect
    </Link>
  );
}
