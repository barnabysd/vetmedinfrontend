// import "react-app-polyfill/ie11"
// import "react-app-polyfill/stable"
import React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import theme from "../theme"
// import ReactPlayer from "react-player"
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { useCallback, useState, useEffect, useDebugValue, forceUpdate } from 'react'
import CaseStudyLeftArrow from "../components/CaseStudyLeftArrow"
import CaseStudyRightArrow from "../components/CaseStudyRightArrow"
import { useCookies } from 'react-cookie'
import { stripUneededHtml, removeParagraphsTags, processField, checkLinkHasTitle } from "../utils/displayUtils"
import { dogName, heartSteps, tasks, cookieKeyNames, heartSlugNames, animationCharacterState } from '../WebsiteConstants'
import soundOffIcon from "../images/noSound.png"
import videoPlayButtonIcon from "../images/videoPlayLaunchBtn.png"
import videoPauseButtonIcon from "../images/videoPauseLaunchBtn.png"

import { navigate } from "gatsby"
import playButtonSvg from '../images/icons_and_glyphs/GradientIcon_Play.svg'
import pauseButtonSvg from '../images/icons_and_glyphs/GradientIcon_Pause.svg'
import { VideoWhiteDotButtonBackground, SmallPlayArrow, PauseResponsive, PlayResponsive, SmallTriangleRight, Cross } from '../components/VideoPlayerParts'
import { setCaseStudyProgress } from "../utils/dataUtils"
import { BottomCenterTaskText } from "../components/PageParts"
import { startCase } from "lodash"
import HeartTaskLayout from "../components/HeartTaskLayout"
import AnswerLayout from "../components/AnswerLayout"
import QuestionLayout from "../components/QuestionLayout"
import get from "lodash/get"
import { getSlideData } from "../utils/displayUtils"
import { getDogImageName, getDogVideo, getVideoDataForTwoHearts } from "../utils/assetUtils"
import BottomNavigationLink from "../components/BottomNavigationLink"
import { getVideoData, updateSlideDataWithVideoData } from "../utils/dataUtils"
import VideoFullScreenWidget, { showFullScreenResourceVideo } from '../components/VideoFullScreenWidget'
import TwoHeartsLayout from "../components/TwoHeartsLayout"

export default function heartTemplate(data, dogChoicePassed) {

  // =================== SETUP STATE ==================

  const [cookies, setCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])

  const dogChoice = dogChoicePassed // cookies["dogChoice"] ? cookies["dogChoice"] : dogName.NOT_SET

  let stateFromCookie = {
      calledCount: 0,
      dogChoice: dogChoice,
      step: heartSteps.INTRO,
      taskCompleted: false,
      videoOnePlayed: false,
      videoTwoPlayed: false
  }

  const [state, setState] = useState(stateFromCookie)

  // =================== CHECK COMPLETION STATUS ==================

  // =================== GET PAGES DATA ==================

  const resourcesTasksAr = get(data, 'allNodeTask.nodes')

  let listenSection_ListenToTwoHeart = {}

  let resources = null

  let videoDataForFullScreenVideo = null

  let headerText = ''


  const slideData = {}

  switch (state.step) {

    case heartSteps.TWO_HEARTS:
          resources = getSlideData(resourcesTasksAr,heartSlugNames.TASK_TWO_HEARTS)

          let titleText = resources.field_bottomlefttitletext ? processField(resources.field_bottomlefttitletext,dogChoice,true) : 'no data'

          let additionalText = resources.field_bottomleftbodytext1 ? processField((resources.field_bottomleftbodytext1.processed + "<br /><br />" + resources.field_bottomleftbodytext2.processed),dogChoice,true) : 'No data'

          listenSection_ListenToTwoHeart = {
            instructionsText: resources.field_instructionstext ? processField(resources.field_instructionstext,dogChoice,false) : 'Compare these two hearts',
            continueLink: {uri: '/',title:'Continue'},
            backLink:  {uri: '/',title:''},
            accessibilityVideoText: 'dog heart',
            animationVideoName: 'heart',
            slugName: heartSlugNames.TASK_TWO_HEARTS,
            buttonLinks: [],
            infoText: titleText,
            // additionalText: additionalText,
            // continueLink: {uri: '/',title:'Continue'},
            dogChoice:dogChoice,
            video1: getVideoDataForTwoHearts(resources, dogChoice),
            video2: getVideoDataForTwoHearts(resources, ""),
          }


          //resources = listenSection_ListenToTwoHeart
          slideData.listenSection_ListenToTwoHeart = listenSection_ListenToTwoHeart
          break
    default:
      return "no current slide"
  }

  console.log("=========== current Step - step ",state.step)
  console.log(resources)
  if (!resources) return "resources not found"
  if (resources == "NO_DATA_FOUND") return "resources not found"

    let currentCaseStudySlideData = slideData.listenSection_ListenToTwoHeart
    console.log(currentCaseStudySlideData)

    if (!currentCaseStudySlideData) return "no data"
    if (currentCaseStudySlideData === 'NO_DATA_FOUND') return "no data found for slides"

    // ================ CHOOSE LAYOUT ====================

    const handleRightClick = e => {
      if (e) e.preventDefault()
      if (e) e.stopPropagation()
      console.log("======= move slide right");
      if ((state.step + 1) < slideData.currentCaseStudySlideDataAr.length) {

        if ((state.step + 1) === (heartSteps.YES_ANSWER + 1)) {
            if (dogChoice === dogName.POPPY) navigate("/grade-the-murmur-poppy/")
            if (dogChoice === dogName.REGGIE) navigate("/grade-the-murmur-reggie/")
            if (dogChoice === dogName.DUDLEY) navigate("/grade-the-murmur-dudley/")
        } else {
            console.log("move slide to ", (state.step + 1))
            const test = (slideData.currentCaseStudySlideDataAr) ? console.log("move slide to ", slideData.currentCaseStudySlideDataAr[(state.step + 1)].slugName) : ''
            let currentState = { ...state }
            currentState.calledCount = currentState.calledCount + 1
            currentState.step = currentState.step + 1
            console.log("currentState ",currentState)
            setState(currentState)
        }
      } else {
        // TODO: remove - for debug
        let currentState = { ...state }
        currentState.calledCount = currentState.calledCount + 1
        currentState.step = 0
        console.log("currentState ",currentState)
        setState(currentState)
      }
    }
    console.log('heartSteps', heartSteps);
    console.log('state.step', state.step);

  return (
    <Layout headerText={headerText} showSliderHeader={true} showPercentIndicator={true}>

          {heartSteps.TWO_HEARTS === state.step ? <TwoHeartsLayout resources={slideData.listenSection_ListenToTwoHeart}
              step={state.step}
              dogChoice={state.dogChoice}
              state={state.step}
              setState={setState}
              moveToNextStep={() => {setCurrentStep(heartSteps.QUESTION_ABOUT_HEART)}}
              setCurrentStep={setCurrentSlide}/> : ''}

            {/* <VideoFullScreenWidget videoData1={videoDataForFullScreenVideo} instance={"One"} /> */}

        {checkLinkHasTitle(currentCaseStudySlideData.continueLink)
          && heartSteps.YES_ANSWER === state.step
          || heartSteps.VIDEO_OF_HEART_WITH_TEXT === state.step ?

              <BottomNavigationLink
              to={"button"}
              distanceFromSide={"0px"}
              onClick={handleRightClick}
              bottom={"1%"}
              linkText={currentCaseStudySlideData.continueLink.title}
        />
          : '' }



  </Layout>

)}

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
