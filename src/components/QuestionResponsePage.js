import React, {useRef, useEffect, createRef} from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { graphql } from 'gatsby' 
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core';

import styled from 'styled-components'
import { instanceOf } from 'prop-types';

import { withStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import CustomFluidImage from '../components/CustomFluidImage';
import { style } from 'glamor'
import { render } from 'react-dom'

import {TweenLite, TimelineMax, Linear} from 'gsap'

import { CSSPlugin } from 'gsap/CSSPlugin'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { processHtml, removeParagraphsTags, processLink,replaceDogName, getCssDisplayState  } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'

import { withCookies, Cookies, useCookies } from 'react-cookie'
import { useCallback, useState,  useDebugValue, forceUpdate } from 'react'

import TaskSummaryTable from '../components/TaskSummaryTable'

import theme, { sm, md, lg, xl } from '../theme'
import { dogName } from '../WebsiteConstants'

import VideoFullScreenWidget from '../components/VideoFullScreenWidget'
import VideoSmallWidget from '../components/VideoSmallWidget'

import BottomNavigationLink from '../components/BottomNavigationLink'



const QuestionResponsePage = (id, style, dogName, resources) => {
    return (
        <PageSection id={id} style={style}>

        <LeftPageSection id="summaryImage">
            <CustomFluidImage  style={{display: displayDog(dogName, dogName.DUDLEY), width:'500px',height:'500px'}} imgName={ resources.field_mainimage ? resources.field_mainimage : "dudley_sitting_pose_04.png" } />
            <CustomFluidImage  style={{display: displayDog(dogName, dogName.POPPY), width:'500px',height:'500px'}} imgName={ resources.field_mainimage ? resources.field_mainimage : "dudley_sitting_pose_04.png" } />
            <CustomFluidImage  style={{display: displayDog(dogName, dogName.REGGIE), width:'500px',height:'500px'}} imgName={ resources.field_mainimage ? resources.field_mainimage : "dudley_sitting_pose_04.png" } />
        </LeftPageSection>

        <RightPageSection id="summaryText">

            <TaskSummaryHeader>{processHtml(replaceDogName(resources.field_headertext,this.state.dogName))}</TaskSummaryHeader>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <TaskSummarySubHeader>{processHtml(replaceDogName(resources.field_bodytext.processed,this.state.dogName))}</TaskSummarySubHeader>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <TaskSummaryTableHolder>
                <TaskSummaryTable resources={resources} /> 
            </TaskSummaryTableHolder>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            
            <TaskSummaryFootnote>{processHtml(replaceDogName(resources.field_tablefooterhtml1.processed,this.state.dogName))}</TaskSummaryFootnote>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>

            <VideoSmallWidget videoCaptionText={resources.field_videocaptiontext1.processed} instance="One"/>

            {resources.field_continuelink ? <BottomNavigationLink to={processLink(resources.field_continuelink.url)} distanceFromSide={"10%"} bottom={"10%"} linkText={resources.field_continuelink.title} /> : '' }
            {resources.field_backlink ? <BottomNavigationLink to={processLink(resources.field_backlink.url)} distanceFromSide={"10%"} bottom={"10%"} linkText={resources.field_backlink.title} /> : '' }
            
        </RightPageSection> 

        <VideoFullScreenWidget />

        </PageSection>
    )
}

export default QuestionResponsePage