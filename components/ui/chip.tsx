"use client";

import { Chip as HeroChip, type ChipProps as HeroChipProps } from "@heroui/react";

type LegacyImportance = "high" | "normal" | "low";

export const importanceChipMeta = {
  high: { color: "danger", label: "높음" },
  normal: { color: "warning", label: "보통" },
  low: { color: "success", label: "낮음" },
} as const satisfies Record<LegacyImportance, { color: NonNullable<HeroChipProps["color"]>; label: string }>;

export type ChipProps = Omit<HeroChipProps, "color" | "variant"> & {
  color?: HeroChipProps["color"];
  variant?: HeroChipProps["variant"] | LegacyImportance;
};

/** Shared HeroUI Chip with the checklist importance aliases kept for existing data. */
function ChipRoot({ variant = "secondary", color, ...props }: ChipProps) {
  const legacyColors: Record<LegacyImportance, NonNullable<HeroChipProps["color"]>> = {
    high: "danger",
    normal: "warning",
    low: "success",
  };
  const isLegacyVariant = variant === "high" || variant === "normal" || variant === "low";

  return (
    <HeroChip
      color={color ?? (isLegacyVariant ? legacyColors[variant] : "default")}
      variant={isLegacyVariant ? "primary" : variant}
      {...props}
    />
  );
}

export const Chip = Object.assign(ChipRoot, {
  Label: HeroChip.Label,
});

export function ImportanceChip({ importance }: { importance: LegacyImportance }) {
  const meta = importanceChipMeta[importance];

  return (
    <Chip color={meta.color} data-theme="light" size="sm" variant="primary">
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      <Chip.Label>{meta.label}</Chip.Label>
    </Chip>
  );
}

export { HeroChip };
