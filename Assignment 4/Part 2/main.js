// Declare a const array listing the filenames of each image
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declare a const object listing the alternative text for each image
const imageAltText = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg': 'Large moth on a leaf'
};

// Get references to the necessary DOM elements
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const darkButton = document.querySelector('.dark');

// Loop through the array of filenames and insert <img> elements into the thumb-bar
const thumbBar = document.querySelector('.thumb-bar');
imageFilenames.forEach(filename => {
  const img = document.createElement('img');
  img.src = `images/${filename}`;
  img.alt = imageAltText[filename];
  thumbBar.appendChild(img);
});

// Add click event listeners to the thumbnail images
const thumbnails = document.querySelectorAll('.thumb-bar img');
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    displayedImg.src = `images/${imageFilenames[index]}`;
    displayedImg.alt = imageAltText[imageFilenames[index]];
  });
});

// Add click event listener to the darken button
let isDarkened = false;
darkButton.addEventListener('click', () => {
  if (isDarkened) {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  } else {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
  isDarkened = !isDarkened;
});