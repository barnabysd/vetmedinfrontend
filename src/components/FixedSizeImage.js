import React from 'react';
import Tilt from 'react-parallax-tilt';
import CustomFluidImage from './CustomFluidImage'

const FixedSizeImage = ({imgName = "oakley.png",width = '300px',height = '300px'}) => {
  return (
  
      <div style={{ height: height,width: width, backgroundColor: 'none',transition: 'width 1s height 1s' }}>
        <CustomFluidImage imgName={imgName} />
      </div>
 
  );
};

export default FixedSizeImage 