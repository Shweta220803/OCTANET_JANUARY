function submitForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var organization = document.getElementById("organization").value;

    var errorMessage = document.getElementById("errorMessage");

    if (fullName === "" || email === "" || organization === "") {
      errorMessage.textContent = "please fill these all are required.";
    } else {
      errorMessage.textContent = ""; 

    alert('Registration Successful!'); 
}
}

