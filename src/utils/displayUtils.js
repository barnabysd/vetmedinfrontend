const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const getCssDisplayState = (compare1,compare2, useFlex = false) => {
    if (useFlex === true) {
        (compare1 === compare2) ? 'flex':'none' 
    }
    return (compare1 === compare2) ? 'block':'none' 
}

export const processHtml = (htmlText) => {
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

export const replaceDogName = (rawText, dogName) => {
    let rawTextProcessed = rawText.replace(/__DOG_NAME__/g,capitalize(dogName))
    if (dogName === dogName.POPPY) {
       rawTextProcessed = rawTextProcessed.replace(/__DOG_GENDER__/g,'her')
    } else {
       rawTextProcessed = rawTextProcessed.replace(/__DOG_GENDER__/g,'he')
    }
    return rawTextProcessed
}

