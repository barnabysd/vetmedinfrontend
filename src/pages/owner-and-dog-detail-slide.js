import React, {useState,useRef,forwardRef} from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';

import CustomFluidImage from '../components/CustomFluidImage'
import { useCookies } from 'react-cookie'
import { makeStyles } from '@material-ui/core/styles'

import Transition from 'react-transition-group'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'

import DogDetailTable from '../components/DogDetailTable'
import get from 'lodash/get'
import { graphql } from "gatsby"
import { processInternalLink } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'
import theme, { sm, md, lg, xl } from '../theme'
import FixedSizeImage from '../components/FixedSizeImage'
import TabButton from '../components/TabButtons'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { dogName } from '../WebsiteConstants'
import styled, { css, keyframes } from 'styled-components'

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
  width: 0.75rem;
  height: 0.75rem;
  background: transparent;
  border: solid 2px ${theme.palette.egyptianBlue.main};
  border-radius: 50%;
  cursor: pointer;
`

const DotButton = ({classNam = '', onClick, id, tabSelected = false}) => {
  return (<div className={classNam} style={{width:'30px',height:'30px'}}>
    { tabSelected === true ? 
    <SliderBlueTabOutlineDot id={id} style={{backgroundColor: theme.palette.midnightBlue.main }} onClick={onClick}/> :
    <SliderBlueTabOutlineDot id={id} style={{backgroundColor: 'transparent' }} onClick={onClick}/> }
  </div>)
}


export default function ownerAndDogInfoSlide({data}){
    
    const [cookies, setCookie, removeCookie] = useCookies(['hasConsentSet','userChoice','dogChoice']);
    let stateFromCookie = { 
        dogName: cookies["dogName"] ? cookies["dogName"]: dogName.POPPY,
        tabSelected: "first"
    }
    const [state, setState] = useState(stateFromCookie)

    let resources = get(data, 'nodeDogoptions')
    //console.log(resources)
    console.log("state",state)
  
    if (!resources) { return "no data" }

    const setChoiceAsOwner1 = (event) => {
        setCookie('dogChoice','dudley',{ path: '/' })     
    }
    const setChoiceAsOwner2 = (event) => {
        setCookie('dogChoice','poppy',{ path: '/' })     
    }
    const setChoiceAsOwner3 = (event) => {
        setCookie('dogChoice','reggie',{ path: '/' })     
    }

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
    <Layout showBurgerMenuIcon={true}>
   
      <div className={(useStyles()).root}>
                <Grid container 
                spacing={0}
                spacing={0}
                justify="flex-end"
                style={{border: '1px solid black', minHeight: '100vh',width:'100%',maxWidth: '3000px' }}>

                <Grid item xs={12} sm={8}  align="center"  style={{border: '0px solid red',minHeight:'100%'}}>
                    <div style={{position: 'relative',width: '600px', minHeight: '100%', border: '0px solid red'}}>

                            
  
                            <div style={{position: 'absolute',right:'0%',top:'17%',width: '600px', height: '100%',zIndex:(state.tabSelected === "first" ? 2 : 3)}}>
                                
                                <DogDetailTable resources={resources} />
                            </div>
                            <div style={{position: 'absolute',right:'2%',top:'15%',width: '600px', height: '100%',zIndex:(state.tabSelected === "second" ? 2 : 3)}}>
                              
                                <DogDetailTable resources={resources} rowPointer={2} />
                            </div>

                            <div style={{position: 'absolute',right:'33%',top:'69%',width: '300px', height: '30px',backgroundColor:'transparent',zIndex:10}}>
                                {/* <TabButton state={state} setState={setState}/> */}
                                <div style={{display: 'flex',flexDirection:'row',width:'300px',justifyContent:'center'}}> 

                                  <DotButton id={"dotTabButton1"} tabSelected={(state.tabSelected === 'first') ? true : false} onClick={() => {return goToTab(0)}} />
                                  <DotButton id={"dotTabButton2"} tabSelected={(state.tabSelected === 'second') ? true : false} onClick={() => {return goToTab(1)}} />

                                </div>
                            </div>
                            
                          

                        {/* </div> */}
                    </div>
                </Grid>
                
                <Grid item xs={12} sm={4}  align="flex-start" style={{border: '0px solid red'}}>
                <div data-active={state.dogName === dogName.DUDLEY} style={{display: ((state.dogName === dogName.DUDLEY) ? 'block':'none'), position: 'relative',margin:'auto',left:0, width: '100%', minHeight: '100%',padding:'2rem', border: '0px solid red'}}>
                    
                        {/* <div style={{ width: '75%',height:'100%',padding:'2rem'}}> */}
                        {/* <Transition in={true} timeout={1000} appear={true}> */}
                      
                       
                        <div style={{position: 'absolute',left: '-30%',top: '5%'}}><FixedSizeImage axis="Y" imgName="mrs_jenkins_pose_01@3x.png"  height="600px" width="600px"/></div>
                        <div style={{position: 'absolute',left: '10%',top: '30%'}}><FixedSizeImage axis="Y" imgName="dudley_standing_pose_02@3x.png" height="430px" width="600px"/></div>
                        {/* <div style={{position: 'absolute',left: '-200px',top: 0}}><FixedSizeImage axis="Y" imgName="mrs_jenkins_pose_01@3x.png"  height="600px" width="600px"/></div>
                        <div style={{position: 'absolute',left: '-150px',top: '10%'}}><FixedSizeImage axis="Y" imgName="dudley_standing_pose_02@3x.png" height="600px" width="600px"/></div> */}
                 
                           
                            {/* </Transition>  */}
  
                        {/* </div> */}
                    
                    </div>
              
                <div data-active={state.dogName === dogName.POPPY} style={{display: ((state.dogName === dogName.POPPY) ? 'block':'none'),position: 'relative',margin:'auto',left: 0, width: '100%', minHeight: '100%',padding:'2rem', border: '0px solid red'}}>
                
                        {/* <div style={{ width: '75%',height:'100%',padding:'2rem'}}> */}
                        {/* <Transition in={true} timeout={1000} appear={true}> */}
                        
                            {/* <CustomFluidImage imgName="reggieOwner.png" /> */}
                            <div style={{position: 'absolute',left: '-30%',top: '5%'}}><FixedSizeImage axis="Y" imgName="mr_oakley_poses_02@3x.png" height="600px" width="600px"/></div>
                        <div style={{position: 'absolute',left: '10%',top: '30%'}}><FixedSizeImage axis="Y" imgName="poppy_standing_02@3x.png" height="430px" width="600px"/></div>
                            
                            {/* </Transition> */}
                            
                        {/* </div> */}
                    
                    
                    </div>
              
                    <div data-active={state.dogName === dogName.REGGIE} style={{display: ((state.dogName === dogName.REGGIE) ? 'block':'none'),position: 'relative',margin:'auto', width: '100%', minHeight: '100%',padding:'2rem', border: '0px solid red'}}>
                        {/* <div style={{width: '75%',height:'100%',padding:'2rem'}}>
                             */}
                            {/* <Transition in={true} timeout={1000} appear={true}> */}
                          
                            
                           <div style={{position: 'absolute',left: '-30%',top: '5%'}}><FixedSizeImage axis="Y" imgName="mr_oakley_poses_02@3x.png" height="600px" width="600px"/></div>
                           <div style={{position: 'absolute',left: '10%',top: '30%'}}><FixedSizeImage axis="Y" imgName="poppy_standing_02@3x.png" height="430px" width="600px"/></div>
                           
                            {/* </Transition> */}
                        
                        {/* </div> */}
                        
                    </div>
                </Grid>
              

            </Grid>
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

    }}><AniLink style={{display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',color:'white !important',fontFamily:theme.typography.fontFamily,fontWeight:'700'}} 
    to="/heart/">
      Continue <ArrowForwardRoundedIcon />
      </AniLink>
</div>

<div style={{
        position: 'absolute',
        left: '15%', 
        bottom: '0',
        width:'150px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        zIndex:'100',
        border:'0px solid red'

    }}> <AniLink to="/case-study-options/" style={{display: 'flex',flexDirection:'row',alignItems:'center',width:'200px',height:'50px',textDecoration:'none',color:'white !important',fontFamily:theme.typography.fontFamily,fontWeight:'700'}}>
      <ArrowBackRoundedIcon />Change Dog</AniLink>
  </div>

  </Layout>
  )
}


export const pageQuery = graphql`{
    nodeDogoptions {
      changed(fromNow: false)
      drupal_id
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
      field_dogandownerimgalttext
      field_dogandownerimgname
      field_paneltitle
      field_seotext
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
      field_tableitemtitle1
      field_tableitemtitle2
      field_tableitemtitle3
      field_tableitemtitle4
      field_tableitemtitle5
      field_tableitemtitle6
      field_tableitemtitle7
      field_tableitemtitle8
      field_tabletitle
      path {
        alias
      }
    }
  }`
  