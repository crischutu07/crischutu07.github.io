var msg = [
  "You're lost isn't it?",
  "What path are you going?",
  "404? I guess?",
  "Maybe typo and you got in here?",
  "What's up? What are you finding?",
  "Mistakes again... Probably.",
  "Jeez, i think you're typing the url too fast!?",
  "Github Page leads you to here is funny, haha.",
  "Can't find anything, go back fool. :3",
]
const err = document.getElementById("error");
var msgErr = msg[Math.floor(Math.random() * msg.length)]
err.innerText = msgErr
