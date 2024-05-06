const a = document.getElementById("device")
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  a.innerText = "Anyways hope there's not any problem after i fixed everything for mobile.. :) (plot twist: desktop users can't see this)"
}
const date = new Date()
const birthday = new Date(`May 21 2007`);
const newBirthday = new Date(`${date.getFullYear()}/${birthday.getMonth()}/${birthday.getDay()}`);
const ages = document.getElementById("ages")
// while(true){
//   setInterval(function() {
//     ages.innerText = `Ages: ${birthday} (${birthday.getFullYear()-date.getFullYear()})`
//   }, 1000)
// }
var units = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: 24 * 60 * 60 * 1000 * 365 / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
}

var rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
var getRelativeTime = (d1, d2 = new Date()) => {
  var elapsed = d1 - d2;
  for (var u in units)
    if (Math.abs(elapsed) > units[u] || u == 'second')
      return rtf.format(Math.round(elapsed / units[u]), u)

}

ages.innerText = `${date.getFullYear() - birthday.getFullYear()} years old`
// put this later
var relative = getRelativeTime(newBirthday)
