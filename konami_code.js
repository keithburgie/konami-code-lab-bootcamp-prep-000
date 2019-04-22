const keys = [
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

    if (key === keys[index]) {
      index++;
      console.log(`${index}. ${key}`);

      if (index === keys.length) {
        alert("Hurray!");
        index = 0;
      }
    } else if (key === keys[0]) {
      index = 1;
      
    } else {
      index = 0;  
    }
  });
}

init();