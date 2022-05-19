// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var tagLine1 = document.querySelector(".tagline-1")
var tagLine2 = document.querySelector(".tagline-2")
var priceTag = document.querySelector(".price-tag")
var overLay = document.querySelector(".overlay")
var showRandomButtonCover = document.querySelector(".random-cover-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var viewSavedCoversButton = document.querySelector(".view-saved-button")
var makeYourOwnCover = document.querySelector(".make-new-button")
var homeButton = document.querySelector(".home-button")
var hiddenForm = document.querySelector(".form-view")

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover

// Add your event listeners here 👇
window.addEventListener("load", randomLoadCover)
showRandomButtonCover.addEventListener("click", randomLoadCover)
makeYourOwnCover.addEventListener("click", showHidden)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomItemFromArray(array) {
  var randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex]
}



function randomLoadCover(){

coverImage.src = getRandomItemFromArray(covers)

coverTitle.innerText = getRandomItemFromArray(titles)

tagLine1.innerText = getRandomItemFromArray(descriptors)

tagLine2.innerText = getRandomItemFromArray(descriptors)
}


// function showHidden(){
//   hiddenForm.classList.toggle("hidden");}
// }
