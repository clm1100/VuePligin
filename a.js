import {bar} from './b.js';
export function foo() {
  console.log('foo');
  bar();
  console.log('执行完毕');
}
foo();

// var bar = require("./b.js");
// function foo() {
//     console.log('foo');
//     bar();
//     console.log('执行完毕');
//   }
// module.exports = foo()
// foo();