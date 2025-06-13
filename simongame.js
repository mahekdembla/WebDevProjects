let gameSeq=[];
let userSeq=[];


let started=false;
let level=0;
 let h2=document.querySelector("h2");
 let btns=["yellow","red","purple","green"];

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started");
        started=true;

        levelup();
    }
})
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
   
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
}
function btnpress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");

    },250);
}

function checkAns(idx){
    // console.log("Curr level",level);
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
        
    }else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br>press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150)
        reset();
    }
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}