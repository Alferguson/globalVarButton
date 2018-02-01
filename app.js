const button = document.getElementById('click-me');

for (var i = 0; i < 5; i += 1) {
  button.addEventListener('click', function () {
    console.log(i);
  })
}

// This is console log 5 5 times instead of what we may presume which would be 1 2 3 4 5
// This is due to var's function scope, to solve this, we can either use IIFE or a let
//  The button has five separate handlers attached to it, it looks up what i is and i in this case is 5 since the loop is done before the console log, (tech i is undefined but it will use last value of the iteration which is 5)



// SIMPLE ANSWER

const button2 = document.getElementById('really-click-me');

for (let i = 0; i < 5; i += 1) {
  button2.addEventListener('click', function () {
    console.log(i);
  })
}