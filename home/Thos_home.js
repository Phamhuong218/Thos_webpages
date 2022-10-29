// Code for "Enter email address" part
let $emailInput = document.getElementById("email-input");
let $form = document.getElementById("form-tag");
let $subscribeButton = document.getElementById("subscribe-btn");
let $notify = document.getElementById("notify");
function checkEmail(event) {
  let value = $emailInput.value;
  if (value === "") {
    $notify.innerHTML = "This field is required";
    $notify.classList.add("style");
  } else if (value.includes("@") === false) {
    $notify.innerHTML = "Please enter a valid email address";
    $notify.classList.add("style");
  } else {
    $notify.classList.add("style1");
    $notify.innerHTML = "Thank you";
    let $emailLabel = document.getElementById("email-label");
    $form.removeChild($emailLabel);
    $form.removeChild($emailInput);
  }
}

// Code for toggle menu in phone and tablet screen
let $closeIcon = document.getElementById("close-icon");
let $menuIcon = document.getElementById("menu-icon");
let $rightPart = document.getElementById("right-part");
let $leftPart = document.getElementById("left-part");
function toggleMenuFunction(event) {
  $closeIcon.classList.add("appeared");
  $menuIcon.classList.add("disappeared");
  $rightPart.classList.add("appeared");
  $leftPart.classList.add("appeared");
}

function closeToggleMenu(event) {
  $closeIcon.classList.remove("appeared");
  $menuIcon.classList.remove("disappeared");
  $rightPart.classList.remove("appeared");
  $leftPart.classList.remove("appeared");
}

// Create box shadow for header
function headerBoxShadow(event) {
  let $headerPart = document.getElementById("header-part");

  if (window.top.scrollY === 0) {
    $headerPart.classList.remove("box-shadow");
    return;
  }
  $headerPart.classList.add("box-shadow");
}

// Update items number
let item = window.localStorage.getItem("item");
if (item === null) {
  item = 0;
}
let bag1 = document.querySelector("#bag1");

bag1.innerHTML = "Shopping Bag (" + item + ")";

// Represent username
let list = document.querySelector(".toggle-menu");
let login = window.localStorage.getItem("login");
let signup = document.querySelector(".signup");
let signin = document.querySelector(".signin");
let userName = document.querySelector(".btn-user");
let logout = document.querySelector(".logout");
let user = document.querySelector(".btn-user");
let dropuser = document.querySelector(".user");
console.log("login", login);
console.log("check", login !== "");
if (login !== "") {
  signup.classList.add("disable");
  signin.classList.add("disable");
  list.classList.add("disable");
  logout.classList.add("active");
  userName.classList.remove("disable");
  userName.innerHTML = "Hello: " + login;
} else {
  logOut();
}

// Log out: click on username to log out
function logOut() {
  list.classList.remove("disable");
  signup.classList.remove("disable");
  signin.classList.remove("disable");
  logout.classList.remove("active");
  userName.classList.add("disable");
  dropuser.classList.toggle("active");
  userName.innerHTML = "User";
  login = "";
  window.localStorage.setItem("login", "");
}

user.onclick = function () {
  dropuser.classList.toggle("active");
};
dropuser.classList.remove("active");
