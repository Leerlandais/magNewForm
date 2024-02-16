const ageErreur = document.querySelector("#ageErreur");
const slidingBox = document.querySelector("#slidingBox");


function validateAge() {


    const ageToCheck = document.getElementById("ageInput").value
    console.log(ageToCheck)
    if (isNaN(ageToCheck)){
        ageErreur.textContent = "Please enter your age in numeric form (e.g 24)";
        ageErreur.classList.add("swellTime");
        clearSwell();
    }else if (ageToCheck < 20) {
        ageErreur.textContent = "Sorry, you are too young to access this site";
        ageErreur.classList.add("swellTime");
        clearSwell();
    }else if (ageToCheck >= 20) {
        ageErreur.textContent = "Transferring you now";
        ageErreur.style.color = "green";
        ageErreur.classList.add("swellTime");
        slidingBox.classList.add("spinIt");
        clearSwell();
    setTimeout(function () {
        window.location.href = "magibNewForm.html";
    }, 2000);
    }else {
    ageErreur.textContent = "Hmm, something has gone wrong with validateAge()";
    }
    
}


function clearSwell() {
    setTimeout(function () {
    window.location.reload()
    
}, 2500);
}






    
    