import SkipLink from "@/components/atoms/SkipLink/SkipLink";
import PageTransition from "@/components/atoms/PageTransition/PageTransition";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import LazyPageChrome from "@/components/templates/PageLayout/LazyPageChrome";
import { cn } from "@/utils/cn";
import styles from "./PageLayout.module.scss";

export default function PageLayout({ children, className, mainClassName }) {
  return (
    <div className={cn(styles.wrapper, className)}>
      <SkipLink />
      <LazyPageChrome />
      <Header />
      <main id="main-content" className={cn(styles.main, mainClassName)} tabIndex={-1}>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
