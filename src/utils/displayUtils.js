import {dogName} from '../WebsiteConstants'

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const getLocalImageNameFromUrl = (urlPath) => {
    if (!urlPath) return ''
    if (urlPath.length === 0) return ''
    const urlParts = urlPath.split("/")
    if (urlParts.length === 0) return urlParts
    return urlParts[urlParts.length - 1]
}

export const makeSlugNameIntoHtmlId = (slugName) => {
    //console.log("============== raw slugname ", slugName)
    const randomName = "button" + makeRandomId(6)
    let newSlugName = slugName ? slugName : randomName
    newSlugName = newSlugName === '' ? randomName : newSlugName
    newSlugName = newSlugName.replace(/:/,"")
    newSlugName = newSlugName.replace(/internal/,"")
    newSlugName = newSlugName.replace(/\./g,"")
    newSlugName = newSlugName.replace(/@/,"")
    newSlugName = newSlugName.replace(/mailto/,"")
    newSlugName = newSlugName.replace(/https/,"")
    newSlugName = newSlugName.replace(/http/,"")
    newSlugName = newSlugName.replace(/\//g,"")
    newSlugName = newSlugName.replace(/-/g,"")
    // remove all non alpha numeric but allow underscore
    newSlugName = newSlugName.replace(/[^0-9a-zA-Z_]/gi,newSlugName)
    if (newSlugName === "") newSlugName = randomName
    //console.log("============== new slugname ", newSlugName)
    return newSlugName
}

export const getCssDisplayState = (compare1,compare2, useFlex = false) => {
    if (useFlex === true) {
        (compare1 === compare2) ? 'flex':'none' 
    }
    return (compare1 === compare2) ? 'block':'none' 
}

export const makeRandomId = (length) => {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}
 
export const stripUneededHtml = (htmlText) => {
    let htmlTextProccesed = htmlText.replace(/<p>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<\/p>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<em>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<\/em>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<strong>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<\/strong>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<i>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<\/i/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<b>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<\/b>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<span>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<\/span>/g,'')

    htmlTextProccesed = htmlTextProccesed.replace(/&lt;/g,'<')
    htmlTextProccesed = htmlTextProccesed.replace(/&rt;/g,'>')
    
    return htmlTextProccesed
}

export const checkLinkHasTitle = (link) => {
    return (link
      && link.title !== '' 
      && link.title !== 'none' ? true : false)   
}

export const getSlideData = (resourcesAr, slugName) => {
    let pointer = -1

    for (var i = 0; i < resourcesAr.length; i++) {
      //console.log(resourcesAr[i].field_headertext)
      if (resourcesAr[i].path && 
          resourcesAr[i].path.alias && 
          (resourcesAr[i].path.alias).indexOf(slugName) !== -1) {
            pointer = i
      }
    }
    if (pointer === -1) {
        return "NO_DATA_FOUND"
    }
    return resourcesAr[pointer]
}

export const removeParagraphsTags = (htmlText) => {
    
    let htmlTextProccesed = htmlText.replace(/<p>/g,'')
    htmlTextProccesed = htmlTextProccesed.replace(/<\/p>/g,'')
    return htmlTextProccesed
}

export const processInternalLink = (htmlText) => {
    if (typeof htmlText === "undefined" || typeof htmlText === undefined || typeof htmlText === null) return ''
    let htmlTextProccesed = htmlText.replace(/internal:/g,'')
    return htmlTextProccesed
}

export const processLink = (htmlText) => {
    let htmlTextProccesed = processInternalLink(htmlText)
    return htmlTextProccesed
}

//TODO - refactor
const getOwnerName = (dogChoice) => {
    if (dogChoice.DUDLEY === dogChoice) return "Mrs Jenkins" 
    if (dogChoice.POPPY === dogChoice) return "Mrs Poppy" 
    if (dogChoice.REGGIE === dogChoice) return "Mrs Richardson" 
    return ""
}

export const replaceOwnerName = (rawText, dogName) => {
    let rawTextProcessed = rawText.replace(/__OWNER_NAME__/g,getOwnerName(dogName))
    rawTextProcessed = rawTextProcessed.replace(/__OWNERS_NAME__/g,getOwnerName(dogName))
    rawTextProcessed = rawTextProcessed.replace(/__DOG_OWNER__/g,getOwnerName(dogName))
    if (dogName !== dogName.POPPY) {
       rawTextProcessed = rawTextProcessed.replace(/__OWNER_HER_HE__/g,'her')
    } else {
       rawTextProcessed = rawTextProcessed.replace(/__OWNER_HER_HE__/g,'he')
    }
    return rawTextProcessed
}

export const replaceDogName = (rawText, dogChoice) => {
    if (!rawText) return 'no data'
    let rawTextProcessed = rawText.replace(/__DOG_NAME__/g,capitalize(dogChoice))
    if (dogChoice === dogName.POPPY) {
       rawTextProcessed = rawTextProcessed.replace(/__DOG_GENDER_HER_HE__/g,'her')
    } else {
       rawTextProcessed = rawTextProcessed.replace(/__DOG_GENDER_HER_HE__/g,'he')
    }
    if (dogChoice === dogName.POPPY) {
        rawTextProcessed = rawTextProcessed.replace(/__DOG_GENDER_SHE_HE__/g,'she')
     } else {
        rawTextProcessed = rawTextProcessed.replace(/__DOG_GENDER_SHE_HE__/g,'he')
     }
     if (dogChoice === dogName.POPPY) {
        rawTextProcessed = rawTextProcessed.replace(/__DOG_GENDER__/g,'her')
     } else {
        rawTextProcessed = rawTextProcessed.replace(/__DOG_GENDER__/g,'he')
     }
    return rawTextProcessed
}

export const processField = (rawText, dogChoice, outputHtml = true) => {
    if (!rawText) {
        return (outputHtml ? { __html: '' } : '')
    }
    if (!dogChoice) {
        return (outputHtml ? { __html: 'no dog choice' } :'no dog choice')
    }
    let newText = rawText
    if (rawText.__html) {
        if (outputHtml) return rawText // already processed as html object
        newText = rawText.__html
    }
    // check for drupal processed field
    let rawTextProcessed = newText.processed ? newText.processed : newText

    if (rawTextProcessed.processed) {
        rawTextProcessed = rawTextProcessed.processed
    }
    
    rawTextProcessed = processLink(rawTextProcessed)
    rawTextProcessed = replaceDogName(rawTextProcessed, dogChoice)
    rawTextProcessed = replaceOwnerName(rawTextProcessed, dogChoice)

    if (outputHtml) {
        rawTextProcessed = { __html: rawTextProcessed }
    } else {
        rawTextProcessed = stripUneededHtml(rawTextProcessed)
    }
    return rawTextProcessed
}

export const displayDog = (currentDogName, dogName) => { 
    const displayState = (currentDogName === dogName) ? 'block':'none' 
    return displayState
}

