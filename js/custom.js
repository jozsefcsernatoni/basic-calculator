let number1="";
let number2="";
let operator="";
let firstSession=true;

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
        case "+": return add(num1,num2);
        break;
    
        case "-": return subtract(num1,num2);
        break;

        case "*": return multiply(num1,num2);
        break;

        case "/": return divide(num1,num2);
        break;
        }
}

//dom manipulation
const buttons=document.querySelectorAll("button");
const display=document.querySelector(".display");
 for (let i=0;i<buttons.length;i++)
{buttons[i].addEventListener("click", (e) => {
 
separate(e.target.value);
})
}

//helper functions
function separate(str){
    const operands=["+","-","*","/"];
    
    
    if(!isNaN(str)){
        if( firstSession){
            number1+=str;
            display.textContent=number1;
        } else{
            number2+=str;
            display.textContent=number2;
        }
    }


    else if(operands.includes(str) && firstSession){
        console.log(str);
        operator=str;
        if(firstSession){
                    firstSession=false;
        }
    }
    else if(operands.includes(str) ){
        equals();
        operator=str;
    }
    else if(str==="="){
        if(!(number1==="") && !(number2==="") && !(operator==="")){
            equals();
        } else if (!(number1==="")){
            display.textContent=number1;
            number1="";
        }

    }
    else if(str==="C"){
        number1="";
        number2="";
        operator="";
        display.textContent=number1;
        firstSession=true;
    }
}

function equals(){
    number1=operate(number1,operator,number2); 
    number2="";
    display.textContent=number1;
}