"use client";

import dynamic from "next/dynamic";

const ScrollProgress = dynamic(
  () => import("@/components/organisms/ScrollProgress/ScrollProgress"),
  { ssr: false },
);
const BackToTop = dynamic(() => import("@/components/organisms/BackToTop/BackToTop"), {
  ssr: false,
});

export default function LazyPageChrome() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
    </>
  );
}
