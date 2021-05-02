const newChanges = '1 Jan 2025';

const years_elem = document.getElementById('years');
const months_elem = document.getElementById('months');
const days_elem = document.getElementById('days');
const hours_elem = document.getElementById('hours');
const minutes_elem = document.getElementById('minutes');
const seconds_elem = document.getElementById('seconds');

function countdown() {
    const new_year_date = new Date(newChanges);
    const current_date = new Date();

    total_seconds = (new_year_date - current_date) / 1000;
    years = Math.floor(total_seconds / (60 * 60 * 24 * 30 * 12));
    total_seconds = total_seconds - years * 60 * 60 * 24 * 30 * 12;

    months = Math.floor(total_seconds / (60 * 60 * 24 * 30));
    total_seconds = total_seconds - months * 60 * 60 * 24 * 30;

    days = Math.floor(total_seconds / (60 * 60 * 24));
    total_seconds = total_seconds - days * 60 * 60 * 24;

    hours = Math.floor(total_seconds / (60 * 60));
    total_seconds = total_seconds - hours * 60 * 60;

    mins = Math.floor(total_seconds / 60);
    total_seconds = total_seconds - mins * 60;

    total_seconds = Math.floor(total_seconds);

    // console.log(years, months, days, hours, mins, total_seconds);

    years_elem.innerHTML = years;
    months_elem.innerHTML = months;
    days_elem.innerHTML = days;
    hours_elem.innerHTML = formatTime(hours);
    minutes_elem.innerHTML = formatTime(mins);
    seconds_elem.innerHTML = formatTime(total_seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);