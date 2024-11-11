const images = ['CharlotteYearns.JPG', 'CharlotteSchlump.JPG', 'CharlotteStupid.JPG', 'Rumo.JPG', 'Franklin.JPG'];
const altText = {
  'CharlotteYearns.JPG': 'Charlotte is yearning',
  'CharlotteSchlump.JPG': 'Charlotte is tired',
  'CharlotteStupid.JPG': 'Charlotte forgot how to put her tongue back in her mouth',
  'Rumo.JPG': 'This is Rumo',
  'Franklin.JPG': 'This is Franklin'
};

// Get references to elements
const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Loop through the images array to create thumbnail images
for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement('img');
  const imgSrc = `../img/${images[i]}`;
  console.log('Image path:', imgSrc);  // Log image path to console
  newImage.setAttribute('src', imgSrc);
  newImage.setAttribute('alt', altText[images[i]]);
  thumbBar.appendChild(newImage);

  // Add a click event listener to each thumbnail
  newImage.addEventListener('click', (e) => {
    displayedImg.src = e.target.src;
    displayedImg.alt = e.target.alt;
  });
}

// Add event listener to the darken/lighten button
btn.addEventListener('click', () => {
  const isDark = btn.getAttribute('class') === 'dark';
  
  if (isDark) {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});