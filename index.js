var numbOfDrums = 7;

for (var i = 0; i < numbOfDrums; i++) {
    document.querySelectorAll(".item")[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}


function makeSound(key) {

    switch (key) {
        case 'w':
            var audio = new Audio("Sound/tom-1.mp3");
            audio.play();
            break;

        case 'a':
            var audio = new Audio("Sound/tom-2.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("Sound/tom-3.mp3");
            audio.play();
            break;

        case 'd':
            var audio = new Audio("Sound/tom-4.mp3");
            audio.play();
            break;

        case 'j':
            var audio = new Audio("Sound/snare.mp3");
            audio.play();
            break;

        case 'k':
            var audio = new Audio("Sound/crash.mp3");
            audio.play();
            break;

        case 'l':
            var audio = new Audio("Sound/kick-bass.mp3");
            audio.play();
            break;
    }
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}