const a = document.getElementById("device")
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  a.innerText = "Anyways hope there's not any problem after i fixed everything for mobile.. :) (plot twist: desktop users can't see this)"
}
const age = new Date().getFullYear() - 2007;
const smallInfo = document.getElementById("small-info-ages")
smallInfo.innerText = `Ages: ${age}`
