# Type Tempo
![Type Tempo](https://raw.githubusercontent.com/briannguyen4/briannguyen4.github.io/master/assets/images/typetempo.png)

## Background and Overview

Type Tempo is a game where players are given an assortment of popular song lyrics to type as quickly and accurately as they can. Upon finishing a game, a results screen will appear that indicates various information such as WPM (words per minute) and time elapsed.

## Functionality and MVPS

In Type Tempo, users are able to

- Start a new timed game with random text snippets
- Type into a text area and get feedback for accuracy 
- Get results of their typing speed 

## Architecture and Technology

The project is implemented with:

- JavaScript for the gaming logic
- HTML5 and CSS3 for overall layout and styling

In addition to the entry file there will be other scripts in this project.
The gameplay.js file will have all the information related to general gameplay such as starting a timer and generating the results.  
The snippets.js file includes all of the text snippets and related functions.


## Highlighted Feature

The gameplay of Type Tempo relies on the ability to read input while simultaneously giving feedback back to the player. 
```javascript
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

```

This function utilizes DOM methods to read a players's typed input and compare it to the current text snippet. Javascript conditionals are then used to change the text area's border color. The color will be green while the player has typed the words accurately while becoming red whenever there are errors.




## Bonus Features for future

- See more information about the snippets such as song information
- Adding the ability to choose the number of snippets
