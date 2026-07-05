import Image from "next/image";

interface LogoProps {
  className?: string;
}

/**
 * MOVT brand mark — the real logo (extracted from brand asset,
 * transparent background). White M with taupe accents; use on
 * dark surfaces.
 */
export default function LogoMark({ className = "h-10 w-10" }: LogoProps) {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt=""
      aria-hidden="true"
      width={803}
      height={733}
      className={`${className} object-contain`}
      priority
    />
  );
}
