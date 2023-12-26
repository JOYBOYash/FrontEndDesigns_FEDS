var kil = document.getElementById('killua')
var gon = document.getElementById("gon");
const lig = document.getElementById("gonli");


function gonev() {
    if (kil.style.visibility = "visible"){
        kil.style.visibility = "none";
        gon.style.visibility = "visible";
    } else{
        gon.style.visibility = "visible";
    } 
       
}

function kilev() {
    if (gon.style.visibility = "visible"){
        gon.style.visibility = "none";
        kil.style.visibility = "visible";
    } else{
        kil.style.visibility = "visible";
    }  
}


// const chars = ["gon","killua"];
