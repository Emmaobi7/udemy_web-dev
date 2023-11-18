
var numOfButtons = document.querySelectorAll('button').length

for(var i = 0; i < numOfButtons; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function () {
        var audio = new Audio('sounds/tom-1.m3p');
        audio.play()
    })
}
