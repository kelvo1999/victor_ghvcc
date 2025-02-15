function weeklySchedule(day) {
    switch (day.toLowerCase()) {
        case "monday":
            console.log("Hit the gym and start the week strong! 💪");
            break;
        case "tuesday":
            console.log("Work on my JavaScript projects. 🖥️");
            break;
        case "wednesday":
            console.log("Midweek break, relax and watch a movie. 🎬");
            break;
        case "thursday":
            console.log("Learn something new, maybe a coding challenge! 🤓");
            break;
        case "friday":
            console.log("Hang out with friends, it's weekend eve! 🍕");
            break;
        case "saturday":
            console.log("Time for side hustles and passion projects. 🚀");
            break;
        case "sunday":
            console.log("Chill, reset, and prepare for the new week. 😌");
            break;
        default:
            console.log("Bruh, that ain't a valid day. Try again. 😅");
    }
}

let today = prompt("Enter a day of the week:");
weeklySchedule(today);