// const {count} = require('./m1.js')
// setTimeout(function () {
//   console.log('read count after 1000ms in commonjs is', count)
// }, 1000)

// import {count} from './m1.js'
// setTimeout(function () {
//   console.log('1秒之后读取cout', count)
// }, 1000)


// const count = require('./m1.js')
// setTimeout(function () {
//   console.log('read count after 1000ms in commonjs is', count)
// }, 1000)


// import count from './m1.js'
// setTimeout(function () {
//   console.log('1秒之后读取cout', count)
// }, 1000)

// import {a} from "a.js";
// a=2000;
// function foo(){
//     import {count,setcount} from "./m1.js";
// }
// foo();
// // setcount();
// // console.log(count);

// if(true){
//     import {count,setcount} from "./m1.js";
// }else{
//     import {count,setcount} from "./m2.js";
// }

// import './m1.js';
// console.log("index111");

let a = require('./m1.js');
console.log("index111");
