var arr = [3, 4, 8, 5, 2, 6, 7, 1, 9];
// line.forEach((item) => {
//   arr.push(parseInt(item));
// })
var s1 = 0;
var s2 = 0;
var s3 = 0;
for (let i = 0; i < 4; i++) {
  s1 += arr[i];
}
for (let i = 3; i < 7; i++) {
  s2 += arr[i];
}
for (let i = 6; i < 9; i++) {
  s3 += arr[i];
}
s3 += arr[0];

console.log((s1 === s2 && s2 === s3 && s3 === s1) ? 'yes' : 'no');