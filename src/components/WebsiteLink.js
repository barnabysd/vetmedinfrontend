import { typeOf } from "react-is"
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled, { css, keyframes } from 'styled-components'
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'
import theme, { sm, md, lg, xl } from '../theme'

export const buttonStyleType = {
    ORANGE_BUTTON: 'orange_button',
    DARK_BLUE_BUTTON: 'dark_blue_button',
    DARK_BLUE_BUTTON_CORNER: 'dark_blue_corner_button',
    ORANGE_BUTTON_CORNER: 'orange_corner_button',
    MENU_LINK: 'menu_link',
    NORMAL_LINK: 'link'
}

const WebsiteLink = ({to = "button", children, typeOfButton = buttonStyleType.DARK_BLUE_BUTTON_CORNER, type = 'button', onClick = (() => {}), ...other}) => {
 
    const destination = processInternalLink(to);
    const { style } = { ...other }
    const internal = /^\/(?!\/)/.test(destination)
    const file = /\.[0-9a-z]+$/i.test(destination)

    // const ButtonTextWrapper = ((props,ref) => {
    //     const { children } = { ...props }
    //     return (
    //         <InnerButton className="innerButton" ref={ref}><InnerButtonText>{children}</InnerButtonText></InnerButton>
    //     )
    // })


    /// buttonColour={"red"} textColour={"blue"} buttonHoverColour={"pink"} 
    
    if (to === "button") {
        switch (typeOfButton) {
            case buttonStyleType.ORANGE_BUTTON:
            case buttonStyleType.ORANGE_BUTTON_CORNER:
            return (<OrangeBtn  style={style} type={type} onClick={onClick}>
                        <InnerButton className="innerButton"></InnerButton><InnerButtonText>{children}</InnerButtonText>
                    </OrangeBtn> )
            case buttonStyleType.DARK_BLUE_BUTTON:
            case buttonStyleType.DARK_BLUE_BUTTON_CORNER:
            return (<DarkBlueBtn style={style} type={type} onClick={onClick}>
                        <InnerDarkBlueButton className="innerButton"></InnerDarkBlueButton><InnerButtonText>{children}</InnerButtonText>
                    </DarkBlueBtn> )
            case buttonStyleType.NORMAL_LINK:
                return (<CustomLink style={style} type={type} onClick={onClick}>
                          <InnerDarkBlueButton className="innerButton"></InnerDarkBlueButton><InnerButtonText>{children}</InnerButtonText>
                       </CustomLink> )
            default:
            // case buttonStyleType.ORANGE_BUTTON_CORNER:
            // return (<OrangeButtonLink  style={style} cover bg={theme.palette.tertitary.main} onClick={onClick} to={destination}>
            //             <InnerButton className="innerButton"></InnerButton><InnerButtonText>{children}</InnerButtonText>
            //         </OrangeButtonLink> )
            // case buttonStyleType.DARK_BLUE_BUTTON_CORNER:
            // return (<DarkBlueButtonLink style={style}  cover bg={theme.palette.tertitary.main} onClick={onClick} to={destination}>
            //             <InnerDarkBlueButton className="innerButton"></InnerDarkBlueButton><InnerButtonText>{children}</InnerButtonText>
            //         </DarkBlueButtonLink> )
            // default:
            return (<button>Error: missing params 0</button> )
        }
    }

    if (internal) {
      if (file) {
        switch (typeOfButton) {
            case buttonStyleType.ORANGE_BUTTON_CORNER:
              return (<OrangeButtonLinkExternal style={style} href={destination}>
                   <InnerButton className="innerButton"></InnerButton><InnerButtonText>{children}</InnerButtonText>
              </OrangeButtonLinkExternal>)
            case buttonStyleType.DARK_BLUE_BUTTON_CORNER:
              return (<DarkBlueButtonLinkExternal  style={style} href={destination}>
                   <InnerDarkBlueButton className="innerButton"></InnerDarkBlueButton><InnerButtonText>{children}</InnerButtonText>
              </DarkBlueButtonLinkExternal>)
            default:
              return <a href="#">missing params 1</a>
          }
            
      }
      switch (typeOfButton) {
        case buttonStyleType.ORANGE_BUTTON:
        case buttonStyleType.ORANGE_BUTTON_CORNER:
          return (<OrangeButtonLink  style={style} cover bg={theme.palette.tertitary.main} to={destination}>
                    <InnerButton className="innerButton"></InnerButton><InnerButtonText>{children}</InnerButtonText>
                </OrangeButtonLink> )
        case buttonStyleType.DARK_BLUE_BUTTON:
        case buttonStyleType.DARK_BLUE_BUTTON_CORNER:
          return (<DarkBlueButtonLink style={style}  cover bg={theme.palette.tertitary.main} to={destination}>
                    <InnerDarkBlueButton className="innerButton"></InnerDarkBlueButton><InnerButtonText>{children}</InnerButtonText>
                </DarkBlueButtonLink> )
         case buttonStyleType.NORMAL_LINK:
            return (<CustomLink style={style} cover bg={theme.palette.tertitary.main} to={destination}>
                      <InnerDarkBlueButton className="innerButton"></InnerDarkBlueButton><InnerButtonText>{children}</InnerButtonText>
                   </CustomLink> )
         case buttonStyleType.MENU_LINK:
            return (<CustomMenuLink style={style} cover bg={theme.palette.tertitary.main} to={destination}>
                      <InnerDarkBlueButton className="innerButton"></InnerDarkBlueButton><InnerButtonText>{children}</InnerButtonText>
                  </CustomMenuLink> )
        default:
          return (<button>Error: missing params 2</button> )
      }
    }
    switch (typeOfButton) {
        case buttonStyleType.ORANGE_BUTTON_CORNER:
          return (<OrangeButtonLinkExternal style={style} href={destination}>
               <InnerButton className="innerButton"></InnerButton><InnerButtonText>{children}</InnerButtonText>
          </OrangeButtonLinkExternal>)
        case buttonStyleType.DARK_BLUE_BUTTON:
            return (<DarkBlueButtonLinkRoundedExternal  style={style} href={destination}>
                <InnerDarkBlueRoundedButton className="innerButton"></InnerDarkBlueRoundedButton><InnerButtonText>{children}</InnerButtonText>
           </DarkBlueButtonLinkRoundedExternal>)
        case buttonStyleType.DARK_BLUE_BUTTON_CORNER:
          return (<DarkBlueButtonLinkExternal  style={style} href={destination}>
               <InnerDarkBlueButton className="innerButton"></InnerDarkBlueButton><InnerButtonText>{children}</InnerButtonText>
          </DarkBlueButtonLinkExternal>)
        
        default:
          return <a href="#">missing params 3</a>
      }
}

const pulsateKeyframes = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  100% {
    transform: scale(1);
  }
`

const pulsateScaleKeyframes = keyframes`
0% {
    border-left: 10px solid ${theme.palette.peachCobbler.main}
  }
  50% {
    border-left: 20px solid ${theme.palette.peachCobbler.main}
  }
  100% {
    border-left: 20px solid ${theme.palette.peachCobbler.main}
  }
`

const InnerButtonText = styled.span`
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
`

const InnerButton = styled.span`
    display:block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    z-index:0 !important;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.7;
    background: ${theme.palette.peachCobbler.dark};
    clip-path: circle(0px at center);
    transition: clip-path 0.35s;
  
`
const InnerDarkBlueButton = styled.span`
    display:block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    z-index:0 !important;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.7;
    background: ${theme.palette.midnightBlue.dark};
    clip-path: circle(0px at center);
    transition: clip-path 0.35s;
  
`
const InnerDarkBlueRoundedButton = styled(InnerDarkBlueButton)`
    border-bottom-left-radius: 20px;
    
`
const ButtonLink = styled.button.attrs((props) => ({ tabIndex: 0, disabled: (props && props.disabled) ? props.disabled : false }))`

    display: block;
    
    font-weight: 600;
    font-size: 1.125rem;
    letter-spacing: -0.22px;
    text-transform: none;
    height: 61px;
    border: 0;
    text-align: center;
    vertical-align:middle;
    position: relative;
    line-height: 3.5rem;
    font-family: ${theme.typography.fontFamily};
    text-decoration: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    outline:0 !important;
    transition: background 0.15s, width 0.35s 1s;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    &:hover {
        
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        transition-delay: 0.2s;
        cursor: pointer;
    }
    &:hover > .innerButton {
        clip-path: circle(150px at center);
        opacity: 0.9;
        animation: ${pulsateKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1);
        z-index:0 !important;
    }
    @media (max-width: ${sm}px) {
        text-align: center;
     
        width: 100%;
    }
`

const OrangeBtn = styled(ButtonLink)`
    background-color: ${theme.palette.peachCobbler.main};
    color: ${theme.palette.midnightBlue.main};
    &:hover {
        background: ${theme.palette.peachCobbler.dark};
    }
    &:hover > .innerButton {
        background: ${theme.palette.peachCobbler.dark};
    }
`
const DarkBlueBtn = styled(ButtonLink)`
    background-color: ${theme.palette.midnightBlue.main};
    color: ${theme.palette.peachCobbler.main};
    &:hover {
        background: ${theme.palette.midnightBlue.dark};
    }
    &:hover > .innerButton {
        background: ${theme.palette.midnightBlue.dark};
    }
`

const CustomLink = styled(AniLink).attrs((props) => ({ tabIndex: 0 }))`
 
    background-color: transparent;
    display: block;
    color: ${theme.palette.midnightBlue.main};
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: -0.22px;
    text-transform: none;
    padding-top:1rem;

  
    text-align: left;
    vertical-align:middle;

    font-family: ${theme.typography.fontFamily};
    text-decoration: underline;

    outline:0 !important;
    transition: background 0.15s;
    border-left: 5px solid transparent;
    padding-left: 0rem;
    margin-left: -0.2rem;
    transition: 0.35s;
   
    &:hover {
        color:${theme.palette.peachCobbler.main} !important;
     
        cursor: pointer;  
    }
   
    @media (max-width: ${sm}px) {
       
    }
`


const CustomMenuLink = styled(AniLink).attrs((props) => ({ tabIndex: 0 }))`
 
    background-color: transparent;
    display: block;
    color: ${theme.palette.midnightBlue.main};
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: -0.22px;
    text-transform: none;
    padding-top:1rem;

  
    text-align: center;
    vertical-align:middle;

    font-family: ${theme.typography.fontFamily};
    text-decoration: none;

    outline:0 !important;
    transition: background 0.15s;
    border-left: 5px solid transparent;
    padding-left: 1rem;
    margin-left: -1rem;

    transition: 0.35s;
    height: 60px;
  
    
    &:hover {
        color:${theme.palette.peachCobbler.main} !important;
        padding-left: 1rem;
        margin-left: -1rem;
        cursor: pointer;
        border-left: 5px solid ${theme.palette.peachCobbler.main}
        
       
    }
    &:hover > .innerButton {
     
        background: ${theme.palette.midnightBlue.dark};
        animation: ${pulsateKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1);
    }
    @media (max-width: ${sm}px) {
        padding-top:0.75rem;
        height: 50px;
    }
  
`

const OrangeButtonLink = styled(AniLink).attrs((props) => ({ tabIndex: 0 }))`
 
    background-color: ${theme.palette.peachCobbler.main};
    display: block;
    color: ${theme.palette.midnightBlue.main};
    font-weight: 600;
    font-size: 1.46rem;
    letter-spacing: -0.22px;
    text-transform: none;
    height: 61px;
   
    text-align: center;
    vertical-align:middle;
    position: relative;
    line-height: 3.5rem;
    font-family: ${theme.typography.fontFamily};
    text-decoration: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    outline:0 !important;
    transition: background 0.15s, width 0.35s 1s;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    &:hover {
        background-color:${theme.palette.peachCobbler.dark};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        transition-delay: 0.2s;
        cursor: pointer;
    }
    &:hover > .innerButton {
        clip-path: circle(150px at center);
        opacity: 0.9;
        background: ${theme.palette.peachCobbler.dark};
        animation: ${pulsateKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1);
        z-index:0 !important;
    }
    @media (max-width: ${sm}px) {
        text-align: left;
    
        padding-left: 2rem !important; 
        width: 100%;
    }
  
`

//  width: 191px;
const DarkBlueButtonLink = styled(AniLink).attrs((/* props */) => ({ tabIndex: 0 }))`
 
    background-color: ${theme.palette.midnightBlue.main};
    display: block;
    color: ${theme.palette.peachCobbler.main};
    font-weight: 600;
    font-size: 1.46rem;
    letter-spacing: -0.22px;
    text-transform: none;
    height: 61px;
   
    text-align: center;
    vertical-align:middle;
    position: relative;
    line-height: 3.5rem;
    font-family: ${theme.typography.fontFamily};
    text-decoration: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    outline:0 !important;
    transition: background 0.15s, width 0.35s 1s;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    &:hover {
        background-color:${theme.palette.midnightBlue.dark};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        transition-delay: 0.2s;
        cursor: pointer;
    }
    &:hover > .innerButton {
        clip-path: circle(150px at center);
        opacity: 0.9;
        background: ${theme.palette.midnightBlue.dark};
        animation: ${pulsateKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1);
        z-index:0 !important;
    }
    @media (max-width: ${sm}px) {
        text-align: left;
     
        padding-left: 2rem !important; 
        width: 100%;
    }
  
`

const OrangeButtonLinkExternal = styled.a.attrs((/* props */) => ({ tabIndex: 0 }))`
  
   
    background-color: ${theme.palette.peachCobbler.main};
    display: block;
    color: ${theme.palette.midnightBlue.main};
    font-weight: 600;
    font-size: 1.46rem;
    letter-spacing: -0.22px;
    text-transform: none;
    height: 61px;
  
    text-align: center;
    vertical-align:middle;
    position: relative;
    line-height: 3.5rem;
    font-family: ${theme.typography.fontFamily};
    text-decoration: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    transition: background 0.15s, width 0.35s 1s;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    outline:0 !important;
    &:hover {
        background-color:${theme.palette.peachCobbler.dark};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        transition-delay: 0.2s;
        cursor: pointer;
    }
    &:hover > .innerButton {
        clip-path: circle(150px at center);
        opacity: 0.9;
        background: ${theme.palette.peachCobbler.dark};
        animation: ${pulsateKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1);
        z-index:0 !important;
    }
    @media (max-width: ${sm}px) {
        text-align: left;
    
        width: 100%;
    }

`

const DarkBlueButtonLinkExternal = styled.a.attrs((/* props */) => ({ tabIndex: 0 }))`
  
   
    background-color: ${theme.palette.midnightBlue.main};
    display: block;
    color: ${theme.palette.peachCobbler.main};
    font-weight: 600;
    font-size: 1.46rem;
    letter-spacing: -0.22px;
    text-transform: none;
    height: 61px;
   
    text-align: center;
    vertical-align:middle;
    position: relative;
    line-height: 3.5rem;
    font-family: ${theme.typography.fontFamily};
    text-decoration: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
    transition: background 0.15s, width 0.35s 1s;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    outline:0 !important;
    &:hover {
        background-color:${theme.palette.midnightBlue.dark};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        transition-delay: 0.2s;
        cursor: pointer;
    }
    &:hover > .innerButton {
        clip-path: circle(150px at center);
        opacity: 0.9;
        background: ${theme.palette.midnightBlue.dark};
        animation: ${pulsateKeyframes} 550ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1);
        z-index:0 !important;
    }
    @media (max-width: ${sm}px) {
        text-align: center;
     
       
        width: 100%;
    }

`

const DarkBlueButtonLinkRoundedExternal = styled(DarkBlueButtonLinkExternal).attrs((/* props */) => ({ tabIndex: 0 }))`
    border-radius: 20px !important;
`

export default WebsiteLink