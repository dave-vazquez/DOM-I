/*********************************************************************************
*                                QUERY SELECTORS                                 *
**********************************************************************************/ 
const DOM = {
    msHunds: document.getElementById('msHundreds'),
    msTens: document.getElementById('msTens'),
    colon: document.getElementById('colon'),
    secOnes: document.getElementById('secondOnes'),
    secTens: document.getElementById('secondTens'),
    all: document.querySelectorAll('.digit'),

    startBtn: document.getElementById('start-button'),
    resetBtn: document.getElementById('reset-button')
};
/*********************************************************************************
*                                  STATE OBJECT                                  *
**********************************************************************************/ 
const state = {
    msHunds: 0,
    msTens: 0,
    secOns: 0,
    secTens: 0,
    timer: null,
    interval: 10,
    timerStarted: false
};
/*********************************************************************************
*                                  EVENT LISTENERS                               *
**********************************************************************************/ 
DOM.startBtn.addEventListener('click', () => {
 
    if(!state.timerStarted) {
        resetTimer();

        state.timer = setInterval(incrementTimer, state.interval); // 10
        state.timerStarted = true;
    }
});

DOM.resetBtn.addEventListener('click', () => {
    clearInterval(state.timer);
    resetTimer();

    state.timerStarted = false;
});
/*********************************************************************************
*                                   TIMER FUNCTIONS                              *
**********************************************************************************/ 
function resetTimer() {     
    state.timer = null;
    
    state.msHunds = state.msTens = state.secOnes = state.secTens = 0;
    
    DOM.msHunds.textContent = 
    DOM.msTens.textContent = 
    DOM.secOnes.textContent = 
    DOM.secTens.textContent = '-';

    DOM.all.forEach(elem => elem.classList.remove('redDigit'));
}

function incrementTimer() {
    DOM.msHunds.textContent = state.msHunds += state.interval/10;
    
    if(state.msHunds === 10) {
        DOM.msHunds.textContent = state.msHunds = 0;
        DOM.msTens.textContent = ++state.msTens;

        if(state.msTens === 10) {
            DOM.msTens.textContent = state.msTens = 0;
            DOM.secOnes.textContent = ++state.secOnes;

            if(state.secOnes === 10) {
                DOM.secOnes.textContent = state.secOnes = 0;
                DOM.secTens.textContent = state.secTens = 1;
                DOM.all.forEach(elem => elem.classList.add('redDigit'));

                state.timerStarted = false;

                clearInterval(state.timer);
            }
        }
    }
}
