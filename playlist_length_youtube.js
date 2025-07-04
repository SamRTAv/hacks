// Extract all video durations
//To run this ensure that you scroll down to the end of playlist and then open console and run it there
let timeElements = document.querySelectorAll(
  "span.ytd-thumbnail-overlay-time-status-renderer"
);

let totalSeconds = 0;

// Calculate total duration
timeElements.forEach((elem) => {
  let timeText = elem.innerText.trim();
  let parts = timeText.split(":").reverse();
  
  let seconds = 0;
  if (parts.length >= 1) seconds += parseInt(parts[0]);
  if (parts.length >= 2) seconds += parseInt(parts[1]) * 60;
  if (parts.length >= 3) seconds += parseInt(parts[2]) * 3600;
  
  totalSeconds += seconds;
});

// Convert to HH:MM:SS format
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;

console.log(
  `Total Playlist Duration: ${hours}h ${minutes}m ${seconds}s`
);
