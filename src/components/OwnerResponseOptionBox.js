
import React from "react"
import styled from "styled-components"
import {
  stripUneededHtml,
  removeParagraphsTags,
  processLink,
  replaceDogName,
  replaceOwnerName,
  getCssDisplayState
} from "../utils/displayUtils";

import theme, { sm, md, lg, xl } from "../theme"
import { dogName, ownerName, ownerResponseSteps, animationCharacterState } from "../WebsiteConstants"

import chrevonMidnightBlueDownSvg from '../images/icons_and_glyphs/chervon_down_midnight_blue.svg'
import chrevonWhiteDownSvg from '../images/icons_and_glyphs/chervon_down_white.svg'

import Truncate from 'react-truncate-html'
import { TimelineMax, TweenMax } from "gsap"

const ChervonDownQuestionBlock = styled.img.attrs((props) => ({ className:props.className, onClick:props.onClick, src: props.src}))`
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    background-color: transparent;
    
`
const ChervonUpQuestionBlock = styled.img.attrs((props) => ({ className:props.className,  onClick:props.onClick, src: props.src}))`
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    background-color: transparent;
    transform: rotate(180deg);
    display: none;
    
`


const OwnerResponseBox = styled.div`
position: relative;
width: 691px;
height: 131px;
padding: 1.5rem;
padding-top: 1rem;
margin-bottom: 0.5rem;
border-radius: 1rem 1rem 1rem 0rem;
background-color: ${theme.palette.skyBlue.main};
/* text-overflow: ellipsis; */
overflow: hidden;

& div[data-active=true] {
    span.orange-dot {
        display: flex !important;
    }
}

&[data-expanded=true] {
  height: auto;
  color: white !important;
  overflow: unset;
  /* text-overflow: unset; */
  background-color: ${theme.palette.midnightBlue.main};
  img {
    transform: rotate(180deg)
  }
  p {
    color: white !important;
  }
  div.truncated-text{
    display: none;
  }
  div.full-text{
    display: block !important;
    color: white !important;
  }
 
  img.question-block-chervon-up {
    display: block;
  }
  img.question-block-chervon-down {
    display: none;
  }
}



/* &[data-active=true] div {
    display: none; 
} */
`

const OwnerResponseDarkBlueDot = styled.div`
position: absolute;
left: 1rem;
top: 1.3rem;
width: 32px;
height: 32px;
border-radius: 50%;
border: solid 1px #001d5f;
background-color: #001d5f;
cursor: pointer;
&[data-active=true] {
    div.orange-dot {
      display: flex !important;
    }
}
`
const OwnerResponseDarkBlueDotSelected = styled(OwnerResponseDarkBlueDot)`
background-color: ${theme.palette.midnightBlue.main};
`
const OwnerResponseBodyText = styled.div`
width: 580px;

font-family: ${theme.typography.fontFamily};
font-size: 15px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.6;
letter-spacing: normal;
text-align: left;
padding-left: 2rem;
color: ${theme.palette.midnightBlue.main};
& strong {
  font-size: 15px;
  font-weight: 600;
}
& b {
  font-size: 15px;
  font-weight: 600;
}
-webkit-touch-callout: none; 
  -webkit-user-select: none; 
   -khtml-user-select: none; 
     -moz-user-select: none; 
      -ms-user-select: none; 
          user-select: none; 
`

const OwnerResponseBodyTextSelected = styled(OwnerResponseBodyText)`
color: white;
`

const OrangeDotSmall = styled.div`

position: absolute;
left: 0.5rem;
top: 0.5rem;
width: 12px;
height: 12px;
border-radius: 50%;
background-color: ${theme.palette.peachCobbler.main};
/* &[data-active=true] {
  display: block;
} */
`
const BoxOpenToggle = styled.div`
 position: absolute;
right: 0.55rem;
top: 1.125rem;
width: 16px;
height: 10px;
`

const OwnerResponseOptionBox = ({idNum,optionText,setCurrentStep,resources,dogChoice}) => {
    const id = "option" + idNum
    const idDot = "optionOrangeDot" + idNum
    const expandedToggle = "optionExpandToggle" + idNum
    const idExpandedText = "optionExpandText" + idNum
    const processedText = removeParagraphsTags(replaceDogName(optionText, dogChoice))
    //const truncatedText = truncate(optionText, 2, { byWords: true })
    const optionTextHtml = { __html: processedText } 
    //const optionTruncatedTextHtml = {__html: truncatedText} 

    // let initialState = { 
    //     fullHtmlText: optionTextHtml
    // }

    // const [state, setState] = useState(initialState)

    const finishCheckAnswer = (elem) => {
        //debugger
        let correctAnswerPointer = -1
        if (resources.field_optioniscorrect1 && resources.field_optioniscorrect1 === "yes") { correctAnswerPointer = 1 }
        if (resources.field_optioniscorrect2 && resources.field_optioniscorrect2 === "yes") { correctAnswerPointer = 2 }
        if (resources.field_optioniscorrect3 && resources.field_optioniscorrect3 === "yes") { correctAnswerPointer = 3 }
        if (resources.field_optioniscorrect4 && resources.field_optioniscorrect4 === "yes") { correctAnswerPointer = 4 }
        if (resources.field_optioniscorrect5 && resources.field_optioniscorrect5 === "yes") { correctAnswerPointer = 5 }
        if (resources.field_optioniscorrect6 && resources.field_optioniscorrect6 === "yes") { correctAnswerPointer = 6 }
    
        let foundCorrectAnswer = false
        const allDots = document.getElementsByClassName("orange-dot-container")
        for (let i = 0; i < allDots.length; i++) {
          //if (document.getElementById("option" + i)) { 
            const elem = allDots[i] //document.getElementById("option" + i)
            console.log("(i)",(i))
            console.log("correctAnswerPointer",correctAnswerPointer)
            //if (elem.getAttribute("data-active") == "true") {console.log("TRUE")}
            if (elem.getAttribute("data-active") == "true" && i === correctAnswerPointer) {
              console.log("CORRECT")
              foundCorrectAnswer = true
              break
            } 
          //}
        }
    
        if (foundCorrectAnswer) {
          setCurrentStep(resources.correctAnswerStep)
        } else {
          console.log("INCORRECT")
          setCurrentStep(resources.incorrectAnswerStep)
        }
        
      }
  
      const waitBeforeAnswer = (elem) => {
          console.log("WAIT")
          var foo = 0;
          TweenMax.to(foo, 2, {
              onComplete:function(){
                console.log("CHECK")
                finishCheckAnswer(elem)
              }
          });     
      }

    const closeAllExpanded = () => {
      const expandedElements = document.querySelectorAll("div[data-expanded=true]")
      for (let i = 0; i < expandedElements.length; i++) {
        expandedElements[i].setAttribute("data-expanded",false)
      }
      // const expandedTextElements = document.querySelectorAll("full-text")
      // for (let i = 0; i < expandedTextElements.length; i++) {
      //   expandedTextElements[i].innerHtml = state.fullHtmlText
      // }
    }
  
    const expandOption = (e) => {
      if (e.currentTarget["data-expanded"] === true) {
          closeAllExpanded() 
        } else {
          closeAllExpanded()
          e.currentTarget.setAttribute("data-expanded",true)
          //e.currentTarget.innerHtml = optionTextHtml
        }
    }

    const setHighLightOff = (elem) => {
      //elem.style.backgroundColor = theme.palette.skyBlue.main
      //elem.style.color = theme.palette.midnightBlue.main
      //elem.setAttribute("data-active",false)
  
      const dotElements = document.getElementsByClassName("orange-dot-container")
      for (let i = 0; i < dotElements.length; i++) {
        // dotElements[i].style.display = 'none'
        dotElements[i].setAttribute("data-active",false)
      }
    }
    const setHighLightOn = (elem) => {
        //elem.style.backgroundColor = theme.palette.deminBlue.main
        //elem.style.color = theme.palette.midnightBlue.main
        elem.setAttribute("data-active",true)
        
        //const dotId = "optionOrangeDot" + (elem.id).replace(/option/,'')
        //document.getElementById(dotId).style.display = 'flex'
        //elem.style.display = 'flex'
    }
  
    const selectOption = (e) => {
        debugger
          if (e.currentTarget["data-active"] === true) {
              setHighLightOff(e.currentTarget)  
          } else {
            // for (let i = 0; i < optionBoxes.length; i++) {
            //   if (document.getElementById("option" + i) ) { 
            //     setHighLightOff(document.getElementById("option" + i)) 
            //   }
            // }
            const dotElements = document.getElementsByClassName("orange-dot-container")
            for (let i = 0; i < dotElements.length; i++) {
              //dotElements[i].style.display = 'none'
              dotElements[i].setAttribute("data-active",false)
            }
            setHighLightOn(e.currentTarget) 
          }

          waitBeforeAnswer(e.currentTarget)
    }

   
    
    return (
      <OwnerResponseBox id={id} data-expanded={false} onClick={expandOption}>
        <BoxOpenToggle id={expandedToggle}>
          <ChervonDownQuestionBlock className="question-block-chervon-down" src={chrevonMidnightBlueDownSvg} />
          <ChervonUpQuestionBlock className="question-block-chervon-up" src={chrevonWhiteDownSvg} />
        </BoxOpenToggle>
        <OwnerResponseDarkBlueDot className="orange-dot-container" data-active={false} onClick={selectOption}>
          <span className="orange-dot" id={idDot} style={{display:'none'}}><OrangeDotSmall /></span>
        </OwnerResponseDarkBlueDot> 
        <OwnerResponseBodyText className="truncated-text">
          <Truncate lines={3} dangerouslySetInnerHTML={optionTextHtml} />
        </OwnerResponseBodyText>
        <OwnerResponseBodyText id={idExpandedText} className="full-text" dangerouslySetInnerHTML={optionTextHtml} style={{display: 'none'}} />
      </OwnerResponseBox>
    )
  }

  export default OwnerResponseOptionBox