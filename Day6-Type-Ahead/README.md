# Type-ahead

## 기능 ##
1. 웹사이트로부터 데이터 가져옴(fetch)
2. 단어 입력으로 연관 검색어 찾음
3. 단어 하이라이트

</br>
</br>

![ezgif com-gif-maker1](https://user-images.githubusercontent.com/74194550/170880193-55c5caa0-e7be-4a2f-9fc1-37c00ba05d85.gif)


</br>
</br>
</br>

## CSS Part ##

</br>

```css
box-sizing: border-box;
```
border-box는 박스의 크기에 margin, padding을 포함시킨다.


</br>
</br>
</br>

## JavaScript Part ##
</br>

```javascript
const CountryandStatelist = [];
const getlist = fetch(endpoint)
  .then(res => res.json())
  .then(data => CountryandStatelist.push(...data));
```
fetch를 통해 받아온 데이터를 json으로 변환하고 리스트에 저장

```javascript
const search = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');
search.addEventListener('keyup', inputEvent);
```
DOM API를 이용해 데이터 접근 
Input에서 키보드를 놓을 때 inputEvent함수 이벤트리스너에 등록



```javascript
function findMatched(word, CountryandStatelist){
    return CountryandStatelist.filter(place => {
        const regex = new RegExp(word, 'gi');
        return place.state.match(regex) || place.city.match(regex)});
    }
```
RegExp를 통해 입력 받은 키워드로 필터링한다.

```javascript
function inputEvent(e){
    const matchArray = findMatched(this.value, CountryandStatelist);
    const resultHtml = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class = "hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class = "hl">${this.value}</span>`);
        return `
        <li>
        <span class = "name">${cityName} ${stateName}</span>
        <span class = "population">${place.population} </span>
        </li>
        `;
    }).join('');
    suggestion.innerHTML = resultHtml;
}
```
innerHTML을 통해 변경한 정보를 넣는다.
replace를 통해 키워드를 강조하도록 hl class를 추가한다.
