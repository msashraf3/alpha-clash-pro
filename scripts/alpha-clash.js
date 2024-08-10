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

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // console.log(playerPressed);

    //get the expected to press
    const pInnetText = document.getElementById('text-screen');
    // console.log(pInnetText);
    const currentAlphabet = pInnetText.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    //checked matched or not
    if (playerPressed === expectedAlphabet) {

        const currentScore = getTextElementValueById('score');
        const newScore = currentScore + 1;
        setTextElementValueById('score', newScore);
        // console.log('you get a point');
        // //update score
        // //1. get the current score
        // // const currentScoreElement = document.getElementById('score');
        // // const currentScoreText = currentScoreElement.innerText;
        // // const currentScore = parseInt(currentScoreText);
        // // console.log(currentScore);
        // const currentScore = getTextElementValueById('score');

        // // //2. increase the score by 1
        // const newScore = currentScore + 1;
        // // //3. show the updated score
        // // currentScoreElement.innerText = newScore;

        //start a new game
        continueGame();
        removeAlphabetBackgroundColor(expectedAlphabet);
    } else {

        const currentLife = getTextElementValueById('life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }



        // console.log('you missed. you lost a point');
        // //update life
        // //1. get the current life
        // const currentLifeElement = document.getElementById('life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // //2. decrease the life by 1
        // const newLife = currentLife - 1;
        // //3. show the updated life
        // currentLifeElement.innerText = newLife;
    }
}

//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet is:', alphabet);


    //set randomly generated alphabet to the screen (show it)
    const pInnetText = document.getElementById('text-screen');
    pInnetText.innerText = alphabet;

    //set background color
    alphabetBackgroundColor(alphabet);
}

function play(){
    //hide everything except playground
    hideElementById('home-section');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset everything
    setTextElementValueById('life', 5);
    setTextElementValueById('score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}