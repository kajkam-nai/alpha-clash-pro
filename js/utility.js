function hidePage(enterId){
    const removeId = document.getElementById(enterId);
    removeId.classList.add('hidden');
}

function showPage(enterId){
    const addId = document.getElementById(enterId);
    addId.classList.remove('hidden');
}

function findAlphabet(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetString = alphabet.split('');
    const randomValue = Math.random()*25;
    const integerValue = Math.round(randomValue);
    const findAlphabet= alphabetString[integerValue];
    // console.log(findAlphabet);
    addBackgroundColor(findAlphabet);
    const displayAlphabet = document.getElementById('display-alphabet');
    displayAlphabet.innerText = findAlphabet;
    

}

function addBackgroundColor(anyId){
    const addColor = document.getElementById(anyId);
    addColor.classList.add('bg-orange-400');
}
function removeBackgroundColor(anyId){
    const removeColor = document.getElementById(anyId);
    removeColor.classList.remove('bg-orange-400');
}
function integerValue(elementId){
    const Value = document.getElementById(elementId);
    const intValue =parseInt(Value.innerText);
    // console.log(intValue);
    return intValue;
}
function getElementIdValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function keyPressEvent(event){
    const keyValue = event.key;
    // console.log('pressed key',keyValue);
    if(keyValue === 'Escape'){
        gameOver();
    }

    const displayAlphabet = document.getElementById('display-alphabet');
    const getUpperCaseAlphabet = displayAlphabet.innerText;
    const getAlphabet = getUpperCaseAlphabet.toLowerCase();
   
    if(keyValue === getAlphabet){
        
        findAlphabet();
        removeBackgroundColor(getAlphabet);
        
        const scoreValue = integerValue('score-value');
        // console.log(scoreValue);
        const score = scoreValue + 1;
        getElementIdValue('score-value', score);
        const updateScore = document.getElementById('score-update');
        updateScore.innerText = score;
    }
    else{
        const lifeValue = integerValue('life-value');
        const life = lifeValue - 1;
       getElementIdValue('life-value',life);
        if(life == 0){
            hidePage('play-game');
            showPage('again-play');
        }
    }  
}
document.addEventListener('keyup',keyPressEvent);


function lifeScore(elementId){
    const lifeValue = document.getElementById('life-value');

}