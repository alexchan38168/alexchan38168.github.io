function myf(){
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    x=document.getElementById("demo");
    x.innerHTML=time; 
}

function f(){
    let height = document.getElementById("height").value; 
    let weight = document.getElementById("weight").value; 
    document.getElementById("y").src = "./image/f9ed3758550807bd9eaeaa0b27fff7b.jpg";

    let bmi = weight/(height*height);
    if (bmi>=27){
        x=document.getElementById("x");
        x.innerHTML="Your BMI is "&& bmi.toFixed(1);
        alert("very fat boy.")
    }
    else if (bmi>=24){
        let height = document.getElementById("height").value; 
        let weight = document.getElementById("weight").value; 
        let bmi = weight/(height*height);
        x=document.getElementById("x");
        x.innerHTML="Your BMI is "&& bmi.toFixed(1);
        document.getElementById("y").src = "./image/cc52fe9a142d4db79c11cbdeb676856.jpg";
        alert("fat boy.")
    }
    else if (bmi>=18.5){
        let height = document.getElementById("height").value; 
        let weight = document.getElementById("weight").value; 
        let bmi = weight/(height*height);
        x=document.getElementById("x");
        x.innerHTML="Your BMI is " && bmi.toFixed(1);
        document.getElementById("y").src = "./image/f9ed3758550807bd9eaeaa0b27fff7b.jpg";
        alert("normal boy.")
    }
    else {
        let height = document.getElementById("height").value; 
        let weight = document.getElementById("weight").value; 
        let bmi = weight/(height*height);
        x=document.getElementById("x");
        x.innerHTML="Your BMI is "&& bmi.toFixed(1);
        document.getElementById("y").src = "./image/cc52fe9a142d4db79c11cbdeb676856.jpg";
        alert("weak boy.")
    }
}