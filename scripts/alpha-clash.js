/* //one way to do it
function play(){
    //hide the home screen. to hide the screen add the class hidden to the home section
    const homeSection = document.getElementById('home-section');
    homeSection.classList.add('hidden');
    //show the playground
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
} */

//but we will use the reuseable function

function continueGame(){
    const alphabet = getARandomAlphabet();
}

function play(){
    hideElementById('home-section');
    showElementById('play-ground');
    continueGame();
}