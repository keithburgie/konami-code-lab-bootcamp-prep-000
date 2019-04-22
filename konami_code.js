const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

const alphabet = ['a', 'b', 'c'];

function onKeyDownHandler(e) {
  const k = e.key;
  
  if (key === alphabet[index]) {
    index++;
    
    if (index === alphabet.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
onKeyDownHandler();

document.addEventListener('keydown', function(e) {
  const k = e.key;
  
  if (key === alphabet[index]) {
    index++;
    
    if (index === alphabet.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
});

function init() {
  // your code here
}
