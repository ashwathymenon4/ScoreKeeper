# Score Keeper
**Score Keeper** is a web application used to maintain score between two teams. The application allows one to select the maximum score of the game and disables score increment when a winner is detected or a tie is detected. One can also reset the web-page the game to default score values.

## Demo
You can view the website at: https://ashwathymenon4.github.io/ScoreKeeper/

## Technologies
* HTML
* CSS
* Java Script
* Bulma

## Features
* Responsive
* User-friendly interface
* Game Reset Option
* Auto-freeze the increment of individual team scores when winner is detected
* Flexibility to choose maximum score in a game

## Code Snippets
### **updateScore** function updates a particular team's score based on the button click event.
```javascript
function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            isGameOver = true;
        }

        player.display.innerText = player.score;
    }
}
```
### To add event listener to a button and invoke the **updateScore** function
```javascript
p1.button.addEventListener('click', function () {

    updateScore(p1, p2);

})
```
### **reset** function will reset the web-page to defualt values
```javascript
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }

}
```



