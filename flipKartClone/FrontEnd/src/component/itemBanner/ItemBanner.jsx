import "./itemBanner.css";
import { bannerData } from "../../constants/data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function ItemBanner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      
        { bannerData.map((item) => (
          <img src={item.image} alt="banner" className=" bannerImage " />
        ))}
     
    </Carousel>
  );
}
