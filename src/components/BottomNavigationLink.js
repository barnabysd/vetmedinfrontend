import React from "react"
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import theme, {md,sm,lg,xl,xs} from '../theme'
import WebsiteLink, {buttonStyleType} from '../components/WebsiteLink'
import styled from 'styled-components'

const LinkHolder = styled.div`
    position: absolute;
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-content: center;
    text-align: center;
    border: 0px solid red;
    z-index: 10;
    @media (max-width: ${md}px) {
        display: block;
        position: static;
        width:100% !important;
    }
`

const LinkHolderLeft = styled(LinkHolder)`
    @media (max-width: ${md}px) {
        text-align:right;
    }
`

const LinkHolderRight = styled(LinkHolder)`
    @media (max-width: ${md}px) {
        text-align:left;
    }
`

const BottomNavigationLink = ({linkText = 'Back',to = '/', distanceFromSide = "10%", bottom = "0", direction = "forward", onClick = null}) => {
    if (direction === "forward") {
        return (
            <LinkHolderLeft style={{
                right: distanceFromSide, 
                bottom: "0px"
            }}> 
                <WebsiteLink onClick={onClick} 
                    style={{display: 'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        width:'231px',
                        height:'50px',
                        textDecoration:'none',
                        color:theme.palette.deminBlue.main,
                        fontFamily:theme.typography.fontFamily,
                        fontWeight:'700'
                    }} 
                    to={to}
                    typeOfButton={buttonStyleType.FORWARD_NORMAL_LINK}>
                        {linkText}
                </WebsiteLink>
            </LinkHolderLeft>
        )
    } else {
        return (
            <LinkHolderRight style={{
                left: distanceFromSide, 
                bottom: "0px",
            }}>   
                <WebsiteLink onClick={onClick} 
                    style={{display: 'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        alignContent:'center',
                        width:'200px',
                        height:'50px',
                        textDecoration:'none',
                        color:theme.palette.deminBlue.main,
                        fontFamily:theme.typography.fontFamily,
                        fontWeight:'700'
                    }} 
                    to={to}
                    typeOfButton={buttonStyleType.BACK_NORMAL_LINK}>
                        {linkText}
                </WebsiteLink> 
            </LinkHolderRight>  
        )
    }
}

export default BottomNavigationLink

