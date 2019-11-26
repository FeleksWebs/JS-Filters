var formValue = document.getElementById("form-txt")
var formButton = document.getElementById("form-button")
var Timeout;
formButton.onclick = getValues;





function getValues(){

    i = 0
    function Timeout(){
      var time =  setTimeout(()=>{
        if(i === 5){
            clearTimeout(time)
        }else{
            var arrValue = formValue.value
            var arrSplit = formValue.value.split("");
            var arrLength = formValue.value.length;
            var arrFirst = arrSplit[0];
            var arrSlice = arrSplit.slice(-1)[0];    
            var arrList = [arrValue,arrSplit,arrLength,arrFirst,arrSlice]

            var objTo = document.getElementById('testy')
            var divtest = document.createElement("div")
            objTo.style.boxShadow = "3px 5px"
            divtest.innerHTML = arrList[i]
            objTo.appendChild(divtest)
            
            if (i === 0){
                divtest.innerHTML = "<p class='txt'>The name of the string is " +arrList[i]+"</p>"
            }else if( i === 1){
                divtest.innerHTML = "<p class='txt'>The string contains these letters " +arrList[i]+ '</p>'
            }else if(i === 2){
                divtest.innerHTML = "<p class='txt'>The string consists of " +arrList[i] +" characters </p>"
            }else if (i === 3){
                divtest.innerHTML = "<p class='txt'>Where the first character is " +arrList[i]+'</p>'
            }else if (i === 4){
                divtest.innerHTML = "<p class='txt'>Also where the last character is " +arrList[i]+'</p>'
            }
    
            i++
            Timeout()

        }
            console.log(i)
        },1000)
    } 
    Timeout()
    

};


