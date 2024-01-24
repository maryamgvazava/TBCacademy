// let arrowDown = document.querySelectorAll('.arrowDown')

// arrowDown.forEach(arrow => {
//     arrow.addEventListener("click", () => {
//       let nextSiblingElement = arrow.nextElementSibling;
//         nextSiblingElement.classList.toggle('showAnswer'); 


//         if (nextSiblingElement.classList.contains('showAnswer')) {
//             arrow.style.transform = "rotate(180deg)";
//           } 
//           if (!nextSiblingElement.classList.contains('showAnswer')) {
//             arrow.style.transform = "rotate(-180deg)";
//           }
    
//     });
//   });

let arrowDown = document.querySelectorAll('.arrowDown')

arrowDown.forEach(arrow => {
  arrow.addEventListener("click", () => {
    let nextSiblingElement = arrow.nextElementSibling;
    nextSiblingElement.classList.toggle('showAnswer'); 
  
  });
});