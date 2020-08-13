function onDebugClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
}

const camelCaseToKebabCase = (str) => {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  }
  
const formatStyled = (compName,str) => {
  let newStr = str
  newStr = newStr.replace(/'/g,'')
  newStr = newStr.replace(/,/g,';\n')
  newStr = newStr.replace(/style={{/g,'')
  newStr = newStr.replace(/}}/g,'')
  newStr = newStr.replace(/<div/g,'')
  newStr = newStr.replace(/<\/div>/g,'')
  newStr = newStr.replace(/>/g,'')
  newStr = newStr.replace(/<\//g,'')
  newStr = camelCaseToKebabCase(newStr)
  return "const " + compName + " = styled.div`" + newStr + " ;\n@media (max-width: ${md}px) {\nposition: static;\nwidth: 100%;\n}\n`"
  } 

export default {
    onDebugClick,
    camelCaseToKebabCase,
    formatStyled
}