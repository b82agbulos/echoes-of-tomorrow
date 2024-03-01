document.addEventListener("DOMContentLoaded", () => {
  // Select the button by its unique ID
  const button = document.getElementById('randomPageBtn');

  // Add click event listener to the button
  button.addEventListener("click", () => {
    // List of pages to navigate to
    var pages = ['veil-of-shadows.html', 'from-the-nexus-to-new-horizons.html'];

    // Randomly choose a page
    var randomPage = pages[Math.floor(Math.random() * pages.length)];

    // Navigate to the chosen page
    window.location.href = randomPage;
  });
});

