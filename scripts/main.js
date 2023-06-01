console.log('main.js has started');

// Removes the banner overlay
var messageBanner = document.getElementById("ContentWallHardsell");
messageBanner.style.display = "none";

// Make the page scrollable
document.body.style.overflow = "scroll";
document.body.onscroll = null;
document.body.onclick = (event) => {};