import React from "react"
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import theme from '../theme'

const MenuItemLink = ({linkText = 'Back',to = '/',onClickHandler = null, colourOfLink = 'white', fontWeight = '300', ...other}) => {
    const styleLink = {color:colourOfLink, display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',fontFamily:theme.typography.fontFamily,fontWeight:fontWeight}
    const styleLinkIfButton = {color:colourOfLink, display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',fontFamily:theme.typography.fontFamily,fontWeight:fontWeight}
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
        }}> 
            { onClickHandler === null ? <AniLink cover bg={theme.palette.tertitary.main} to={to} style={styleLink}>
            {linkText}</AniLink> : <a href="#" style={styleLinkIfButton}>{linkText}</a>
            }
        </div>
     
    )
}

export default MenuItemLink

