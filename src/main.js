// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var tagLine1 = document.querySelector(".tagline-1")
var tagLine2 = document.querySelector(".tagline-2")
var priceTag = document.querySelector(".price-tag")
var overLay = document.querySelector(".overlay")
var showRandomButtonCover = document.querySelector(".Random-cover-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var viewSavedCoversButton = document.querySelector(".view-saved-button")
var makeYourOwnCover = document.querySelector(".make-new-button")
var homeButton = document.querySelector(".home-button")


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// window.addEventListener("load", getCoverInfo)



// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// var cover1 = new Cover(coverImgSrc, title, descriptor1, descriptor2)
//
// function getCoverInfo(covers, title, descriptor1, descriptor2) {
//   getRandomIndex(this.covers)
//   getRandomIndex(this.title)
//   getRandomIndex(this.descriptor1)
//   getRandomIndex(this.descriptor2)
// }

// function getRandomImage() {
//   console.log(covers)
// }

// coverImage.innerText = getRandomIndex(covers)
// coverTitle.innerText = getRandomIndex(titles)
// tagLine1.innerText = descriptors[i].toString(getRandomIndex(descriptors))
// tagLine2.innerText = descriptors[i].toString(getRandomIndex(descriptors))

function showDescriptors() {
  for (var i = 0; i < descriptors.length; i++) {
  tagLine1.innerText = descriptors[i]toString(getRandomIndex(descriptors))
  }
  return tagLine1
}
