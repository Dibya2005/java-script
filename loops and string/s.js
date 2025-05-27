// i=0
// while(i<5) {
//   console.log("inside the loop")
//   if(i==3)
//         break
//   else
//       console.log(i)
//   i++
// }
// i=0
// while(i<5) {
//   console.log("inside the loop")
//   if(i==3)
//         continue
//   else
//       console.log(i)
//   i++
// } //we will get a infinite loop
//for resolve this
//we will increase index variable before continue
i=0
while(i<5) {
  console.log("inside the loop")
  if(i==3) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}