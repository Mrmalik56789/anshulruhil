import type { ReactNode } from "react";

export function GradientHighlight({
  text,
  words,
}: {
  text: string;
  words: readonly string[];
}) {
  const escaped = words
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const match = words.some((w) => w.toLowerCase() === part.toLowerCase());
        if (!match) return <span key={i}>{part}</span>;
        return (
          <span
            key={i}
            className="bg-gradient-to-r from-[#8b67ff] via-[#6d3af2] to-[#5b2fe0] bg-clip-text font-semibold text-transparent"
          >
            {part}
          </span>
        );
      })}
    </>
  );
}

export function SoftParticles({ count = 12 }: { count?: number }) {
  const nodes: ReactNode[] = [];
  for (let i = 0; i < count; i++) {
    const size = 4 + (i % 4) * 2;
    nodes.push(
      <span
        key={i}
        className="particle absolute"
        style={{
          width: size,
          height: size,
          top: `${8 + ((i * 17) % 80)}%`,
          left: `${6 + ((i * 23) % 88)}%`,
          opacity: 0.35 + (i % 3) * 0.12,
          animation: `floaty ${5 + (i % 4)}s ease-in-out ${i * 0.25}s infinite`,
        }}
      />,
    );
  }
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>{nodes}</div>;
}
