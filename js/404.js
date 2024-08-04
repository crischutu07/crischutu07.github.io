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
// patch
const err = document.getElementById("error");
var msgErr = msg[Math.floor(Math.random() * msg.length)]

// Work!! ):<
var i = 0;
err.addEventListener("click", function() {
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
    "You're done."
  ]
  if (i >= clickMsg.length) {
    window.open("https://youtu.be/dQw4w9WgXcQ");
    location.assign("/")
    return
  }
  err.innerText = clickMsg[i];
  i = i + 1;
});

err.innerText = msgErr;

