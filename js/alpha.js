function playNow(){
    hidePage('home-screen');
    showPage('play-game');

    findAlphabet();
    keyPressEvent();

    
}
function playAgain(){
    hidePage('again-play');
    showPage('play-game');
    getElementIdValue('score-value', 0);
    getElementIdValue('life-value', 5);
    
}
function gameOver(){
    hidePage('play-game');
    showPage('again-play');
    
}