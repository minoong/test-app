"use client";

import { motion } from "motion/react";
import * as React from "react";

type SlidingNumberProps = React.HTMLAttributes<HTMLSpanElement> & {
  value: string;
  padStart?: boolean;
  decimalSeparator?: string;
};

const DIGITS = Array.from({ length: 10 }, (_, index) => index);

const SlidingDigit: React.FC<{ value: number }> = ({ value }) => (
  <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden align-bottom" aria-hidden="true">
    <motion.span
      className="absolute inset-x-0 top-0 flex flex-col items-center"
      initial={false}
      animate={{ y: `-${value}em` }}
      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.5 }}
    >
      {DIGITS.map((digit) => (
        <span key={digit} className="flex h-[1em] items-center justify-center">
          {digit}
        </span>
      ))}
    </motion.span>
  </span>
);

export const SlidingNumber = React.forwardRef<HTMLSpanElement, SlidingNumberProps>(
  ({ value, padStart = false, decimalSeparator = ".", className, ...props }, ref) => {
    const [integerPart, decimalPart] = value.split(decimalSeparator);
    const normalizedInteger = padStart && integerPart.length < 2 ? integerPart.padStart(2, "0") : integerPart;
    const displayValue = decimalPart === undefined
      ? normalizedInteger
      : `${normalizedInteger}${decimalSeparator}${decimalPart}`;

    return (
      <span ref={ref} className={`inline-flex items-center leading-none ${className ?? ""}`} {...props}>
        {displayValue.split("").map((character, index) => {
          if (!/\d/.test(character)) {
            return <span key={`${character}-${index}`} aria-hidden="true">{character}</span>;
          }

          return <SlidingDigit key={`${character}-${index}`} value={Number(character)} />;
        })}
        <span className="sr-only">{displayValue}</span>
      </span>
    );
  },
);

SlidingNumber.displayName = "SlidingNumber";
