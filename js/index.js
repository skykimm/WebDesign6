var firstslide = document.querySelector(".img:first-child");
var openmodals = document.querySelector(".closemodal");

function slideshow(){
    var currentslide = document.querySelector(".showing");
    if(currentslide){
        currentslide.classList.remove("showing");
        var nextslide = currentslide.nextElementSibling;
        
        if(nextslide){
            nextslide.classList.add("showing");
        }
        else{
            firstslide.classList.add("showing");
        }
    }
    else{
         firstslide.classList.add("showing");
    }
    
} 

slideshow();
window.setInterval("slideshow()",2000);

function openmodal(){
    openmodals.style.display="block";
}

function closebtn(){
    openmodals.style.display="none";
}
openmodals.addEventListener("click",openmodal);
openmodals.addEventListener("click",closebtn);