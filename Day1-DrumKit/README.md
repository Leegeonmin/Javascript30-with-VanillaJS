# javascript_Drum-Kit
</br>
</br>
</br>
</br>

## Make a javascript Drum kit by youtube
</br></br></br></br>
![readmeimg](https://user-images.githubusercontent.com/74194550/125483504-fb2b3778-be05-488c-9fb4-dcc42b1a6625.png)
</br></br></br></br>

```javascript

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


```

```
이벤트 transitionend가 있다는 것을 알게 되었다.
audio 태그를 자바스크립트에서 실행시킬 때 play()를 이용하는 것을 알게 되었다.
만약 if(!audio) return;를 하지않는다면 입력이 없을 시 값이 없기 때문에 console창에서 에러가 난다.
```
playing 클래스를 추가하거나 삭제하는 것은  [javascript-clone-momentum](https://github.com/Leegeonmin/javascript-clone-momentum) 에서 해보아서 쉽게 적용하였다.


</br></br></br></br>

#### 추가로 업데이트 해볼 것

1. 일정시간 입력을 저장하여 나중에 입력과 함께 저장한 입력을 같이 출력하기
