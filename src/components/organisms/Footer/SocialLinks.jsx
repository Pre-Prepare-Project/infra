import Link from "next/link";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import styles from "./SocialLinks.module.scss";

const ICON_MAP = {
  facebook: FacebookFilled,
  linkedin: LinkedinFilled,
  twitter: TwitterOutlined,
  instagram: InstagramFilled,
  youtube: YoutubeFilled,
};

export default function SocialLinks({ links }) {
  return (
    <ul className={styles.list} aria-label="Social media links">
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
              {Icon && <Icon aria-hidden="true" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
