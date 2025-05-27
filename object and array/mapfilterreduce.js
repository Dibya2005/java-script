// // let numbers = [1, 2, 3, 4, 5];
// // let doubled = numbers.map(num => num * 2);
// // console.log(doubled)
// // numbers.map((number)=>{
// //   console.log(number**2)
// // })
// // numbers.map((number,index) => {
// //   console.log(index,number)
// // })
// let a=[1,2,3,4,5,6]
// b=a.filter((num) => {
//   // if (num%2==0){
//   //   return true
//   // }
//   // else{
//   //   return false
//   // }
//   //instead of writing this we can write
//   return num%2==0
// })
// console.log(b)
// let arr=[1,2,"harry","parry"]
// let c=arr.filter((num) =>{
//   // if(typeof(num)=="number"){
//   //   return true
//   // }
//   // else{
//   //   return false
//   // }
//   return typeof(num)=="number"
// })
// console.log(c)
let a=[10,20,30,40,50]
add=a.reduce((acc,curr)=>{
  return acc+curr

},0)
console.log(add)
let k=[1,2,3,2,1]
k.sort()
console.log(k)
k.sort((a,b)=>{
  return b-a
})

console.log(k)
k.sort().reverse()
console.log(k)