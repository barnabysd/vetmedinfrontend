import React from 'react';
import Tilt from 'react-parallax-tilt';
import CustomFluidImage from './CustomFluidImage'

const TiltImage = () => {
  return (
    <Tilt>
      <div style={{ height: '300px', backgroundColor: 'none' }}>
        <CustomFluidImage imgName="oakley.png" />
      </div>
    </Tilt>
  );
};

export default TiltImage 