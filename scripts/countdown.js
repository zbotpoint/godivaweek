function startTimer() {
    let then = new Date("Jan 4, 2021 00:00:01 EST").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();
        let time = then - now;
        let d = Math.floor(time / (1000 * 60 * 60 * 24));
        let h = Math.floor((time % (1000*60*60*24)) / (1000 * 60 * 60));
        let m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((time % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("countdown-timer").textContent =
            ""+ d+ (d!==1?" days, ":" day, ")
            +h+ (h!==1?" hours, ":" hour, ")
            +m+ (m!==1?" minutes, ":" minute, ")
            +" and "+ s+ (s!==1?" seconds.":" second.");

        // If the count down is finished, write some text
        if (time < 0) {
            clearInterval(x);
            document.getElementById("countdown-timer").textContent = "00d 00h 00m 00s";
            document.getElementById("countdown-details").textContent = "Please refresh the page.";
        }
    }, 1000);
}

function td (x) { // turns into 2 digits
    return String("0"+x).slice(-2);
}