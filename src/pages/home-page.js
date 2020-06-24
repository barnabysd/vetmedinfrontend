import React, {useState} from 'react'
import Layout from '../components/layout'
import BlockTextReveal from '../components/BlockTextReveal';
import CustomFluidImage from '../components/CustomFluidImage';
import mainLogoSvg from '../images/userChoicePage/master_logo_light.svg'
import timerSvg from '../images/icons_and_glyphs/home/timer_home_page.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import theme, { sm, md, lg, xl } from '../theme'
import {useRef, useEffect} from 'react'
import get from 'lodash/get'
import { graphql } from "gatsby"
import { processInternalLink } from '../utils/displayUtils'
import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'

const MainLogo = (() => {
    return <img src={mainLogoSvg} style={{width: '225px',margin:'auto',paddingTop: '1rem',textCenter:'center',display: 'flex',justifyContent: 'center'}} />
})

const TimerIcon = (() => {
  return <img src={timerSvg} style={{width: '30px',margin:'auto',paddingTop: '1rem',textCenter:'center',display: 'flex',justifyContent: 'center'}} />
})

export default function homePage({data}){

  let resources = get(data, 'nodeHomepage')
 
  console.log(resources)

  if (!resources) {
    resources = [
    {
    
      field_headertextline3:'LISTEN.',
      field_headertextline2:'INVESTIGATE.',
      field_headertextline1:'TREAT.',
      field_bottombodytext: {processed:'<p>Build your canine heart disease management skills and prolong the lives of dogs with the help of this simple, fun digital tool.</p>'},
      
      field_bottomtitle: {processed:'<p>This activity will earn you 12 minutes of CPD points</p>'},
      
      field_buttonlinks:[{
        title:'Start',
        uri:'/case-studies-options/'
      }],
      field_toprighttext:[{processed:'You will need sound for part of this activity.'}]
    }
  ] }

  return (
  <Layout style={{backgroundColor: theme.palette.primary.main}}>
   
      <div style={{ 
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '100% 80%',
        backgroundImage: 'url(/home/Wave-MidnightBlue.svg)'
      }}></div>

      <div style={{position: 'absolute',right: '0',top: '10%',marginLeft:'-100px', width: '200px', height: '200px'}}>
          <div style={{paddingLeft: '1rem',fontWeight:'400',paddingRight: '2rem',color:'#fc9a5c'}}>{resources.field_toprighttext.processed}</div>
          <div style={{position: 'absolute',right: '0',top: '10%',width: '30px', height: '5px',backgroundColor:'#fc9a5c'}}></div>
      </div>

      <div style={{position: 'absolute',left: '20%',top: '10%',marginLeft:'-100px', width: '200px', height: '200px'}}>
            <MainLogo />
      </div>
      <div style={{position: 'absolute',right: '50%',bottom: '0',width: '5px', height: '30px'}}>
            <div style={{position: 'absolute',right: '0',top: '0',width: '5px', height: '30px',backgroundColor:'#fc9a5c'}}></div>
      </div>

      <div style={{
          position: 'absolute', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)',
          border: '0px solid #092178',
          minHeight: '400px',
          maxWidth: '800px',
          width: '800px'
      }}>
          <div style={{ position: 'absolute', 
                left: '-170px',
                top: '0px',
                width: '700px',
                height: '500px'}}> 
              <CustomFluidImage imgName="All-Dogs-Standing.png" />
          </div>

          <div style={{position: 'absolute', 
            right: '0', 
            top: '0',width: '500px', height: '300px'}}> 
              <div><BlockTextReveal textLabel={resources.field_headertextline1} colour={theme.palette.skyBlue.main}/></div>
              <div><BlockTextReveal textLabel={resources.field_headertextline2} colour={theme.palette.topazBlue.main}/></div>
              <div style={{display:'flex',flexDirection:'row'}}>
                <BlockTextReveal textLabel={resources.field_headertextline3} colour="#ffffff"/>
                <div style={{position: 'absolute', 
                    right: '0', 
                    bottom: '0',height: '62px !important'}}>
                      <WebsiteLink to={"/case-study-options/"} typeOfButton={buttonStyleType.ORANGE_BUTTON_CORNER} style={{width:'150px'}}>{resources.field_buttonlinks[0].title}</WebsiteLink>
               
                </div>
              </div>   
              <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{width:'100%',fontSize:'0.75rem',fontWeight:'400',color:'white',paddingLeft:'10rem',paddingTop:'2rem'}}>
                 {resources.field_bottomtitle.processed}
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',paddingLeft:'10rem'}}>
                    <div style={{width:'50px', height: '50px',flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                        <TimerIcon />
                    </div>
                    <div style={{paddingLeft:'1rem',flexDirection:'row',justifyContent:'center', alignItems:'center',height: '25px', width:'80%',fontSize:'1rem',fontWeight:'600',color:'white'}}>
                        {resources.field_bottombodytext.processed}
                    </div>
                </div>
                
              </div>   
          </div>

          
      
    </div> 
  </Layout>
  )
}

export const pageQuery = graphql`{
  nodeHomepage {
        path {
          alias
        }
        drupal_id
        field_headertextline3
        field_headertextline2
        field_headertextline1
        field_bottombodytext {
          processed
        }
        field_bottomtitle {
          processed
        }
        field_buttonlinks {
          title
          uri
        }
        field_toprighttext {
          processed
        }
        changed(fromNow: false)
  }
}`



