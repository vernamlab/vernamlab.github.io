import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSlideshow from '@site/src/components/HomepageSlideshow';
import RecentNews from '@site/src/components/RecentNews';
import SponsorBanner from '@site/src/components/SponsorBanner';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <HomepageSlideshow />
      <div className={clsx("container", styles.heroContainer)}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

// New component/element for the lab description
function LabDescription() {
  return (
    <section className={styles.labDescriptionSection}>
      <div className="container">
        <p>
        We are a group of researchers in hardware security. Our students explore new avenues in making future computer systems and computer hardware more reliable, more efficient, and more secure. We explore offensive and defensive avenues to come up with the hottest results and the coolest solutions.        
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <LabDescription />
        <HomepageFeatures />
        <div className="container">
          <RecentNews maxItems={4}/>
        </div>
        <SponsorBanner />
      </main>
    </Layout>
  );
}
