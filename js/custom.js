let number1="";
let number2="";
let operator="";
let firstSession=true;
let dotId;

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
 for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", (e) => {
        separate(e.target.value);
        if(e.target.value==="."){
            e.target.disabled=true;
            dotId=i;
        }
    })
}

//helper functions
function separate(str){
    const operands=["+","-","*","/"];
    
    
    if(!isNaN(str) || str==="."){
        if( firstSession){
            number1+=str;
            display.textContent=number1;
        } else{
            number2+=str;
            display.textContent=number2;
        }
    }


    else if(operands.includes(str) && firstSession){
        operator=str;
        buttons[dotId].disabled=false;
        if(firstSession){
                    firstSession=false;
        }
    }
    else if(operands.includes(str) ){
        equals();
        operator=str;
        buttons[dotId].disabled=false;
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
        clear();
        display.textContent=number1;
    }
}

function equals(){
    if(isFinite(operate(number1,operator,number2))){
        number1=operate(number1,operator,number2); 
        display.textContent=number1;
        number2="";
        operator="";
    } else {
        display.textContent="snarky error message";
        clear();
    }
    

}

function clear(){
    number1="";
        number2="";
        operator="";
        firstSession=true;
        buttons[dotId].disabled=false;
        
}