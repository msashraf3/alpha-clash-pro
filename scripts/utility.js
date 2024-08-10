function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    //get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    //get a random index between 0-25
    const randomNumber = math.random() * 25;
    const index = math.round(randomNumber);
    console.log(index);

}