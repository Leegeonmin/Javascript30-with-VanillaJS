
function date(){
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

const hour_analog = ((hour % 12) * 30) + 90;
const minute_analog = (minute * 6) + 90;
const second_analog = (second * 6) + 90;
hour_hand.style.transform = `rotate(${hour_analog}deg)`;
min_hand.style.transform = `rotate(${minute_analog}deg)`;
second_hand.style.transform = `rotate(${second_analog}deg)`;
console.log(`${hour_analog}:${minute_analog}:${second_analog}`);

}


setTimeout(date, 0);
setInterval(date, 1000);

