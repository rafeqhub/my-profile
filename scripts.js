// scripts.js

// Get the modal
var modal = document.getElementById("contactModal");

// Get the link that opens the modal
var link = document.getElementById("contactLink");

// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close-button")[0];

// When the user clicks the link, open the modal
link.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
