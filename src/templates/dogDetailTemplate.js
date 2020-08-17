import React, {useState,useRef,forwardRef} from 'react'
import Layout from '../components/layout'
import Grid from '@material-ui/core/Grid';

import CustomFluidImage from '../components/CustomFluidImage'
import { useCookies } from 'react-cookie'
import { makeStyles } from '@material-ui/core/styles'

import Transition from 'react-transition-group'

import DogDetailTable from '../components/DogDetailTable'
import get from 'lodash/get'
import { graphql } from "gatsby"
import { processInternalLink } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import theme, { sm, md, lg, xl } from '../theme'

import { dogName, cookieKeyNames, dogDetailSlugNames } from '../WebsiteConstants'
import styled, { css, keyframes } from 'styled-components'
import BottomNavigationLink from '../components/BottomNavigationLink'
import { stripUneededHtml, getSlideData, replaceDogName, removeParagraphsTags } from "../utils/displayUtils"

const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const SliderBlueTabOutlineDot = styled.div.attrs((props) => ({id:props.id,onClick:props.onClick}))`
  width: 15px;
  height: 15px;
  max-height: 15px !important;
  max-width: 15px !important;
  background: transparent;
  border: solid 2px ${theme.palette.egyptianBlue.main};
  border-radius: 50%;
  cursor: pointer;
`

const DogDetailTableStyled = styled(({ ...otherProps }) => (<DogDetailTable {...otherProps} />))`
  @media (max-width: ${md}px) {
      width: 100%;
  }
`

const DotButton = ({classNam = '', onClick, id, tabSelected = false}) => {
  return (<div className={classNam} style={{width:'30px',height:'30px'}}>
    { tabSelected === true ? 
    <SliderBlueTabOutlineDot id={id} style={{backgroundColor: theme.palette.midnightBlue.main }} onClick={onClick}/> :
    <SliderBlueTabOutlineDot id={id} style={{backgroundColor: 'transparent' }} onClick={onClick}/> }
  </div>)
}

const TopLevelContainerForTabs = styled.div`
     display:block;
    position: relative;
    width: 660px;
    height: 475px;
    border: 0px solid red;
    @media (max-width: ${lg}px) {
        margin-left: 5rem;
    }
    @media (max-width: ${md}px) {
        margin-left: 0rem;
        width: 100%;
        height:auto;
    }
 `

const Tab1 = styled(({ ...otherProps }) => (<div {...otherProps} />))`
    position: absolute;
    right:2%;
    top:0px;
    width:600px;
    height: 100%;
    @media (max-width: ${md}px) {
        position:static;
        width: 100%;
    }
`
const Tab2 = styled(({ ...otherProps }) => (<div {...otherProps} />))`
    position: absolute;
    right:0%;
    top:10px;
    width: 600px;
    height: 100%;
    @media (max-width: ${md}px) {
        position:static;
        width: 100%;
    }
`
const TabButtonSwitcherHolder = styled(({ ...otherProps }) => (<div {...otherProps} />))`
    position: absolute;
    right:33%;
    top:433px;
    width: 300px;
    height: 30px;
    background-color:transparent;
    z-index:10;
    @media (max-width: ${md}px) {
        position:static;
        width: 100%;
        height:auto;
        display:none;
    }
`

const FixedSizeImageStyledInner = styled.div`
    @media (max-width: ${md}px) {
        display:block !important;
        position:static !important;
        width:100% !important;
        height:auto !important;
 }`

const FixedSizeImageStyled = styled((props) => (
  <FixedSizeImageStyledInner style={{
    width:props.width,
    height:props.height,
    marginLeft: '-2rem',
    backgroundColor: 'none'
    }}> 
       <CustomFluidImage imgName={props.imgName} />
  </FixedSizeImageStyledInner>
))`
transition: 'width 1s height 1s',
`

export default function dogDetailTemplate(data, dogChoicePassed){
    
    const [cookies, setCookie, removeCookie] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL])
    let initialState = { 
        dogChoice: dogChoicePassed, // cookies[cookieKeyNames.DOG_CHOICE] ? cookies[cookieKeyNames.DOG_CHOICE]: dogName.NOT_SET,
        tabSelected: "first"
    }
    const [state, setState] = useState(initialState)

    const dogChoice = dogChoicePassed
    const continueLink = "/heart-" + dogChoicePassed + "/"

    let resourcesAr = get(data, 'allNodeDogoptions.nodes')
    let resources = null
    //console.log(resources)
    console.log("state",state)

    switch (dogChoice) {
      case dogName.DUDLEY:
          //  /case-study-options-dudley
          resources = getSlideData(resourcesAr,dogDetailSlugNames.DUDLEY)
          break
        case dogName.POPPY:
          resources = getSlideData(resourcesAr,dogDetailSlugNames.POPPY)
          break
        case dogName.REGGIE:
          resources = getSlideData(resourcesAr,dogDetailSlugNames.REGGIE)
          break
        default:
          return "no data"
    }
  
    if (!resources) { return "no data" }

    const goToTab = (tabNo) => {
      if (tabNo === 0) {
          console.log("tab1")
          setState({...state,tabSelected: "first"})
      } else {
          console.log("tab2")
          setState({...state,tabSelected: "second"})
      }
    }

    return (
    <Layout scrollablePage={false} showPercentIndicator={false} showBurgerMenuIcon={false}>
        <div className={(useStyles()).root}>
                <Grid container 
                    spacing={0}
                    spacing={0}
                    justify="center"
                    alignItems="center"
                    style={{
                        border: '0px solid black',
                        minHeight: '100vh',
                        width:'100%'
                }}>

                <Grid item xs={12} sm={12} md={8} align="center">
                    <TopLevelContainerForTabs>
                            <Tab2 style={{zIndex:(state.tabSelected === "second" ? 2 : 3)}}>
                                <DogDetailTableStyled resources={resources} tabPointer={1} />
                            </Tab2>
                            <Tab1 style={{zIndex:(state.tabSelected === "first" ? 2 : 3)}}>
                                <DogDetailTableStyled resources={resources} tabPointer={2} />
                            </Tab1>
                            
                            <TabButtonSwitcherHolder>
                                <div style={{display: 'flex',flexDirection:'row',width:'300px',justifyContent:'center'}}> 
                                  <DotButton id={"dotTabButton1"} tabSelected={(state.tabSelected === 'first') ? true : false} onClick={() => {return goToTab(0)}} />
                                  <DotButton id={"dotTabButton2"} tabSelected={(state.tabSelected === 'second') ? true : false} onClick={() => {return goToTab(1)}} />
                                </div>
                            </TabButtonSwitcherHolder>
                    </TopLevelContainerForTabs>
                </Grid>
                
                <Grid item xs={12} sm={12} md={4} align="flex-start">     
                       {(dogChoice === dogName.DUDLEY) ? <FixedSizeImageStyled imgName="dogAndOwnerDetails_Mrs-Jenkins-and-Dudley-Pose02.png" width="500px" height="500px"/> : ''}
                       {(dogChoice === dogName.POPPY) ? <FixedSizeImageStyled imgName="Mr-Oakley-and-Poppy-Poses01.png" width="420px" height="640px"/> : ''}
                       {(dogChoice === dogName.REGGIE) ? <FixedSizeImageStyled imgName="Mrs-Richardson-and-Reggie-Pose01.png" width="420px" height="640px"/> : ''}
                </Grid>
            </Grid>
        </div>
        <BottomNavigationLink
              to={"/case-study-options/"}
              distanceFromSide={"150px"}
              direction="back"
              bottom={"2%"}
              linkText={"Change dog"}
        />
        <BottomNavigationLink
              to={continueLink}
              distanceFromSide={"2%"}
              bottom={"2%"}
              linkText={"Continue"}
        />
  </Layout>
  )
}


export const pageQuery = graphql`{
    allNodeDogoptions {
    nodes {
      field_dogandownerimgalttext
      field_dogandownerimgname
      field_paneltitle
      field_seotext
      field_tableitemtitle1
      field_tableitemtitle2
      field_tableitemtitle3
      field_tableitemtitle4
      field_tableitemtitle5
      field_tableitemtitle6
      field_tableitemtitle7
      field_tableitemtitle8
      field_tabletitle
      field_tableitemcontent1 {
        processed
      }
      field_tableitemcontent2 {
        processed
      }
      field_tableitemcontent3 {
        processed
      }
      field_tableitemcontent4 {
        processed
      }
      field_tableitemcontent5 {
        processed
      }
      field_tableitemcontent6 {
        processed
      }
      field_tableitemcontent7 {
        processed
      }
      field_tableitemcontent8 {
        processed
      }
      field_continuelink {
        uri
        title
      }
      field_backlink {
        title
        uri
      }
      created(fromNow: false)
      drupal_id
      path {
        alias
      }
    }
  }
  }`
  