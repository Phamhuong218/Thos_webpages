// Change color when mouse over shopbag
let $shopBag = document.getElementById("shop-bag");
function changeColor() {
  $shopBag.classList.add("color-changed");
}

function oldColor(event) {
  $shopBag.classList.remove("color-changed");
}
let $itemNumber = document.getElementsByClassName("item-number");
// Update item number
  $itemNumber[0].innerHTML = item;
  $itemNumber[1].innerHTML = item;

// Add product in shopping bag

let $addBtn = document.getElementsByClassName("add-btn");
let $addBtn2 = document.getElementsByClassName("add-btn2");
function addItemsInBag() {
  item ++
  bag1.innerHTML = "Shopping bag (" + item + ")";
  window.localStorage.setItem("item", item);
  $itemNumber[0].innerHTML = item;
  $itemNumber[1].innerHTML = item;

  // Change button content when click to add items
  $addBtn[0].classList.add("disappeared");
  $addBtn2[0].classList.remove("disappeared");
  setTimeout(function () {
    $addBtn[0].classList.remove("disappeared");
    $addBtn2[0].classList.add("disappeared");
  }, 2000);
}

