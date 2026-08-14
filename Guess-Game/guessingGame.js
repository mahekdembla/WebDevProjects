const max=prompt("Enter the max number");
console.log(max);
const random= Math.floor(Math.random() * max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("User quits .Your random number was" ,random);
        break;
    }
    if(guess==random){
        console.log("correct gueess,Congrates!",random);
        break;
    }else if(guess<random){
        guess=prompt("Your guess was too small.")
    }else{
        guess=prompt("Your guess was too large.")
    }
   
}
