import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './HomepageSlideshow.module.css'; // We'll create this for custom styles if needed

const slidesData = [
  {
    id: 1,
    image: '/img/slide/group.jpg',
    caption: 'Group activities and collaborations',
  },
  {
    id: 2,
    image: '/img/slide/sca.png',
    caption: 'Side-Channel Analysis research',
  },
  {
    id: 3,
    image: '/img/slide/pres.JPG',
    caption: 'Presenting research findings',
  },
  {
    id: 4,
    image: '/img/slide/phem1.jpg',
    caption: 'Lab work and experiments',
  },
  {
    id: 5,
    image: '/img/slide/conf.JPG',
    caption: 'Attending conferences and events',
  },

  {
    id: 6,
    image: '/img/slide/hh.jpg',
    caption: 'Research and development',
  },
  {
    id: 7,
    image: '/img/slide/debug.png',
    caption: 'Debugging and analysis',
  },
  {
    id: 8,
    image: '/img/slide/alp1.JPG',
    caption: 'Project work (ALP 1)',
  },
  {
    id: 9,
    image: '/img/slide/alp2.JPG',
    caption: 'Project work (ALP 2)',
  },
  {
    id: 10,
    image: '/img/slide/alp3.JPG',
    caption: 'Project work (ALP 3)',
  },
  {
    id: 11,
    image: '/img/slide/MJB_8714.jpg',
    caption: 'Lab and equipment showcases',
  }
  // To add more slides, ensure the image is in /static/img/slide/
  // and add a new object to this array similar to the ones above.
];

export default function HomepageSlideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.slideshowContainer}>
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className={styles.slideItemContainer}>
            <img src={slide.image} alt={slide.caption} className={styles.slideImage} />
            {slide.caption && <p className={styles.slideCaption}>{slide.caption}</p>}
          </div>
        ))}
      </Slider>
    </div>
  );
} 