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

class Timer {
    constructor() {
        this.msHunds = 0;
        this.msTens = 0;
        this.secOns = 0;
        this.secTens = 0;
        this.timerInterval = null;
        this.interval = 10;
        this.timerStarted = false;
    }

    startTimer() {
        this.resetTimer();
        
        if(!this.timerStarted) {
            DOM.startBtn.innerText = '. . .';
            DOM.startBtn.backgroundColor = '#008709';
    
            this.setTimerInterval()
        }
    }

    setTimerInterval() {
        this.timerInterval = setInterval(this.incrementTimer, this.interval); // 10
        this.timerStarted = true;
    }

    clearTimerInterval() {
        clearInterval(this.timerInterval);
    }

    resetTimer() {     
        this.timerInterval = null;
        
        this.msHunds = this.msTens = this.secOnes = this.secTens = 0;
        
        DOM.msHunds.textContent = 
        DOM.msTens.textContent = 
        DOM.secOnes.textContent = 
        DOM.secTens.textContent = '-';
    
        DOM.all.forEach(elem => elem.classList.remove('redDigit'));
    }

    incrementTimer() {
        DOM.msHunds.textContent = this.msHunds += this.interval/10;
        
        if(this.msHunds === 10) {
            DOM.msHunds.textContent = this.msHunds = 0;
            DOM.msTens.textContent = ++this.msTens;
    
            if(state.msTens === 10) {
                DOM.msTens.textContent = this.msTens = 0;
                DOM.secOnes.textContent = ++this.secOnes;
    
                if(state.secOnes === 10) {
                    DOM.secOnes.textContent = this.secOnes = 0;
                    DOM.secTens.textContent = this.secTens = 1;
                    DOM.all.forEach(elem => elem.classList.add('redDigit'));
    
                    this.timerStarted = false;
    
                    resetStartButton();
                    clearInterval(this.timerInterval);
                }
            }
        }
    }

    resetStartButton() {
        DOM.startBtn.innerText = 'START';
        DOM.startBtn.style.backgroundColor = '#00b00c';
    }
}

const timer = new Timer();

DOM.startBtn.addEventListener('click', () => {
 
    if(!timer.timerStarted) {
        timer.resetTimer();

        timer.setTimerInterval();
    }
});

DOM.resetBtn.addEventListener('click', () => {
    timer.clearTimerInterval();
    timer.resetStartButton();
    timer.timerStarted = false;
});