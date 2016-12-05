// function add(a,b) {
//   return a + b;
// };
//
// console.log(add(3,1));
//
//
// var toAdd = [9,5];
//
// console.log(add(...toAdd));
//
//
// var groupA = ['jen', 'corey'];
// var groupB = ['genji'];
// var final = [...groupA, 3, ...groupB];
// console.log(final);


function greeter(name, age) {
  console.log(`Hello my name is ${name}, and I am ${age} years old!`);
};

var person = ['Andy', 35]

greeter(...person);

var names = ['Mike', 'Ben'];
var final = ['Me', ...names];

for(var i = 0, n = final.length; i < n; i++ ) {
  console.log(`Hello ${final[i]}!`);
}
