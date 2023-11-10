let numbers='';
let screen;
let stringEval='';
function input(){ //entering a key from keyboard
    /* numbers+=window.event.key;
    screen.innerHTML=numbers; */
    //2.now we should discriminate the keys we enter and call one function or another.
    if (window.event.key == parseFloat(window.event.key) || window.event.key == "," || window.event.key == ".") {
        if (window.event.key == ",") {
            numbers+=".";
            screen.innerHTML=numbers; 
        }else{
            numbers+=window.event.key;
            screen.innerHTML=numbers; 
        }
    }
}
function startDisplay(){
    screen=document.getElementById("display");
}
function key(value){ //entering a key from calculator key-button (0-9 or comma)
    numbers+=value;
    screen.innerHTML=numbers;
}
function op(value){
    if (!numbers && isSymbol(value)) {
        // Si no hay números y el valor es un simbolo, agrega el simbolo.
        numbers = value;
        return;
    }

    if (oneOnly(value)) {
        return;
    }
    stringEval+=parseFloat(numbers)+value;
    numbers='';
}
function solve(){
    stringEval+=numbers;
    screen.innerHTML=numbers=eval(stringEval);
    //1.something is missing on porpoise and causes an error. You need to use the code inspector to guess what.
    stringEval=parseFloat(numbers);
    numbers='';
}
function oneOnly(value) {
    //Para que no se puedan pasar dos simbolos seguidos
    if ((isSymbol(value)) && (isSymbol(stringEval.charAt(stringEval.length - 1)))) {
        return true;
    }else{
        return false;
    }
}

function isSymbol(char) {
    // Esta función verifica si un carácter es un símbolo matemático (+, -, *, /) o un punto (.)
    const symbols = ['+', '-', '*', '/', '.'];
    return symbols.includes(char);
}

//