// Set 15 Q2: log a message after 5 seconds using setTimeout()
function delayedLog() {
  setTimeout(function () {
    console.log("Hello! This message appeared after 5 seconds.");
  }, 5000);
}
console.log("Waiting 5 seconds...");
delayedLog();
