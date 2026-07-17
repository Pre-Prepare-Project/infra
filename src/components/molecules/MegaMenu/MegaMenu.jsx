"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";
import Button from "@/components/atoms/Button/Button";
import Container from "@/components/atoms/Container/Container";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { cn } from "@/utils/cn";
import styles from "./MegaMenu.module.scss";

export default function MegaMenu({ menuKey, config, isOpen, onClose }) {
  if (!config) {
    return null;
  }

  const isServices = menuKey === "services";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.panel}
          role="region"
          aria-label={`${config.title} menu`}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Container>
            <div className={styles.header}>
              <div>
                <Heading level="h4" className={styles.title}>
                  {config.title}
                </Heading>
                <Text variant="bodySm" color="secondary">
                  {config.description}
                </Text>
              </div>
              <Button variant="outline" size="sm" href={config.href} onClick={onClose}>
                {config.ctaLabel}
              </Button>
            </div>

            <div className={cn(styles.grid, isServices ? styles.servicesGrid : styles.productsGrid)}>
              {config.items.map((item) => (
                <Link key={item.href} href={item.href} className={styles.item} onClick={onClose}>
                  {isServices && item.icon && (
                    <span className={styles.iconWrap} aria-hidden="true">
                      <item.icon />
                    </span>
                  )}
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>{item.label}</span>
                    <span className={styles.itemDesc}>{item.description}</span>
                    {!isServices && item.features && (
                      <span className={styles.features}>{item.features.join(" · ")}</span>
                    )}
                  </div>
                  <ArrowRightOutlined className={styles.itemArrow} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
