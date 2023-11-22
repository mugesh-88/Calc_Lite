const buttonElements = document.querySelectorAll("button");

console.log(buttonElements); //It is a List

let inputFieldElement= document.getElementById("result");



for(let i=0;i<buttonElements.length;i++){
    buttonElements[i].addEventListener("click",()=>{
        // event.preventDefault();
        let buttonValue = buttonElements[i].textContent;
        buttonValue=buttonValue.split("\n").join("").split(" ").join("");

        if(buttonValue==="C"){
            clearResult();
        }
        else if(buttonValue==="="){
            calcResult();
        }
        else if(buttonValue === "←"){
            clearLastValue();
        }
        else{
            appendValue(buttonValue);
        }
        
    });
}

function clearResult(){
    inputFieldElement.value = "" ;
}

function calcResult(){
    try{
        inputFieldElement.value=eval(inputFieldElement.value);
    }
    catch{
        inputFieldElement.value="Error!";
    }
}

function clearLastValue(){
    inputFieldElement.value = inputFieldElement.value.slice(0,-1) ;
}

function appendValue(buttonValue){
    inputFieldElement.value += buttonValue;
    inputFieldElement.value = inputFieldElement.value.split(" ").join("");
}


