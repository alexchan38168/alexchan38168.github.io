function myf(){
    x=document.getElementById("demo");
    x.innerHTML="noob"; 
}
function myf2(){
    x=document.getElementById("demo2");
    x.innerHTML="sb"; 
}
function myf3(){
    x=document.getElementById("demo3");
    x.innerHTML="rubbish"; 
}
function myf4(){
    x=document.getElementById("demo");
    y=document.getElementById("demo2");
    z=document.getElementById("demo3");
    x.innerHTML="ken"; 
    y.innerHTML="dickey mouse"; 
    z.innerHTML="queeny wrong"; 
}
function myf5(){
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    x=document.getElementById("demo5");
    x.innerHTML=time; 
}