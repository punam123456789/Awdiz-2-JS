function popup() {
    console.log("Login succeed.")
    alert("Login succeed.")
}

// Step 1  : Get user typed data from html to JS = Completed
// Step 2 : Get all users data into JS from LS = Completed
// Step 3 : Iterate all users (LS) with user typed data 
// Step 4 : If email & password both match at same time then
//  show user suceess
function login(event) {
    event.preventDefault();
    // alert("Login function called.")
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    // console.log(userEmail,userPassword,"check here")

    var LS = JSON.parse(localStorage.getItem("Users"));
    // console.log(LS, " - LS here")

    var currentUser;
    var flag = false;
    for (var i = 0; i < LS.length; i++) {
        // console.log(i, LS[i])
        // console.log(i, LS[i].userEmail, LS[i].userPassword )
        if (LS[i].userEmail == userEmail && LS[i].userPassword == userPassword) {
            // alert("Email and Pass matchecd")
            flag = true;
            currentUser = LS[i];
        }
    }
    if (flag == true) {
        // console.log(currentUser,"currentUser");
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        window.location.href = './home.html';
        alert("Login successfull.")
    } else {
        alert("Credential not matched.")
    }
}

