console.log("hello world justin was here");

let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById("TaskCalendar");
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function loadCalendar() {
    const dt = new Date();

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

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

    // You can populate the calendar grid here if needed
}

loadCalendar();


// =========================
// Sidebar Button Functions
// =========================
const searchBtn = document.getElementById("search");
const taskBtn = document.getElementById("tasks");
const notifBtn = document.getElementById("notif");
const mailBtn = document.getElementById("mail");
const settingBtn = document.getElementById("settings");

searchBtn?.addEventListener("click", () => {
    alert("Search button clicked");
});

taskBtn?.addEventListener("click", () => {
    alert("Tasks button clicked");
});

notifBtn?.addEventListener("click", () => {
    alert("Notifications button clicked");
});

mailBtn?.addEventListener("click", () => {
    alert("Mail button clicked");
});

settingBtn?.addEventListener("click", () => {
    alert("Settings button clicked");
});


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

// Load saved theme preference on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "soft";
    setTheme(savedTheme);
});