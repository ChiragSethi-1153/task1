function save(e) {
    e.preventDefault();
    
    let name = document.getElementById("names").value
    let email = document.getElementById("email").value
    let setPassword = document.getElementById("setPassword").value
    let confirmPassword = document.getElementById("confirmPassword").value

    localStorage.getItem("names")
    localStorage.setItem("names",name)
    console.log("Name: ", name)

    localStorage.getItem("email")
    localStorage.setItem("email", email)
    console.log("Email: ", email)
    
    localStorage.getItem("setPassword")
    localStorage.setItem("setPassword", setPassword)

    localStorage.getItem("confirmPassword")
    localStorage.setItem("confirmPassword", confirmPassword)

     
}
