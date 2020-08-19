import { dogName } from "../WebsiteConstants"
import ownerResponseTemplate from "../templates/ownerResponseTemplate"
import { graphql } from 'gatsby'

export default function ownerReponsePoppy({data}) {
  return ownerResponseTemplate(data,dogName.POPPY)  
}


export const pageQuery = graphql`
  {
    allNodeQuestion {
      nodes {
        field_accessibilityvideotext
        field_additionalbodytext {
          processed
        }
        field_animationvideoname
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
        field_dogchoice
        field_instructionstext {
          processed
        }
        field_optioniscorrect1
        field_optioniscorrect2
        field_optioniscorrect3
        field_optioniscorrect4
        field_optionlink1 {
          title
          uri
        }
        field_optionsbodytext1 {
          processed
        }
        field_optionsbodytext2 {
          processed
        }
        field_optionsbodytext3 {
          processed
        }
        field_optionsbodytext4 {
          processed
        }
        field_optionsheader1
        field_progresspercent
        field_questiontext {
          processed
        }
        path {
          alias
        }
        drupal_id
        changed(fromNow: false)
      }
    }
    allNodeOwnerquestion {
    nodes {
      field_headertext
      field_additionalbodytext {
        processed
      }
      path {
        alias
      }
    }
    }
    allNodeAnswer {
    nodes {
      drupal_id
      created(fromNow: false)
      field_accessibilityvideotext
      field_additionalbodytext {
        processed
      }
      field_animationvideoname
      field_answerheader
      field_answertext {
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
      field_iscorrectanswer
      field_progresspercent
      field_slugname
      field_topheadertext {
        processed
      }
      field_videocaptiontext1 {
        processed
      }
      field_videoduration1
      field_videonarrator1
      field_videoposterimage1 {
        width
        alt
        height
        title
      }
      field_videothumbnail1 {
        alt
        height
        title
        width
      }
      path {
        alias
      }
      field_videocaptiontext2 {
        processed
      }
      field_videocaptiontext3 {
        processed
      }
      field_videofordog1
      field_videofordog2
      field_videofordog3
      field_videonarrator2
      field_videonarrator3
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
      field_videothumbnail2 {
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
      relationships {
        field_video1 {
          relationships {
            field_media_video_file {
              localFile {
                url
                internal {
                  content
                  description
                  ignoreType
                  mediaType
                }
              }
              filesize
              filename
              uri {
                value
                url
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
        }
        field_videothumbnail3 {
          localFile {
            url
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
      }
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
      field_videoduration3
      field_videoduration2
      field_videothumbnail3 {
        alt
        height
        title
        width
      }
    }
  }

  }
  `

