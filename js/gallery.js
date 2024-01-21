// gallery.js

// Function to be called on page load
function onPageLoad() {
  console.log("Page loaded successfully");
  addTabFocus();
}

// Function to add tabindex attribute
function addTabFocus() {
  console.log("Tab focus added");
  var previews = document.getElementsByClassName('preview');
  for (var i = 0; i < previews.length; i++) {
      previews[i].setAttribute('tabindex', '0');
  }
}

// Function to handle mouseover and focus events
function upDate(previewPic) {
  document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
  document.getElementById('image').innerHTML = previewPic.alt;
}

// Function to handle mouseout and blur events
function unDo() {
  document.getElementById('image').style.backgroundImage = '';
  document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
}

// Adding onload listener
window.onload = onPageLoad;
