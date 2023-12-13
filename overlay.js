// overlay functionality
function openOverlay(buttonNumber) {
    var overlay = document.getElementById('overlay');

    // check if the overlay is currently open, if so, close it
    if (overlay.style.display == 'block') {
        closeOverlay();
        return;
    }

    overlay.style.display = 'block';
}

// Function to close overlay
function closeOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}