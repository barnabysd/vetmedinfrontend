import * as React from "react"
import { Frame } from "framer"
import { Slider } from "./Slider"


export default function FramerSliderAndPic() {
  const [scale, setScale] = React.useState(0.5)
  const constraint = (480 * scale - 120) / 2
  return (

    <Frame
      name={"SliderApp"}
      width={"100%"}
      height={"100%"}
      background={"#242424"}
    >
      <Frame
        name={"Mask"}
        size={120}
        center
        y={"-100px"}
        overflow={"hidden"}
        radius={"50%"}
      >
        <Frame
          name={"Image"}
          scale={scale}
          center
          size={480}
          image={"https://static.framer.com/api/bg.jpg"}
          drag
          dragElastic={0}
          dragMomentum={false}
          dragConstraints={{
            top: -constraint,
            bottom: constraint,
            left: -constraint,
            right: constraint
          }}
        />
      </Frame>
      <Slider
        value={scale}
        min={0.25}
        max={0.75}
        onChange={function(newValue) {
          setScale(newValue);
        }}
      />
    </Frame>

  );
}

