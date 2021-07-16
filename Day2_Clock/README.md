# Clock

</br></br>
</br>
</br>
![bgImage_원본](https://user-images.githubusercontent.com/74194550/125937397-f11dacce-1d22-4b9e-a87f-d290ade5cfe7.png)
</br> </br>

![bgImage](https://user-images.githubusercontent.com/74194550/125935731-522c86ac-815b-4f20-b0af-a10337b040d1.png)
</br></br></br></br></br></br></br>

```javascript
function date() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const hour_dig = String(hour).padStart(2, "0");
  const minute_dig = String(minute).padStart(2, "0");
  const second_dig = String(second).padStart(2, "0");

  const time = `${hour_dig}:${minute_dig}:${second_dig}`;

  const div = document.querySelector(".digital-clock");
  div.innerText = time;

  const hour_hand = document.querySelector(".hour-hand");
  const min_hand = document.querySelector(".min-hand");
  const second_hand = document.querySelector(".second-hand");

  const hour_analog = (hour % 12) * 30 + 90;
  const minute_analog = minute * 6 + 90;
  const second_analog = second * 6 + 90;
  hour_hand.style.transform = `rotate(${hour_analog}deg)`;
  min_hand.style.transform = `rotate(${minute_analog}deg)`;
  second_hand.style.transform = `rotate(${second_analog}deg)`;
}
```

> 챌린지 페이지에는 아날로그 시계만 만들도록 되어 있었지만 난 이전 [링크](https://github.com/Leegeonmin/javascript-clone-momentum#%EC%8B%9C%EA%B3%84)에서
> 디지털 시계도 만들어봐서 포함시켰다. </br>사실 아날로그 시계를 만들 줄 안다는 것부터 Date()함수를 이용할 줄 안다는 것이라 당연히 디지털 시계도 만들 줄 알 것이다.

> Date()에서 시간 정보를 가져와 360'에 맞게 비율을 조정하는 것 (hour % 12) _ 30, minute _ 6, second \* 6은 할 수 있었지만</br> 이것을 Div에 적용시켜
> Div가 시침, 분침, 초침 역할을 할 수 있게 하는 방법을 찾는 것이 가장 큰 문제였는데 transform-origin이라는 아주 착한 친구가 있었다.</br>
> transform의 기준을 정하게 해준 것으로 나는 right 속성을 주어 시계에서 9시방향에 있던 div들의 기준점을 오른쪽(시계의 가운데)로 두었다.
> 각 시계의 deg에 +90을 하게 된 이유도 기준이 9시였기 때문이다.
> </br></br>
> .style.transform 자바스크립트를 이용해서 css를 건드렸다.

</br></br></br></br>

#### 추가로 업데이트 해볼 것

시침, 분침, 초침을 실제 아날로그 시계처럼 길이를 다르게 설정하고 싶어서
기존 css의 width를 각 다른 비율로 조정하여보았으나 당연히 그렇게 하면 서로 다른 transform-origin을 가지기 때문에 시침, 초침, 분침 모두 다른 기준점으로 엉망진창이 되었다.
아 그럼 기준을 left로 놓고 div를 3시에 놓으면 되는 거 아닌가? 하여튼 다시 해보고 업데이트해야겠다.
</br></br></br>
내가 만든 코드와 강의 코드를 비교해보니 초침에 transition을 준 것 빼고는 같았다.
transition을 주는 것이 좀 더 시계다워서 추가하였다.
