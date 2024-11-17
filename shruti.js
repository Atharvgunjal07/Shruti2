// Calculate time passed since birthdate
const birthDate = new Date('2003-11-18T00:00:00');

function updateAge() {
  const now = new Date();

  // Calculate differences
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();

  // Adjust for negative values
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    // Calculate days in the previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

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
