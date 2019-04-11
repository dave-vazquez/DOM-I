const DOM = {
    secondTens: document.getElementById('secondTens'),
    secondOnes: document.getElementById('secondTens'),
    colon: document.getElementById('secondTens'),
    msHundreds: document.getElementById('secondTens'),
    msTens: document.getElementById('secondTens'),
};

let totalTime = 0;
let interval = 100;


setInterval(() => {
    
    DOM.secondTens.textContent = totalTime/100;
    DOM.secondTens.textContent = totalTime/1000;

    totalTime += interval;

}, interval);
