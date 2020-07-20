import {dogName} from '../WebsiteConstants'

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
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
    let htmlTextProccesed = htmlText.replace(/internal:/g,'')
    return htmlTextProccesed
}

export const processLink = (htmlText) => {
    let htmlTextProccesed = processInternalLink(htmlText)
    return htmlTextProccesed
}
export const replaceOwnerName = (rawText, dogName) => {
    let rawTextProcessed = rawText.replace(/__OWNER_NAME__/g,capitalize(dogName))
    rawTextProcessed = rawTextProcessed.replace(/__OWNERS_NAME__/g,capitalize(dogName))
    if (dogName === dogName.POPPY) {
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
     if (dogChoice === dogName.POPPY) {
        rawTextProcessed = rawTextProcessed.replace(/Dudley/g,capitalize(dogChoice))
        rawTextProcessed = rawTextProcessed.replace(/Reggie/g,capitalize(dogChoice))
     } 
     if (dogChoice === dogName.REGGIE) {
        rawTextProcessed = rawTextProcessed.replace(/Poppy/g,capitalize(dogChoice))
        rawTextProcessed = rawTextProcessed.replace(/Dudley/g,capitalize(dogChoice))
     } 
     if (dogChoice === dogName.DUDLEY) {
        rawTextProcessed = rawTextProcessed.replace(/Reggie/g,capitalize(dogChoice))
        rawTextProcessed = rawTextProcessed.replace(/Poppy/g,capitalize(dogChoice))
     } 
    return rawTextProcessed
}

export const processField = (rawText, dogChoice, outputHtml = true) => {
    if (!rawText) return 'no data'
    if (!dogChoice) return 'no dog choice'
    // check for drupal processed field
    let rawTextProcessed = rawText.processed ? rawText.processed : rawText
    rawTextProcessed = stripUneededHtml(rawTextProcessed)
    rawTextProcessed = processLink(rawTextProcessed)
    rawTextProcessed = replaceDogName(rawTextProcessed, dogChoice)
    rawTextProcessed = replaceOwnerName(rawTextProcessed, dogChoice)
    if (outputHtml) rawTextProcessed = { __html: rawTextProcessed }
    return rawTextProcessed
}

export const displayDog = (currentDogName, dogName) => { 
    const displayState = (currentDogName === dogName) ? 'block':'none' 
    return displayState
}
