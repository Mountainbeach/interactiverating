const ratingform = document.querySelector("#ratingform");
const thankyou = document.querySelector(".thankyoudiv");
const selectedratingspan = document.querySelector("#selectedrating");
var ratingvalue;

function thankYou(){   
    ratingvalue = ratingform.rating.value;
    console.log(ratingvalue);
    sessionStorage.setItem("rating", ratingvalue);
    if(!ratingvalue){
        console.log("INVALID");
        return;
    }
    else{
        thankyou.style.display = "block";
        selectedratingspan.innerHTML = ratingvalue;
    }
}
