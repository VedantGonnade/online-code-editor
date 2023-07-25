// JavaScript code
const htmlSelector = document.querySelector('.html-button');
const htmlBodySelector = document.querySelector('.html-body');
const mainBodySelector = document.querySelector('.main-body');

// Add a variable to keep track of the state
let contentIsVisible = true;
let originalContent = htmlBodySelector.innerHTML; // Store the original content

htmlSelector.addEventListener('click', htmlButtonClickHandler);

function htmlButtonClickHandler() {
  if (contentIsVisible) {
    // If content is visible, hide it
    htmlBodySelector.innerHTML = "";
    mainBodySelector.style.display = 'grid'
    mainBodySelector.style.gridTemplateColumns = '1fr 1fr 1fr';
  } else {
    // If content is hidden, show it again
    htmlBodySelector.innerHTML = originalContent;
    mainBodySelector.style.display = 'grid'
    mainBodySelector.style.gridTemplateColumns = ' 1fr 1fr 1fr 1fr';
  }
  
  // Toggle the state
  contentIsVisible = !contentIsVisible;
}
