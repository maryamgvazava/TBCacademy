
let arrowDown = document.querySelectorAll('.arrowDown')

arrowDown.forEach(arrow => {
  arrow.addEventListener("click", () => {
    let nextSiblingElement = arrow.nextElementSibling;
    nextSiblingElement.classList.toggle('showAnswer'); 
  
  });
});
