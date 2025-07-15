// Scroll to the bottom of the playlist before running this
let timeElements = document.querySelectorAll(
  "span.ytd-thumbnail-overlay-time-status-renderer"
);

let totalSeconds = 0;

timeElements.forEach((elem) => {
  // Get clean text and remove all whitespace (including \n and \u00a0)
  let timeText = elem.innerText.replace(/\s/g, "").trim();
  let parts = timeText.split(":").map(Number).reverse();

  let seconds = 0;
  if (parts.length >= 1 && !isNaN(parts[0])) seconds += parts[0];
  if (parts.length >= 2 && !isNaN(parts[1])) seconds += parts[1] * 60;
  if (parts.length >= 3 && !isNaN(parts[2])) seconds += parts[2] * 3600;

  totalSeconds += seconds;
});

let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;

console.log(`Total Playlist Duration: ${hours}h ${minutes}m ${seconds}s`);
