# Css-var
</br></br></br></br>

### 자바스크립트를 이용해서 사진의 style(padding, blur, base color) 변경하기

</br></br></br>

![main](https://user-images.githubusercontent.com/74194550/126057697-51122002-f67d-41c2-be6e-3c72da9f98de.png)

</br></br>
------------------------------------------
</br></br>
- ### __javascript__

```javascript
const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const base = document.getElementById("base");
const img = document.getElementById("img");

window.addEventListener("input", changecss);

img.style.padding = "20px";
img.style.filter = "blur(10px)";
img.style.backgroundColor = `${base.value}`;

function changecss(e){
    console.log(this.dataset);
    if(e.target.id === "spacing"){
        img.style.padding = `${spacing.value}px`;
    }else if(e.target.id === "blur"){
        img.style.filter = `blur(${blur.value}px)`;
    }else{
        img.style.backgroundColor = `${base.value}`;
    }
}
```

</br></br></br></br>

+ default value에 맞게 우선 style들 값을 지정해주었다.

* 브라우저에서 input 값이 변화하는 걸 어떻게 해야 알아차릴 수 있을까 고민하고 구글링 결과 input과 change 이벤트가 있었다.</br>
input 이벤트는 <input>, <select> 및 <textarea> 요소의 value 속성이 바뀔 때마다 발생한다.</br>
즉 사용자가 range를 드래그하면 할 때마다(값이 변하는 그때 그때) 이벤트가 발생한다.</br>
하지만 change 이벤트는 드래그하는 도중에는 일어나지 않고 드래그가 끝나고 마우스를 놓는 순간 발생한다.</br>
내가 원하는 건 드래그를 드래깅할 때마다 값이 변하는 것이였기 때문에 input 이벤트를 사용하였다.</br>
그리고 input이벤트시에 브라우저가 제공하는 event를 사용하여 event가 발생한 id를 알아내고</br>
각각의 id에 맞는 style을 바꾸는 것으로 하였다.

---------------------------------------------

