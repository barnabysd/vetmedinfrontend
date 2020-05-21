
import React, {useRef, useEffect} from 'react'
import { Link } from "gatsby"
import OrangeRoundedButtonWithBLCorner from '../components/OrangeRoundedButtonWithBLCorner'
import useLocalStorage from '../utils/localStorageHelper'
import CustomFluidImage from '../components/CustomFluidImage'
import ScalingCheckBox from '../components/ScalingCheckBox'

import { withStyles,createStyles,makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
// import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
// import CheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank'

import Icon from '@material-ui/core/Icon';

import Typography from '@material-ui/core/Typography';

import GSAP from 'react-gsap-enhancer'

import { useCookies } from 'react-cookie'


// labelStyle={{fontFamily:'Poppins',color: 'red'}}
// iconStyle={{color: 'white'}}

//'#fc9a5c'

// const styles = () => ({
//   root: {
//     "&$checked": {
//       color: "rgba(0, 0, 0, 0.54)"
//     }
//   },
//   checked: {}
// })

const classes = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
  });


const CustomCheckBoxOffIcon = () => {
    return (
        <Icon classes={{root: classes.iconRoot}}>
            <img className={classes.imageIcon} src="/tickBoxDarkBlueOff.png"/>
        </Icon>
    )
}
const CustomCheckBoxOnIcon = () => {
    return (
        <Icon classes={{root: classes.iconRoot}}>
            <img className={classes.imageIcon} src="/tickBoxDarkBlueOn.png"/>
        </Icon>
    )
}


const ScalingBlueCheckbox = withStyles({
  root: {
    color: '#24add6',
    '&$checked': {
       color: '#fc9a5c',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props}  />);

export default function UserChoice() {

    const [cookies, setCookie, getCookie, removeCookie] = useCookies(['userChoice']);

    const [state, setState] = React.useState({
        checkedIsVet: false,
        checkedIsNotVet: false,
        buttonText: "Continue",
        opacity: "0.6",
        href: "/"
    });

    const scalingCheckBox1 = useRef();
    const scalingCheckBox2 = useRef();

    const handleChange = (event) => {
        //setState({ ...state, [event.target.name]: event.target.checked });
        if (event.target.name === 'checkedIsVet') {
            setState({ ...state, href: "/home-page/",checkedIsVet: true, checkedIsNotVet: false, buttonText: "Continue", opacity: "1" });
        }
        if (event.target.name === 'checkedIsNotVet') {
            setState({ ...state, href: "http://www.bbc.co.uk",checkedIsVet: false, checkedIsNotVet: true, buttonText: "Visit B.E.A.T", opacity: "1" });
        }
    };

    const dismiss = (event) => {
       // unmountMe();
    } 

    const [userUserChoice, setUserChoice ] = useLocalStorage('userChoice', '')
    function recordUserChoice(event) {
        console.log("previous userUserChoice ",userUserChoice)
        console.log(event.target)
        if (state.checkedIsVet === true) {
            setUserChoice('vet');
            setCookie('userChoice')
            console.log("vet")
            
        } 
        if (state.checkedIsNotVet === true) {
            setUserChoice('notVet');
            setCookie('userChoice','notVet')
            console.log("notVet")
        }
    }

    function createAnim({target, checkBoxName}) {
        var box = target.find({name: checkBoxName})
        return new TimelineMax({repeat: -1})
          .to(box, 1, {scale: 1.23, y: '+=120'})
          .to(box, 1, {scale: 1, y: '-=120'})
          .to(box, 1, {rotation: 90}, 1)
    }

    useEffect(() => {
        if (
          !scalingCheckBox1.current ||
          !scalingCheckBox2.current 
        ) return 
        // createAnim(scalingCheckBox1.current,'checkVet')
        // createAnim(scalingCheckBox2.current,'checkedIsNotVet')
      }, [
        scalingCheckBox1.current,
        scalingCheckBox2.current
    ])

    const styles = createStyles({
        formControlLabel: { 
            fontSize: '1.2rem', 
            color: 'white',
            fontWeight:'700',
            fontFamily:'Poppins',
                '& label': { 
                    fontSize: '1.2rem' ,
                    color: 'white',
                    fontWeight:'700',
                    fontFamily:'Poppins'
                } 
            }
     });
     

    return (
       <div style={{position: 'absolute',width: '100%',height: '100vh', minHeight: '100vh',overflow:'hidden', backgroundColor: 'blue'}}>

            <div style={{position: 'relative',width: '100%', minHeight: '100%'}}>
                
                <div style={{position: 'absolute',left:'0',top:'0', width: '20%', minHeight: '100%', backgroundColor: '#24add6'}}> 
                    
                </div>

                <div style={{position: 'absolute',left:'20%',top:'0', width: '10%', minHeight: '100%', backgroundColor: '#092178'}}> 
                    
                </div>

                <div style={{position: 'absolute',left: '30%',top:'0', width: '70%', minHeight: '100%', backgroundColor: '#092178'}}> 
                    <div style={{position: 'absolute',left: '0%',top:'10%', width: '70%', minHeight: '100%', backgroundColor: '#092178'}}>
                        <h1 style={{color: '#41D4E9',fontWeight:'700',paddingTop:'0',fontFamily:'Poppins'}}>Please confirm who you are:</h1>
                        <FormGroup row>
                            <ul style={{listStyle: 'none',color:'#0c2f8b'}}>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center'}}> 
                                    <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.checkedIsVet} onChange={handleChange} name="checkedIsVet" />} label={<Typography style={styles.formControlLabel}>I'm a UK Vet</Typography>} /> 
                                </li>
                                <li style={{display:'flex',flexDirection:'row',alignContent:'center',color: 'white'}}> 
                                    <FormControlLabel control={<ScalingBlueCheckbox icon={<CustomCheckBoxOffIcon />} checkedIcon={<CustomCheckBoxOnIcon/>} checked={state.checkedIsNotVet} onChange={handleChange} name="checkedIsNotVet" />} label={<Typography style={styles.formControlLabel}>I am an owner, or non-vet professional</Typography>}/>  
                                </li>
                            </ul>
                        </FormGroup>
                        <div style={{paddingLeft:'0rem',opacity: state.opacity }} onClick={recordUserChoice}>
                            <OrangeRoundedButtonWithBLCorner buttonText={state.buttonText} to={state.href} />
                        </div>
                    </div>
                </div>

                <div style={{position: 'absolute',left: '20%',top: '10%',marginLeft:'-100px', width: '200px', height: '200px'}}>
                     <CustomFluidImage imgName="userChoiceLogoWithTrans.png" />
                </div>
               
                <div style={{position: 'absolute',left: '20%',bottom: '0', width: '100%', height: '50px', backgroundColor: 'none',borderTop:'1px solid #24add6'}}>
                    <div style={{position: 'absolute',left: '0',bottom: '0', width: '10%', height: '50px'}}></div>
                    <div style={{position: 'absolute',left: '10%',bottom: '0', width: '40%', height: '50px', borderRight:'1px solid #24add6'}}>
                        <div style={{position: 'absolute',left: '0%',bottom: '1%', width: '200px', height: '44px'}}>
                            <CustomFluidImage imgName="userChoiceLogoBottom.png" />
                        </div>
                    </div>
                    <div style={{position: 'absolute',right: '0',bottom: '0', width: '50%', height: '50px',fontSize:'0.75rem',color:'#5279B0', verticalAlign:'middle',paddingLeft:'5%',paddingTop:'0.7%'}}>UI-CAN-0047-2020. Date of preparation: April 2020</div>
                </div>
            </div>
      </div>
    )
}
