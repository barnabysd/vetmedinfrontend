import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomFluidImage from './CustomFluidImage'
import { req, UAParser } from 'ua-parser-js'

function getDeviceType() {
   let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = 'desktop';//navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
}

const ButtonOne = ({classNam = '', onClick}) => {
    return (<div className={classNam} onClick={onClick} style={{backgroundColor: 'red',width:'30px',height:'30px'}}>o</div>)
}
const ButtonTwo= ({classNam = '', onClick}) => {
    return (<div className={classNam} onClick={onClick} style={{backgroundColor: 'red',width:'30px',height:'30px'}}>o</div>)
}
const ButtonThree = ({classNam = '', onClick}) => {
    return (<div className={classNam} onClick={onClick} style={{backgroundColor: 'red',width:'30px',height:'30px'}}>o</div>)
}

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;

    // remember to give it position:absolute
    return (
      <div className="carousel-button-group" style={{display: 'flex',flexDirection:'row'}}> 
        <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <ButtonTwo onClick={() => next()} />
        <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree>
      </div>
    );
  };

const CaroGallery = () => {
    const deviceType = getDeviceType() ? getDeviceType() : 'desktop'

    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
return (<Carousel
    arrows={false} showDots={true} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
  swipeable={false}
  draggable={false}
 
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={deviceType !== "mobile" ? false : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"

  style={{"height":"300px","height":"800px",backgroundColor:'red'}}
>
  <div style={{"height":"300px",width:"300px !important",backgroundColor:'red'}}><CustomFluidImage imgName="panelCaro.png" /></div>
  <div style={{"height":"300px",width:"300px !important",backgroundColor:'green'}}><CustomFluidImage imgName="panelCaro.png" /></div>
  <div style={{"height":"300px",width:"300px !important",backgroundColor:'blue'}}><CustomFluidImage imgName="panelCaro.png" /></div>
  <div style={{"height":"300px",width:"300px !important",backgroundColor:'yellow'}}><CustomFluidImage imgName="panelCaro.png" /></div>
  <div style={{"height":"300px",width:"300px !important",backgroundColor:'orange'}}><CustomFluidImage imgName="panelCaro.png" /></div>
  <div style={{"height":"300px",width:"300px !important",backgroundColor:'pink'}}><CustomFluidImage imgName="panelCaro.png" /></div>
</Carousel>)
}

export default CaroGallery