const ratingform = document.querySelector("#ratingform");
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
        var current = window.location.href;
        var newpage = current.replace(/index/,"thankyou");
        window.location.href = newpage;
    }
}

function setRatingValue(){
    ratingvalue = sessionStorage.getItem("rating");
    console.log(ratingvalue + "HAHA");
    var selectedratingspan = document.querySelector("#selectedrating");
    console.log(selectedratingspan);
    selectedratingspan.innerHTML = ratingvalue;
    return
}