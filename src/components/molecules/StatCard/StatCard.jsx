import Text from "@/components/atoms/Text/Text";
import AnimatedCounter from "@/components/molecules/AnimatedCounter/AnimatedCounter";
import { cn } from "@/utils/cn";
import styles from "./StatCard.module.scss";

export default function StatCard({ value, label, suffix = "", prefix = "", className, animate = true }) {
  return (
    <article className={cn(styles.card, className)}>
      <p className={styles.value}>
        {animate ? (
          <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
        ) : (
          <>
            {prefix}
            {value}
            {suffix}
          </>
        )}
      </p>
      <Text variant="bodySm" color="secondary" className={styles.label}>
        {label}
      </Text>
    </article>
  );
}
