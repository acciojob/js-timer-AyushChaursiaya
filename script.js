// write js code here if required
function updateTimer() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros to single digit values
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    var timerString = day + '/' + month + '/' + year + ', ' + hours + ':' + minutes + ':' + seconds;
    document.getElementById('timer').innerText = timerString;
}

// Update the timer every second
setInterval(updateTimer, 1000);
