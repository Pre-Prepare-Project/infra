"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import { JobCard, SectionTitle } from "@/components/molecules";
import { getRelatedJobs } from "@/data/careers";
import styles from "./RelatedJobs.module.scss";

export default function RelatedJobs({ currentSlug, title = "Other Open Roles" }) {
  const jobs = getRelatedJobs(currentSlug, 3);

  if (!jobs.length) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="related-jobs-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Explore More"
            title={title}
            id="related-jobs-title"
            className={styles.header}
          />
        </ScrollReveal>
        <ScrollRevealGrid className={styles.grid} stagger={0.1}>
          {jobs.map((job) => (
            <ScrollRevealItem key={job.id} as="div">
              <JobCard
                title={job.title}
                description={job.description}
                departmentLabel={job.departmentLabel}
                location={job.location}
                type={job.type}
                experience={job.experience}
                href={job.href}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
