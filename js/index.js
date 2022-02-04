const accordionButtons = document.querySelectorAll(".accordion__button");

function resetAccordion(target) {
  
  accordionButtons.forEach(function(button){
    let sectionId = button.getAttribute("aria-controls");
    let controlledSection = document.getElementById(sectionId);
    if ((button.getAttribute("aria-expanded") === "true") && (button != target) ) {
    button.setAttribute("aria-expanded", false);
    controlledSection.setAttribute("aria-hidden", true);
    }
  });
}

function clickHandler(button) {
  let sectionId = button.getAttribute("aria-controls");
  let controlledSection = document.getElementById(sectionId);
  if (button.getAttribute("aria-expanded") === "false") {
    button.setAttribute("aria-expanded", true);
    controlledSection.setAttribute("aria-hidden", false);
  } else {
    button.setAttribute("aria-expanded", false);
    controlledSection.setAttribute("aria-hidden", true);
  }
}

accordionButtons.forEach(function(button) {
  button.addEventListener("click", function(e){
    e.stopPropagation();
    resetAccordion(button);
    clickHandler(button);
  });
});
