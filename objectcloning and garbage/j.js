let obj={
  age:12,
  wt:70,
  ht:180
};
// console.log(obj)
// obj.color="white"
// console.log(obj)
// let b={...obj}
// obj.bench=70
// console.log(obj)
// //sucessfuull cloning change in source does not effect the destinition
// console.log(b)
//using ASSIGN METHOD
let obj2={
  color:"white",
  BENCH:80,
  dead:180
}
let des=Object.assign({},obj,obj2)
obj.bench=70
console.log(obj)
//sucessfuull cloning change in source does not effect the destinition
 console.log(des)
 let des1={

 }
for(let key in obj){
  console.log(key)
  let newKey=key;
  let newValue=obj[key];
  //insertt in value in des 1 and create a clone
  des1[newKey]=newValue
}
console.log(des1)
