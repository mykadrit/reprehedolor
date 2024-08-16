// Select some HTML elements
let mainOutput = document.getElementById('mainOutput');
let lastOutput = document.getElementById('lastOutput');

// Establish a parent-child relationship
lastOutput.appendChild(mainOutput);
