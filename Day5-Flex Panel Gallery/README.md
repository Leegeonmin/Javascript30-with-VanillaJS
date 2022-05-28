# Flex Panel Galley 

### 기능 ###
* 클릭 시 클릭한 부분 확대 및 원상 복구
</br>
</br>
</br>

![ezgif com-gif-maker](https://user-images.githubusercontent.com/74194550/170837719-8e9c5e75-a988-452b-8237-5656b8a7c8da.gif)


`클릭 전`
</br>

![preview](./readmeimg.png)
</br>
</br>
</br>
</br>
</br>
</br>


`클릭 시`
</br>

![preview](./readmeimg2.png)



</br>
</br>
</br>
</br>
</br>


## CSS Part ##

```css
    .panel > *:first-child{      transform: translateY(-100%);}
    .panel.clickdiv > *:first-child{transform: translateY(0%);}
    .panel > *:last-child{      transform: translateY(100%);}
    .panel.clickdiv > *:last-child{transform: translateY(0%);}
```
panel class 내부와 clickdiv를 가진 모든 첫째와 마지막 child에게 css 옵션을 주도록 설정하였다.

</br>

## JavaScript Part ##

```javascript
function toggleOpen(e){ 
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(e);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('clickdiv');
    }

}
const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

```

this.classList.add, this.classList.remove 모두 사용해야하는 경우는 toggle로 한번에 설정하는 것이 편하다.

이벤트 리스너에 transitionend의 경우 변화가 끝났을 경우 실행한다.

togleActive(e)에서 e를 콘솔에 출력해보면 변화된 속성이 무엇이 있는지 출력한다.

css에서
```css
      transition:
        font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        background 0.2s;
```
이런 변화를 주었기 때문에 
콘솔창에서 출력으로 flex-grow, font-size, transform(2)가 출력되었다. flex의 경우 브라우저에 따라 flex 또는 flex-grow로 표현된다.
