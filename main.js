const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

const $ = (id) => document.getElementById(id);
const zeroPadding = (num) => String(num).padStart(2, '0');

const clock = () => {
    const today = new Date();
    let h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();

    // Calculate AM/PM and convert 24-hour format to 12-hour format
    const ampm = h < 12 ? 'AM' : 'PM';
    h = h % 12;
    h = h === 0 ? 12 : h; // Convert 0 to 12 for 12-hour format

    const day = today.getDay(); // Day of the week (0 = Sunday, 1 = Monday, etc.)
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    // Update clock display
    $('hours').innerHTML = zeroPadding(h);
    $('min').innerHTML = zeroPadding(m);
    $('sec').innerHTML = zeroPadding(s);
    $('ampm').innerHTML = ampm;

    // Highlight the current day of the week
    daysOfWeek.forEach((dayName, index) => {
        const dayElement = $(`day-${dayName}`);
        if (dayElement) {
            if (index === day) {
                dayElement.classList.add('active');
            } else {
                dayElement.classList.remove('active');
            }
        }
    });

    // Update date display
    $('year').innerHTML = year;
    $('month').innerHTML = months[month];
    $('day').innerHTML = zeroPadding(date);
};

// Call the clock function every 400ms
setInterval(clock, 400);

// Initialize the clock on page load
clock();
