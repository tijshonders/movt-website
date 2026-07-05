interface LogoProps {
  className?: string;
}

/**
 * MOVT brand mark — geometric M with offset gold accent strokes,
 * recreated as vector from the brand logo.
 */
export default function LogoMark({ className = "h-9 w-9" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Gold accent — left bar */}
      <path d="M14 30 L22 24 L22 88 L14 88 Z" fill="#A99B84" />
      {/* Gold accent — right inner diagonal */}
      <path
        d="M58 62 L78 38 L78 88 L70 88 L70 58 Z"
        fill="#A99B84"
      />
      {/* White M — left leg */}
      <path d="M26 20 L34 14 L34 88 L26 88 Z" fill="currentColor" />
      {/* White M — left diagonal down to center */}
      <path
        d="M34 14 L62 46 L62 60 L34 28 Z"
        fill="currentColor"
      />
      {/* White M — right diagonal up */}
      <path
        d="M62 46 L84 20 L84 34 L62 60 Z"
        fill="currentColor"
      />
      {/* White M — right leg */}
      <path d="M84 20 L92 26 L92 88 L84 88 Z" fill="currentColor" />
    </svg>
  );
}
