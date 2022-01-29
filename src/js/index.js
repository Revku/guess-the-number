const modes = {
    'easy': {
        'name': 'easy',
        'minValue': '0',
        'maxValue': '100',
        'info': 'Zgadnij liczbę z zakresu 0 - 100',
    },
    'medium': {
        'name': 'medium',
        'minValue': '0',
        'maxValue': '1000',
        'info': 'Zgadnij liczbę z zakresu 0 - 1000',
    },
    'hard': {
        'name': 'hard',
        'minValue': '0',
        'maxValue': '100000',
        'info': 'Zgadnij liczbę z zakresu 0 - 100000',
    },
    'extrahard': {
        'name': 'extrahard',
        'minValue': '0',
        'maxValue': '999999999',
        'info': 'Zgadnij nieznaną liczbę',
    },
};

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const result = document.getElementById("result");
const resultinfo = document.getElementById("guess__info");
let wK2L8SenGY4Cxx = randomNumber(mode.minValue, mode.maxValue);

let mode = modes.easy;

const dif_button1 = document.getElementById('difficulty__easy');
const dif_button2 = document.getElementById('difficulty__medium');
const dif_button3 = document.getElementById('difficulty__hard');
const dif_button4 = document.getElementById('difficulty__extrahard');
const resetbutton = document.getElementById('guess__resetbutton');
const info = document.getElementById('info');

const resetButtons = () => {
    dif_button1.classList.remove('active');
    dif_button2.classList.remove('active');
    dif_button3.classList.remove('active');
    dif_button4.classList.remove('active');
}

const changeMode = (arg) => {
    resetButtons();
    if (arg == "easy") {
        mode = modes.easy;
        dif_button1.classList.add('active');
    };
    if (arg == "medium") {
        mode = modes.medium;
        dif_button2.classList.add('active');
    };
    if (arg == "hard") {
        mode = modes.hard;
        dif_button3.classList.add('active');
    };
    if (arg == "extrahard") {
        mode = modes.extrahard;
        dif_button4.classList.add('active');
    };
    info.innerText = mode.info;
    wK2L8SenGY4Cxx = randomNumber(mode.minValue, mode.maxValue);
    result.style.display = "none";
}

const resetGame = () => {
    changeMode(mode.name);
    resetbutton.style.display = "none";
}

const checkNumber = () => {
    const input = document.getElementById("guess__input");
    const num = input.value;
    result.style.display = "block";
        
    if (num == wK2L8SenGY4Cxx) {
        resultinfo.innerHTML = "Brawo! Udało ci się odgadnąć liczbę!";
        result.style.backgroundColor = "#2DC350";
        resetbutton.style.display = "block";
    } else if (num > wK2L8SenGY4Cxx) {
        resultinfo.innerHTML = "Niestety nie udało się, twoja liczba jest za duża!";
        result.style.backgroundColor = "#EF5947";
    } else if (num < wK2L8SenGY4Cxx) {
        resultinfo.innerHTML = "Niestety nie udało się, twoja liczba jest za mała!";
        result.style.backgroundColor = "#EF5947";
    }

    input.value = "";
};
    
document.getElementById("guess__input").addEventListener("keyup", event => {
    if (event.isComposing || event.keyCode === 13) {
        checkNumber();
        return;
    }
});
