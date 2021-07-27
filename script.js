const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

const newYear = "1 jan 2022"

function countdown(){
    const newYearDate = new Date(newYear);
    console.log(newYearDate);
    const currentDate = new Date()
    const base = Math.floor((newYearDate - currentDate) / 1000)
    console.log(base);
    const seconds = Math.floor(base %60)
    const minutes = Math.floor(base / 60)%60
    const hours = Math.floor(base / 3600)%24
    const days = Math.floor(base / 3600 / 24)
    console.log(seconds, minutes, days, hours);

    secondsEl.innerHTML = formatTime(seconds)
    minutesEl.innerHTML = formatTime(minutes)
    hoursEl.innerHTML = formatTime(hours) 
    daysEl.innerHTML = days  
}

function formatTime(anoNovo){
    return anoNovo < 10 ? (`0${anoNovo}`): anoNovo
}
countdown()

setInterval(countdown, 1000)
// galaxia
