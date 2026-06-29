import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-widest mb-2",
            light ? "text-savanna-gold" : "text-savanna-gold"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-safari-green"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base md:text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-white/80" : "text-muted-text"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
