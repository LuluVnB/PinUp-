// <<<<<<< HEAD
// console.log("hello world justin was here");

// let nav = 0;
// let clicked = null;
// let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
// =======
// // <<<<<<< HEAD (Current Change)
// let nav = 0;
// let clicked = null;
// let events = [];

// //Reference for current date
// const today = new Date();
// today.setHours(0,0,0,0);
// >>>>>>> 25564288dae7fcf12c532d147d2c10f693620f1b

// const calendar = document.getElementById("TaskCalendar");
// const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// <<<<<<< HEAD
// function loadCalendar() {
// =======
// function load() {
//     //date tracking. 
// >>>>>>> 25564288dae7fcf12c532d147d2c10f693620f1b
//     const dt = new Date();

//     const day = dt.getDate();
//     const month = dt.getMonth();
//     const year = dt.getFullYear();

// <<<<<<< HEAD
//     const firstDayOfMonth = new Date(year, month, 1);
// =======
//     const firstDayOfMonth = new Date(year, month, 1)
// >>>>>>> 25564288dae7fcf12c532d147d2c10f693620f1b
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     console.log(day,month,year);

//     const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
//         weekday: 'long',
//         year: 'numeric',
//         month: 'numeric',
//         day: 'numeric',
// <<<<<<< HEAD
//     });

//     const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

//     console.log({
//         day,
//         month,
//         year,
//         paddingDays,
//         daysInMonth
//     });

//     // You can populate the calendar grid here if needed
// }

// loadCalendar();


// // =========================
// // Sidebar Button Functions
// // =========================
// const searchBtn = document.getElementById("search");
// const taskBtn = document.getElementById("tasks");
// const notifBtn = document.getElementById("notif");
// const mailBtn = document.getElementById("mail");
// const settingBtn = document.getElementById("settings");

// searchBtn?.addEventListener("click", () => {
//     alert("Search button clicked");
// });

// taskBtn?.addEventListener("click", () => {
//     alert("Tasks button clicked");
// });

// notifBtn?.addEventListener("click", () => {
//     alert("Notifications button clicked");
// });

// mailBtn?.addEventListener("click", () => {
//     alert("Mail button clicked");
// });

// settingBtn?.addEventListener("click", () => {
//     alert("Settings button clicked");
// });


// // =========================
// // Theme Switching
// // =========================

// // Function to set the theme
// function setTheme(themeName) {
//     // Remove all theme classes
//     document.body.classList.remove("soft", "dark", "pastel", "retro");
    
//     // Add the selected theme class
//     document.body.classList.add(themeName);
    
//     // Save the theme preference to localStorage
//     localStorage.setItem("theme", themeName);
    
//     console.log(`Theme switched to: ${themeName}`);
// }

// // Add event listeners to theme buttons
// document.getElementById("theme-soft")?.addEventListener("click", () => setTheme("soft"));
// document.getElementById("theme-dark")?.addEventListener("click", () => setTheme("dark"));
// document.getElementById("theme-pastel")?.addEventListener("click", () => setTheme("pastel"));
// document.getElementById("theme-retro")?.addEventListener("click", () => setTheme("retro"));

// // Load saved theme preference on page load
// document.addEventListener("DOMContentLoaded", () => {
//     const savedTheme = localStorage.getItem("theme") || "soft";
//     setTheme(savedTheme);
// });
// =======
//     }
//     );
//     const paddingDays  = weekdays.indexOf(dateString.split(', ')[0]);

// for (let i = 1; i <= paddingDays + daysInMonth; i++){
//     const daySquare = document.createElement('div');
//     daySquare.classList.add('day');

//     if (i > paddingDays){

//     }
//     else{
//         daySquare.classList.add('padding');
//     }
// }

// //Time tracking
// let hours = document.getElementById("hrs");
// let min = document.getElementById("mins");
// let sec = document.getElementById("secs");
// setInterval(()=>{
// let currentTime = new Date();

// console.log (currentTime.getDate());

// hours.innerHTML = currentTime.getHours();
// min.innerHTML = currentTime.getMinutes();
// sec.innerHTML = currentTime.getSeconds();
// })
// }
// load();


// function updateTaskList() {
//     const taskList = document.querySelector(".task-list");
//     taskList.innerHTML = ""; // Clear current list

//     const sortedEvents = [...events].sort((a, b) => a.date - b.date); //sorts events in ascending order

//     sortedEvents.forEach((sortedEvent) => {
//       const dateStr = sortedEvent.date.toISOString().split("T")[0];
//       const taskBar = document.createElement("div");
//       taskBar.className = "task-bar";

//       // Find original index
//       const originalIndex = events.findIndex(ev =>
//           ev.date.toISOString() === sortedEvent.date.toISOString() &&
//           ev.title === sortedEvent.title
//       );

//       taskBar.innerHTML = `
//           ${dateStr}: ${sortedEvent.title}
//           <span class="delete-task" data-index="${originalIndex}" style="float:right; cursor:pointer; margin-left:10px;">❌</span>
//       `;
//       taskList.appendChild(taskBar);
//     });
// }

// //Sticky note function
// function updateStickyNotes() {
//     const noteElements = document.querySelectorAll(".sticky-note");
//      const sortedEvents = [...events]
//         .filter(e => {
//             const eventDate = new Date(e.date);
//             eventDate.setHours(0, 0, 0, 0);
//             return eventDate >= today;
//         })
//         .sort((a, b) => a.date - b.date)
//         .slice(0,8);


//     noteElements.forEach((noteElement, i) => {
//       const pin = noteElement.querySelector(".note-pin");
  
//       // Clone the pin if it exists
//       const existingPin = pin ? pin.cloneNode(true) : null;
//       noteElement.innerHTML = ""; // Clear all content
//       if (existingPin) noteElement.appendChild(existingPin);

//       const event = sortedEvents[i];
      
//       if (event) {
          
//           const dateStr = event.date.toISOString().split("T")[0];
  
//           const dateSpan = document.createElement("span");
//           dateSpan.className = "note-date";
//           dateSpan.textContent = dateStr;
  
//           const titleSpan = document.createElement("span");
//           titleSpan.className = "note-title";
//           titleSpan.textContent = event.title;
  
//           noteElement.appendChild(dateSpan);
//           noteElement.appendChild(titleSpan);
  
//           if (existingPin) {
//             const originalIndex = events.findIndex(ev =>
//               ev.date.toISOString() === event.date.toISOString() &&
//               ev.title === event.title
//           );

//               existingPin.setAttribute("data-index", originalIndex);
//               existingPin.addEventListener("click", (e) => {
//                   e.stopPropagation();
//                   const index = parseInt(e.target.getAttribute("data-index"));
//                   if (!isNaN(index)) {
//                       events.splice(index, 1);
//                       const currentUser = localStorage.getItem('currentUser');
//                       localStorage.setItem(`events_${currentUser}`, JSON.stringify(events));
//                       updateStickyNotes();
//                       updateTaskList();
//                   }
//               });
//           }
//       }
//   });
// }

// // Button functionality
// document.addEventListener("DOMContentLoaded", () => {
//     const popup = document.getElementById("popup");
//     const closeBtn = document.getElementById("close-popup");
//     const saveBtn = document.getElementById("save-event");
//     const buttons = document.querySelectorAll(".sidebar-button");

//     const currentUser = localStorage.getItem('currentUser');
//     if (currentUser) {
//         const storedEvents = JSON.parse(localStorage.getItem(`events_${currentUser}`));
//         if (storedEvents && Array.isArray(storedEvents)) {
//             events = storedEvents.map(e => ({
//                 ...e,
//                 date: new Date(e.date) // rehydrate dates
//             }));

//             updateStickyNotes();

//             updateTaskList();
//         }
//     }
    
//     //Button reactivity, just logs to check that each button is being clicked in console.
//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             //On click, bring up pop up window.
//         if (button.classList.contains("add-event-button")){
//             button.classList.toggle("active");
//             popup.classList.remove("hidden");
//             console.log("Sidebar button clicked:", button);
//         }
//         })
//     })
    
//     //integrates functionality of exit button.
//     closeBtn.addEventListener("click", () => {
//         popup.classList.add("hidden");
//       });
      
//     //integrates ability to close the pop up by clicking out of the pop up.
//     popup.addEventListener("click", (e) => {
//         if (e.target === popup) {
//           popup.classList.add("hidden");
//         }
//       });

//         // Event adder pop up
//         saveBtn.addEventListener("click", () => {
//           const dateInput = document.getElementById("event-date").value.trim();
//           const titleInput = document.getElementById("event-title").value.trim();
      
//           if (!dateInput || !titleInput) {
//               alert("Please enter both date and event title.");
//               return;
//           }
      
//           const currentUser = localStorage.getItem('currentUser');
//           if (!currentUser) {
//               alert("No user logged in.");
//               return;
//           }
      
//           // Create and store event
//           const eventDate = new Date(dateInput);
//           events.push({ date: eventDate, title: titleInput });

//           // Save to localStorage under this user's email
//           localStorage.setItem(`events_${currentUser}`, JSON.stringify(events));

//           // Update sticky notes and task list.
//           updateStickyNotes();
//           updateTaskList();
      
//           // Clear form and close popup
//           popup.classList.add("hidden");
//           document.getElementById("event-date").value = "";
//           document.getElementById("event-title").value = "";
//       });  

//       //Deleting tasks
//       document.querySelector(".task-list").addEventListener("click", function(e) {
//         if (e.target.classList.contains("delete-task")) {
//             const index = parseInt(e.target.getAttribute("data-index"));
//             if (!isNaN(index)) {
//                 events.splice(index, 1);
//                 const currentUser = localStorage.getItem('currentUser');
//                 localStorage.setItem(`events_${currentUser}`, JSON.stringify(events));
//                 updateStickyNotes();
//                 updateTaskList();
//             }
//         }
//     });
    
// });









// // >>>>>>> 0bf8f520c90dbed6dfa9ec9ad0a66f0273cac613
// >>>>>>> 25564288dae7fcf12c532d147d2c10f693620f1b
// Initialize variables for calendar and events
let nav = 0;
let clicked = null;
let events = [];

// Reference for current date
const today = new Date();
today.setHours(0,0,0,0);

const calendar = document.getElementById("TaskCalendar");
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function loadCalendar() {
    // Date tracking
    const dt = new Date();

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    console.log(day, month, year);

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    console.log({
        day,
        month,
        year,
        paddingDays,
        daysInMonth
    });

    // Create calendar days
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        if (i > paddingDays) {
            // Actual day cells
        } else {
            daySquare.classList.add('padding');
        }
    }
}

// Clock functionality
function updateClock() {
    let hours = document.getElementById("hrs");
    let min = document.getElementById("mins");
    let sec = document.getElementById("secs");
    
    let currentTime = new Date();
    
    hours.innerHTML = currentTime.getHours().toString().padStart(2, '0');
    min.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
    sec.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');
}

// Update clock every second
setInterval(updateClock, 1000);

// Function to update task list
function updateTaskList() {
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = "<div class='task-header'>TASK LIST</div>"; // Clear current list but keep header

    const sortedEvents = [...events].sort((a, b) => a.date - b.date); // Sorts events in ascending order

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

// Function to update sticky notes
function updateStickyNotes() {
    const noteElements = document.querySelectorAll(".sticky-note");
    const sortedEvents = [...events]
        .filter(e => {
            const eventDate = new Date(e.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate >= today;
        })
        .sort((a, b) => a.date - b.date)
        .slice(0, 8);

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

// =========================
// Theme Switching
// =========================

// Function to set the theme
function setTheme(themeName) {
    // Remove all theme classes
    document.body.classList.remove("soft", "dark", "pastel", "retro");
    
    // Add the selected theme class
    document.body.classList.add(themeName);
    
    // Save the theme preference to localStorage
    localStorage.setItem("theme", themeName);
    
    console.log(`Theme switched to: ${themeName}`);
}

// Add event listeners to theme buttons
document.getElementById("theme-soft")?.addEventListener("click", () => setTheme("soft"));
document.getElementById("theme-dark")?.addEventListener("click", () => setTheme("dark"));
document.getElementById("theme-pastel")?.addEventListener("click", () => setTheme("pastel"));
document.getElementById("theme-retro")?.addEventListener("click", () => setTheme("retro"));

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem("theme") || "soft";
    setTheme(savedTheme);
    
    // Call initial clock update
    updateClock();
    
    // Initialize calendar
    loadCalendar();
    
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
    
    // Button reactivity
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList.contains("add-event-button")) {
                button.classList.toggle("active");
                popup.classList.remove("hidden");
                console.log("Add event button clicked");
            } else if (button.classList.contains("search-button")) {
                console.log("Search button clicked");
            } else if (button.classList.contains("notifications-button")) {
                console.log("Notifications button clicked");
            } else if (button.classList.contains("mail-button")) {
                console.log("Mail button clicked");
            } else if (button.classList.contains("settings-button")) {
                console.log("Settings button clicked");
            }
        });
    });
    
    // Close popup functionality
    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
    
    // Close popup when clicking outside
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.add("hidden");
        }
    });

    // Event adder popup
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

        // Update sticky notes and task list
        updateStickyNotes();
        updateTaskList();
    
        // Clear form and close popup
        popup.classList.add("hidden");
        document.getElementById("event-date").value = "";
        document.getElementById("event-title").value = "";
    });  

    // Delete tasks from task list
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