function updateSizeInfo() {
  // Get the width and height of the window
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Update the content of the <h1> tag
  const sizeDisplay = document.getElementById('sizeDisplay');
  sizeDisplay.textContent = `Width: ${width} Height: ${height}`;
}
updateSizeInfo();

// Add event listener for window resize
window.addEventListener('resize', updateSizeInfo);
