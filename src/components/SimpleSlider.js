import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SimpleSlider(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className="hero-slider-wrapper">

            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <img src="/img/slide/alp1.JPG" alt="Slide 1" className="standard-image-in-carousel"/>
                <img src="/img/slide/alp2.JPG" alt="Slide 2" className="standard-image-in-carousel"/>
                <img src="/img/slide/alp3.JPG" alt="Slide 3" className="standard-image-in-carousel"/>
                <img src="/img/slide/conf.JPG" alt="Slide 4" className="standard-image-in-carousel"/>
                <img src="/img/slide/group.jpg" alt="Slide 5" className="standard-image-in-carousel"/>
                <img src="/img/slide/hh.jpg" alt="Slide 6" className="standard-image-in-carousel"/>
                <img src="/img/slide/MJB_8714.jpg" alt="Slide 7" className="standard-image-in-carousel"/>
                <img src="/img/slide/phem1.jpg" alt="Slide 8" className="standard-image-in-carousel"/>
                <img src="/img/slide/pres.JPG" alt="Slide 9" className="standard-image-in-carousel"/>
                <img src="/img/slide/sca.png" alt="Slide 10" className="standard-image-in-carousel"/>
                <img src="/img/slide/debug.png" alt="Slide 11" className="standard-image-in-carousel"/>
                
            </Carousel>
                {/* The Text Banner Overlay */}
            <div className="hero-text-banner">
                <h1 className="hero-title">Vernam Lab</h1>
                <p className="hero-subtitle">Worcester Polytechnic Institute</p> {/* Optional subtitle */}
            </div>
        </div>
    );
}

export default SimpleSlider;