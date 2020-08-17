import { dogName } from "../WebsiteConstants"
import dogDetailTemplate from "../templates/dogDetailTemplate"

export default function dogDetailReggie({data}) {
   return dogDetailTemplate(data,dogName.REGGIE)  
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
  