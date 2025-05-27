// let s=100;
// stu=s+100;
// console.log(stu)
// stu=s**2;//power
// console.log(stu)
// stu=stu%3
// console.log(stu)
// */
//ternary operator-
//let age=20
//let status=(age>18) ? 'i can vote':'i cant vote'
//merge two condition we use logical operator
//&& and ,|| or ,! not

// /* operator precedence
// 1. parenthesis
// 2.exponants
// 3.moltiplicationjn & division & modulo
// 4.add & sub
//

// let reasult=1+2*3+4**2;
// console.log(reasult)
//how to acce[t ] user input
//1.easy way = window prompt
//2.profesional way= html text box
// let username
// username=window.prompt("whwat is your username")
// console.log(username)
let username
document.getElementById("mysubmit").onclick=function(){
  username=document.getElementById("text").value;
  console.log(username)
  document.getElementById("hi").textContent=`heloo ${username}`

}
// let day = 3;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log(dayName); // Output: Wednesday
