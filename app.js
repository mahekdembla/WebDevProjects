//part 9
// let para1=document.createElement("p");
// para1.innerText="Hey,I'm red!";
// document.querySelector("body").append(para1);
// para1.classList.add("red");

// let heading=document.createElement("h3");
// heading.innerText="Hey,i'm blue!";
// document.querySelector("body").append(heading);
// heading.classList.add("blue");

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para2=document.createElement("para2");
// h1.innerText="I am in div";
// para2.innerText="ME TOO !";
// div.append(h1);
// div.append(para2);

// div.classList.add("box");
// document.querySelector("body").append(div);

// // practice Q1 chapter9
// let input=document.createElement("input")
// ;
// let button=document.createElement("button");
// button.innerText="Click me!";
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);

// // @2
// button.setAttribute("id" ,"btn");
// input.setAttribute("placeholder", "username");

// // Q3
// document.querySelector("#btn").style.backgroundColor = "blue";
// document.querySelector("#btn").style.color = "white";

//part 10 
//  let btn=document.querySelector("button");

//  btn.addEventListener("click" , function() {
//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor();
//     h3.innerText=randomColor;
//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;
//     console.log("color updated");
    

//  });

//  function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color=`rgb(${red},${green},${blue})`;
//     return color;

//  }

// todo using DOM

let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click" ,function(){
   let item=document.createElement("li");
   item.innerText=inp.value;

   let delBtn=document.createElement("button");
   delBtn.innerText="delete";
   delBtn.classList.add("delete");
   item.appendChild(delBtn);

   ul.appendChild(item);
   console.log("inp.value");
   inp.value="";
   
})

let delBtns=document.querySelectorAll(".delete");
for(delBtn of delBtns){
   delBtn.addEventListener("click", function() {
      let par=this.parentElement;
      console.log(par);
      par.remove();
      

   })
}
