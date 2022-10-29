// let username = document.querySelector(".username");
let password = document.querySelector(".password");
let email = document.querySelector(".email");
let create = document.querySelector(".create");
let users = JSON.parse(localStorage.getItem("users") || "[]");
let error = document.querySelector(".error");
error.innerHTML = "";
console.log(users);
create.onclick = function () {
  if (email.value.includes("@") === true) {
    let menber = users.filter(function (user) {
      return user.email === email.value && user.password === password.value;
    });
    console.log(menber);
    if (menber.length > 0) {
      error.innerHTML = "Successful login";
      password.value = "";
      email.value = "";
      window.localStorage.setItem("login", menber[0].name);
        login = menber[0].name
        signup.classList.add("disable");
        signin.classList.add("disable");
        list.classList.add("disable");
        userName.classList.remove("disable");
        userName.innerHTML = "Hello: " + login;
      setTimeout(function () {
        window.location = "../home/Thos_home.html";
      }, 3000);

    } else {
      error.innerHTML = "This account does not exist.";
    }
  } else {
    error.innerHTML = "Invalid email.";
    password.value = "";
    email.value = "";
  }
};


