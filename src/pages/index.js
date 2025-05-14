import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// Make sure Slider is imported correctly
import SimpleSlider from '@site/src/components/SimpleSlider'; // Assuming you save it in src/components

// Your original Docusaurus / other components
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RecentNews from '@site/src/components/RecentNews';
import SponsorBanner from '@site/src/components/SponsorBanner';
import Heading from '@theme/Heading';

import styles from './index.module.css'; // This should contain .heroBanner, .heroContainer, etc.



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // Slightly adjusted speed
    fade: true,          // Fade effect often looks good for hero banners
    cssEase: 'linear',   // For fade
    adaptiveHeight: false, // Use with caution for a hero banner, can cause layout shifts.
                           // Prefer a fixed aspect ratio or height defined by CSS for the hero area.
  };
  return (
    // Use the original .heroBanner class as the main container
    // This will provide the padding and relative positioning context
      <SimpleSlider />

    // <div className={clsx('hero hero--primary', styles.heroBanner)}> {/* Use clsx for multiple classes if needed */}

    //   <div className={clsx('container', styles.heroContainer)}> {/* Docusaurus 'container' class for centering + your styles */}
    //     <Heading as="h1" className="hero__title">
    //       {siteConfig.title}
    //     </Heading>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     {/* Or if you want static text different from siteConfig: */}
    //     {/*
    //     <Heading as="h1" className={clsx("hero__title", styles.heroTitleText)}>Vernam Lab</Heading>
    //     <p className={clsx("hero__subtitle", styles.heroSubtitleText)}>Worcester Polytechnic Institute</p>
    //     */}
    //   </div>
    // </div>
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
        <div className="container section-padding-top--lg"> {/* Added Docusaurus class for spacing */}
          <RecentNews maxItems={4} />
        </div>
        <SponsorBanner />
      </main>
    </Layout>
  );
}