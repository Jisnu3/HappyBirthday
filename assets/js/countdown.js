const now = new Date();
const currentYear = now.getFullYear();
const birthday = new Date(currentYear, 5, 20); // Month is 0-based, so 5 = June
// If today's date is past June 20, set target to next year
if (now > birthday) {
    birthday.setFullYear(currentYear + 1);
}
const diff = birthday - now;

// Convert to days, hours, minutes, seconds
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);

// Update the display with leading zeros
document.getElementById('days').innerText = String(days).padStart(2, '0');
document.getElementById('hours').innerText = String(hours).padStart(2, '0');
document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

// Add special animation class when numbers change
document.querySelectorAll('.countdown-number').forEach(el => {
    el.classList.add('pulse');
    setTimeout(() => el.classList.remove('pulse'), 500);
});