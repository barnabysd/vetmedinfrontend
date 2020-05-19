import React from 'react'
import Layout from '../components/layout'
import PulseButton from "../components/PulseButton"
import ScalingCheckBox from "../components/ScalingCheckBox"

import HomeIcon from "@material-ui/icons/Home";
import "./sideBarExample.css"

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { Link } from "gatsby"


//

import { withStyles, createStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import OrangeRoundedButtonWithBLCorner from '../components/OrangeRoundedButtonWithBLCorner'
import OrangeRoundedButton from '../components/OrangeRoundedButton'
import DarkBlueRoundedButton from '../components/DarkBlueRoundedButton'
import DarkBlueRoundedButtonWithBLCorner from '../components/DarkBlueRoundedButtonWithBLCorner'
import ModalDarkBlueRoundedButtonWithBLCorner from '../components/ModalDarkBlueRoundedButtonWithBLCorner'

import TabButton from '../components/TabButtons'
import CaroGallery from '../components/CaroGallery';
import TiltImage from '../components/TiltImage';
import BlockTextReveal from '../components/BlockTextReveal';
import DarkBlueRoundedOutlineButton from '../components/DarkBlueRoundedOutlineButton';





// const PurpleSwitch = withStyles({
//   switchBase: {
//     color: purple[300],
//     '&$checked': {
//       color: purple[500],
//     },
//     '&$checked + $track': {
//       backgroundColor: purple[500],
//     },
//   },
//   checked: {},
//   track: {},
// })(Switch);

const SquareSwitch = withStyles((theme) => ({
  root: {
    width: 70,
    height: 36,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 3,
    '&$checked': {
      transform: 'translateX(34px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: 'black',
        opacity: 1,
        border: `1px solid white`,
      },
    },
    '&$focusVisible $thumb': {
      color: 'black',
      border: `1px solid white`,
    },
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 0
  },
  track: {
    borderRadius: 0,
    border: `1px solid white`,
    backgroundColor: 'black',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

// const AntSwitch = withStyles((theme) => ({
//   root: {
//     width: 28,
//     height: 16,
//     padding: 0,
//     display: 'flex',
//   },
//   switchBase: {
//     padding: 2,
//     color: theme.palette.grey[500],
//     '&$checked': {
//       transform: 'translateX(12px)',
//       color: theme.palette.common.white,
//       '& + $track': {
//         opacity: 1,
//         backgroundColor: theme.palette.primary.main,
//         borderColor: theme.palette.primary.main,
//       },
//     },
//   },
//   thumb: {
//     width: 12,
//     height: 12,
//     boxShadow: 'none',
//   },
//   track: {
//     border: `1px solid ${theme.palette.grey[500]}`,
//     borderRadius: 16 / 2,
//     opacity: 1,
//     backgroundColor: theme.palette.common.white,
//   },
//   checked: {},
// }))(Switch);

function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const styles = createStyles({
    formControlLabel: { fontSize: '0.6rem', 
    '& label': { fontSize: '0.6rem' } }
 });
 

 return (<FormGroup>
   <div>
  <FormControlLabel
    control={<SquareSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
    label={<Typography className={styles.formControlLabel}>Turn hints</Typography>} 
    labelPlacement="top"
  />
  </div>
  
</FormGroup>)
}




//






const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

// export default function FloatingActionButtons() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Fab color="primary" aria-label="add">
//         <AddIcon />
//       </Fab>
//       <Fab color="secondary" aria-label="edit">
//         <EditIcon />
//       </Fab>
//       <Fab variant="extended">
//         <NavigationIcon className={classes.extendedIcon} />
//         Navigate
//       </Fab>
//       <Fab disabled aria-label="like">
//         <FavoriteIcon />
//       </Fab>
//     </div>
//   );
// }







function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
  }

const items = [
    { name: "home", label: "Home", Icon: HomeIcon },
    { name: 'billing', label: 'Billing' },
    { name: 'settings', label: 'Settings' },
  ]
  
export default () => (
  <Layout>
    <h1>UI examples</h1>
    <div style={{width: '800px', height: '300px'}}>
       <CustomizedSwitches />
       </div>
       <div style={{width: '800px', height: '300px'}}>
       <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </div>
       <div style={{width: '800px', height: '300px'}}>
      <OrangeRoundedButtonWithBLCorner buttonText="Start" />
      <OrangeRoundedButton buttonText="hello" />
      <DarkBlueRoundedButton buttonText="hello" />
      <DarkBlueRoundedButtonWithBLCorner buttonText="hello" />
      <ModalDarkBlueRoundedButtonWithBLCorner buttonText="hello" />
      <DarkBlueRoundedOutlineButton buttonText="hello" />
      <ScalingCheckBox />
      <TabButton />
      </div>
      <div style={{width: '800px', height: '300px'}}> <CaroGallery /></div>
      <div style={{width: '100%', height: '50px'}}> &nbsp;</div>
      <div style={{width: '300px', height: '300px'}}> <TiltImage /></div>
      <div style={{width: '100%', height: '50px'}}> &nbsp;</div>
      <div style={{width: '300px', height: '300px'}}> <BlockTextReveal /></div>
      
      
      <Link to="/">Back to home</Link>
  </Layout>
)
