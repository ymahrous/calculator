let realTimeScreenValue = [];
let buttons = document.querySelectorAll('button');
let eraseBtn = document.querySelector('#erase');
let clearBtn = document.querySelector('#clear');
let evaluateBtn = document.querySelector('#evaluate');
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');

clearBtn.addEventListener('click', () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = 'rgba(150, 150, 150, .87)';
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(!btn.id.match('erase')) {
            realTimeScreenValue.push(btn.value);
            currentInput.innerHTML = realTimeScreenValue.join('');
            if(btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            };
        };

        if(btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        };

        if(btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = 'white';
        };

        if(typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0;
        };
    });
});