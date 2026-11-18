import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RecentNews from '@site/src/components/RecentNews';
import SponsorBanner from '@site/src/components/SponsorBanner';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const photo = useBaseUrl('/img/IMG_1508.jpg');

  return (
    <header className={styles.hero}>
      <div className={styles.heroIntro}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
      </div>
      <img
        className={styles.heroPhoto}
        src={photo}
        width={4032}
        height={2268}
        alt="Vernam Lab members pose together in a park in front of a gazebo and colorful autumn trees."
        fetchPriority="high"
      />
    </header>
  );
}

// LabDescription and Home components remain the same as you provided
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
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`} // More descriptive title
      description="Research in hardware security, computer systems, and making computing more reliable, efficient, and secure at Worcester Polytechnic Institute."> {/* Better SEO description */}
      <HomepageHeader />
      <main>
        <LabDescription />
        <HomepageFeatures />
        <section className="container section-padding-top--lg" aria-label="Latest lab news">
          <RecentNews maxItems={4} />
        </section>
        <SponsorBanner />
      </main>
    </Layout>
  );
}
