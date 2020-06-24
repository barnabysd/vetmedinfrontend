import React from "react"
import theme from "../theme"
import CustomFluidImage from '../components/CustomFluidImage'
import QuestionModal from "../components/QuestionModal"
// import ResponsiveDialog from '../components/ResponsiveDialog'
import DarkBlueRoundedButton from '../components/DarkBlueRoundedButton'
import DarkBlueRoundedOutlineButton from '../components/DarkBlueRoundedOutlineButton'
import styled from 'styled-components'

const newTheme = {
    palette :{
        orange: {
            main: '#ff0000'
        }
    }
}

// const BulletsHtmlText = (items) => {
//     let counter = 0
//     return items.map((bulletText) => <li key={counter++}>{bulletText}</li>)
// }

const ResponseAdditionalTextStyle = styled.div`
   width: 556px;
    height: 117px;
    font-family: Poppins;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #003087;
`

const QuestionTextStyle = styled.div`
  font-size: 2.9375rem;
  line-height: 1.15;
  text-align: left;
  letter-spacing: -0.47px;
  color: #003087;
  font-family: Oswald;
  font-weight: 600;
  height: 70px;
  width: 578px;
`

const QuestionButtonStyle = styled.div`
  height: 49px;
  width: 82px;
  background-color: #003087;
  border-radius: 25px;
`


const QuestionResponse = ({currentCaseStudySlideData, currentSlidePosition, onClickHandler}) => {

    const { isCorrectAnswer, answerHeader, answerText, videoText1, buttonLinks, videoUrl1, videoThumbName1 } = currentCaseStudySlideData

    const htmlAnswerText =  { __html: answerText}      
    const htmlVideoText1 =  { __html: videoText1}   
    
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            {(isCorrectAnswer === "yes" ? <span style={{ color: '#199c73' }}>{answerHeader}</span> : <span style={{ color: '#199c73' }}>{answerHeader}</span> )}
            
            <div style={{fontFamily:'Poppins',fontWeight:'700',fontSize:'1.2rem'}} dangerouslySetInnerHTML={htmlAnswerText}></div>
            {/* <div style={{fontFamily:'Poppins',fontWeight:'200',fontSize:'0.9rem'}} dangerouslySetInnerHTML={<BulletsHtmlText bullets={bullets} />}></div>  */}
            
            {( (isCorrectAnswer === "no" && (buttonLinks !== undefined && buttonLinks.length > 1 && buttonLinks[1].title !== undefined && buttonLinks[1].title !== '' )) ? (<div><DarkBlueRoundedButton buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={onClickHandler}/><DarkBlueRoundedOutlineButton buttonText={buttonLinks[1].title} to={buttonLinks[1].url} onClickHandler={onClickHandler}/></div>) : '')}
            
            <div style={{width:'100%',backgroundColor:theme.palette.customOrange.main,height:'5px'}}></div> 

            <VideoSmallWidget videoCaptionText={videoText1} />
            <VideoFullScreenWidget instance={"One"} />

            {/* <QuestionModal /> */}
            {/* <ResponsiveDialog /> */}
            
            {/* <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{borderLeft:'yellow',position:'relative'}}>
                    <CustomFluidImage imgName={videoThumbName1} />
                    <div style={{borderLeft:'yellow',position:'relative'}}>
                        <CustomFluidImage imgName='verySmallVideoPlayArrow.png' />
                    </div>

                 

                </div>
                <div style={{fontFamily:'Poppins',fontWeight:'400',fontSize:'0.75rem'}} dangerouslySetInnerHTML={htmlVideoText1}></div>
            </div> */}
        </div>
    )
}

export default QuestionResponse