let body=document.querySelector("body");
let randoml=[];
let userl=[];
let started=false;
let level=0;
let color=["red","green","yellow","blue"];
let h3=document.querySelector("h3");
document.addEventListener("keypress" ,function(){
    if(started==false){
        console.log("game started");
        started=true;
        levels();
    }
})
function flash(rdbtn){
   rdbtn.classList.add("flash")
   setTimeout(()=>{
    rdbtn.classList.remove("flash");
   },150);
}
function levels(){
    userl=[];
    level++;
    h3.innerText=`level=${level}`;
    let idx=Math.floor(Math.random()*3);
    let rdcolor=color[idx]; 
    let rdbtn=document.querySelector(`.${rdcolor}`);
    randoml.push(rdcolor);
    flash(rdbtn);
    // console.log(randoml);

}
function check(n){
    
    if(userl[n]===randoml[n]){
      if(userl.length==randoml.length)  setTimeout((levels),1000);//settimeout
    }
    else{
        console.log("wrong input");
        h3.innerHTML=`Game Over.your Score is${level} <br>press any key to start`;
       reset();
    }
}
function flashuser(rdbtn){
    rdbtn.classList.add("bba")
    setTimeout(()=>{
     rdbtn.classList.remove("bba");
    },150);
 }
function btnpress(){
    let btn=this;
    flashuser(btn);
     us=btn.getAttribute("id");
    userl.push(us);
    check(userl.length-1);
    // console.log(userl);
}
let allbtn=document.querySelectorAll(".box");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    randoml=[];
    userl=[];
    started=false;
    level=0;
    
}
