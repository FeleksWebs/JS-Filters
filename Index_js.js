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
            var Li_Name = document.createElement("li");
            document.body.appendChild(Li_Name)
            Li_Name.innerHTML = arrList[i]
            if (i === 0){
                Li_Name.innerHTML = "The name of the string is " +arrList[i]
            }else if( i === 1){
                Li_Name.innerHTML = "The string contains these letters " +arrList[i]
            }else if(i === 2){
                Li_Name.innerHTML = "The string consists of " +arrList[i] +" characters"
            }else if (i === 3){
                Li_Name.innerHTML = "Where the first character is " +arrList[i]
            }else if (i === 4){
                Li_Name.innerHTML = "Also where the last character is " +arrList[i]
            }
    
            i++
            Timeout()
            
        }
            console.log(i)
        },1000)
    } 
    Timeout()
    

};


