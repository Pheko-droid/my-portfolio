// Attempting to create a simple dark mode toggle for my portfolio website
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// look for saved preference
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme',savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});