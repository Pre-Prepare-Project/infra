"use client";

import { useState } from "react";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import { JobCard, SectionTitle } from "@/components/molecules";
import { CAREER_DEPARTMENTS, JOB_OPENINGS } from "@/data/careers";
import { cn } from "@/utils/cn";
import styles from "./CareersGrid.module.scss";

export default function CareersGrid({ className }) {
  const [activeDepartment, setActiveDepartment] = useState("all");

  const filteredJobs =
    activeDepartment === "all"
      ? JOB_OPENINGS
      : JOB_OPENINGS.filter((job) => job.department === activeDepartment);

  return (
    <section className={className} aria-labelledby="careers-grid-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Open Positions"
            title="Current Job Openings"
            subtitle="Find your next opportunity and grow your career with InfraPulse."
            id="careers-grid-title"
            gradient
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05} as="div" className={styles.filters} role="tablist" aria-label="Filter jobs by department">
          {CAREER_DEPARTMENTS.map((department) => (
            <button
              key={department.id}
              type="button"
              role="tab"
              aria-selected={activeDepartment === department.id}
              className={cn(
                styles.filterBtn,
                activeDepartment === department.id && styles.filterBtnActive,
              )}
              onClick={() => setActiveDepartment(department.id)}
            >
              {department.label}
            </button>
          ))}
        </ScrollReveal>

        <ScrollRevealGrid key={activeDepartment} className={styles.grid} stagger={0.08}>
          {filteredJobs.map((job) => (
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
