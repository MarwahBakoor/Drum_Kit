function activeKey(e){
    e.classList.add('play')
}
function StopActive(e) {
    e.target.classList.remove('play');
  }


function playMusic(e){
    let audio = document.querySelector(`audio[data-key="${e}"]`);
    audio.currentTime = 0;
    audio.play(); 
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend',StopActive));

window.addEventListener("keydown", function (event) {
       let key = event.keyCode;
       if(document.querySelector(`div[data-key="${key}"]`)){
       let KeySelctpr = document.querySelector(`div[data-key="${key}"]`) 
       activeKey(KeySelctpr)
       playMusic(key)

       }
   })
