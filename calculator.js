let string="";
let buttons=document.querySelectorAll(".button");
let optBtn = document.querySelector(".optBtn");
let options = document.querySelector(".options");
let cancelBtn = document.querySelector(".cancelBtn");
let cancelOptBtn = document.querySelector(".cancelOptBtn");
let light = document.querySelector(".light");
let themeBox = document.querySelector(".theme");
let themeOpt = document.querySelector(".themeOpt");
let body = document.querySelector("body");
let paragraphs = document.querySelectorAll("p");
let input = document.querySelector(".input");
let optBtnst = document.querySelector(".optBtnst");
let dark = document.querySelector(".dark");
let background = document.querySelector(".bg");
let bgOpt = document.querySelector(".bgOpt");
let galaxy1 = document.querySelector(".galaxy1");
let galaxy2 = document.querySelector(".galaxy2");
let none = document.querySelector(".none");
let superCo = document.querySelector(".superCo");
let cancelBgOptBtn = document.querySelector(".cancelBgOptBtn");

// main 
Array.from(buttons).forEach((button) => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML =="=") {
            string = eval(string);
            document.querySelector(".input").value=string;
        }else if (e.target.innerHTML =="AC"){
            string ="";
            document.querySelector(".input").value=string;
        } else if (e.target.innerHTML =="C"){
            string = string.slice(0,-1);
            document.querySelector(".input").value=string;
        }   else{
            string=string + e.target.innerHTML;
        document.querySelector(".input").value=string;
        }        
    })
})


// to display options 
optBtn.addEventListener("click",()=>{
    console.log("hello");
    options.style.left = "0vw"
    
})
cancelBtn.addEventListener("click",()=>{
    console.log("hello");
    options.style.left = "-800vw"
    
})
themeBox.addEventListener("click",()=>{
    themeOpt.style.left = "0vw";
})
light.addEventListener("click",()=>{
    body.style.background = "white";
    options.style.background = "white";
    themeOpt.style.background = "white";
    paragraphs.forEach((p)=>{
        p.style.color = "black";
    })
    input.style.color = "black";
    bgOpt.style.background = "white";
    cancelOptBtn.style.filter = "invert(0)";
    cancelBtn.style.filter = "invert(0)";
    cancelBgOptBtn.style.filter = "invert(0)";
    optBtnst.style.filter = "invert(0)";
})
dark.addEventListener("click",()=>{
    body.style.background = "black";
    options.style.background = "black";
    themeOpt.style.background = "black";
    paragraphs.forEach((p)=>{
        p.style.color = "white";
    })
    input.style.color = "white";
    bgOpt.style.background= "black"
    cancelOptBtn.style.filter = "invert(1)";
    cancelBgOptBtn.style.filter = "invert(1)";
    cancelBtn.style.filter = "invert(1)";
    optBtnst.style.filter = "invert(1)";
})
cancelOptBtn.addEventListener("click",()=>{
    console.log("hello");
    themeOpt.style.left = "-800vw"
    
})


// background image 
background.addEventListener("click",()=>{
    bgOpt.style.left = "0vw";
})
galaxy1.addEventListener("click",()=>{
    console.log("img");
    
    superCo.style.backgroundImage = "url(img/1.jpg)";
})
galaxy2.addEventListener("click",()=>{
    superCo.style.backgroundImage = "url(img/2.jpg)";
})
none.addEventListener("click",()=>{
    superCo.style.backgroundImage = "";
})
cancelBgOptBtn.addEventListener("click",()=>{
    console.log("hello");
    bgOpt.style.left = "-800vw"
    
})



