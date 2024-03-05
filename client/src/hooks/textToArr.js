function textToArr(text){
    const arr =[]
    let newText = text
    for (var i = 0; i < newText.length; i++) {
    if(newText[i] == "=" && newText[i+1] == "=" ){
        arr.push(newText.slice(0, newText.indexOf("==", 1)))
        newText = newText.slice(newText.indexOf("==", 1), newText.length)
    }
    }
    return arr
}

export default textToArr
