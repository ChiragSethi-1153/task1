function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function submitForm(e) {
  e.preventDefault();
  let mail = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  let data = JSON.parse(localStorage.getItem("data")) || [];

  if (data.length != 0) {
    data = data.filter((obj) => obj.email != mail);
  }

  const obj = {
    email: mail,
    password: pass,
  };

  data.push(obj);
  console.log(data);
  localStorage.setItem("data", JSON.stringify(data));
}

function save(e) {
  e.preventDefault();

  let name = document.getElementById("names").value;
  let email = document.getElementById("email").value;
  let setPassword = document.getElementById("setPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  localStorage.getItem("names");
  localStorage.setItem("names", name);
  console.log("Name: ", name);

  localStorage.getItem("email");
  localStorage.setItem("email", email);
  console.log("Email: ", email);

  localStorage.getItem("setPassword");
  localStorage.setItem("setPassword", setPassword);

  localStorage.getItem("confirmPassword");
  localStorage.setItem("confirmPassword", confirmPassword);
}
