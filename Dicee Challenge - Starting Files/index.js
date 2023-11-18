
var imageList = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png']

function randomN(data) {
    randomNumber1 = Math.floor(Math.random() * 6);

    return data[randomNumber1];
}

var player1 = randomN(imageList);
document.querySelector('.img1').setAttribute('src', player1);

var player2 = randomN(imageList);
document.querySelector('.img2').setAttribute('src', player2);


if (player1 > player2) {
    document.querySelector('h1').textContent = 'Player 1 wins!';
} else if (player2 > player1) {
    document.querySelector('h1').textContent = 'Player 2 wins!';
} else {
    document.querySelector('h1').textContent = 'Match ends draw!'
}