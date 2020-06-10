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
