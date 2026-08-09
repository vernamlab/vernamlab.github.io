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
            </Carousel>

            <div className="hero-text-banner">
                <h1 className="hero-title">Vernam Lab</h1>
                <p className="hero-subtitle">Worcester Polytechnic Institute</p>
            </div>
        </div>
    );
}

export default SimpleSlider;
