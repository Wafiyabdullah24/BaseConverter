function convert() {
    var numberInput = document.getElementById("numberInput").value;
    var baseFrom = parseInt(document.getElementById("baseFrom").value, 10);
    var baseTo = parseInt(document.getElementById("baseTo").value, 10);

    var result;

    if (baseFrom === 2 && baseTo === 10) {
      result = parseInt(numberInput, 2).toString(10);
    } else if (baseFrom === 2 && baseTo === 16) {
      result = parseInt(numberInput, 2).toString(16).toUpperCase();
    } else if (baseFrom === 10 && baseTo === 2) {
      result = parseInt(numberInput, 10).toString(2);
    } else if (baseFrom === 10 && baseTo === 16) {
      result = parseInt(numberInput, 10).toString(16).toUpperCase();
    } else if (baseFrom === 16 && baseTo === 2) {
      result = parseInt(numberInput, 16).toString(2);
    } else if (baseFrom === 16 && baseTo === 10) {
      result = parseInt(numberInput, 16).toString(10);
    } else {
      result = "Invalid base conversion";
    }

    document.getElementById("result").value = result;
  }
function reset(){
    document.getElementById("result").value = "";
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
/*-------------------------sidebar------------------------------------*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
