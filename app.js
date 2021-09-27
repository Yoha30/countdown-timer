setInterval( function (){
var countDate = new Date("Sep 30, 2021, 10:30:00").getTime();
var now = new Date().getTime();
var timeLeft = (countDate - now);
var days =Math.floor(timeLeft/(1000*60*60*24));
var hours = Math.floor((timeLeft %(1000*60*60*24))/(1000*60*60));
var mins = Math.floor((timeLeft %(1000*60*60))/(1000*60));
var sec = Math.floor((timeLeft % (1000*60))/1000);
document.getElementById('days').innerText = "0" + days ;
document.getElementById('hours').innerText = hours ;
document.getElementById('mins').innerText = mins ;
document.getElementById('sec').innerText = sec ;
},1000);