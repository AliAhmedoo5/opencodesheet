import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  cli: "text-accent border-accent/20",
  slash: "text-accent2 border-accent2/20",
  key: "text-accent3 border-accent3/20",
  tool: "text-accent4 border-accent4/20",
  combo: "text-accent5 border-accent5/20",
};

export function BadgeLabel({
  text,
  variant = "cli",
}: {
  text: string;
  variant?: keyof typeof colorMap;
}) {
  return (
    <span
      className={cn(
        "inline-block text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-1.5",
        colorMap[variant]
      )}
    >
      {text}
    </span>
  );
}
