import { StarFilled } from "@ant-design/icons";
import { HERO_V2_SOCIAL_PROOF } from "@/data/homeHeroV2";
import styles from "./HeroSocialProof.module.scss";

export default function HeroSocialProof() {
  const { rating, clientCount, avatars } = HERO_V2_SOCIAL_PROOF;

  return (
    <div className={styles.proof} aria-label="Client satisfaction rating">
      <div className={styles.avatars} aria-hidden="true">
        {avatars.map((avatar) => (
          <span
            key={avatar.initials}
            className={styles.avatar}
            style={{ backgroundColor: avatar.color }}
          >
            {avatar.initials}
          </span>
        ))}
      </div>
      <div className={styles.rating}>
        <span className={styles.stars}>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarFilled key={index} className={styles.star} />
          ))}
        </span>
        <span className={styles.score}>{rating}/5</span>
        <span className={styles.label}>Trusted by {clientCount} Happy Clients</span>
      </div>
    </div>
  );
}
