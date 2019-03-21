// let count = 0

// export {
//     count
// }
// setTimeout(function () {
//     count+=1,
//   console.log(`m1内部5秒后改变count值${count}`)
// }, 500)


// let obj = {
//     hobby:[1,2,3,4]
// }
// export default obj;
// setTimeout(()=>{
//     obj.hobby.push(99999);
//     console.log(`500s${obj.hobby}`)
// },500)

// let a = 10
// export {a}


// let count = 1
// function setcount(){
//     count ++
// }
// setTimeout(() => {
//   console.log('a', count)
// }, 1000)
// export {
//   count,
//   setcount
// }

// module.exports = {
//     count,
//   setcount
// }


// import './index.js';
// console.log("m1")
require('./index.js');
module.exports = {
    a:100
}
console.log("m21")

