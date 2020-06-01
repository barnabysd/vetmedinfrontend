import React from "react"
import theme from "../theme"
import { processHtml } from "../utils/displayUtils"

const SlideHeader = ({headerData}) => {
    if (!headerData.sliderHeader) return ''
    const headertext = processHtml(headerData.sliderHeader)
    return(
      <div style={{height: '100px',display:'flex',flexDirection:'row'}}>
          <div style={{fontFamily: 'Poppins',fontSize:'0.5rem',fontWeight:'400'}}>{headertext}</div>
          <div style={{height: '100px',display:'flex',flexDirection:'row'}}>
              <div style={{display:'flex',flexDirection:'row',width:'30%',height:'5px',backgroundColor: theme.palette.primary.main}}></div>
              <div style={{display:'flex',flexDirection:'row',width:'5px',height:'30px',backgroundColor: theme.palette.primary.main}}></div>
          </div>
      </div> 
    )
  }

export default SlideHeader
