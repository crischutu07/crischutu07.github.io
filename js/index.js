const a = document.getElementById("device")
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  a.innerText = "Anyways hope there's not any problem after i fixed everything for mobile.. :) (plot twist: desktop users can't see this)"
}
const date = new Date()
const birthday = new Date(`May 21 ${date.getFullYear()+1}`);
const ages = document.getElementById("ages")
// while(true){
//   setInterval(function() {
//     ages.innerText = `Ages: ${birthday} (${birthday.getFullYear()-date.getFullYear()})`
//   }, 1000)
// }
ages.innerText = `Ages: ${birthday.getFullYear()-2007} (${birthday.getFullYear()-date.getFullYear()})`