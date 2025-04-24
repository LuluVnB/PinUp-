// <<<<<<< HEAD (Current Change)
let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(locatlStorage.getItem('events')) : [];

const calendar = document.getElementById("TaskCalendar")
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Button functionality
searchBtn = document.querySelector(".sidebar-button");
taskBtn = document.getElementsByClassName("sidebar-button");
notifBtn = document.getElementsByClassName("sidebar-button");
mailBtn = document.getElementsByClassName("sidebar-button");
settingBtn = document.getElementsByClassName("sidebar-button");
function load() {
    //date tracking. 
    const dt = new Date();

    console.log(dt)
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    console.log(day,month,year);

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }
    );
    const paddingDays  = weekdays.indexOf(dateString.split(', ')[0]);

for (let i = 1; i <= paddingDays + daysInMonth; i++){
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    if (i > paddingDays){

    }
    else{
        daySquare.classList.add('padding');
    }
}
//Time tracking
let hours = document.getElementById("hrs");
let min = document.getElementById("mins");
let sec = document.getElementById("secs");
setInterval(()=>{
let currentTime = new Date();

console.log (currentTime.getHours());

hours.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
}, 1000)
}

load();

//Profile section


// Button functionality
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".sidebar-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");

            console.log("Sidebar button clicked:", button);
        })
    })
})
// >>>>>>> 0bf8f520c90dbed6dfa9ec9ad0a66f0273cac613
