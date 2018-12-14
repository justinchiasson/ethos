console.log(localStorage.getItem("name"));

if (localStorage.getItem("name") === null) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("entry").addEventListener("keyup", function (event) {
        event.preventDefault;
        if (event.keyCode === 13) {
            setUserName();
        }
    });
} else {
    document.getElementById("overlay").style.display = "none";
}

function setUserName() {
    localStorage.setItem("name", document.getElementById("entry").value);
    document.getElementById("overlay").style.display = "none";
}

// function for getting the date
function updateDate() {
    let date = new Date();
    let weekday;
    let month;
    let day = date.getDate();

    switch (date.getDay()) {
        case 0:
            weekday = "Sunday"
            break;
        case 1:
            weekday = "Monday"
            break;
        case 2:
            weekday = "Tuesday"
            break;
        case 3:
            weekday = "Wednesday"
            break;
        case 4:
            weekday = "Thursday"
            break;
        case 5:
            weekday = "Friday"
            break;
        case 6:
            weekday = "Saturday"
    }

    switch (date.getMonth()) {
        case 0:
            month = "January"
            break;
        case 1:
            month = "February"
            break;
        case 2:
            month = "March"
            break;
        case 3:
            month = "April"
            break;
        case 4:
            month = "May"
            break;
        case 5:
            month = "June"
            break;
        case 6:
            month = "July"
            break;
        case 7:
            month = "August"
            break;
        case 8:
            month = "September"
            break;
        case 9:
            month = "October"
            break;
        case 10:
            month = "November"
            break;
        case 11:
            month = "December"
            break;
    }

    let suffix = "th";
    if (day === 1 || day === 21 || day === 31)
        suffix = "st";
    if (day === 2 || day === 22)
        suffix = "nd";
    if (day === 3 || day === 23)
        suffix = "rd";

    document.getElementById("date").innerHTML = "<p>It is " + weekday + ", " + month + " " + date.getDate() + suffix + "<p>"
    setTimeout(updateDate, 1000);
}

document.getElementById("date").onload = updateDate();

// clock function
function updateTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = addZero(m);
    s = addZero(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    setTimeout(updateTime, 500);
}

function addZero(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

document.getElementById("time").onload = updateTime();


// greeting function
function updateGreeting() {
    let date = new Date();
    let hour = date.getHours();
    console.log(hour);
    let greeting = "";
    if ((0 <= hour && hour < 4)||(18 <= hour && hour < 24)) {
        greeting = "Good evening, " + localStorage.getItem("name");
    } else if (4 <= hour && hour < 12) {
        greeting = "Good morning, " + localStorage.getItem("name");
    } else {
        greeting = "Good afternoon, " + localStorage.getItem("name");
    }
    document.getElementById("greeting").innerHTML = greeting;
    setTimeout(updateGreeting, 1000);
}

document.getElementById("greeting").onload = updateGreeting();