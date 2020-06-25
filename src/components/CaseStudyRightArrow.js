import React from "react"
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import theme from '../theme'

const CaseStudyRightArrow = ({linkText = 'Continue',to = '/',onClickHandler = null })  => {
    return (
        <div onClick={onClickHandler} style={{
            position: 'absolute',
            right: '0', 
            bottom: '0',
            width:'150px',
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            border: '0px solid red',
            zIndex: '10'
    
        }}>
           { onClickHandler === null ? <AniLink to={to} style={{display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',color:theme.palette.deminBlue.main,fontFamily:'Poppins',fontWeight:'700'}} >
                {linkText}&nbsp;<ArrowForwardRoundedIcon /></AniLink> : <a href="#" style={{display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',color:theme.palette.deminBlue.main,fontFamily:'Poppins',fontWeight:'700'}}>{linkText}&nbsp;<ArrowForwardRoundedIcon /></a> 
            }
        </div>
    
    )
}

export default CaseStudyRightArrow

