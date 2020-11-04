import {snippets, getSnippetsIdx, totalWords} from './snippets';
const input = document.querySelector(".input");
const timer = document.querySelector(".timer");
const snippet = document.querySelector("#text-snippet");
const start = document.querySelector("#start-container");
const playButton = document.querySelector("#play");
const playArea = document.querySelector("#play-container");
const resultContainer = document.getElementById("result-container");
const playAgainButton = document.querySelector("#playagain");
const header = document.querySelector(".header-text");
const results = document.querySelector(".results");

let countdown;
let timeVals = [0, 0, 0, 0];
let time;
let snippetIdxArray;
let wordTotal;

const splitText = header.textContent.split("");
header.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    header.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let textTimer = setInterval(onTick, 55); 

function onTick() { 
    if (char < splitText.length) {
        const span = header.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
    } else {
        complete();
    }
}

function complete() {
    clearInterval(textTimer);
    textTimer = null;
}

function startTimer() {
    time = setInterval(runTimer, 10);
}

function addZero(num) {
    if (num <= 9) {
        return "0" + num;
    } else {
        return num;
    }
}

function runTimer() {
    timeVals[0] = Math.floor((timeVals[3]/100)/60);
    timeVals[1] = Math.floor((timeVals[3]/100) - (timeVals[0] * 60));
    timeVals[2] = Math.floor(timeVals[3] - (timeVals[1] * 100) - (timeVals[0] * 6000));
    timeVals[3]++;
    let currentTime = addZero(timeVals[0]) + ":" + addZero(timeVals[1]) + ":" + timeVals[2];
    timer.innerHTML = currentTime; 
}

function restartTimer() {
    timeVals = [0, 0, 0, 0]; 
    startTimer();
}

function changeSnippet(idx) {
    snippet.innerHTML = Object.values(snippets)[idx].text;
}

function checkInput() {
    let text = input.value;
    const snippetText = document.querySelector("#text-snippet").innerHTML;
    let textToMatch = snippetText.substring(0, text.length);
    if (text == snippetText) {
        if (snippetIdxArray.length === 0) {
            endGame();
        } else {
            input.style.borderColor = "#d3d3be";
            let snippet = snippetIdxArray.shift();
            startRound(snippet);
        }
    } else {
        if (text == textToMatch) {
            input.style.borderColor = "green";
        } else {
            input.style.borderColor = "red";
        }
    }
}

function reloadSnippets(n) {
    snippetIdxArray = getSnippetsIdx(n);
}

function startRound(i) {
    input.value = "";
    changeSnippet(i);
}

function newGame() {
    reloadSnippets(5);
    wordTotal = totalWords(snippetIdxArray);
}

function startGame() {
    newGame()
    countdown = setInterval(myCountdown, 1000);
    var c = 4;

    function myCountdown() {
        playButton.innerHTML = --c;
        if (c == 0) {
            clearInterval(countdown);
            start.style.display = "none";
            playArea.style.display = "block";
            playArea.style.display = "block";
            startTimer();
            input.focus();
            changeSnippet(snippetIdxArray.shift())
            input.addEventListener('keyup', checkInput, false);
        }
    }
}

function playAgain() {
    newGame();
    countdown = setInterval(myCountdown, 1000);
    var c = 4;

    function myCountdown() {
        playagain.innerHTML = --c;
        if (c == 0) {
            clearInterval(countdown);
            playAgainButton.addEventListener('click', () => playAgain(), {once: true});
            playagain.innerHTML = "Play Again";
            resultContainer.style.display = "none";
            playArea.style.display = "flex";
            document.querySelector(".timer-container").style.display = "block";
            restartTimer();
            input.focus();
            changeSnippet(snippetIdxArray.shift());
            input.addEventListener('keyup', checkInput, false);
        }
    }
}

function endGame() {
    input.value = "";
    snippet.innerHTML = "";
    clearInterval(time);
    getResults();
}

function getResults() {
    playArea.style.display = "none";
    document.querySelector(".timer-container").style.display = "none";
    resultContainer.style.display = "flex";
    document.querySelector(".words").innerHTML = `Total Words: ${wordTotal}`;
    document.querySelector(".time").innerHTML = `Time: ${timer.innerHTML}`;
    document.querySelector(".wpm").innerHTML = `WPM: ${calculateWPM()}`;
}

function getTotalSeconds() {
    let totalSeconds = 0;
    const time = timer.innerHTML;
    const timeVals = time.split(":");
    totalSeconds += (parseInt(timeVals[0]) * 60);
    totalSeconds += parseInt(timeVals[1]);
    totalSeconds += (parseInt(timeVals[2]) / 100);
    return totalSeconds;
}

function calculateWPM() {
   const wordsPerSecond = wordTotal/getTotalSeconds();
   const wpm = wordsPerSecond * 60;
   return wpm.toFixed(2);
}

playButton.addEventListener('click', () => startGame(), {once: true});
playAgainButton.addEventListener('click', () => playAgain(), {once: true});

