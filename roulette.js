const numbers=[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];

let canvas;
let ctx;
let currentHighlight=-1;

function drawWheel(highlightIndex=-1){

ctx.clearRect(0,0,420,420);

let centerX=210;
let centerY=210;
let radius=200;

let arc=(2*Math.PI)/numbers.length;

numbers.forEach((num,i)=>{

let start=i*arc;
let end=start+arc;

ctx.beginPath();
ctx.moveTo(centerX,centerY);
ctx.arc(centerX,centerY,radius,start,end);

let color;

if(num===0) color="#008000";
else if(num%2===0) color="#111";
else color="#b30000";

ctx.fillStyle=color;
ctx.fill();

if(i===highlightIndex){
ctx.lineWidth=6;
ctx.strokeStyle="gold";
ctx.stroke();
}

ctx.save();

ctx.translate(centerX,centerY);
ctx.rotate(start+arc/2);

ctx.fillStyle="white";
ctx.font="14px Arial";
ctx.textAlign="right";

ctx.fillText(num,radius-15,5);

ctx.restore();

});

}

function spinRoulette(){

if(balance<=0){
alert("Баланс 0!");
return;
}

let result=numbers[Math.floor(Math.random()*37)];
let index=numbers.indexOf(result);

drawWheel();

setTimeout(()=>{
drawWheel(index);
},600);

let color=(result%2==0)?"black":"red";
if(result==0)color="green";

let win=false;

if(document.getElementById("colorBet").value===color)
win=true;

if(document.getElementById("evenBet").value==="even" && result%2==0)
win=true;

if(document.getElementById("evenBet").value==="odd" && result%2==1)
win=true;

if(parseInt(document.getElementById("numberBet").value)===result){
changeBalance(100,true);
resultText="🎉 Виграш! Число "+result;
}
else if(win){
changeBalance(10,true);
resultText="🎉 Виграш! Випало "+result;
}
else{
changeBalance(-10,false);
resultText="😢 Програш. Випало "+result;
}

document.getElementById("result").innerHTML=resultText;

}

window.onload=function(){

updateBalance();

canvas=document.getElementById("wheelCanvas");
ctx=canvas.getContext("2d");

drawWheel();

}