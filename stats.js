window.onload=function(){

let played=parseInt(localStorage.getItem("gamesPlayed")) || 0;
let won=parseInt(localStorage.getItem("gamesWon")) || 0;
let lost=parseInt(localStorage.getItem("gamesLost")) || 0;

document.getElementById("played").textContent=played;
document.getElementById("won").textContent=won;
document.getElementById("lost").textContent=lost;

let history=JSON.parse(localStorage.getItem("balanceHistory")) || [];

let canvas=document.getElementById("chart");
let ctx=canvas.getContext("2d");

/* осі */

ctx.strokeStyle="white";
ctx.beginPath();

ctx.moveTo(40,10);
ctx.lineTo(40,420);

ctx.moveTo(40,420);
ctx.lineTo(940,420);

ctx.stroke();

/* підпис осей */

ctx.fillStyle="white";
ctx.font="14px Arial";

ctx.fillText("Кількість ігор",450,445);
ctx.fillText("Баланс",5,20);

/* графік */

ctx.strokeStyle="gold";
ctx.lineWidth=3;

ctx.beginPath();

history.forEach((balance,i)=>{

let x=40+i*20;
let y=420-balance/3;

if(i===0){
ctx.moveTo(x,y);
}else{
ctx.lineTo(x,y);
}

});

ctx.stroke();

}