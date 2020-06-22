import React from 'react';
import Tilt from 'react-parallax-tilt';
import CustomFluidImage from './CustomFluidImage'

const FixedSizeImage = ({imgName = "oakley.png",width = '300px',height = '300px'}) => {
  return (
    <Tilt>
      <div style={{ height: height,width: width, backgroundColor: 'none' }}>
        <CustomFluidImage imgName={imgName} />
      </div>
    </Tilt>
  );
};

export default FixedSizeImage 