import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ClientCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      return (
        <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div><img src="https://picsum.photos/174/90" alt="some" key="1"/></div>
        <div><img src="https://picsum.photos/175/90" alt="some" key="2"/></div>
        <div><img src="https://picsum.photos/176/90" alt="some" key="3"/></div>
        <div><img src="https://picsum.photos/175/91" alt="some" key="4"/></div>
        <div><img src="https://picsum.photos/174/91" alt="some" key="5"/></div>
        <div><img src="https://picsum.photos/176/91" alt="some" key="6"/></div>
        <div><img src="https://picsum.photos/175/89" alt="some" key="7"/></div>
        <div><img src="https://picsum.photos/174/91" alt="some" key="8"/></div>
        <div><img src="https://picsum.photos/176/91" alt="some" key="9"/></div>
      </Carousel>
      );
}