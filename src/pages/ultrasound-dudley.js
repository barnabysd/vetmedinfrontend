import { dogName } from "../WebsiteConstants"
import ultrasoundTemplate from "../templates/ultrasoundTemplate"
import { graphql } from 'gatsby'
export default function ultrasoundDudley({data}) {
   return ultrasoundTemplate(data,dogName.DUDLEY)  
}

export const pageQuery = graphql`
  {
    allNodeTask {
      nodes {
        drupal_id
        created(fromNow: false)
        field_bottombodytext {
          processed
        }
        field_bottombodytextstep3 {
          processed
        }
        field_bottombodytextstep4 {
          processed
        }
        field_bottombodytextstep5 {
          processed
        }
        field_bottomtitle {
          processed
        }
        field_bottomtitlestep2 {
          processed
        }
        field_bottomtitlestep3 {
          processed
        }
        field_bottomtitlestep4 {
          processed
        }
        field_bottomtitlestep5 {
          processed
        }
        field_bottomtitlestep6 {
          processed
        }
        field_continuelink {
          title
          uri
        }
        field_failedtext {
          processed
        }
        field_failedtext4 {
          processed
        }
        field_finalscreenbottomline1
        field_finalscreenbottomline2 {
          processed
        }
        field_infotext {
          processed
        }
        field_instructionstext {
          processed
        }
        field_mainimage {
          alt
          title
          width
          height
        }
        field_popupbodytext {
          processed
        }
        field_popupbodytext2 {
          processed
        }
        field_popupheadertext
        field_popupheadertext2
        field_sliderofftext
        field_sliderontext
        field_slidertitle
        field_taptooltiptext1 {
          processed
        }
        field_taptooltiptext2 {
          processed
        }
        field_taptooltiptext3 {
          processed
        }
        field_taptooltiptext4 {
          processed
        }
        field_videocaptiontext1 {
          processed
        }
        field_videoposterimage1 {
          alt
          title
          width
          height
        }
        path {
          alias
        }
        relationships {
          field_mainimage {
            uri {
              value
              url
            }
            localFile {
              url
            }
          }
          field_video1 {
            relationships {
              field_media_video_file {
                localFile {
                  url
                }
              }
            }
          }
          field_videoposterimage1 {
            id
          }
        }
      }
    },
    allNodeTasksummary {
    nodes {
      drupal_id
      created(fromNow: false)
      field_bodytext {
        processed
      }
      field_buttonlinks {
        title
        uri
      }
      field_continuelink {
        title
        uri
      }
      field_headertext
      field_popupbodytext {
        processed
      }
      field_popupheadertext
      field_tablefooterhtml1 {
        processed
      }
      field_tableheaderhtml1 {
        processed
      }
      field_tableitemcontent1 {
        processed
      }
      field_tableitemcontent2 {
        processed
      }
      field_tableitemcontent3 {
        processed
      }
      field_tableitemtitle1
      field_tableitemtitle2
      field_tableitemtitle3
      field_tableitemtitlehtml1 {
        processed
      }
      field_tableitemtitlehtml2 {
        processed
      }
      field_tableitemtitlehtml3 {
        processed
      }
      field_videocaptiontext1 {
        processed
      }
      field_videocaptiontext2 {
        processed
      }
      field_videocaptiontext3 {
        processed
      }
      field_videoduration1
      field_videoduration2
      field_videoduration3
      field_videofordog1
      field_videofordog2
      field_videofordog3
      field_videonarrator1
      field_videonarrator2
      field_videonarrator3
      field_videonarratorlocation1 {
        processed
      }
      field_videonarratorlocation2 {
        processed
      }
      field_videonarratorlocation3 {
        processed
      }
      field_videonarratorprofession1 {
        processed
      }
      field_videonarratorprofession2 {
        processed
      }
      field_videonarratorprofession3 {
        processed
      }
      field_videoposterimage1 {
        alt
        height
        title
        width
      }
      field_videoposterimage2 {
        alt
        height
        title
        width
      }
      field_videoposterimage3 {
        alt
        height
        title
        width
      }
      field_videothumbnail1 {
        alt
        height
        title
        width
      }
      field_videothumbnail2 {
        alt
        height
        title
        width
      }
      field_videothumbnail3 {
        alt
        height
        title
        width
      }
      field_videotitle1 {
        processed
      }
      field_videotitle2 {
        processed
      }
      field_videotitle3 {
        processed
      }
      path {
        alias
      }
      relationships {
        field_video1 {
          relationships {
            field_media_video_file {
              localFile {
                url
              }
              uri {
                url
                value
              }
            }
          }
        }
        field_video2 {
          relationships {
            field_media_video_file {
              localFile {
                url
              }
              uri {
                url
                value
              }
            }
          }
        }
        field_video3 {
          relationships {
            field_media_video_file {
              localFile {
                url
              }
              uri {
                url
                value
              }
            }
          }
        }
        field_videoposterimage1 {
          localFile {
            url
          }
        }
        field_videoposterimage2 {
          localFile {
            url
          }
        }
        field_videoposterimage3 {
          localFile {
            url
          }
        }
        field_videothumbnail1 {
          localFile {
            url
          }
        }
        field_videothumbnail2 {
          localFile {
            url
          }
          uri {
            url
            value
          }
        }
        field_videothumbnail3 {
          localFile {
            url
          }
        }
      }
    }
  }
  }
  `


/*
relationships {
          field_video1 {
            relationships {
              field_media_video_file {
                localFile {
                  url
                }
              }
            }
          }
          field_videoposterimage1 {
            uri {
              url
              value
            }
            localFile {
              url
            }
          }
        }
        field_videocaptiontext1 {
          processed
        }
        */



  //  field_continuelink {
  //   title
  //   uri
  // }

