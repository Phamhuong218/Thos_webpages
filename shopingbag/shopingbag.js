
let dropbox = document.querySelector("#dropbox-select");
let price1 = document.querySelector("#price1");
let price2 = document.querySelector("#price2");
let bag2 = document.querySelector("#bag2");
let closeitem = document.querySelector("#close-item");
let info = document.querySelector(".info");
let total = document.querySelector(".total");
let checkout = document.querySelector(".checkout");
let empty = document.querySelector(".empty");

price1.innerHTML = "$" + item *49 + ".00";
price2.innerHTML = "$" + item *49 + ".00";

dropbox.onchange = function () {
  let price = dropbox.value * 49;
  price1.innerHTML = "$" + price + ".00";
  price2.innerHTML = "$" + price + ".00";
  bag1.innerHTML = "Shopping bag (" + dropbox.value + ")";
  bag2.innerHTML = "Shopping bag (" + dropbox.value + ")";
  item = dropbox.value
  window.localStorage.setItem("item", dropbox.value);  
};
closeitem.onclick = function () {
  info.classList.add("close");
  total.classList.add("close");
  checkout.classList.add("close");
  empty.classList.remove("close");
  window.localStorage.setItem("item", 0);
  bag1.innerHTML = "Shopping bag (0)";
  bag2.innerHTML = "Shopping bag (0)";
};


if (Number(item) == 0) {
  info.classList.add("close");
  total.classList.add("close");
  checkout.classList.add("close");
  empty.classList.remove("close");
  bag1.innerHTML = "Shopping bag (0)";
  bag2.innerHTML = "Shopping bag (0)";
} else {
  bag1.innerHTML = "Shopping bag (" + item + ")";
  bag2.innerHTML = "Shopping bag (" + item + ")";
  dropbox.value = Number(item);
}


// Change color when mouse over shopbag
let $shopBag = document.getElementById("shop-bag");
function changeColor() {
  $shopBag.classList.add("color-changed");
}

function oldColor(event) {
  $shopBag.classList.remove("color-changed");
}
