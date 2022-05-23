
const KEY = "data-key";

function playsound(e){
    const audio = document.querySelector(`audio[${KEY} = "${e.keyCode}"]`);
    const key = document.querySelector(`div[${KEY} = "${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; // 중복 초기화
    audio.play();
    key.classList.add('playing');
}; 

function removeTrans(e){
  e.target.classList.remove('playing');

}
window.addEventListener("keydown", playsound);
const keys = document.querySelectorAll(".box");
keys.forEach((key) => key.addEventListener('transitionend', removeTrans)); //모든 key에 이벤트리스너 추가

