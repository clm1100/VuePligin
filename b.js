import {foo} from './a.js';
export function bar() {
  console.log('bar');
//   if (Math.random() > 0.5) {
    foo();
//   }
}


// var foo = require("./a.js");
// function bar() {
//     console.log('bar');
//     foo();
//   }
// module.exports= bar