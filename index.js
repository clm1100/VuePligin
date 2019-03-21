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


import count from './m1.js'
setTimeout(function () {
  console.log('1秒之后读取cout', count)
}, 1000)

