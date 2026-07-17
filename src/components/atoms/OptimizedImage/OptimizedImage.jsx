import Image from "next/image";
import { cn } from "@/utils/cn";
import styles from "./OptimizedImage.module.scss";

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  className,
  ...rest
}) {
  if (!src) {
    return null;
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, 400px"}
        className={cn(styles.image, className)}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      sizes={sizes}
      className={cn(styles.image, className)}
      {...rest}
    />
  );
}
