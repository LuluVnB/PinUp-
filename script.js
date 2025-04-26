// <<<<<<< HEAD (Current Change)
let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(locatlStorage.getItem('events')) : [];

const calendar = document.getElementById("TaskCalendar")
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
})
}
load();
//Profile section


// Button functionality
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-popup");
    const saveBtn = document.getElementById("save-event");
    const buttons = document.querySelectorAll(".sidebar-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            //On click, bring up pop up window.
            button.classList.toggle("active");
            popup.classList.remove("hidden");
            console.log("Sidebar button clicked:", button);
        })
    })
    //integrates functionality of exit button.
    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
      });
    //integrates ability to close the pop up by clicking out of the pop up.
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
          popup.classList.add("hidden");
        }
      });

        // Task List Functionality
        saveBtn.addEventListener("click", () => {
        const dateInput = document.getElementById("event-date").value.trim();
        const titleInput = document.getElementById("event-title").value.trim();

        if (!dateInput || !titleInput) {
        alert("Please enter both date and event title.");
        return;
        }

        const taskList = document.querySelector(".task-list");
        const taskBar = document.createElement("div");
        taskBar.className = "task-bar";
        taskBar.textContent = `${dateInput}: ${titleInput}`;
        taskList.appendChild(taskBar);

        popup.classList.add("hidden");
        document.getElementById("event-date").value = "";
        document.getElementById("event-title").value = "";
    });
});

// Calendar functionality.

// >>>>>>> 0bf8f520c90dbed6dfa9ec9ad0a66f0273cac613
