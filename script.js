<<<<<<< HEAD (Current Change)
console.log("hello world justin was here");
let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(locatlStorage.getItem('events')) : [];

const calendar = document.getElementById("TaskCalendar")
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
    const dt = new Date();

    console.log(dt)
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    console.log(day,month,year);

    const firstDayOfMonth = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }
    );
    const paddingDays  = weekdays.indexOf(dateString.split(', ')[0]);
    
}

load();

//Profile section


//Time tracking


//Button functionality
searchBtn = document.getElementsById("search");
taskBtn = document.getElementsById("tasks");
notifBtn = document.getElementsById("notif");
mailBtn = document.getElementsBId("mail");
settingBtn = document.getElementsById("settings");

searchBtn.onclick = function(){
    
}

taskBtn.onclick = function(){
    
}

notifBtn.onclick = function(){
    
}

mailBtn.onclick = function(){
    
}

settinghBtn.onclick = function(){
    
}
>>>>>>> 0bf8f520c90dbed6dfa9ec9ad0a66f0273cac613
