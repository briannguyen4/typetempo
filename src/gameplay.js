import {snippets, getSnippetsIdx, totalWords} from './snippets';
const input = document.querySelector(".input");
const timer = document.querySelector(".timer");
const snippet = document.querySelector("#text-snippet");
const playButton = document.querySelector("#play");
const playArea = document.querySelector("#play-container");
// const test = document.querySelector("#test");
const resultContainer = document.getElementById("result-container");
const playAgain = document.querySelector("#playagain");

let countdown;
let timeVals = [0, 0, 0, 0];
let time;
let snippetIdxArray;
let wordTotal;

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
            input.style.borderColor = "orange";
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
    // input.addEventListener('keyup', checkInput, false);
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
        playButton.innerHTML = c;
        playButton.innerHTML = --c;
        if (c == 0) {
            clearInterval(countdown);
            playButton.style.display = "none";
            startTimer();
            changeSnippet(snippetIdxArray.shift())
            input.addEventListener('keyup', checkInput, false);
        }
    }
}

function restartGame() {
    newGame();
    countdown = setInterval(myCountdown, 1000);
    var c = 4;

    function myCountdown() {
        playagain.innerHTML = c;
        playagain.innerHTML = --c;
        if (c == 0) {
            clearInterval(countdown);
            playagain.innerHTML = "Play Again";
            resultContainer.style.display = "none";
            playArea.style.display = "flex";
            document.querySelector(".timer-container").style.display = "block";
            changeSnippet(snippetIdxArray.shift());
            restartTimer();
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
    document.querySelector(".time").innerHTML = `Time : ${timer.innerHTML}`;
    document.querySelector(".wpm").innerHTML = `WPM : ${calculateWPM()}`;

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

// test.addEventListener('click', () => endGame());
playButton.addEventListener('click', () => startGame(), {once: true});
playAgain.addEventListener('click', () => restartGame());

