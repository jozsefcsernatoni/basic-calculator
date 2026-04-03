let number1="";
let number2="";
let operator="";
let firstSession=true;
let firstDot=true;
let critcalStop=false;

//operational functions
function add(usrNumber1,usrNumber2){
    return usrNumber1+usrNumber2;
}

function subtract(usrNumber1,usrNumber2){
    return usrNumber1-usrNumber2;
}

function multiply(usrNumber1,usrNumber2){
    return usrNumber1*usrNumber2;
}

function divide(usrNumber1,usrNumber2){
    return usrNumber1/usrNumber2;  
}

function operate(num1,op,num2){
    num1=Number(num1);
    num2=Number(num2);
    switch (op){
        case "+": return showDigits(add(num1,num2));
        break;
    
        case "-": return showDigits(subtract(num1,num2));
        break;

        case "*": return showDigits(multiply(num1,num2));
        break;

        case "/": return showDigits(divide(num1,num2));
        break;
}
}

//dom manipulation
const buttons=document.querySelectorAll("button:not(#dot)");
const dot=document.querySelector("#dot");
dot.addEventListener("click", (e) => {
        separate(e.target.value); 
        display.focus();  
    })
const display=document.querySelector(".display");
 for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", (e) => {
        separate(e.target.value);  
        display.focus();   
    })
}

//keyboard support
display.focus();
display.addEventListener("keydown", function(e){
    separate(e.key);
})


//helper functions
function separate(str){
    str=str.toUpperCase();
 console.log(str);   
    if(!critcalStop){
        switch(!isNaN(str) || str){

            case true: processNumber(str);
            break;
            case ".": processDot(str);
            break;
            case "+":
            case "-":
            case "*":
            case "/": processOperator(str);
            break;
            case "=": processEqual(str);
            break;
            case "B":backSpace();    
            break;
        }
    }
    if(str==="C"){
        clear();
    }
}



function equals(){
    if(isFinite(operate(number1,operator,number2)) &&!critcalStop){
        number1=operate(number1,operator,number2); 
        displayContent(number1);
        number1="";
        number2="";
        operator="";
        firstSession=true;
        dot.disabled=false;
    } else if(number2==="0") {
        displayContent("snarky error message");
        critcalStop=true;
    }
    

}

function clear(){
    number1="";
        number2="";
        operator="";
        firstSession=true;
        critcalStop=false;
        displayContent("1234567890");
        display.focus();
        dot.disabled=false;
        firstDot=true;
}

function showDigits(nr,decimalPlaces=2){
if((Number.isInteger(nr))){
nr=nr+"";//conv to string
let fullNumber=nr.split(".");
return fullNumber[0];
} else {
    let resultFloat=nr.toFixed(decimalPlaces);
    let fullNumber=resultFloat.split(".");
    if(fullNumber[1]>0){
        return resultFloat;
    } else return fullNumber[0];
}

}

function displayContent(content){
   
        display.textContent=content;
    }

function backSpace(){
            if(firstSession){
            number1=number1.slice(0,number1.length-1);
            displayContent(number1);
            if(!(number1.includes("."))){
                dot.disabled=false;
                firstDot=true;
            }
        } else{
            number2=number2.slice(0,number2.length-1);
            displayContent(number2);
            if(!(number2.includes("."))){
                dot.disabled=false;
                firstDot=true;
            }
        }
}

function processNumber(str){
        if(firstSession){
            number1+=str;
            displayContent(number1);
            
        } else{
            number2+=str;
            displayContent(number2);
        }
}
function processDot(str){
    if(firstSession){
        if(!firstDot){
            str="";
        }
        number1+=str;
        displayContent(number1);
        firstDot=false;
        dot.disabled=true;
        } else{
            number2+=str;
            displayContent(number2);
            firstDot=false;
            dot.disabled=true;
        }

}

function processOperator(str){
    operands=["+","-","*","/"];
    if(operands.includes(str) && firstSession){
        operator=str;
        dot.disabled=false;

        if(firstSession){
                    firstSession=false;
        }
    }
    else if(operands.includes(str) ){
        equals();
        operator=str;
        dot.disabled=false;
    }
}

function processEqual(str){
if(!(number1==="") && !(number2==="") && !(operator==="")){
            equals();
        } 
}