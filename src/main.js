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
var savedView = document.querySelector(".view.saved-view")
var savedCoversSection = document.querySelector(".saved-covers-section")
var formCover = document.querySelector('#cover')
var formTitle = document.querySelector('#title')
var formdescriptor1 = document.querySelector('#descriptor1')
var formDescriptor2 = document.querySelector('#descriptor2')
var createNewBookButton = document.querySelector('.create-new-book-button')
var miniCovers = document.querySelectorAll(".mini-cover")
var homeView = document.querySelector(".home-view")

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
createNewBookButton.addEventListener('click', makeForm)


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomItemFromArray(array) {
  var randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex]
}

function randomCover(){
currentCover = new Cover (
  getRandomItemFromArray(covers),
  getRandomItemFromArray(titles),
  getRandomItemFromArray(descriptors),
  getRandomItemFromArray(descriptors)
  )
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
hiddenForm.classList.remove("hidden")
showRandomButtonCover.classList.add("hidden")
saveCoverButton.classList.add("hidden")
homeButton.classList.remove("hidden")
savedView.classList.add("hidden")
}

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
  showRandomButtonCover.classList.add("hidden")
  savedCoversSection.classList.add("hidden")
  // miniCovers.classList.add("hidden")
}

function showHome() {
  homeButton.classList.add("hidden")
  mainCover.classList.remove("hidden")
  showRandomButtonCover.classList.remove("hidden")
  saveCoverButton.classList.remove("hidden")
  hiddenForm.classList.add("hidden")
  savedCoversSection.classList.add("hidden")
homeView.classList.remove("hidden")
savedView.classList.add("hidden")

}

function showSavedCovers() {
  savedView.classList.remove("hidden")
  mainCover.classList.add("hidden")
  showRandomButtonCover.classList.add("hidden")
  saveCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  viewSavedCoversButton.classList.remove("hidden")
  savedCoversSection.classList.remove("hidden")
  // homeview.classList.add("hidden")
hiddenForm.classList.add("hidden")

  savedCoversSection.innerHTML = " "

  for (var i = 0; i < savedCovers.length; i++) {
  savedCoversSection.innerHTML += `<section class="mini-cover" id="${savedCovers[i].id}">
  <img class="mini-cover" src=${savedCovers[i].cover}>
  <h2 class="cover-title"> ${savedCovers[i].title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1"> ${savedCovers[i].tagline1} </span> and <span class="tagline-2"> ${savedCovers[i].tagline2} </span></h3>
  </section>`
  // console.log(savedCovers)
  }
  findMiniCover();
}

function saveCover() {
if (!savedCovers.includes(currentCover)) {
  savedCovers.push(currentCover)
   // console.log(savedCovers)
 }
}

function findMiniCover() {
  var miniCovers = document.querySelectorAll(".mini-cover")
  for (var i = 0; i < miniCovers.length; i++) {
    miniCovers[i].addEventListener("dblclick", deleteSavedCover)
  }
}

function deleteSavedCover(event) {
  event.preventDefault()
  for (var i = 0; i < savedCovers.length; i++) {
  if (event.currentTarget.id == savedCovers[i].id) {
  savedCovers.splice(i, 1)
  }

}
showSavedCovers()
}
