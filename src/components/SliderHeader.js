import React from "react"
import theme from "../theme"
import { processHtml } from "../utils/displayUtils"

const SlideHeader = ({headerText}) => {
    if (headerText === '') return ''
    const headertext = processHtml(headerText)
    return(
      <div style={{height: '100px',width:'100%',display:'flex',flexDirection:'row',position:'absolute',right:"40%",top:"5%"}}>
          <div style={{fontFamily: theme.typography.fontFamily,fontSize:'0.5rem',fontWeight:'400'}}>{headertext}</div>
          <div style={{height: '100px',display:'flex',flexDirection:'row'}}>
              <div style={{display:'flex',flexDirection:'row',width:'30%',height:'5px',backgroundColor: theme.palette.primary.main}}></div>
              <div style={{display:'flex',flexDirection:'row',width:'5px',height:'30px',backgroundColor: theme.palette.primary.main}}></div>
          </div>
      </div> 
    )
  }

export default SlideHeader
