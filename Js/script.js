document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const socialLinks = document.querySelector(".social");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-nav");
        socialLinks.classList.toggle("mobile-nav");
    });
});

function openPopup(popupId) {
  document.getElementById(`popup-${popupId}`).style.display = 'block';
  document.getElementById(`popup-overlay-${popupId}`).style.display = 'block';
}

function openPopupDrawing() {
    document.getElementById(`popup-drawing`).style.display = 'block';
    document.getElementById(`popup-overlay-drawing`).style.display = 'block';
  }

window.onclick = function(event) {
    closePopupOnClickOutside(event, 'popup-p1', 'popup-overlay-p1');
    closePopupOnClickOutside(event, 'popup-p2', 'popup-overlay-p2');
    closePopupOnClickOutside(event, 'popup-p3', 'popup-overlay-p3');
    closePopupOnClickOutside(event, 'popup-p4', 'popup-overlay-p4');
    closePopupOnClickOutside(event, 'popup-p5', 'popup-overlay-p5');
    closePopupOnClickOutside(event, 'popup-p6', 'popup-overlay-p6');
    closePopupOnClickOutside(event, 'popup-p7', 'popup-overlay-p7');
    closePopupOnClickOutside(event, 'popup-p8', 'popup-overlay-p8');
    closePopupOnClickOutside(event, 'popup-p9', 'popup-overlay-p9');
    closePopupOnClickOutside(event, 'popup-p10', 'popup-overlay-p10');
    closePopupOnClickOutside(event, 'popup-p11', 'popup-overlay-p11');
    closePopupOnClickOutside(event, 'popup-p12', 'popup-overlay-p12');
    closePopupOnClickOutside(event, 'popup-drawing', 'popup-overlay-drawing');
};

function closePopupOnClickOutside(event, popupId, overlayId) {
    var popup = document.getElementById(popupId);
    var popupOverlay = document.getElementById(overlayId);
    if (event.target == popupOverlay) {
        if(event.target != popup && !popup.contains(event.target)) {
            if(popupId == 'popup-drawing')
            {
                closePopupDrawing();
            }
            else{
                closePopup();
            }            
        }
    }
}

function closePopup() {
    for (let i = 1; i <= 12; i++) {
        document.getElementById('popup-p' + i).style.display = 'none';
        document.getElementById('popup-overlay-p' + i).style.display = 'none';
    }
}

function closePopupDrawing() {    
    document.getElementById('popup-drawing').style.display = 'none';
    document.getElementById('popup-overlay-drawing').style.display = 'none';
}

function ShowAllProjects() {
    document.getElementById('View-More-Project').style.display = 'block';
    document.getElementById('View-More-Button').style.display = 'none';
    document.getElementById('View-Less-Button').style.display = 'block';
}

function ShowLessProjects() {
    document.getElementById('View-More-Project').style.display = 'none';
    document.getElementById('View-More-Button').style.display = 'block';
    document.getElementById('View-Less-Button').style.display = 'none';
}

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'i' || e.key === 'j')) {
        e.preventDefault();
    }
    if (e.key === 'F12') {
        e.preventDefault();
    }
});