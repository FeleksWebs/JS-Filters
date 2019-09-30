var formValue = document.getElementById("form-txt")
var formButton = document.getElementById("form-button")

formButton.onclick = getValues;

function getValues(){

    var arrValue = formValue.value
    console.log(arrValue);

    var arrSplit = formValue.value.split("");
    console.log(arrSplit);

    var arrLength = formValue.value.length;
    console.log(arrLength);

    var arrFirst = arrSplit[0];
    console.log(arrFirst);

    var arrSlice = arrSplit.slice(-1)[0];
    console.log(arrSlice);

    var arrList = [arrValue,arrSplit,arrLength,arrFirst,arrSlice]


    var Ui_Name = document.createElement("ul");
    Ui_Name.innerHTML = "the item is " + arrValue
    document.body.appendChild(Ui_Name);

    
    for(i=0;i< arrList.length ;i++){
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
    }    
    

};



