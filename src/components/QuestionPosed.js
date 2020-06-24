import React from "react"
import theme from "../theme"
import CustomFluidImage from './CustomFluidImage'
import QuestionModal from "./QuestionModal"
// import ResponsiveDialog from '../components/ResponsiveDialog'
import DarkBlueRoundedButton from './DarkBlueRoundedButton'
import DarkBlueRoundedOutlineButton from './DarkBlueRoundedOutlineButton'
import { removeParagraphsTags, processHtml } from '../utils/displayUtils'

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


const QuestionPosed = ({currentCaseStudySlideData, currentSlidePosition, onClickHandler}) => {

    const { questionText, additionalText, videoText1, buttonLinks, videoUrl1, videoThumbName1 } = currentCaseStudySlideData

    const htmlQuestionText =  { __html: questionText}      
    const htmlVideoText1 =  { __html: videoText1}   
    const htmlAdditionalText =  { __html: removeParagraphsTags(additionalText)}   
    
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems: 'flex-start',border:'0px solid green'}}>
           
            <div style={{fontFamily:theme.overrides.MuiTypography.h1.fontFamily,fontWeight:'700',fontSize:'2rem',marginBottom:'2rem'}} dangerouslySetInnerHTML={htmlQuestionText}></div>
            <div style={{fontFamily:theme.typography.fontFamily,fontWeight:'400',fontSize:'0.75rem',letterSpacing:'0.01rem'}} dangerouslySetInnerHTML={htmlAdditionalText}></div>
            {/* <div style={{fontFamily:'Poppins',fontWeight:'200',fontSize:'0.9rem'}} dangerouslySetInnerHTML={<BulletsHtmlText bullets={bullets} />}></div>  */}
            
            {( ((buttonLinks !== undefined && buttonLinks.length > 1 && buttonLinks[1].title !== undefined && buttonLinks[1].title !== '' )) ? 
            (<div>
            <DarkBlueRoundedButton buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={onClickHandler}/>
            <DarkBlueRoundedButton buttonText={buttonLinks[1].title} to={buttonLinks[1].url} onClickHandler={onClickHandler}/>
          
            </div>) : '')}

            {( ((buttonLinks !== undefined && buttonLinks.length > 2 && buttonLinks[1].title !== undefined && buttonLinks[1].title !== '' )) ? 
            (
            <DarkBlueRoundedButton buttonText={buttonLinks[2].title} to={buttonLinks[2].url} onClickHandler={onClickHandler}/>
            ) : '')}
            
            <div style={{width:'100%',backgroundColor:theme.palette.customOrange.main,height:'5px'}}></div> 
            
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{borderLeft:'yellow',position:'relative'}}>
                    <CustomFluidImage imgName={videoThumbName1} />                    
                    <div style={{borderLeft:'yellow',position:'relative'}}>
                        <CustomFluidImage imgName='verySmallVideoPlayArrow.png' />
                    </div>

                    {/* <QuestionModal /> */}
                    {/* <ResponsiveDialog /> */}

                </div>
                <div style={{fontFamily:theme.typography.fontFamily,fontWeight:'400',fontSize:'0.75rem'}} dangerouslySetInnerHTML={htmlVideoText1}></div>
            </div>
        </div>
    )
}

export default QuestionPosed