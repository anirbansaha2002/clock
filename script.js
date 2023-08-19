let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let date = new Date();
let hours = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();

let today = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

document.getElementsByClassName("today")[0].innerHTML = today;
document.getElementsByClassName("month")[0].innerHTML = months[month];
document.getElementsByClassName("year")[0].innerHTML = year;

document.getElementsByClassName("hours")[0].innerHTML = updateNumber(hours);
document.getElementsByClassName("mins")[0].innerHTML = updateNumber(mins);
document.getElementsByClassName("secs")[0].innerHTML = updateNumber(secs);

intervalID = setInterval(updateTime ,1000);

function updateNumber(number){
    if(number >= 0 && number<10){
        number = "0"+ number;
    }
    return number;
}

function updateTime(){
    secs += 1;
    if(secs > 59){
        mins += 1;
        secs = 0;
    }
    if(mins > 59){
        hours += 1;
        mins = 0;
    }
    hours = hours % 24;
    document.getElementsByClassName("hours")[0].innerHTML = updateNumber(hours);
    document.getElementsByClassName("mins")[0].innerHTML = updateNumber(mins);
    document.getElementsByClassName("secs")[0].innerHTML = updateNumber(secs);
}

