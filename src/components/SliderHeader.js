import React from "react"
import theme from "../theme"
import { stripUneededHtml } from "../utils/displayUtils"

const SlideHeader = ({headerText}) => {
  
    if (typeof headerText !== 'undefined' && headerText !== undefined && headerText !== null && headerText !== '' ) {

        //const headertext = stripUneededHtml(headerText)
        if (typeof headerText === 'undefined' || headerText === undefined || headerText === null || headerText === '' ) return ''
        return(
          <div style={{display:'flex',flexDirection:'row',alignItems:'center', position:'absolute',left:"220px",top:"10px"}}>
                
              <div style={{height: '60px',display:'flex',alignContent:'center', flexDirection:'row',fontFamily: theme.typography.fontFamily,fontSize:'0.8rem',lineHeight:'1.0rem', fontWeight:'600',width:'327px',marginRight:'30px'}}>
                {headerText}
              </div>
              <div style={{height: '60px',display:'flex',flexDirection:'row',alignContent:'center',marginTop: '1rem'}}>
                  <div style={{display:'flex',flexDirection:'row',width:'346px',height:'2px',backgroundColor: theme.palette.primary.main}}></div>
                  <div style={{display:'flex',flexDirection:'row',width:'2px',height:'15px',backgroundColor: theme.palette.primary.main}}></div>
              </div>
              
          </div> 
        )
    } else {
       return ''
    }
  }

export default SlideHeader
