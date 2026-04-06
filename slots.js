const symbols=["🍒","🍒","🍋","⭐","💎"];

function spinSlots(){

if(balance<=0){
alert("Баланс 0!");
return;
}

let a=symbols[Math.floor(Math.random()*symbols.length)];
let b=symbols[Math.floor(Math.random()*symbols.length)];
let c=symbols[Math.floor(Math.random()*symbols.length)];

s1.textContent=a;
s2.textContent=b;
s3.textContent=c;

if(a===b && b===c){
changeBalance(100,true);
result.innerHTML="💎 JACKPOT!";
}else{
changeBalance(-10,false);
result.innerHTML="😢 Програш";
}

}