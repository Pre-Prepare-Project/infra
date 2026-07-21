"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { STAGGER_CONTAINER, STAGGER_ITEM, EASING } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";
import styles from "./SocialLinks.module.scss";

const ICON_MAP = {
  facebook: FacebookFilled,
  linkedin: LinkedinFilled,
  twitter: TwitterOutlined,
  instagram: InstagramFilled,
  youtube: YoutubeFilled,
};

export default function SocialLinks({
  links,
  variant = "dark",
  size = "md",
  animated = true,
  className,
}) {
  const prefersReducedMotion = useReducedMotion();
  const variantClass = styles[variant];
  const sizeClass = styles[size];
  const shouldAnimate = animated && !prefersReducedMotion;

  if (!shouldAnimate) {
    return (
      <ul className={cn(styles.list, variantClass, sizeClass, className)} aria-label="Social media links">
        {links.map((item) => {
          const Icon = ICON_MAP[item.icon];

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                {Icon && <Icon className={styles.icon} aria-hidden="true" />}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <motion.ul
      className={cn(styles.list, variantClass, sizeClass, className)}
      aria-label="Social media links"
      initial="hidden"
      animate="visible"
      variants={STAGGER_CONTAINER}
    >
      {links.map((item) => {
        const Icon = ICON_MAP[item.icon];

        return (
          <motion.li key={item.href} variants={STAGGER_ITEM}>
            <motion.div
              whileHover={{ y: -4, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={EASING.softSpring}
            >
              <Link
                href={item.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                {Icon && <Icon className={styles.icon} aria-hidden="true" />}
                <span className={styles.ring} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
