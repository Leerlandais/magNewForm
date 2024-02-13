const ageErreur = document.querySelector("#ageErreur");
const errMessage = document.querySelector("#errMessage");
const nameF = document.querySelector("#nameF").value;
const nameS = document.querySelector("#nameS").value;
const myForm = document.querySelector("#myForm");
const firstLab = document.querySelector("#firstLab");
const surLab = document.querySelector("#surLab");
const passLab = document.querySelector("passLab");


myForm.addEventListener('submit', function(event) {
    event.preventDefault();
});


function validateAge() {
    const ageToCheck = document.getElementById("ageInput").value
    console.log(ageToCheck)
    if (isNaN(ageToCheck)){
        ageErreur.textContent = "Please enter your age in numeric form (e.g 24)";
    }else if (ageToCheck < 20) {
        ageErreur.textContent = "Sorry, you are too young to access this site";
        ageErreur.style.color = "red";
    }else if (ageToCheck >= 20) {
        ageErreur.textContent = "Transferring you now";
    ageErreur.style.color = "green";
    setTimeout(function () {
        window.location.href = "magibNewForm.html";
    }, 2000);
    }else {
    ageErreur.textContent = "Hmm, something has gone wrong with validateAge()";
    }

}

function errorChecker() {
    const passWd = document.querySelector("#password").value
    if (nameF === "" || /\d/.test(nameF)) {
        errMessage.textContent = "Please enter your first name";
        errMessage.classList.add = "swellTime";
        firstLab.classList.add = "swellTime";
    }else if (nameS ="" || /\d/.test(nameS)) {
        errMessage.textContent = "Please enter your last name";
        errMessage.classList.add = "swellTime";
        surLab.classList.add = "swellTime";
    }else if (passWd = ""){
        errMessage.textContent = "Please enter a password";
        passLab.textContent = "swellTime";
    }else {
        passChecker(passWd);
    }
}

function passChecker (pass) {
    
}
    
    