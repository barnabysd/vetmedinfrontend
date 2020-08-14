import React from "react"
import CustomFluidImage from './CustomFluidImage'
//import QuestionModal from "./QuestionModal"
// import ResponsiveDialog from '../components/ResponsiveDialog'
import DarkBlueRoundedButton from './DarkBlueRoundedButton'
import DarkBlueRoundedOutlineButton from './DarkBlueRoundedOutlineButton'
import { removeParagraphsTags, stripUneededHtml } from '../utils/displayUtils'
import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'
import styled from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'
import { dogName, ownerName, ownerResponseSteps, cookieKeyNames, tasks, slideTypes } from "../WebsiteConstants"
import {replaceDogName, getCssDisplayState, makeSlugNameIntoHtmlId, processField } from '../utils/displayUtils'

const QuestionPoseHeader = styled.div`
  max-width:609px;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 2.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.47px;
  text-align: left;
  padding-bottom:1.5rem;
  color: ${theme.palette.midnightBlue.main};
`

const QuestionPosedBody = styled.div`
    font-family:${theme.typography.fontFamily};
    font-weight:400;
    font-size:0.75rem;
    letter-spacing:0.01rem;
    padding-left:3rem;
    max-width:568px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;

  @media screen and (min-width: 992px) {
    height: 100%;
  }
`

const QuestionPosed = ({data, currentSlidePosition, onClickHandler, dogChoice = dogName.DUDLEY }) => {

    const { questionText, additionalText, videoText1, buttonLinks, videoUrl1, videoThumbName1 } = data

    const htmlQuestionText = processField(questionText,dogChoice,true)

    const htmlAdditionalText = processField(additionalText,dogChoice,true)

    return (
        <Container>

            <QuestionPoseHeader dangerouslySetInnerHTML={htmlQuestionText} />

            <QuestionPosedBody dangerouslySetInnerHTML={htmlAdditionalText} />

            <div style={{paddingLeft:'2.8rem',maxWidth:'568px'}}>
                {( ((buttonLinks !== undefined && buttonLinks.length > 0 && buttonLinks[0].title !== undefined && buttonLinks[0].title !== '' )) ?
                (<DarkBlueRoundedButton id={buttonLinks[0].id ? buttonLinks[0].id : makeSlugNameIntoHtmlId(buttonLinks[0].url)} buttonText={buttonLinks[0].title} to={buttonLinks[0].url} onClickHandler={onClickHandler}/>) : '')}

                {( ((buttonLinks !== undefined && buttonLinks.length > 1 && buttonLinks[1].title !== undefined && buttonLinks[1].title !== '' )) ?
                (<DarkBlueRoundedButton id={buttonLinks[1].id ? buttonLinks[1].id : makeSlugNameIntoHtmlId(buttonLinks[1].url)} buttonText={buttonLinks[1].title} to={buttonLinks[1].url} onClickHandler={onClickHandler}/>) : '')}

                {( ((buttonLinks !== undefined && buttonLinks.length > 2 && buttonLinks[2].title !== undefined && buttonLinks[2].title !== '' )) ?
                (<DarkBlueRoundedButton id={buttonLinks[2].id ? buttonLinks[2].id : makeSlugNameIntoHtmlId(buttonLinks[2].url)} buttonText={buttonLinks[2].title} to={buttonLinks[2].url} onClickHandler={onClickHandler}/>) : '')}

                {( ((buttonLinks !== undefined && buttonLinks.length > 3 && buttonLinks[3].title !== undefined && buttonLinks[3].title !== '' )) ?
                (<DarkBlueRoundedButton id={buttonLinks[3].id ? buttonLinks[3].id : makeSlugNameIntoHtmlId(buttonLinks[3].url)} buttonText={buttonLinks[3].title} to={buttonLinks[3].url} onClickHandler={onClickHandler}/>) : '')}

                {( ((buttonLinks !== undefined && buttonLinks.length > 4 && buttonLinks[4].title !== undefined && buttonLinks[4].title !== '' )) ?
                (<DarkBlueRoundedButton id={buttonLinks[4].id ? buttonLinks[4].id : makeSlugNameIntoHtmlId(buttonLinks[4].url)} buttonText={buttonLinks[4].title} to={buttonLinks[4].url} onClickHandler={onClickHandler}/>) : '')}

                {( ((buttonLinks !== undefined && buttonLinks.length > 5 && buttonLinks[5].title !== undefined && buttonLinks[5].title !== '' )) ?
                (<DarkBlueRoundedButton id={buttonLinks[5].id ? buttonLinks[5].id : makeSlugNameIntoHtmlId(buttonLinks[5].url)} buttonText={buttonLinks[5].title} to={buttonLinks[5].url} onClickHandler={onClickHandler}/>) : '')}
            </div>

            <div style={{width:'100%'}}>&nbsp;</div>


        </Container>
    )
}

export default QuestionPosed
