import Link from "next/link";
import Logo from "@/components/atoms/Logo/Logo";
import Container from "@/components/atoms/Container/Container";
import Text from "@/components/atoms/Text/Text";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  FOOTER_PRODUCTS,
  FOOTER_TECHNOLOGIES,
  FOOTER_LEGAL,
  SOCIAL_LINKS,
} from "@/constants/navigation";
import { COMPANY } from "@/constants/theme";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";
import FooterNewsletter from "./FooterNewsletter";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.brandColumn}>
              <Logo variant="light" />
              <Text variant="bodySm" className={styles.mission}>
                We build innovative software solutions that empower businesses to scale with
                confidence — from web and mobile to ERP and cloud.
              </Text>
              <SocialLinks links={SOCIAL_LINKS} animated={false} />
            </div>

            <FooterColumn title="Quick Links" links={FOOTER_QUICK_LINKS} />

            <div className={styles.splitColumn}>
              <FooterColumn title="Services" links={FOOTER_SERVICES} />
              
            </div>

            <div className={styles.splitColumn}>
              <FooterColumn title="Projects" links={FOOTER_PRODUCTS} />
              {/* <FooterColumn title="Technologies" links={FOOTER_TECHNOLOGIES} /> */}
              <FooterNewsletter />
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.bottom}>
        <Container className={styles.bottomInner}>
          <Text variant="caption" className={styles.copyright}>
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </Text>
          <nav className={styles.legalNav} aria-label="Legal links">
            {FOOTER_LEGAL.map((item) => (
              <Link key={item.href} href={item.href} className={styles.legalLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}
