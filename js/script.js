// Main script for index.js
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  alert("If you're visiting this website with a mobile device, it kinda terrible since i build this site all for desktop user\n"
    + "It is recommended to switching to desktop mode.");
}
const age = new Date().getFullYear() - 2007;
const smallInfo = document.getElementById("small-info-ages")
smallInfo.innerText = `Ages: ${age}`
