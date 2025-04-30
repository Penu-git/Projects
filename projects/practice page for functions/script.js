let words = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function shuffleWord(pay) {


  let letters = words.split('');

  letters.length = 8

  for (let i = letters.length - 1; i > 0; i--) {

    let j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];

  }

  return letters.join('');

}




function animateShuffle() {

  const outputDiv = document.getElementById('output');
  let steps = 10; // Number of shuffling steps
  let currentStep = 0;
  let interval = setInterval(() => {
    let tempWords = [];
    for (let i = 0; i < words.length; i++) {
      tempWords.push(shuffleWord(words[i]));
    }
    outputDiv.innerText = tempWords.join(' ');
    currentStep++;
    if (currentStep >= steps) {
      clearInterval(interval);
    }
  }, 100); // Shuffle every 100ms

}

document.getElementById('shuffleButton').onclick = animateShuffle;