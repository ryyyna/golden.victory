let session = sessionStorage.getItem("active");

if(!session){
sessionStorage.clear();

sessionStorage.setItem("balance",1000);
sessionStorage.setItem("gamesPlayed",0);
sessionStorage.setItem("gamesWon",0);
sessionStorage.setItem("gamesLost",0);
sessionStorage.setItem("balanceHistory",JSON.stringify([1000]));
sessionStorage.setItem("active",true);
}

let balance=parseInt(sessionStorage.getItem("balance"));

function updateBalance(){
document.querySelectorAll(".balanceValue").forEach(el=>{
el.textContent=balance;
});
}

function changeBalance(amount,win){

balance+=amount;
if(balance<0) balance=0;

/* збереження балансу */

sessionStorage.setItem("balance",balance);

/* історія балансу */

let history=JSON.parse(sessionStorage.getItem("balanceHistory")) || [];

history.push(balance);

sessionStorage.setItem("balanceHistory",JSON.stringify(history));

/* статистика ігор */

let played=parseInt(sessionStorage.getItem("gamesPlayed")) || 0;
sessionStorage.setItem("gamesPlayed",played+1);

if(win){
let w=parseInt(sessionStorage.getItem("gamesWon")) || 0;
sessionStorage.setItem("gamesWon",w+1);
}else{
let l=parseInt(sessionStorage.getItem("gamesLost")) || 0;
sessionStorage.setItem("gamesLost",l+1);
}

/* оновлення балансу на сторінці */

updateBalance();

}

window.onload=updateBalance;