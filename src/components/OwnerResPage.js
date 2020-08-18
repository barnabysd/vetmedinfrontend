

import React, { useRef, useEffect, createRef } from "react"
import styled from "styled-components"
import CustomFluidImage from "../components/CustomFluidImage"
import {
  stripUneededHtml,
  removeParagraphsTags,
  processLink,
  replaceDogName,
  replaceOwnerName,
  getCssDisplayState
} from "../utils/displayUtils"
import WebsiteLink, { buttonStyleType } from "../components/WebsiteLink"
import { withCookies, Cookies, useCookies } from "react-cookie"
import { useCallback, useState, useDebugValue, forceUpdate } from "react"



import theme, { sm, md, lg, xl } from "../theme"
import { dogName, ownerName, ownerResponseSteps, animationCharacterState } from "../WebsiteConstants"

import VideoFullScreenWidget from "../components/VideoFullScreenWidget"
import VideoSmallWidget from "../components/VideoSmallWidget"

import BottomNavigationLink from "../components/BottomNavigationLink"
import QuestionResponse from '../components/QuestionResponse'

import { PageSection ,LeftPageSection, OwnerImage, RightPageSection, OwnerImageCloseUp} from '../components/PageParts'

import { TimelineMax } from "gsap"
import OwnerResponseOptionBox from '../components/OwnerResponseOptionBox'
import FixedSizeVideoWidget from '../components/FixedSizeVideoWidget'
import { TreatmentOptionsSummary } from '../components/PageParts'
import BackgroundVideoCustom from '../components/BackgroundVideoCustom'
import VideoCover from 'react-video-cover'
import { getOwnerVideo } from '../utils/assetUtils'

const OwnerVideoHolder = styled.div`
    position: absolute;
    border: 0px solid red;
    left: 0;
    top: 0;
    right: 50%;
    bottom: 0;
    width: 50% !important;
    max-width: 50% !important;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: block;
    z-index:0;
`

const Quotes = styled.div`
  position:absolute;
  left: 12px;
  top: 30px;
  width: 24px;
  height: 17.2px;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 4rem;
  background-color: transparent;
  color: white;
`

const QuoteDot = styled.div`
  position:absolute;
  left: 22px;
  top: -33px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: solid 4px ${theme.palette.cloudBlue.main};
  background-color: ${theme.palette.deminBlue.main};
`
const QuoteDotRight = styled.div`
  position:absolute;
  left: 583px;
  bottom: -30px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: solid 4px ${theme.palette.cloudBlue.main};
  background-color: ${theme.palette.deminBlue.main};

`


const QuoteBox = styled.div`
  position: relative;
  padding: 1.5rem;
  box-shadow: 0 8px 12px 0 rgba(15, 87, 159, 0.2);
  border-radius: 1rem 1rem 1rem 0rem;
  background-color: white;
`
const QuoteBoxBodyText = styled.div`
  width: 616px;

  font-family: ${theme.typography.fontFamily};
  font-size: 29px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.29px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
  padding-bottom: 2rem;
`
const QuoteBoxBodySmallText = styled.div`
  width: 616px;
  height: 25px;
  font-family: ${theme.typography.fontFamily};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.raven50.main};
`
// step 2

const OwnerResponseHeaderText = styled.div`
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  width: 691px;
  font-size: 47px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.47px;
  text-align: left;
  color: ${theme.palette.midnightBlue.main};
  margin-bottom: 1.5rem;
`

const OwnerVideoContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    min-width: 58%;
    min-height: 50%;

`

const OwnerResPage = ({id, style, dogChoice, resources, step, setCurrentStep }) => {

  const data = resources
  console.log(resources)

  if (step === ownerResponseSteps.CORRECT_ANSWER || step === ownerResponseSteps.INCORRECT_ANSWER) {
        console.log("========= CORRECT_ANSWER OR INCORRECT_ANSWER")

        return (

          <PageSection id={id} style={style}>
            <LeftPageSection id="summaryImage">
                <OwnerImageCloseUp dogChoice={dogChoice} ownerState={step === ownerResponseSteps.CORRECT_ANSWER ? animationCharacterState.HAPPY : animationCharacterState.SAD} />
            </LeftPageSection>

            <RightPageSection id="summaryText">

              <QuestionResponse data={data}
                  currentSlidePosition={0}
                  onClickHandler={setCurrentStep}
                  onClickHandlers={[setCurrentStep]}
                  onClickHandlersParams={[ownerResponseSteps.QUESTION_POSED]}
                  useBigVideoWidget={true}
              />

              {step === ownerResponseSteps.CORRECT_ANSWER && data.continueLink ? (
                <BottomNavigationLink
                  to={processLink(resources.continueLink.url)}
                  distanceFromSide={"2%"}
                  bottom={"2%"}
                  linkText={resources.continueLink.title}
                />
              ) : (
                ""
              )}

            </RightPageSection>

            <VideoFullScreenWidget videoData1={resources.videoData1} instance="One" />
          </PageSection>

        )

      ///////////////

     }else if (step === ownerResponseSteps.QUESTION_POSED) {
       console.log("========= QUESTION_POSED")
       //debugger
       const ref = React.createRef();
       const videoOptions = {
        id: "ownerVideo",
        src: getOwnerVideo(dogChoice),
        ref: null,
        autoPlay: true
      }
    return (

      <PageSection id={id} style={style}>
        <LeftPageSection id="summaryImage" style={{justifyContent: 'flex-end'}}>
            {/* <OwnerVideoHolder>
                <VideoCover videoOptions={videoOptions} />
            </OwnerVideoHolder> */}

            <FixedSizeVideoWidget loop={false} height="768px" width="550px" autoPlay="true" ref={null} verticalAlignment="flex-end" horizontalAlignment="center" data={resources} />

        </LeftPageSection>
        <RightPageSection id="summaryText">
            <OwnerResponseHeaderText>
                {removeParagraphsTags(replaceOwnerName(resources.field_questiontext ? (resources.field_questiontext.processed ? resources.field_questiontext.processed : resources.field_questiontext) : "How will you respond to __DOG_OWNER__?",dogChoice))}
            </OwnerResponseHeaderText>
            { resources.field_optionsbodytext1 ? <OwnerResponseOptionBox optionHeader={"Option A"} idNum={"1"} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} optionText={resources.field_optionsbodytext1.processed} /> :''}
            { resources.field_optionsbodytext2 ? <OwnerResponseOptionBox optionHeader={"Option B"} idNum={"2"} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} optionText={resources.field_optionsbodytext2.processed} /> :''}
            { resources.field_optionsbodytext3 ? <OwnerResponseOptionBox optionHeader={"Option C"} idNum={"3"} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} optionText={resources.field_optionsbodytext3.processed} /> :''}
            { resources.field_optionsbodytext4 ? <OwnerResponseOptionBox optionHeader={"Option D"} idNum={"4"} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} optionText={resources.field_optionsbodytext4.processed} /> :''}
            { resources.field_optionsbodytext5 ? <OwnerResponseOptionBox optionHeader={"Option E"} idNum={"5"} dogChoice={dogChoice} setCurrentStep={setCurrentStep} resources={resources} optionText={resources.field_optionsbodytext5.processed} /> :''}
        </RightPageSection>
        <VideoFullScreenWidget videoData1={resources.videoData1} instance="One" />
      </PageSection>

    )

  //////////////

}else if (step === ownerResponseSteps.SECTION_INTRO) {

  console.log("=========== SECTION INTRO ")

    const setStepOwnerQuestion = () => {
          setCurrentStep(ownerResponseSteps.QUESTION_POSED_BY_OWNER)
    }

    useEffect(() => {
      switch (step){
        case ownerResponseSteps.SECTION_INTRO:
             console.log("SECTION_INTRO")
             const action = new TimelineMax().to("#intro", 3, {delay:2,autoAlpha:0,repeat:0, onComplete: setStepOwnerQuestion})
             break;
        default:
            break;
      }
     })

     return (
        <PageSection id={"intro"} style={style}>
          <LeftPageSection id="sectioIntroImage">
              <TreatmentOptionsSummary dogChoice={dogChoice} />
          </LeftPageSection>

          <RightPageSection id="sectioIntroText">
             <OwnerResponseHeaderText>
               {replaceDogName("Let’s talk to __DOG_NAME__ owner about treatment options",dogChoice)}
              {/* {field_headertext ?
              (removeParagraphsTags(replaceOwnerName(replaceDogName(resources.field_headertext.processed ? resources.field_headertext.processed
              : resources.field_headertext,dogChoice),dogChoice))) : ''}  */}
            </OwnerResponseHeaderText>

          </RightPageSection>

        </PageSection>
      )
      //direction={buttonStyleType.FORWARD_NORMAL_LINK}

   }else if (step === ownerResponseSteps.QUESTION_POSED_BY_OWNER) {

    console.log("=========== QUESTION_POSED_BY_OWNER ")

       const setStepQuestionPosed = (e) => {
          e.preventDefault()
          //const test = "" + ownerResponseSteps
          console.log("setStepQuestionPosed = ",ownerResponseSteps.QUESTION_POSED)
          //e.stopPropogation()
          setCurrentStep(ownerResponseSteps.QUESTION_POSED)
       }

       return (
          <PageSection id={id} style={style}>
            <LeftPageSection id="summaryImage">
                 <FixedSizeVideoWidget loop={false}  height="768px" width="550px" autoPlay="true" ref={null} verticalAlignment="flex-end" horizontalAlignment="center" data={resources} />
            </LeftPageSection>

            <RightPageSection id="summaryText">
              <QuoteBox>
                <QuoteDot>
                  <Quotes>“</Quotes>
                </QuoteDot>
                <QuoteDotRight>
                  <Quotes>”</Quotes>
                </QuoteDotRight>
                <QuoteBoxBodyText>
                  {stripUneededHtml(
                    replaceDogName(resources.field_headertext,
                      dogChoice)
                  )}
                </QuoteBoxBodyText>
                <QuoteBoxBodySmallText>
                  {stripUneededHtml(
                    replaceOwnerName(
                      (resources.field_additionalbodytext ? resources.field_additionalbodytext.processed : ''),
                      dogChoice
                    )
                  )}
                </QuoteBoxBodySmallText>

              </QuoteBox>

              <BottomNavigationLink
                  onClick={setStepQuestionPosed}
                  to={"button"}
                  distanceFromSide={"2%"}
                  bottom={"2%"}

                  linkText={(resources.field_continuelink ? resources.field_continuelink.title : 'Continue') }
                />

            </RightPageSection>

            <VideoFullScreenWidget />

          </PageSection>
        )
        //direction={buttonStyleType.FORWARD_NORMAL_LINK}
    } else {
      return (<div>no step</div>)
    }
}

export default OwnerResPage
