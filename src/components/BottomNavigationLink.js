import React from "react"
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import theme from '../theme'
import WebsiteLink, {buttonStyleType} from '../components/WebsiteLink'
import styled from 'styled-components'

const BottomNavigationLink = ({linkText = 'Back',to = '/', distanceFromSide="10%", bottom="0", direction="forward", onClick = null}) => {

    if (direction === "forward") {
        return (
            <div style={{
                position: 'absolute',
                right: distanceFromSide, 
                bottom: bottom,
                width:'150px',
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent:'center',
                alignContent: 'center',
                textAlign: 'center',
                zIndex:'100',
                border:'0px solid red',
                zIndex: '10'
        
            }}> 
                <WebsiteLink onClick={onClick} 
                        style={{display: 'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            width:'200px',
                            height:'50px',
                            textDecoration:'none',
                            color:theme.palette.primary.main,
                            fontFamily:theme.typography.fontFamily,
                            fontWeight:'700'
                        }} 
                        to={to}
                        typeOfButton={buttonStyleType.FORWARD_NORMAL_LINK}>
                            {linkText}
                </WebsiteLink>
            </div>
        )
    } else {
        return (
            <div style={{
                position: 'absolute',
                left: distanceFromSide, 
                bottom: bottom,
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
                <WebsiteLink onClick={onClick} 
                    style={{display: 'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        alignContent:'center',
                        width:'200px',
                        height:'50px',
                        textDecoration:'none',
                        color:theme.palette.primary.main,
                        fontFamily:theme.typography.fontFamily,
                        fontWeight:'700'
                    }} 
                    to={to}
                    typeOfButton={buttonStyleType.BACK_NORMAL_LINK}>
                          {linkText}
                </WebsiteLink> 
            
            </div>
            
            )
        }
}

export default BottomNavigationLink

