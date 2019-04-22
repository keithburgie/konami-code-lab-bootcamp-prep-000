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

function init() {
  // your code here
  document.body.addEventListener('keyup', function(e) {
    const key = e.key;
    console.log(key);

    if (key === codes[index]) {
      index++;

      if (index === codes.length) {
        alert("Hurray!");
        index = 0;
      }
    } else if (key === codes[0]) {
      index = 1;
      
    } else {
      index = 0;  
    }
  });
}

init();