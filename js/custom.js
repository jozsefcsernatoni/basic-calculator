let number1;
let number2;
let operator;

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
    switch (op){
        case "+": console.log(add(num1,num2));
        break;
    
        case "-": console.log(subtract(num1,num2));
        break;

        case "*": console.log(multiply(num1,num2));
        break;

        case "/": console.log(divide(num1,num2));
        break;
        }
}

//dom manipulation
const buttons=document.querySelectorAll("button");
const display=document.querySelector(".display");
 for (let i=0;i<buttons.length;i++)
{buttons[i].addEventListener("click", (e) => {
 
  display.textContent+=e.target.value; 
})
}