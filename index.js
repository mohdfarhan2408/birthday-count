//variable
const cdDays = document.getElementById("days");
const cdHours = document.getElementById("hours");
const cdMinutes = document.getElementById("minutes");
const cdSeconds = document.getElementById("seconds");
const Birthday = "24 Aug 2022";

//function
const countdown = () => {
    const birthdayDate = new Date(Birthday);
    const currentDate = new Date();

    const totalSeconds = (birthdayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    cdDays.innerHTML = days;
    cdHours.innerHTML = hours;
    cdMinutes.innerHTML = minutes;
    cdSeconds.innerHTML = seconds;


    console.log(days, hours, minutes, seconds);
}

countdown();
setInterval(countdown, 1000);