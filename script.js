// <<<<<<< HEAD (Current Change)
let nav = 0;
let clicked = null;
let events = [];

//Reference for current date
const today = new Date();
today.setHours(0,0,0,0);

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

console.log (currentTime.getDate());

hours.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
})
}
load();


function updateTaskList() {
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = ""; // Clear current list

    const sortedEvents = [...events].sort((a, b) => a.date - b.date); //sorts events in ascending order

    sortedEvents.forEach((sortedEvent) => {
      const dateStr = sortedEvent.date.toISOString().split("T")[0];
      const taskBar = document.createElement("div");
      taskBar.className = "task-bar";

      // Find original index
      const originalIndex = events.findIndex(ev =>
          ev.date.toISOString() === sortedEvent.date.toISOString() &&
          ev.title === sortedEvent.title
      );

      taskBar.innerHTML = `
          ${dateStr}: ${sortedEvent.title}
          <span class="delete-task" data-index="${originalIndex}" style="float:right; cursor:pointer; margin-left:10px;">❌</span>
      `;
      taskList.appendChild(taskBar);
    });
}

//Sticky note function
function updateStickyNotes() {
    const noteElements = document.querySelectorAll(".sticky-note");
     const sortedEvents = [...events]
        .filter(e => {
            const eventDate = new Date(e.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate >= today;
        })
        .sort((a, b) => a.date - b.date)
        .slice(0,8);


    noteElements.forEach((noteElement, i) => {
      const pin = noteElement.querySelector(".note-pin");
  
      // Clone the pin if it exists
      const existingPin = pin ? pin.cloneNode(true) : null;
      noteElement.innerHTML = ""; // Clear all content
      if (existingPin) noteElement.appendChild(existingPin);

      const event = sortedEvents[i];
      
      if (event) {
          
          const dateStr = event.date.toISOString().split("T")[0];
  
          const dateSpan = document.createElement("span");
          dateSpan.className = "note-date";
          dateSpan.textContent = dateStr;
  
          const titleSpan = document.createElement("span");
          titleSpan.className = "note-title";
          titleSpan.textContent = event.title;
  
          noteElement.appendChild(dateSpan);
          noteElement.appendChild(titleSpan);
  
          if (existingPin) {
            const originalIndex = events.findIndex(ev =>
              ev.date.toISOString() === event.date.toISOString() &&
              ev.title === event.title
          );

              existingPin.setAttribute("data-index", originalIndex);
              existingPin.addEventListener("click", (e) => {
                  e.stopPropagation();
                  const index = parseInt(e.target.getAttribute("data-index"));
                  if (!isNaN(index)) {
                      events.splice(index, 1);
                      const currentUser = localStorage.getItem('currentUser');
                      localStorage.setItem(`events_${currentUser}`, JSON.stringify(events));
                      updateStickyNotes();
                      updateTaskList();
                  }
              });
          }
      }
  });
}

// Button functionality
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-popup");
    const saveBtn = document.getElementById("save-event");
    const buttons = document.querySelectorAll(".sidebar-button");

    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const storedEvents = JSON.parse(localStorage.getItem(`events_${currentUser}`));
        if (storedEvents && Array.isArray(storedEvents)) {
            events = storedEvents.map(e => ({
                ...e,
                date: new Date(e.date) // rehydrate dates
            }));

            updateStickyNotes();

            updateTaskList();
        }
    }
    
    //Button reactivity, just logs to check that each button is being clicked in console.
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            //On click, bring up pop up window.
        if (button.classList.contains("add-event-button")){
            button.classList.toggle("active");
            popup.classList.remove("hidden");
            console.log("Sidebar button clicked:", button);
        }
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

        // Event adder pop up
        saveBtn.addEventListener("click", () => {
          const dateInput = document.getElementById("event-date").value.trim();
          const titleInput = document.getElementById("event-title").value.trim();
      
          if (!dateInput || !titleInput) {
              alert("Please enter both date and event title.");
              return;
          }
      
          const currentUser = localStorage.getItem('currentUser');
          if (!currentUser) {
              alert("No user logged in.");
              return;
          }
      
          // Create and store event
          const eventDate = new Date(dateInput);
          events.push({ date: eventDate, title: titleInput });

          // Save to localStorage under this user's email
          localStorage.setItem(`events_${currentUser}`, JSON.stringify(events));

          // Update sticky notes and task list.
          updateStickyNotes();
          updateTaskList();
      
          // Clear form and close popup
          popup.classList.add("hidden");
          document.getElementById("event-date").value = "";
          document.getElementById("event-title").value = "";
      });  

      //Deleting tasks
      document.querySelector(".task-list").addEventListener("click", function(e) {
        if (e.target.classList.contains("delete-task")) {
            const index = parseInt(e.target.getAttribute("data-index"));
            if (!isNaN(index)) {
                events.splice(index, 1);
                const currentUser = localStorage.getItem('currentUser');
                localStorage.setItem(`events_${currentUser}`, JSON.stringify(events));
                updateStickyNotes();
                updateTaskList();
            }
        }
    });
    
});







// >>>>>>> 0bf8f520c90dbed6dfa9ec9ad0a66f0273cac613
