import { dogName, cookieKeyNames } from "../WebsiteConstants"
import fourZeroFourTemplate from "../templates/fourZeroFourTemplate"
import { graphql } from 'gatsby'
import { withCookies, Cookies, useCookies } from 'react-cookie'

export default function fourZeroFour({data}) {
  const [cookies] = useCookies([cookieKeyNames.DOG_CHOICE,cookieKeyNames.CASESTUDYS_ALL]);
  const dogChoice = cookies["dogChoice"] ? cookies["dogChoice"]: dogName.DUDLEY 
   return fourZeroFourTemplate(data,dogChoice)  
}



