// Change color when mouse over shopbag
let $shopBag = document.getElementById("shop-bag");
function changeColor() {
  $shopBag.classList.add("color-changed");
}

function oldColor(event) {
  $shopBag.classList.remove("color-changed");
}
// Update items number
let $itemNumber = document.getElementsByClassName("item-number");
$itemNumber[0].innerHTML = item;