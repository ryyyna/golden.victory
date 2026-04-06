function drawDice(el,num){

el.innerHTML="";

const map={
1:[5],
2:[1,9],
3:[1,5,9],
4:[1,3,7,9],
5:[1,3,5,7,9],
6:[1,3,4,6,7,9]
};

for(let i of map[num]){
let dot=document.createElement("div");
dot.className="dot";

dot.style.gridArea=Math.ceil(i/3)+" / "+((i-1)%3+1);

el.appendChild(dot);
}
}

function rollDice(){

if(balance<=0){
alert("Баланс 0!");
return;
}

let a=Math.floor(Math.random()*6)+1;
let b=Math.floor(Math.random()*6)+1;

drawDice(dice1,a);
drawDice(dice2,b);

let sum=a+b;

let guess=document.getElementById("guess").value;

let win=false;

if(guess==="more" && sum>7) win=true;
if(guess==="less" && sum<7) win=true;
if(guess==="seven" && sum===7) win=true;

if(win){
changeBalance(20,true);
result.innerHTML="🎉 Виграш! Сума "+sum;
}else{
changeBalance(-10,false);
result.innerHTML="😢 Програш. Сума "+sum;
}

}