let size = 8;
let box = "";

for (let i = 0; i < size; i++) {
   
   for (let j = 0; j < size; j++) {
      if ((i + j) % 2 == 0) {
         box += " ";
      } else {
         box += "#";
      }
   }
   box += "\n";
}
console.log(box);