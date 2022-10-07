const btnProfile = document.querySelector(".btnProfile");
const dropdown = document.querySelector(".dropdownProfile");
const body = document.getElementsByTagName("body");


btnProfile.onclick = function() {
    if (dropdown.style.display == "none"){
        dropdown.style.display = "initial";
    }else{
        dropdown.style.display = "none";
    }
}

body.onclick = function(){
    if(dropdown.style.display = "initial"){
        dropdown.style.display = "none";
    }
}