import React from "react"
import theme from "../theme"
import { stripUneededHtml } from "../utils/displayUtils"

const SlideHeader = ({headerText}) => {
  debugger
    if (headerText !== 'undefined' || headerText !== undefined || headerText !== null || headerText !== '' ) {
        return ''
    } else {
        const headertext = stripUneededHtml(headerText)
        if (headerText !== 'undefined' || headerText !== undefined || headerText !== null || headerText !== '' ) return ''
        return(
          <div style={{display:'flex',flexDirection:'row',position:'absolute',left:"220px",top:"40px"}}>
                
              <div style={{display:'flex',flexDirection:'row',fontFamily: theme.typography.fontFamily,fontSize:'0.8rem',lineHeight:'0rem', fontWeight:'700',width:'327px',marginRight:'30px'}}>{headertext}</div>
              <div style={{height: '100px',display:'flex',flexDirection:'row'}}>
                  <div style={{display:'flex',flexDirection:'row',width:'346px',height:'2px',backgroundColor: theme.palette.primary.main}}></div>
                  <div style={{display:'flex',flexDirection:'row',width:'2px',height:'15px',backgroundColor: theme.palette.primary.main}}></div>
              </div>
              
          </div> 
        )
    }
  }

export default SlideHeader
