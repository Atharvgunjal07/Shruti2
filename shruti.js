// Calculate time passed since birthdate
const birthDate = new Date('2003-11-18T00:00:00');

function updateAge() {
  const now = new Date();
  let diff = now - birthDate; // Time difference in milliseconds

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  diff %= 1000 * 60 * 60 * 24 * 365.25;

  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
  diff %= 1000 * 60 * 60 * 24 * 30.44;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= 1000 * 60 * 60;

  const minutes = Math.floor(diff / (1000 * 60));
  diff %= 1000 * 60;

  const seconds = Math.floor(diff / 1000);

  // Display the age
  document.getElementById('age').textContent =
    `🎉 Shrutika is ${years} years, ${months} months, ${days} days, ` +
    `${hours} hours, ${minutes} minutes, and ${seconds} seconds old! 💜`;
}

// Photo slider logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[currentSlide].classList.remove('opacity-100', 'scale-100'); // Remove animation from current slide
  slides[currentSlide].classList.add('opacity-0', 'scale-90'); // Hide current slide with animation
  slides[currentSlide].style.display = 'none';

  currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
  slides[currentSlide].style.display = 'block';

  // Add Tailwind animation for the new slide
  slides[currentSlide].classList.remove('opacity-0', 'scale-90');
  slides[currentSlide].classList.add('opacity-100', 'scale-100');
}

// Initial setup for slider animations
slides.forEach((slide) => {
  slide.style.display = 'none'; // Hide all slides initially
  slide.classList.add('transition-all', 'duration-1000', 'ease-in-out'); // Add Tailwind animation classes
});
slides[0].style.display = 'block'; // Show the first slide
slides[0].classList.add('opacity-100', 'scale-100'); // Animate the first slide

setInterval(showNextSlide, 3000); // Change slide every 3 seconds

// Update the age every second
setInterval(updateAge, 1000);
