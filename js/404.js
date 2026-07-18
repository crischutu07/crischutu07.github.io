var msg = [
  "You're lost isn't it?",
  "What path are you going?",
  "404? I guess?",
  "Maybe typo and you got in here?",
  "What's up? What are you finding?",
  "Mistakes again... Probably.",
  "Jeez, i think you're typing the url too fast!?",
  "Can't find anything, go back u foo!! >:3",
]
var clickMsg = [
  "You clicked me.",
  "Stop clicking me!!",
  "I said stop it!! >:(",
  "You're still clicking..",
  "...",
  "...",
  "...",
  "Oh my goodness, can you not clicking at me!?",
  "Stop!!",
]
// patch
const err = document.getElementById("error");
var msgErr = msg[Math.floor(Math.random() * msg.length)]

var i = 0;
err.addEventListener("click", function() {
  if (i >= clickMsg.length) {
    window.location.href = '/'
    return
  }
  err.innerText = clickMsg[i];
  i = i + 1;
});

err.innerText = msgErr;
