function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        if(!audio) return; // Stops the function if there isn't a corresponding audio bit
        console.log(key);
        audio.currentTime = 0; // Starts the audio back over if the button is clicked in rapid succession
        audio.play(); // Plays the audio file associated with the key that was pressed
        key.classList.add('playing');
}
function removeTransition(e) {
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);