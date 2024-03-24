let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let date = new Date();
let today = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

document.getElementsByClassName("today")[0].innerHTML = today;
document.getElementsByClassName("month")[0].innerHTML = months[month];
document.getElementsByClassName("year")[0].innerHTML = year;

setInterval(myFunction ,100);

function myFunction() {
    let time = new Date();
    document.getElementsByClassName("time")[0].innerHTML=
    time.getHours() + " : " +
    time.getMinutes() + " : " +
    time.getSeconds();
  }

