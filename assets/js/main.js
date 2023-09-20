function separate(){
    const inputText= String(document.querySelector("#input-text").value);
    const searchChar= document.querySelector("#search-char").value;
    const result1= document.querySelector("#result1");
    const result2= document.querySelector("#result2");
    let rdBtn = document.querySelectorAll("input[name='select']");
    let output, charPos, length= inputText.length;
    charPos = inputText.indexOf(searchChar);

    if(rdBtn[0].checked){
        result1.innerHTML=inputText.slice(0,charPos);
        result2.innerHTML=inputText.slice(charPos,(inputText.length));
        // console.log(inputText.slice(0,charPos));

    }
    else if (rdBtn[1].checked){
        result1.innerHTML=inputText.slice(0,charPos+1);
        result2.innerHTML=inputText.slice(charPos+1,(inputText.length));

    }  
}