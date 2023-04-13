//declare variables

const display = document.getElementById('display');
const clearAll = document.getElementById('ac');
const plusMinus = document.getElementById('plusMinus');
const percent = document.getElementById('percent');
const backspace = document.getElementById('backspace');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const zero = document.getElementById('0');
const dot = document.getElementById('dot');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
let dotState = 0;
let number1 = '';
let number2 = '';
let operator = '';
let result = '';

// eventHandlers
clearAll.addEventListener('click',function () {
    display.innerHTML = '';
    number1 = '';
    number2 = '';
    operator = '';
    result = '';
    dotState = 0;
})

plusMinus.addEventListener('click',function () {
   if(display.innerHTML > 0){
        number1 = Number(display.innerHTML);
        number1 = 0 - number1;
        display.innerHTML = number1;
   }else{
        number1 = 0 - number1;
        display.innerHTML = number1;
   }
})

percent.addEventListener('click',function () {

})

one.addEventListener('click',function () {
    if(display.innerHTML != ''){
        display.innerHTML = Number(display.innerHTML + 1);
    }else{
        display.innerHTML = 1;
    }

})

two.addEventListener('click',function () {
    if(display.innerHTML != ''){
        display.innerHTML = display.innerHTML + 2;
    }else{
        display.innerHTML = 2;
    }
})

three.addEventListener('click',function () {
    if(display.innerHTML != ''){
        display.innerHTML = Number(display.innerHTML + 3);
    }else{
        display.innerHTML = 3;
    }
})

four.addEventListener('click',function () {
    if(display.innerHTML != ''){
        display.innerHTML = Number(display.innerHTML + 4);
    }else{
        display.innerHTML = 4;
    }
})

five.addEventListener('click',function () {
    if(display.innerHTML != ''){
        display.innerHTML = Number(display.innerHTML + 5);
    }else{
        display.innerHTML = 5;
    }
})

six.addEventListener('click',function () {
    if(display.innerHTML != ''){
        display.innerHTML = Number(display.innerHTML + 6);
    }else{
        display.innerHTML = 6;
    }
})

seven.addEventListener('click',function () {
    if(display.innerHTML != ''){
        display.innerHTML = Number(display.innerHTML + 7);
    }else{
        display.innerHTML = 7;
    }
})

eight.addEventListener('click',function () {
    if(display.innerHTML != ''){
        display.innerHTML = Number(display.innerHTML + 8);
    }else{
        display.innerHTML = 8;
    }
})

nine.addEventListener('click',function () {
    if(display.innerHTML != ''){
        display.innerHTML = Number(display.innerHTML + 9);
    }else{
        display.innerHTML = 9;
    }
})

zero.addEventListener('click',function () {
    if(display.innerHTML != ''){
        display.innerHTML = Number(display.innerHTML + 0);
    }else{
        display.innerHTML = 0;
    }
})

plus.addEventListener('click',function () {
    operator = '+';
    number1 = Number(display.innerHTML);
    display.innerHTML =  '';

})

divide.addEventListener('click',function () {
    operator = '/';
    number1 = Number(display.innerHTML);
    display.innerHTML = '';
})

minus.addEventListener('click',function () {
    operator = '-';
    number1 = Number(display.innerHTML);
    display.innerHTML = '';
})

multiply.addEventListener('click',function () {
    operator = 'x';
    number1 = Number(display.innerHTML);
    display.innerHTML = '';
})

backspace.addEventListener('click',function () {
    if(display.innerHTML>10){
        let holder = String(display.innerHTML).split('');
        holder.pop();
        holder=Number(holder.join(''));
        display.innerHTML = holder;
        holder = '';
    }else {
        display.innerHTML = '';
        number1 = '';
        number2 = '';
        operator = '';
        result = '';
        dotState = 0;  
    }
})

percent.addEventListener('click', function () {
    number1 = Number(display.innerHTML);
    result = Number(percentage(number1));
    display.innerHTML = result;
})

dot.addEventListener('click', function () {
    if(display.innerHTML != '' && dotState == 0){
        display.innerHTML = Number(display.innerHTML) + '.';
        dotState = 1;
    }else if(display.innerHTML == ''){
        display.innerHTML = '.';
        dotState = 1;
    }
})

equals.addEventListener('click',function () {
    number2 = Number(display.innerHTML);
    switch(operator){
        case '+' :
            result = add(number1,number2);
            break;
        case '-' :
            result = subtract(number1,number2);
            break;
        case 'x' :
            result = multiplier(number1,number2);
            break;
        case '/' :
            result = divider(number1,number2);
            break;
        default :
            return result = 'undefined';

    };
    let holder1 = String(result).split('');
    let long = holder1.length;
    while(long >= 16){
        holder1.pop();
        long = holder1.length;
    }
    holder1=Number(holder1.join(''));
    display.innerHTML = holder1;
    holder1 = '';
    dotState = 0;
})



// functions

function add (a,b) { return a + b };

function subtract (a,b) { return a - b };

function divider (a,b) { return a/b };

function multiplier (a,b) { return a * b };

function percentage (a) { return a/100 };

function digits_count(n) {
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
  }