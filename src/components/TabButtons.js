import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green,blue } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const BlueRadio = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function TabButtons({state,setState}) {
  const [selectedValue, setSelectedValue] = React.useState('first');

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
    setState({...stage},{tabSelected: event.target.value})
  };

  return (
    <div>
      <Radio
        checked={selectedValue === 'first'}
        onChange={handleChange}
        value="a"
        name="radio-button-panel"
        inputProps={{ 'aria-label': 'first tab' }}
      />
      <Radio
        checked={selectedValue === 'second'}
        onChange={handleChange}
        value="b"
        name="radio-button-panel"
        inputProps={{ 'aria-label': 'second tab' }}
      />
    </div>
  );
}