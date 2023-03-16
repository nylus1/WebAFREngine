// Get all elements with the class "pop"
const popElements = document.querySelectorAll(".pop");

// Loop through each element and set its initial opacity to 0
popElements.forEach(element => {
  element.style.opacity = 0;
});

// Define the animation function
function showElementSmoothly(element) {
  let opacity = 0;
  const intervalId = setInterval(function() {
    opacity += 0.05;
    element.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(intervalId);
    }
  }, 20);
}

// Call the animation function for each pop element after a brief delay
setTimeout(function() {
  popElements.forEach(element => {
    showElementSmoothly(element);
  });
}, 500);