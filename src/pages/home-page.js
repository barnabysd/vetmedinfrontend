import React, {useState} from 'react'
import Layout from '../components/layout'
import BlockTextReveal from '../components/BlockTextReveal';
import CustomFluidImage from '../components/CustomFluidImage';
import mainLogoSvg from '../images/userChoicePage/master_logo_light_sml_new.svg'
import timerSvg from '../images/icons_and_glyphs/GradientIcon_Timer.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import theme, { sm, md, lg, xl } from '../theme'
import {useRef, useEffect} from 'react'
import get from 'lodash/get'
import { graphql } from "gatsby"
import { processInternalLink, removeParagraphsTags } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import styled from 'styled-components'

const MainLogo = (() => {
    return <img src={mainLogoSvg} style={{width: '225px',margin:'auto',paddingTop: '1rem',textCenter:'center',display: 'flex',justifyContent: 'center'}} />
})

const TimerIcon = (() => {
  return <img src={timerSvg} style={{width: '30px',margin:'auto',paddingTop: '1rem',textCenter:'center',display: 'flex',justifyContent: 'center'}} />
})
const HomePageBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: ${theme.palette.midnightBlue.main};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 80%;
    background-image: url(/home/Wave-Blue.svg);
    @media (max-width: ${md}px) {
        display:none;
        background-image: none; 
        height: 2000px;
    }
 `

 const OrangeTopRightTextAndBar = styled.div` 
    position: absolute;
    right: 0;
    top: 10%;
    margin-left:-100px; 
    width: 200px;
    height: 200px;
 `
 const MainLogoHolder = styled.div` position: absolute;
    left: 20%;
    top: 10%;
    margin-left:-100px;
    width: 200px;
    height: 200px;
    @media (max-width: ${md}px) {
        position: static;
        width: 100%;
        margin-top:160px;
        margin-left: 0px;
 }`

const BottomOrangeBarHolder = styled.div`
    position: absolute;
    right: 50%;
    bottom: 0;
    width: 3px;
    height: 30px ;
    @media (max-width: ${md}px) {
        position: static;
        width: 100%;
    }
`

const MainImageAndTextHolder = styled.div` 
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border: 0px solid #092178;
    min-height: 400px;
    max-width: 800px;
    width: 800px;
    @media (max-width: ${md}px) {
        position: static;
        width: 100%;
        transform: none;
        padding-left: 1rem;
        padding-right: 1rem;

    }
`
const ImageAllDogsHolder = styled.div`  
    position: absolute;
    left: -170px;
    top: 0px;
    width: 700px;
    height: 500px  ;
    @media (max-width: ${md}px) {
        position: static;
        width: 100%;
        height:auto;
    }
`
const RightTextBlockHolder = styled.div` 
    position: absolute;
    right: 0;
    top: 0;
    width: 500px;
    height: 300px   ;
    @media (max-width: ${md}px) {
        position: static;
        width: 100%;
        height:auto;
}
`

const LastHeaderLineWithButtonHolder = styled.div`
    display:flex;
    flex-direction:row;
    @media (max-width: ${md}px) {
      display:block;
      flex-direction:column;
    }
`
const BottomTextWithTimerHolder = styled.div`
    display:flex;
    flex-direction:column;
    @media (max-width: ${md}px) {
      display:block;
      padding-left: 0;
    }
`
const StartButtonHolder = styled.div`
    position: absolute;
    right: 120px;
    bottom: 0;
    height: 62px !important ;
    @media (max-width: ${md}px) {
    position: static;
    width: 100%;
    }
`

const ButtonTitleHolder = styled.div`  
    width:100%;
    font-size:0.75rem;
    font-weight:400;
    color:white;
    padding-left:10rem;
    padding-top:2rem ;
    @media (max-width: ${md}px) {
    position: static;
    width: 100%;
    padding-left: 0;
    }
`
const ButtonBodyTextHolder = styled.div` 
    display:flex;
    flex-direction:row;
    align-items:center;
    padding-left:10rem ;
    @media (max-width: ${md}px) {
    position: static;
    width: 100%;
    padding-left: 0;
    }
`
const ButtonBodyTextInnerHolder = styled.div` 
    padding-left:1rem;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height: 25px;
    width:80%;
    font-size:1rem;
    font-weight:600;
    color:white ;
    @media (max-width: ${md}px) {
    position: static;
    width: 100%;
    padding-left: 0;
}
`
export default function homePage({data}){

  let resources = get(data, 'nodeHomepage')
 
  // TODO - remove hardcoded

  if (!resources) {
    resources = [
    {
    
      field_headertextline3:'LISTEN.',
      field_headertextline2:'INVESTIGATE.',
      field_headertextline1:'TREAT.',
      field_bottombodytext: {processed:'<p>Build both your clinical and consulting skills in canine heart disease and prolong the lives of dogs with the help of this simple, fun digital tool.</p>'},
      
      field_bottomtitle: {processed:'<p>Each case will earn you 20 minutes of CPD</p>'},
      
      field_buttonlinks:[{
        title:'Start',
        uri:'/case-studies-options/'
      }],
      field_toprighttext:[{processed:'You will need sound for part of this activity.'}]
    }
  ] }


  return (
  <Layout showPercentIndicator={false} style={{backgroundColor: theme.palette.primary.main}} showBurgerMenuIcon={true} backgroundColor={theme.palette.midnightBlue.main}>
   
     <HomePageBackground />

      <OrangeTopRightTextAndBar>
          <div style={{paddingLeft: '0.8rem',fontSize:'0.75rem',fontWeight:'400',paddingRight: '2rem',color:'#fc9a5c'}}>{removeParagraphsTags(resources.field_toprighttext.processed)}</div>
         
          <div style={{position: 'absolute',right: '0',top: '10%',width: '30px', height: '3px',backgroundColor:'#fc9a5c'}}></div>
      </OrangeTopRightTextAndBar>

      <MainLogoHolder>
            <MainLogo />
      </MainLogoHolder>
      <BottomOrangeBarHolder>
            <div style={{position: 'absolute',right: '0',top: '0',width: '3px', height: '30px',backgroundColor:'#fc9a5c'}}></div>
      </BottomOrangeBarHolder>

      <MainImageAndTextHolder>
          <ImageAllDogsHolder> 
              <CustomFluidImage imgName="All-Dogs-Standing.png" />
          </ImageAllDogsHolder>

          <RightTextBlockHolder> 
              <div><BlockTextReveal textLabel={resources.field_headertextline1} colour={theme.palette.skyBlue.main}/></div>
              <div><BlockTextReveal textLabel={resources.field_headertextline2} colour={theme.palette.topazBlue.main}/></div>
              <LastHeaderLineWithButtonHolder>
                <BlockTextReveal textLabel={resources.field_headertextline3} colour="#ffffff"/>
                <StartButtonHolder>
                      <WebsiteLink to={"/case-study-options/"} typeOfButton={buttonStyleType.ORANGE_BUTTON_CORNER} style={{width:'100px'}}>
                        {resources.field_buttonlinks[0].title}
                      </WebsiteLink>
                </StartButtonHolder>
              </LastHeaderLineWithButtonHolder>   
              <BottomTextWithTimerHolder>
                <ButtonTitleHolder>
                 {resources.field_bottomtitle.processed}
                </ButtonTitleHolder>
                <ButtonBodyTextHolder>
                    <div style={{width:'50px', height: '50px',flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                        <TimerIcon />
                    </div>
                    <ButtonBodyTextInnerHolder>
                        {resources.field_bottombodytext.processed}
                    </ButtonBodyTextInnerHolder>
                </ButtonBodyTextHolder>
              </BottomTextWithTimerHolder>   
          </RightTextBlockHolder>
    </MainImageAndTextHolder> 
  </Layout>
  )
}

export const pageQuery = graphql`{
  nodeHomepage {
        path {
          alias
        }
        drupal_id
        field_headertextline3
        field_headertextline2
        field_headertextline1
        field_bottombodytext {
          processed
        }
        field_bottomtitle {
          processed
        }
        field_buttonlinks {
          title
          uri
        }
        field_toprighttext {
          processed
        }
        changed(fromNow: false)
  }
}`



