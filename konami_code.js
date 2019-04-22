const buttons = [
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

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;

    if (key === buttons[index]) {
      index++;

      if (index === buttons.length) {
        alert("Hurray!");
        index = 0;
      }
    } else if (key === buttons[0]) {
      index = 1;
      
    } else {
      index = 0;  
    }
  });
}

init();