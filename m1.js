// let count = 0

// export {
//     count
// }
// setTimeout(function () {
//     count+=1,
//   console.log(`m1内部5秒后改变count值${count}`)
// }, 500)


let obj = {
    hobby:[1,2,3,4]
}
export default obj;
setTimeout(()=>{
    obj.hobby.push(99999);
    console.log(`500s${obj.hobby}`)
},500)


