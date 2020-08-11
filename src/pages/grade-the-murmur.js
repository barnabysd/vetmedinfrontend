import React from 'react'
import Layout from '../components/layout'
import CaroGallery, { panels } from '../components/CaroGallery';
import styled from 'styled-components'
import PercentageProgressIndicator from "../components/PercentageProgressIndicator"
import theme, { sm, md, lg, xl } from '../theme'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import { useCallback, useState,  useDebugValue, forceUpdate, useEffect } from 'react'
import { withCookies, Cookies, useCookies } from 'react-cookie'
import { processLink, stripUneededHtml, removeParagraphsTags, getSlideData, processField } from '../utils/displayUtils'

import BottomNavigationLink from '../components/BottomNavigationLink'
import { PageSection ,LeftPageSection, OwnerImage, RightPageSection} from '../components/PageParts'
import { graphql } from 'gatsby'
import get from "lodash/get"
import { dogName, ownerName, gradeMurmurSteps, cookieKeyNames, tasks, gradeMurmurSlugNames, animationCharacterState } from "../WebsiteConstants"

import QuestionResponse from '../components/QuestionResponse'
import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import { HeaderText, SubtitleText, BottomCenterTaskText } from '../components/PageParts'
import SlideVideo from '../components/SlideVideo'
import soundOffIcon from "../images/noSound.png"
import Grid from '@material-ui/core/Grid'
import SliderHeader from "../components/SliderHeader"
import { showFullScreenVideo, showFullScreenHeartVideo } from '../components/VideoFullScreenWidget'
import { setCaseStudyProgress } from "../utils/dataUtils"
import { getVideoData, updateSlideDataWithVideoData } from "../utils/dataUtils"
import { getDogImageName, getDogVideo, getVideoDataForTwoHearts } from "../utils/assetUtils"
import { DogImageHolder } from '../components/PageParts'
import FixedSizeImage from '../components/FixedSizeImage'

const OptionsHolder = styled.div`
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
`
const SlideVideoHolder = styled.div`
   width: 400px;
   height: 300px;
 
   @media (max-width: ${md}px) {
       width: 100%;
       height: auto;
   }
    @media (max-width: ${sm}px) {
       width: 100%;
       height: auto;
    }
`

const SlideVideoCard = ({resources, nextStep, itemPointer}) => {
  return (<SlideVideoHolder>
    <SlideVideo resources={resources} nextStep={nextStep} itemPointer={itemPointer}/>
  </SlideVideoHolder>)
}

const GradeMurmur = ({data}) => {

  console.log(data)
  const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])

  const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"]: dogName.DUDLEY 

  let initialState = { 
      videoOnePlayed: false,
      videoTwoPlayed: false,
      step: gradeMurmurSteps.QUESTION_ABOUT_GRADING, 
      taskCompleted: false
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (state.step === gradeMurmurSteps.CORRECT_ANSWER && state.taskCompleted === false) {   
      const newCaseStudyProgress = setCaseStudyProgress(tasks.GRADE_HEART_MURMUR,dogChoice,cookies)
      setCookie(cookieKeyNames.CASESTUDYS_ALL,newCaseStudyProgress,{ path: '/' })  
      setState({...state,taskCompleted: true})
    }
  },[state.step])

  console.log("=========== step ",state.step)
  console.log("state", state)
  
  let resources
  let headerText = ""
  //const resourcesAr = get(data, 'allNodeQuestion.nodes')

  // =================== CONSTANTS ======================

  const buttonIds = {
    CORRECT_ANSWER: "gradeMurmurYesAnswrer",
    INCORRECT_ANSWER: "gradeMurmurNoAnswrer",
    UNSURE_ANSWER: "gradeMurmurUnsureAnswrer",
    QUESTION_ABOUT_GRADING: "gradeMurmurQuestionAboutGrading",
    QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS: "gradeMurmurCompareTwoHearts",
  }

   // =================== GET PAGES DATA ==================

   const resourcesTasksAr = get(data, 'allNodeTask.nodes')
   const resourcesAnswersAr = get(data, 'allNodeAnswer.nodes')
   const resourcesQuestionAr = get(data, 'allNodeQuestion.nodes')
  
  const setCurrentStep = (step) => {   
      console.log("=========== setCurrentStep - step",step)
      setState({...state, step: step})
  }

  const setCurrentSlide = (e) => {
    //debugger
    if (e) e.preventDefault()
    if (e) e.stopPropagation()
    if (e && e.currentTarget) {
        switch (e.currentTarget.id) {
          case buttonIds.CORRECT_ANSWER:
            setCurrentStep(gradeMurmurSteps.CORRECT_ANSWER)
          break
          case buttonIds.INCORRECT_ANSWER:
            setCurrentStep(gradeMurmurSteps.INCORRECT_ANSWER)
          break
          case buttonIds.QUESTION_ABOUT_GRADING:
            setCurrentStep(gradeMurmurSteps.QUESTION_ABOUT_GRADING)
          break
          case buttonIds.QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS:
            setCurrentStep(gradeMurmurSteps.QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS)
          break
          default:
            return alert("no current slide")

        }
     }
  }

  switch (state.step) {
    case gradeMurmurSteps.QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS:

        resources = getSlideData(resourcesTasksAr,gradeMurmurSlugNames.TASK)

        const TwoHeartsResources = {
          instructionsText: resources.field_instructionstext ? processField(resources.field_instructionstext,dogChoice,false) : 'no data',
          continueLink: {uri: '/',title:'Continue'},
          backLink:  {uri: '/',title:''},
          accessibilityVideoText: 'dog heart',
          animationVideoName: 'heart',
          slugName: gradeMurmurSlugNames.TASK,
          buttonLinks: [],
          infoText: resources.field_bottomlefttitletext ? processField(resources.field_bottomlefttitletext,dogChoice,true) : 'no data',
          additionalText: resources.field_bottomleftbodytext1 ? processField((resources.field_bottomleftbodytext1.processed + "<br /><br />" + resources.field_bottomleftbodytext2.processed),dogChoice,true) : 'No data',
          continueLink: {uri: '/',title:'Continue'},
          dogChoice:dogChoice,
          video1: getVideoDataForTwoHearts(resources, dogChoice),
          video2: getVideoDataForTwoHearts(resources, ""),
        }

        resources = TwoHeartsResources
        
        
      break
    case gradeMurmurSteps.QUESTION_ABOUT_GRADING:

        resources = getSlideData(resourcesQuestionAr,gradeMurmurSlugNames.QUESTION_ABOUT_GRADING)
         
        resources = {
            
            questionText: resources.field_questiontext ? processField(resources.field_questiontext,dogChoice,false) : '',
            additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) :``,
            slugName: gradeMurmurSlugNames.QUESTION_ABOUT_GRADING,
            accessibilityVideoText: '',
            animationVideoName: getDogVideo(animationCharacterState.NEUTRAL,dogChoice),

            isCorrect1: resources.field_optioniscorrect1,
            optionsHeader1:processField(resources.field_optionsheader1,dogChoice,false),
            optionsBodyText1:processField(resources.field_optionsbodytext1,dogChoice,true),
            isCorrect2: resources.field_optioniscorrect2,
            optionsHeader2: "Grade 2", //  processField(resources.field_optionsheader2,dogChoice,false),
            optionsBodyText2:processField(resources.field_optionsbodytext2,dogChoice,true),
            isCorrect3: resources.field_optioniscorrect3,
            optionsHeader3:"Grade 3", //  processField(resources.field_optionsheader3,dogChoice,false),
            optionsBodyText3:processField(resources.field_optionsbodytext3,dogChoice,true),
            isCorrect4: resources.field_optioniscorrect4,
            optionsHeader4:"Grade 4", //  processField(resources.field_optionsheader4,dogChoice,false),
            optionsBodyText4:processField(resources.field_optionsbodytext4,dogChoice,true),
            isCorrect5: resources.field_optioniscorrect5,
            optionsHeader5:"Grade 5", //  processField(resources.field_optionsheader5,dogChoice,false),
            optionsBodyText5:processField(resources.field_optionsbodytext5,dogChoice,true),
            isCorrect6: resources.field_optioniscorrect6,
            optionsHeader6:"Grade 6", //  processField(resources.field_optionsheader6,dogChoice,false),
            optionsBodyText6:processField(resources.field_optionsbodytext6,dogChoice,true),

            buttonLinks: [],
            dogChoice:dogChoice
        }
        console.log(resources)
      
        break
    case gradeMurmurSteps.CORRECT_ANSWER:
    
        resources = getSlideData(resourcesAnswersAr,gradeMurmurSlugNames.CORRECT_ANSWER)
        console.log("resources",resources)
        
        headerText = resources.field_topheadertext

        let videoData = getVideoData(resources, dogChoice)

        let correctAnswerResources = {
            questionText: '',
            answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
            answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
            additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',
            isCorrectAnswer: 'yes',
            mainImage: getDogImageName(animationCharacterState.HAPPY,dogChoice),
            slugName: gradeMurmurSlugNames.CORRECT_ANSWER,
            continueLink: {uri: '/',title:'Continue',url:'/'},
            backLink: {uri: '/',title:'Back',url:'/'},
            accessibilityVideoText: '',
            buttonLinks: [],
            dogChoice:dogChoice
        }

        
        resources = updateSlideDataWithVideoData(correctAnswerResources,videoData)
        console.log("correctAnswerResources",resources)
        
      break
      case gradeMurmurSteps.INCORRECT_ANSWER:
      
        resources = getSlideData(resourcesAnswersAr,gradeMurmurSlugNames.INCORRECT_ANSWER)

        headerText = resources.field_topheadertext

        let videoDataB = getVideoData(resources, dogChoice)
       

        let incorrectAnswerResources = {
            questionText: '',
            videoUrl1: '',
         
            videoCaptionText1: processField(resources.field_videocaption1,false),
            answerHeader: resources.field_answerheader ? processField(resources.field_answerheader,dogChoice,false) : '',
            answerText: resources.field_answertext ? processField(resources.field_answertext,dogChoice,true) : '',
            additionalText: resources.field_additionalbodytext ? processField(resources.field_additionalbodytext,dogChoice,true) : '',
            isCorrectAnswer: 'no',
            mainImage: getDogImageName(animationCharacterState.SAD,dogChoice),
            slugName: gradeMurmurSlugNames.INCORRECT_ANSWER,
            continueLink: {
              uri: '/',
              title:'none'
            },
            backLink: {
              uri: '/',
              title:'none'
            },
            animationVideoName: '',
            accessibilityVideoText: '',
            buttonLinks: [
              { title:'Answer Again',url: buttonIds.QUESTION_ABOUT_GRADING },
              { title:'Listen Again',url: buttonIds.QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS }
            ],
            dogChoice:dogChoice
        }

        resources = updateSlideDataWithVideoData(incorrectAnswerResources,videoDataB)
        
      
      break
    default:
      return "no current slide"
  }
  
  console.log(resources)
  if (!resources) return "resources not found"

  const goBackToListen = (e) => {
      setCurrentStep(gradeMurmurSteps.QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS)
  }

 
  switch (state.step) {
    case gradeMurmurSteps.QUESTION_ABOUT_GRADING:
   
        const panelsAr = ["panelRef1","panelRef2","panelRef3","panelRef4","panelRef5","panelRef6"]
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
                          <HeaderText>{resources.questionText}</HeaderText>
                          <SubtitleText>{resources.instructionsText}</SubtitleText>
                          <OptionsHolder style={{width: '1057px', height: '362px',backgroundColor:'transparent'}}>
                              <CaroGallery style={{width: '1057px', height: '362px'}} setCurrentStep={setCurrentStep} resources={resources} panelNamesAr={panelsAr} />
                          </OptionsHolder>
                      </div>
                  </div>
              </div>
  
              <BottomNavigationLink onClick={goBackToListen}  to="button" distanceFromSide={"150px"} bottom={"2%"} linkText={"Listen Again"} direction="back"/>
  
          </Layout>
          )

      break
    case gradeMurmurSteps.QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS:

      console.log("========= QUESTION_COMPARE_VIDEO_OF_TWO_HEARTS")
      //TODO: map fields
     
      const slideData = resources

      const topSectionStyle = {height: '100px',display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyItems: 'stretch'}
      const centerInstructionTextStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
      const centerInDivStyle = { display: 'flex', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}
      const bottomCenteredLayoutStyle = { display: 'flex', flexDirection: 'column',justifyContent: 'flex-end', alignItems: 'center',border: '0px solid red',height: '150px'}
      
      const nextStep = (videoNum) => {
        
         if (videoNum === 1 && state.videoTwoPlayed === true) {
              console.log("two video watched")
              document.getElementById("compareHeartsBottomRightLink").style.display= "flex"
         } else if (videoNum === 2 && state.videoOnePlayed === true) {
              console.log("two video watched")
              document.getElementById("compareHeartsBottomRightLink").style.display= "flex"
         } else {
              console.log("one video watched")
         }

         if (videoNum === 1) {showFullScreenHeartVideo("One")}
         if (videoNum === 2) {showFullScreenHeartVideo("Two")}

         if (videoNum === 1) setState({...state, videoOnePlayed: true})
         if (videoNum === 2) setState({...state, videoTwoPlayed: true})
      }

      const moveToGradeChoiceStep = () => {
          setCurrentStep(gradeMurmurSteps.QUESTION_ABOUT_GRADING)
      }

      return (
        <Layout>
          
          <Grid container 
          spacing={0}
          spacing={0}
          justify="center"
          style={{position: 'relative',border: '0px solid black',height: '100vh' }}>
            <Grid item xs={12} sm={12} md={12}  style={{border: '0px solid red'}}>
                {/* <div style={topSectionStyle}>
                    {(slideData.sliderHeader && slideData.sliderHeader !== '') ? <SliderHeader headerData={slideData} /> : ''}
                    <div style={centerInDivStyle}>
                      <img src={soundOffIcon} alt="sound off" width="30" height="30"/>
                    </div>
                </div> */}
            </Grid>
            <Grid item xs={12} sm={12} md={1}  align="left" style={{border: '0px solid red'}}></Grid>

            <Grid item xs={12} sm={12} md={5}  align="center" style={{border: '0px solid red'}}>
                <div style={{ display: 'flex', 
                flexDirection: 'row',
                alignContent:'center',
                justifyItems:'center',
                alignItems:'center',
                 justifyContent:'center', 
                  border: '0px solid red',
                  width:'100%',
                  height: '400px'}}>
                  <SlideVideoCard resources={slideData} nextStep={nextStep} itemPointer="1"/>
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={5}   align="center" style={{border: '0px solid red'}}>
                <div style={{ display: 'flex',
                 flexDirection: 'row',
                 alignContent:'center',
                 justifyItems:'center',
                 alignItems:'center',
                justifyContent:'center',
                border: '0px solid red',
                width:'100%',
                height: '400px'}}>
                  <SlideVideoCard resources={slideData} nextStep={nextStep} itemPointer="2"/>
                </div> 
            </Grid>

            <Grid item xs={12} sm={12} md={1}  align="left" style={{border: '0px solid red'}}></Grid>

            <Grid item xs={12} sm={12} md={12}   style={{border: '0px solid red',height: '20%'}}>
                    <div style={bottomCenteredLayoutStyle}>
                        {/* <div style={centerInstructionTextStyle}> */}
                        <BottomCenterTaskText>
                            {(slideData.instructionsText ? stripUneededHtml(slideData.instructionsText)  : '')}
                        </BottomCenterTaskText>
                        {/* </div> */}
                    </div> 
            </Grid>
          </Grid>

          <div id="compareHeartsBottomRightLink" style={{display:'block'}}>
               <BottomNavigationLink
                    to={"button"}
                    onClick={moveToGradeChoiceStep}
                    distanceFromSide={"2%"}
                    bottom={"2%"}
                    linkText={"Continue"}
               />
          </div>
           
          <VideoFullScreenWidget videoData1={slideData.video1} instance={"One"} /> 
          <VideoFullScreenWidget videoData1={slideData.video2} instance={"Two"} /> 

        </Layout>  
      )
    case gradeMurmurSteps.CORRECT_ANSWER:
      console.log("========= CORRECT_ANSWER")
     
      return (
            <Layout>
                  <PageSection id={"gradeTheMurmur"}>

                  <LeftPageSection id="summaryImage">

                    {(resources.mainImage && resources.mainImage !== "" && dogChoice === dogName.DUDLEY)  ? 
                      <DogImageHolder><FixedSizeImage imgName={resources.mainImage} height="614px" width="614px"/></DogImageHolder>
                    : ''}
                      {(resources.mainImage && resources.mainImage !== "" && dogChoice === dogName.POPPY)  ? 
                      <DogImageHolder><FixedSizeImage imgName={resources.mainImage} height="614px" width="614px"/></DogImageHolder>
                    : ''}
                      {(resources.mainImage && resources.mainImage !== "" && dogChoice === dogName.REGGIE)  ? 
                      <DogImageHolder><FixedSizeImage imgName={resources.mainImage} height="614px" width="614px"/></DogImageHolder>
                    : ''}
                    
                  </LeftPageSection>

                  <RightPageSection id="summaryText">

                    <QuestionResponse data={resources} 
                        currentSlidePosition={0} 
                        onClickHandler={setCurrentStep} 
                        onClickHandlers={[setCurrentStep]}
                        onClickHandlersParams={[gradeMurmurSteps.QUESTION_ABOUT_GRADING]}
                        useBigVideoWidget={false} 
                    />

                    {state.step === gradeMurmurSteps.CORRECT_ANSWER && resources.continueLink ? (
                      <BottomNavigationLink
                        to={processLink("/murmur-treatment")}
                        distanceFromSide={"2%"}
                        bottom={"2%"}
                        linkText={resources.continueLink.title}
                      />
                    ) : (
                      ""
                    )}
                    
                  </RightPageSection>
                  
                </PageSection>

                <VideoFullScreenWidget videoData1={resources.videoData1} instance={"One"} /> 
            </Layout>

        )
      break
    case gradeMurmurSteps.INCORRECT_ANSWER:
      
          console.log("========= INCORRECT_ANSWER")
      
          return (
            <Layout>
            <PageSection id={"gradeTheMurmur"} style={{}}>
              <LeftPageSection id="summaryImage">
                {(resources.mainImage && resources.mainImage !== "" && dogChoice === dogName.DUDLEY)  ? 
                  <DogImageHolder><FixedSizeImage imgName={resources.mainImage} height="614px" width="614px"/></DogImageHolder>
                : ''}
                  {(resources.mainImage && resources.mainImage !== "" && dogChoice === dogName.POPPY)  ? 
                  <DogImageHolder><FixedSizeImage imgName={resources.mainImage} height="614px" width="614px"/></DogImageHolder>
                : ''}
                  {(resources.mainImage && resources.mainImage !== "" && dogChoice === dogName.REGGIE)  ? 
                  <DogImageHolder><FixedSizeImage imgName={resources.mainImage} height="614px" width="614px"/></DogImageHolder>
                : ''}
              </LeftPageSection>

              <RightPageSection id="summaryText">

                <QuestionResponse data={resources} 
                    currentSlidePosition={0} 
                    onClickHandler={setCurrentSlide} 
                    onClickHandlers={[setCurrentStep]}
                    onClickHandlersParams={[gradeMurmurSteps.QUESTION_ABOUT_GRADING]}
                    useBigVideoWidget={false} 
                />

              </RightPageSection>

              
            </PageSection>
            <VideoFullScreenWidget videoData1={resources.videoData1} instance={"One"} />
            </Layout>

        )
      break
    default:
      return "no current slide"
  }

  
}

export default GradeMurmur

export const query = graphql`
  {
    allNodeTask {
      nodes {
        drupal_id
        created(fromNow: false)
        field_bottombodytext {
          processed
        }
        field_bottombodytextstep2 {
          processed
        }
        field_bottombodytextstep3 {
          processed
        }
        field_bottombodytextstep4 {
          processed
        }
        field_bottombodytextstep5 {
          processed
        }
        field_bottomhintbodytext {
          processed
        }
        field_bottomhintbodytext2 {
          processed
        }
        field_bottomleftbodytext1 {
          processed
        }
        field_bottomleftbodytext2 {
          processed
        }
        field_bottomlefttitletext {
          processed
        }
        field_bottomrightbodytext {
          processed
        }
        field_bottomrighttitletext {
          processed
        }
        field_bottomtitle {
          processed
        }
        field_bottomtitlestep2 {
          processed
        }
        field_bottomtitlestep3 {
          processed
        }
        field_bottomtitlestep4 {
          processed
        }
        field_bottomtitlestep5 {
          processed
        }
        field_bottomtitlestep6 {
          processed
        }
        field_buttonlinks {
          title
          uri
        }
        field_continuelink {
          uri
          title
        }
        field_failedtext {
          processed
        }
        field_dogchoice
        field_failedtext2 {
          processed
        }
        field_failedtext4 {
          processed
        }
        field_finalscreenbottomline1
        field_finalscreenbottomline2 {
          processed
        }
        field_infotext {
          processed
        }
        field_instructionstext {
          processed
        }
        field_mainimage {
          alt
          title
          width
          height
        }
        field_popupbodytext {
          processed
        }
        field_popupbodytext2 {
          processed
        }
        field_popupheadertext
        field_popupheadertext2
        field_progresspercent
        field_sliderofftext
        field_sliderontext
        field_slidertitle
        field_taptooltiptext1 {
          processed
        }
        field_taptooltiptext2 {
          processed
        }
        field_taptooltiptext3 {
          processed
        }
        field_taptooltiptext4 {
          processed
        }
        field_taptooltiptext6 {
          processed
        }
        field_videocaptiontext1 {
          processed
        }
        field_videocaptiontext2 {
          processed
        }
        field_videoduration1
        field_videoduration2
        field_videoposterimage1 {
          alt
          title
          width
          height
        }
    
        field_videotext2 {
          processed
        }
        field_videothumbnail1 {
          alt
          title
          width
          height
        }
        path {
          alias
        }
        relationships {
          field_mainimage {
            localFile {
              url
            }
          }
          field_video1 {
            id
          }
          field_videoposterimage1 {
            uri {
              value
              url
            }
            localFile {
              url
            }
          }
          field_videothumbnail1 {
            localFile {
              url
            }
          }
        }
      }
    }
    allNodeQuestion {
      nodes {
        created(fromNow: false)
        drupal_id
        field_accessibilityvideotext
        field_additionalbodytext {
          processed
        }
        field_animationvideoname
        field_backlink {
          title
          uri
        }
        field_buttonlinks {
          title
          uri
        }
        field_continuelink {
          title
          uri
        }
        field_dogchoice
        field_instructionstext {
          processed
        }
        field_introtext {
          processed
        }
        field_optioniscorrect1
        field_optioniscorrect2
        field_optioniscorrect3
        field_optioniscorrect4
        field_optioniscorrect5
        field_optioniscorrect6
        field_optionsbodytext1 {
          processed
        }
        field_optionsbodytext2 {
          processed
        }
        field_optionsbodytext3 {
          processed
        }
        field_optionsbodytext4 {
          processed
        }
        field_optionsbodytext5 {
          processed
        }
        field_optionsbodytext6 {
          processed
        }
        field_optionsheader1
        field_questiontext {
          processed
        }
        path {
          alias
        }
        field_optionlink1 {
          title
          uri
        }
      }
    },
    ,
    allNodeAnswer {
    nodes {
      drupal_id
      created(fromNow: false)
      field_accessibilityvideotext
      field_additionalbodytext {
        processed
      }
      field_animationvideoname
      field_answerheader
      field_answertext {
        processed
      }
      field_buttonlinks {
        title
        uri
      }
      field_continuelink {
        title
        uri
      }
      field_iscorrectanswer
      field_progresspercent
      field_slugname
      field_topheadertext {
        processed
      }
      field_videocaptiontext1 {
        processed
      }
      field_videoduration1
      field_videonarrator1
      field_videoposterimage1 {
        width
        alt
        height
        title
      }
      field_videothumbnail1 {
        alt
        height
        title
        width
      }
      path {
        alias
      }
      field_videocaptiontext2 {
        processed
      }
      field_videocaptiontext3 {
        processed
      }
      field_videofordog1
      field_videofordog2
      field_videofordog3
      field_videonarrator2
      field_videonarrator3
      field_videoposterimage2 {
        alt
        height
        title
        width
      }
      field_videoposterimage3 {
        alt
        height
        title
        width
      }
      field_videothumbnail2 {
        alt
        height
        title
        width
      }
      field_videotitle1 {
        processed
      }
      field_videotitle2 {
        processed
      }
      field_videotitle3 {
        processed
      }
      relationships {
        field_video1 {
          relationships {
            field_media_video_file {
              localFile {
                url
                internal {
                  content
                  description
                  ignoreType
                  mediaType
                }
              }
              filesize
              filename
              uri {
                value
                url
              }
            }
          }
        }
        field_video2 {
          relationships {
            field_media_video_file {
              localFile {
                url
              }
              uri {
                url
                value
              }
            }
          }
        }
        field_videoposterimage1 {
          localFile {
            url
          }
        }
        field_videoposterimage2 {
          localFile {
            url
          }
        }
        field_videoposterimage3 {
          localFile {
            url
          }
        }
        field_videothumbnail1 {
          localFile {
            url
          }
        }
        field_videothumbnail2 {
          localFile {
            url
          }
        }
        field_videothumbnail3 {
          localFile {
            url
          }
        }
        field_video3 {
          relationships {
            field_media_video_file {
              localFile {
                url
              }
              uri {
                url
                value
              }
            }
          }
        }
      }
      field_videonarratorlocation1 {
        processed
      }
      field_videonarratorlocation2 {
        processed
      }
      field_videonarratorlocation3 {
        processed
      }
      field_videonarratorprofession1 {
        processed
      }
      field_videonarratorprofession2 {
        processed
      }
      field_videonarratorprofession3 {
        processed
      }
      field_videoduration3
      field_videoduration2
      field_videothumbnail3 {
        alt
        height
        title
        width
      }
    }
    }

  }
`
