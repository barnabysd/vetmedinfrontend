import { dogName } from "../WebsiteConstants"
import certificateRequestTemplate from "../templates/certificateRequestTemplate"

export default function certificateRequestDudley({data}) {
   return certificateRequestTemplate(data,dogName.DUDLEY)  
}

export const pageQuery = graphql`{
  nodeCertificaterequest {
    drupal_id
    changed(fromNow: false)
    field_additionalbodytext {
      processed
    }
    field_bodytext {
      processed
    }
    field_buttonlinks {
      title
      uri
    }
    field_footertext {
      processed
    }
    field_rcvs
      field_rcvsplaceholder
      field_vetertinarygroup
      field_vetertinarygroupplaceholde
      field_postcode
      field_postcodeplaceholder
    field_formemail
    field_formemailplaceholder
    field_formfirstname
    field_formfirstnameplaceholder
    field_formlastname
    field_formlastnameplaceholder
    field_formpracticeaddress
    field_formpracticeaddressplaceho
    field_headertext
    field_marketingrequest1
    field_marketingrequest2
    path {
      langcode
    }
  }
  nodeCertificateresponse {
    changed(fromNow: false)
    drupal_id
    field_bodytext {
      processed
    }
    field_buttonlinks {
      title
      uri
    }
    field_calltosharetext
    field_headertext
    field_resendlink {
      title
      uri
    }
    field_socialbuttonlinks {
      title
      uri
    }
    field_underlogotext {
      processed
    }
    field_additionalbodytext {
        processed
      }
  }
  nodeCongratulations {
    changed(fromNow: false)
    drupal_id
    field_bodytext {
      processed
    }
    field_buttonlinks {
      title
      uri
    }
    field_headertext
    field_pointsawarded {
      processed
    }
    field_remindertext
    path {
      alias
    }
  }
  allNodeCasestudysummary {
    nodes {
      drupal_id
      created(fromNow: false)
      field_headertext
      field_ticklist {
        processed
      }
      path {
        alias
      }
    }
  }
}`

