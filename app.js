//create Objects for P1 and P2
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}



//Select remaining elements

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

//Initialize variables

let winningScore = 3;
let isGameOver = false;

//Functions

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

//Add event listener to p1 button.
p1.button.addEventListener('click', function () {

    updateScore(p1, p2);

})

p2.button.addEventListener('click', function () {

    updateScore(p2, p1);

});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }

}

