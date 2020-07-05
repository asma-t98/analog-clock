const deg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(setClockTime,1000)


function setClockTime() {
    let day = new Date();
    console.log(day);
     
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

}

function myFunc(anyFn){
    debugger
    anyFn();
}

myFunc(()=>{
    console.log('Hello from my Fn') 
})