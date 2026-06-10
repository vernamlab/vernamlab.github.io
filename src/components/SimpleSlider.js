import { Carousel } from 'nuka-carousel';

function SimpleSlider(props) {
    const hideArrows = props.deviceType === 'tablet' || props.deviceType === 'mobile';

    return (
        <div className="hero-slider-wrapper">
            <Carousel
                autoplay={props.deviceType !== 'mobile'}
                autoplayInterval={3000}
                dragging={false}
                enableKeyboardControls={true}
                pauseOnHover={true}
                speed={500}
                swiping={true}
                wrapAround={true}
                renderCenterLeftControls={hideArrows ? null : undefined}
                renderCenterRightControls={hideArrows ? null : undefined}
                defaultControlsConfig={{
                    containerClassName: 'carousel-container',
                    pagingDotsContainerClassName: 'custom-dot-list-style',
                }}
            >
                <div className="carousel-item-padding-40-px"><img src="/img/slide/alp1.JPG" alt="Slide 1" className="standard-image-in-carousel"/></div>
                <div className="carousel-item-padding-40-px"><img src="/img/slide/alp2.JPG" alt="Slide 2" className="standard-image-in-carousel"/></div>
                <div className="carousel-item-padding-40-px"><img src="/img/slide/alp3.JPG" alt="Slide 3" className="standard-image-in-carousel"/></div>
                <div className="carousel-item-padding-40-px"><img src="/img/slide/conf.JPG" alt="Slide 4" className="standard-image-in-carousel"/></div>
                <div className="carousel-item-padding-40-px"><img src="/img/slide/group.jpg" alt="Slide 5" className="standard-image-in-carousel"/></div>
                <div className="carousel-item-padding-40-px"><img src="/img/slide/hh.jpg" alt="Slide 6" className="standard-image-in-carousel"/></div>
                <div className="carousel-item-padding-40-px"><img src="/img/slide/MJB_8714.jpg" alt="Slide 7" className="standard-image-in-carousel"/></div>
                <div className="carousel-item-padding-40-px"><img src="/img/slide/phem1.jpg" alt="Slide 8" className="standard-image-in-carousel"/></div>
                <div className="carousel-item-padding-40-px"><img src="/img/slide/pres.JPG" alt="Slide 9" className="standard-image-in-carousel"/></div>
                <div className="carousel-item-padding-40-px"><img src="/img/slide/sca.png" alt="Slide 10" className="standard-image-in-carousel"/></div>
                <div className="carousel-item-padding-40-px"><img src="/img/slide/debug.png" alt="Slide 11" className="standard-image-in-carousel"/></div>
            </Carousel>

            <div className="hero-text-banner">
                <h1 className="hero-title">Vernam Lab</h1>
                <p className="hero-subtitle">Worcester Polytechnic Institute</p>
            </div>
        </div>
    );
}

export default SimpleSlider;