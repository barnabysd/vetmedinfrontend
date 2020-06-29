import React from 'react'
import Layout from '../components/layout'
import CaroGallery, { panels } from '../components/CaroGallery';
import styled from 'styled-components'
import PercentageProgressIndicator from "../components/PercentageProgressIndicator"
import theme, { sm, md, lg, xl } from '../theme'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import { useCallback, useState,  useDebugValue, forceUpdate } from 'react'
import { withCookies, Cookies, useCookies } from 'react-cookie'
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'
import { dogName } from '../WebsiteConstants'
import BottomNavigationLink from '../components/BottomNavigationLink'
import { graphql } from 'gatsby'

const resources = {
    field_questiontext: 'What grade is Poppy’s heart murmur?',
    field_instructionstext: {processed:'Select the suspected grade:'},
  
    field_optionsheader1: 'Grade 1',
    field_optionsbodytext1: `Grade 1 heart murmurs are only
    audible over the point of
    maximum intensity, are difficult
    to hear and are quieter than the
    sounds of the heart.<sup>2</sup>`,
    field_optioniscorrect1: 'no',
    optionlink1: '/',

    field_optionsheader2: 'Grade 2',
    field_optionsbodytext2: `Grade 2 heart murmurs are
    quieter than the sounds of the
    heart, but immediately audible
    when a stethoscope is placed
    over the point of maximum
    intensity.<sup>2</sup>`,
    field_optioniscorrect2: 'no',
    field_optionlink2: '/',

    field_optionsheader3: 'Grade 3',
    field_optionsbodytext3: `Grade 3 heart murmurs are
    clinically significant. They are
    moderately loud and described
    as being as loud as the heart
    sounds.<sup>3</sup>`,
    field_optioniscorrect3: 'yes',
    field_optionlink3: '/',

    field_optionsheader4: 'Grade 4',
    field_optionsbodytext4: `Grade 4 heart murmurs are
    clinically significant. They are
    louder than the heart sounds
    and can be heard over a wide
    area.<sup>2</sup>`,
    field_optioniscorrect4: 'no',
    field_optionlink4: '/',

    field_optionsheader5: 'Grade 5',
    field_optionsbodytext5: `Grade 5 heart murmurs are
    clinically significant. They are
    very loud and have a palpable
    precordial thrill.<sup>2</sup>`,
    field_optioniscorrect5: 'no',
    field_optionlink5: '/',

    field_optionsheader6: 'Grade 6',
    field_optionsbodytext6: `Grade 6 heart murmurs are
    clinically significant. They are
    very loud, accompanied by a
    palpable precordial thrill and
    can be heard with the
    stethoscope held slightly off the
    chest wall.<sup>2</sup>`,
    field_optioniscorrect6: 'no',
    field_optionlink6: '/',

    //field_additionaltext: '',

    // field_section: 'Listen Section',
    // field_subSection: 'Compare two Dog Heart Beats Question',
    // field_slugname: 'listen-section-compare-two-dog-heart-beats-question-dudley',
    // field_continueLinkText: '',
    // field_continueLink: {title:'',url:''},
    field_backlinktext: 'Listen Again',
    field_backlink: {title:'',url:''},
    // dogChoice: 'dudley',
    // field_animationVideoName: 'none',
    // field_accessibilityVideoText: '',
    // field_buttonLinks: [],
    // field_progressPercent: '10%'
  }


const HeaderText = styled.div`
   padding-bottom: 2rem;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 2.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.47px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
`

const SubtitleText =  styled.div`
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  height: 1.938rem;
  font-family: ${theme.typography.fontFamily};
  font-size: 1.375rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.22px;
  text-align: left;
  color: ${theme.palette.raven.main};
`

const OptionsHolder =  styled.div`
  padding-bottom: 2rem;
  width: 66.063rem;
  height: 20.75rem;
  border: solid 0px #707070;
  background-color: white;
  & button {
    background-color: ${theme.palette.deminBlue.main} !important;
  }
  & .react-multiple-carousel__arrow--right {
    right: calc(4% - 40px) !important;
  }
  & .react-multiple-carousel__arrow--left {
    left: calc(4% - 40px) !important;
  }
}
`

const GradeMurmur = ({data}) => {

  const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','dogChoice','score']);

  let stateFromCookie = { 
      selected: panels.NOSELECTION,
      dogChoice: cookies["dogChoice"] ? cookies["dogChoice"] : dogName.POPPY
  }

  const [state, setState] = useState(stateFromCookie)

  return (
        <Layout>
                <div style={{
                    minHeight: '100vh',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                    border: '0px solid red'
                }}>
                <div>
                   
                   
                    <div style={{
                        position: 'absolute',
                        left: 'calc(50% - 525px)',
                        top: 'calc(50% - 165px)',
                        width: '1057px', 
                        height: '332px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        border: '0px solid red'
                    }}>
                        <HeaderText>{resources.field_questiontext}</HeaderText>
                        <SubtitleText>{resources.field_instructionstext.processed}</SubtitleText>
                        <OptionsHolder style={{width: '1057px', height: '362px',backgroundColor:'transparent'}}>
                            <CaroGallery style={{width: '1057px', height: '362px'}} state={state} setState={setState} resources={resources} />
                        </OptionsHolder>
                    </div>
                </div>
            </div>

            <BottomNavigationLink to="/owner-response-continued/" distanceFromSide={"10%"} bottom={"10%"} linkText={"Continue"}/>

            <BottomNavigationLink to="/owner-and-dog-detail-slide/" distanceFromSide={"10%"} bottom={"10%"} linkText={"Listen Again"} direction="back"/>
            {/* <div style={{
                    position: 'absolute',
                    left: '20%', 
                    bottom: '0',
                    width:'150px',
                    height: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                    border: '0px solid red'
                }}>
                <WebsiteLink style={{width:'100%',paddingRight:'1rem',display: 'flex',flexDirection:'row',justifyContent:'flex-end',textDecoration:"none"}} 
                    to="/xray/" typeOfButton={buttonStyleType.BACK_NORMAL_LINK}>
                    Listen Again
                </WebsiteLink>
              </div>
              <div style={{
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
                    border: '0px solid red'
                }}>
                <WebsiteLink style={{width:'100%',paddingRight:'1rem',display: 'flex',flexDirection:'row',justifyContent:'flex-end',textDecoration:"none"}} 
                    to="/xray/" typeOfButton={buttonStyleType.BACK_NORMAL_LINK}>
                    Continue
                </WebsiteLink>
              </div> */}
        </Layout>
        )
    }

export default GradeMurmur

export const pageQuery = graphql`
  {
    allNodeQuestion {
        nodes {
        field_optionsheader1
        field_optionsbodytext1 {
            processed
        }
        field_optionlink1 {
            title
            uri
        }
        field_optioniscorrect1
        field_buttonlinks {
            title
            uri
        }
        field_backlink {
            title
            uri
        }
        }
    }
  }
  `