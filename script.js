'use strict';

let accHeading = document.querySelectorAll(".layout");
let accPanel = document.querySelectorAll(".layout-slide");

function showPanel(elem) {
  hidePanels();
  elem.classList.add("hidden");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "rem";
  elem.nextElementSibling.style.padding = "20px 20px";
}
// Function to Hide all shown Panels
function hidePanels() {
  for (let i = 0; i < accPanel.length; i++) {
      accPanel[i].style.maxHeight = null;
	  accPanel[i].style.padding = "0px 20px";
      accHeading[i].classList.remove("hidden");
  }
}
for (let i = 0; i < accHeading.length; i++) {
    // Execute whenever an accordion is clicked 
    accHeading[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
           hidePanels();     // Hide All open Panels 
        } else {
           showPanel(this);  // Show the panel
        } 
    };
}



