import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Graduate Students',
    description: (
      <>
        We are always looking for new candidates in the field! If you are thrilled by research opportunities and discovery, 
        if you never give up and strive to be the best of the best, then we want to hear from you. 
        Consult our employment opportunities to see a list of open positions for graduate school.
      </>
    ),
  },
  {
    title: 'Undergraduate Students',
    description: (
      <>
        WPI CHIPS offers you an opportunity for a cutting edge research experience and MQP (Master Qualifying Project). 
        In the past few years, we have worked on the design of secure hardware and software, advanced design methods for 
        secure chip design, first-of-a-kind prototypes of secure chips, and much more. 
        Reach out to faculty and consult the list of MQP projects.
      </>
    ),
  },
  {
    title: 'Visitors and Post-docs',
    description: (
      <>
        Are you considering a sabbatical, a post-doc, a short-term research visit in an advanced research environment? 
        Get in touch! Consult our employment opportunities or drop us a note. We'd love to hear from you!
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
