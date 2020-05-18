import React from 'react';
import DotIndicator from '@mui-treasury/components/indicator/dot';

const tabPageExample = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      {[0, 1, 2].map(i => (
        <DotIndicator
          key={i}
          active={i === index}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  );
};


export default tabPageExample;