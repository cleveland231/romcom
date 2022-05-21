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
var mainCover = document.querySelector(".main-cover")
var savedCoversSection = document.querySelector(".saved-view")

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover

// Add your event listeners here 👇
window.addEventListener("load", randomLoadCover)
showRandomButtonCover.addEventListener("click", randomLoadCover)
makeYourOwnCover.addEventListener("click", showForm)
viewSavedCoversButton.addEventListener("click", showSavedCovers)
saveCoverButton.addEventListener("click", saveCover)
homeButton.addEventListener("click", showHome)
// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomItemFromArray(array) {
  var randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex]
}

function randomCover(){
currentCover = new Cover(
  getRandomItemFromArray(covers),
  getRandomItemFromArray(titles),
  getRandomItemFromArray(descriptors),
  getRandomItemFromArray(descriptors)
)


// coverImage.src = getRandomItemFromArray(covers)
//
// coverTitle.innerText = getRandomItemFromArray(titles)
//
// tagLine1.innerText = getRandomItemFromArray(descriptors)
//
// tagLine2.innerText = getRandomItemFromArray(descriptors)
//
// currentCover =  new Cover(coverImage.src, coverTitle.innerText, tagLine1.innerText, tagLine2.innerText )
// console.log( currentCover)
}

function loadNewCover() {
  coverImage.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  tagLine1.innerText = currentCover.tagline1
  tagLine2.innerText = currentCover.tagline2
}

function randomLoadCover() {
  randomCover()
  loadNewCover()
}

function showForm() {
makeYourOwnCover.classList.remove("hidden")
mainCover.classList.add("hidden")
hiddenForm.classList.toggle("hidden")
showRandomButtonCover.classList.add("hidden")
saveCoverButton.classList.add("hidden")
homeButton.classList.remove("hidden")
}

function showSavedCovers() {
  // savedCoversSection.innerHTML( )
  // savedCoversSection.classList.toggle("hidden")
  savedCoversSection.classList.remove("hidden")
  mainCover.classList.add("hidden")
  showRandomButtonCover.classList.add("hidden")
  saveCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  savedCoversSection.innerHTML = `<div class="mini-cover">
  <img class="cover-image mini-cover" src=${savedCovers[0].cover}>
  <div>`
  // maybe use for loop
  // return savedCovers
}

function showHome() {
  homeButton.classList.add("hidden")
  mainCover.classList.remove("hidden")
  showRandomButtonCover.classList.remove("hidden")
  saveCoverButton.classList.remove("hidden")
}

function saveCover(){
  // savedCover.classList.toggle("hidden")
  savedCovers.push(currentCover)
  console.log(savedCovers)
}

var formCover = document.querySelector('#cover')
var formTitle = document.querySelector('#title')
var formdescriptor1 = document.querySelector('#descriptor1')
var formDescriptor2 = document.querySelector('#descriptor2')

// var userCover = document.querySelector('.user-cover')
// var userTitle= document.querySelector('.user-title')
// var userDescriptor1 = document.querySelector('.user-desc1')
// var userDescriptor2 = document.querySelector('.user-desc2')

var createNewBookButton = document.querySelector('.create-new-book-button') ;

createNewBookButton.addEventListener('click', makeForm) ;

function makeForm(event) {
  event.preventDefault();

  var cover = formCover.value ; // String

  var title = formTitle.value ; // String

  var descriptor1 = formdescriptor1.value ;// string

  var descriptor2 = formDescriptor2.value ;// string

 currentCover = new Cover(cover, title , descriptor1, descriptor2)

 loadNewCover()
  mainCover.classList.remove("hidden")//
  hiddenForm.classList.add("hidden")
}








// need to display the savecovers variable
// work when pressing "view saved covers buttom"
// homepage should hidden
//When a user clicks the “View Saved Covers” button, we should see the saved covers section, and the homepage view should be hidden
//When the Saved Covers view is visible, the “Show New Random Cover” and “Save Cover” buttons should be hidden
//When the Saved Covers view is visible, the “Home” button should be visible
//
