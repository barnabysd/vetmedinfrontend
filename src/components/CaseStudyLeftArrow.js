import React from "react"
import ArrowBackRoundedSvg from '../images/icons_and_glyphs/GradientIcon_Arrow.svg' // '@material-ui/icons/ArrowBackRounded'
import ArrowForwardRoundedIconSvg from '../images/icons_and_glyphs/GradientIcon_Arrow.svg' //'@material-ui/icons/ArrowForwardRounded'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import theme from '../theme'

const ArrowBackRoundedIcon = ({...other}) => {
    return (
        <img src={ArrowBackRoundedSvg} style={{transform: 'rotate(90deg)',width:'16px',height:'16px',marginBottom:'0'}} />
    )
}
const ArrowForwardRoundedIcon = ({...other}) => {
    return (
        <img src={ArrowForwardRoundedSvg} style={{transform: 'rotate(270deg)',width:'16px',height:'16px',marginBottom:'0'}}  />
    )
}

const CaseStudyLeftArrow = ({linkText = 'Back',to = '/',onClickHandler = null}) => {
    return (
        <div style={{
            position: 'absolute',
            left: '10%', 
            bottom: '0',
            width:'150px',
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            zIndex:'100',
            border:'0px solid red',
            zIndex: '10'
    
        }}> 
            { onClickHandler === null ? 
            <AniLink to={to} style={{display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',color:theme.palette.deminBlue.main,fontFamily:theme.typography.fontFamily,fontWeight:'700'}} >
            <ArrowBackRoundedIcon />&nbsp;{linkText}</AniLink> 
            : 
            <a href="#" style={{display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',color:theme.palette.deminBlue.main,fontFamily:theme.typography.fontFamily,fontWeight:'700'}}>
                <ArrowBackRoundedIcon />&nbsp;{linkText}
            </a>
            }
        </div>
     
    )
}

export default CaseStudyLeftArrow

