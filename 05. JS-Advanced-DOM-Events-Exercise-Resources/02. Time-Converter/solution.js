function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    daysBtn.addEventListener('click', () => {
        let day = days.value;
        hours.value = day*24;
        minutes.value = day*1440;
        seconds.value = day*86400;
    });
    hoursBtn.addEventListener('click', () => {
        let day = hours.value;
        days.value = day/24;
        minutes.value = day*60;
        seconds.value = day*3600;
    });
    minutesBtn.addEventListener('click', () => {
        let day = minutes.value;
        hours.value = day/60;
        days.value = day/1440;
        seconds.value = day*60;
    });
    secondsBtn.addEventListener('click', () => {
        let day = seconds.value;
        hours.value = day/3600;
        minutes.value = day/60;
        days.value = day/86400;
    });
}