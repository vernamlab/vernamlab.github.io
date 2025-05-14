import React, { useEffect, useRef, useState } from 'react';
import styles from './SponsorBanner.module.css';

const initialLogos = [
  { src: '/img/logos/logo_nsf.png', alt: 'NSF Logo' },
  { src: '/img/logos/logo_darpa.png', alt: 'DARPA Logo' },
  { src: '/img/logos/logo_intel.png', alt: 'Intel Logo' },
  { src: '/img/logos/logo_meta.png', alt: 'Meta Logo' },
  { src: '/img/logos/logo_cisco.png', alt: 'Cisco Logo' },
  { src: '/img/logos/nist-logo.png', alt: 'NIST Logo' },
  { src: '/img/logos/ti-logo.png', alt: 'TI Logo' },
  { src: '/img/logos/logo_masstech.png', alt: 'MassTech Logo' },
  { src: '/img/logos/logo_epri.png', alt: 'EPRI Logo' },
  { src: '/img/logos/logo_src.png', alt: 'SRC Logo' },
  { src: '/img/logos/ML_SEC.png', alt: 'ML_SEC Logo' },
  // Add other logos here as needed
];

export default function SponsorBanner() {
  // Duplicate logos for seamless animation
  const duplicatedLogos = [...initialLogos, ...initialLogos];
  const logoGridRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState('40s'); // Default duration

  useEffect(() => {
    if (logoGridRef.current) {
      // Optional: Adjust animation duration based on the number of logos or width
      // For a simple continuous scroll, a fixed duration or one based on count is okay.
      const numUniqueLogos = initialLogos.length;
      // Example: Make it scroll faster if there are fewer logos, slower if more.
      // This is a very rough estimation, you might need to fine-tune.
      const estimatedDuration = numUniqueLogos * 3 * 1.7; // seconds per unique logo, now 50% slower
      setAnimationDuration(`${Math.max(20, estimatedDuration)}s`); // Ensure a minimum duration
    }
  }, [initialLogos.length]);

  if (!initialLogos || initialLogos.length === 0) {
    return null;
  }

  return (
    <section className={styles.sponsorBannerContainer}>
      <p className={styles.sponsorTitle}>We are grateful for funding from the NSF, MassTech, DARPA, SRC, Meta, CISCO, EPRI, and Intel.
</p>
      <div className={styles.logoScrollContainer}>
        <div 
          ref={logoGridRef} 
          className={styles.logoGridAnimation} 
          style={{ animationDuration: animationDuration }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img src={logo.src} alt={logo.alt} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 