const ageErreur = document.querySelector("#ageErreur");
const errMess1 = document.querySelector("#errMess1");
const errMess2 = document.querySelector("#errMess2");
const errCapMess = document.querySelector("#errCapMess");
const errNumMess = document.querySelector("#errNumMess");
const errSymMess = document.querySelector("#errSymMess");
const errLenMess = document.querySelector("#errLenMess");
const toggleIt = document.querySelector("#toggleShow");
const myForm = document.querySelector("#myForm");
const firstLab = document.querySelector("#firstLab");
const surLab = document.querySelector("#surLab");
const passLab = document.querySelector("#passLab");



myForm.addEventListener('submit', function(event) {
    event.preventDefault();
});



toggleIt.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    const butType = toggleIt.textContent === "Show" ? "Hide" : "Show";
    toggleIt.textContent = butType;
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
    const nameF = document.querySelector("#nameF").value;
    const nameS = document.querySelector("#nameS").value;
    const passWd = document.querySelector("#password").value
    let stopMe = false;
    if (nameF === "") {
        errMess1.textContent = "Please enter your first name";
        firstLab.classList.add("swellTime");
        stopMe = true;
    }else {
        errMess1.textContent="";
        stopMe = false;
    }
    if(/\d/.test(nameF)) {
        errMess1.textContent = "Your name, please, not a number";
        firstLab.classList.add("swellTime");
        stopMe = true;
    }else {
        errMess1.textContent="";
        stopMe = false;
    }
    if (nameS === "") {
        errMess1.textContent = "Please enter your last name";
        surLab.classList.add("swellTime");
        stopMe = true;
    }else {
            errMess1.textContent="";
            stopMe = false;
        }
        if(/\d/.test(nameS)) {
            errMess1.textContent = "Your name, please, not a number";
            surLab.classList.add("swellTime");
            stopMe = true;
        }else {
            errMess1.textContent="";
            stopMe = false;
        }
            if (passWd === ""){
                errMess1.textContent = "Please enter a password";
                stopMe = true;
                passLab.classList.add("swellTime");
            }
                
                if(stopMe) {
                    return;
                }else {
                    passChecker(passWd, nameF, nameS);
                }
            }
        

function passChecker (pass, firstN, secN) {
    console.log("Got This Far");
 const testCap = /["A-Z"]/.test(pass);
 const testNum = /\d/.test(pass);
 const testSym = /[!@#$%^'"/=:.?<>&,;*()_+-]/.test(pass);
 const testLen = pass.length >= 10;
 
 if (!testCap) { 
    errMess1.style.display = "0";
    errMess2.style.opacity = "1";     
    errCapMess.classList.add("swellTime");
    console.log("1", errCapMess.classList);
    }
if (!testNum) {
    errMess1.style.display = "0";
    errMess2.style.opacity = "1";
    errNumMess.classList.add("swellTime");
    console.log("2", errNumMess.classList);
   }
if (!testSym) {
    errMess1.style.display = "0";
    errMess2.style.opacity = "1";
    errSymMess.classList.add("swellTime");
    console.log("3", errSymMess.classList);
   }
if (!testLen) {
    errMess1.style.display = "0";
    errMess2.style.opacity = "1";
    errLenMess.classList.add("swellTime");
    console.log("4", errLenMess.classList);
   }
   
   if (testCap && testLen && testNum && testSym) {
       errMess2.style.opacity = "0";
       errMess1.style.display = "1";
       errMess1.classList.add("swellTime");
       errMess1.textContent = "Excellent, " + firstN + " " + secN + ", let's visit my site";
       setTimeout(function () {
        window.location.href = "https://2023.webdev-cf2m.be/Lee/Site/";
    }, 1999.999999999999999999999999999999999999999999999999999999999);
    }
}
    
    