let leftArray = [];
let rightArray =[]
let operator = ""
let answer = 0
let display = ""
const container = document.querySelector('body')
const displayUI = document.createElement('div')
displayUI.style.color = 'white';


document.addEventListener('click', function(e){
    const selected = e.target.innerText
    if(selected.includes(' ')){
        return;
    }

    if(selected=='CLEAR'){
        clear();      
        return
    }

    if(selected=='='){
        answer = operate(leftArray.join(''), operator, rightArray.join(''))
        displayUI.innerText = answer;
        container.appendChild(displayUI);
        leftArray = [];
        rightArray = [];
        operator = "";
        return
    }

    if(selected==='+' || selected==='-' || selected==='*' || selected==='/'){
        if(leftArray==null){
            leftArray = answer;
        }
        operator = selected;
    }

    if(operator==''){
        leftArray.push(selected);
    } else {
        rightArray.push(selected);
    }
    
    if(leftArray!==null){
        display = leftArray.join('');
    }
    console.log(operator);
    if(operator!==''){
        display += operator + ' ';
    }

    if(rightArray!==null){
        display += rightArray.join('')
    }

    displayUI.innerText = display;

    console.table(leftArray);
    console.log(operator);
    console.table(rightArray);
});

function operate(left,operator,right){
    if(operator=='+'){
        return add(left, right);
    } else if(operator=='-'){
        return subtract(left, right);
    } else if(operator=='*'){
        return multiply(left, right);
    } else if(operator='/'){
        return divide(left, right);
    }
}

function add(a,b){
    return +a + +b;
}

function subtract(a,b){
    return +a - +b;
}

function multiply(a,b){
    return +a * +b;
}

function divide(a,b){
    return +a / +b;
}

function clear(){
    leftArray = [];
    rightArray = [];
    operator = "";
    answer = 0;
    display = ""
    displayUI.innerText = display;
    console.log("CLEAR");
}