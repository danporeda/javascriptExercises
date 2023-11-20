// const movieReviews = {
//     Arrival         : 9.5,
//     Alien           : 9,
//     Amelie          : 8,
//     'In Bruges'     : 9,
//     Amadeus         : 10,
//     'Kill Bill'     : 8,
//     'Little Miss S' : 8.5,
//     Coraline        : 7.5
// };

// const array1 = [33,44,55,62,77];

// function contains66(arr) {
//     for (let i of arr) {
//         console.log(i);
//         if (i === 66) {
//             return true;
//         }
//     }
//     return false;
// } 

// console.log(contains66(array1));
// for (let num in array1) {
//     console.log(array1[num]);
// }

// for (let movie in movieReviews) {
//     console.log(movie);
// }

// const ratings = Object.values(movieReviews);
// let total = 0;
// for (let r of ratings) {
//     total+= r;
// }
// let avg = total / ratings.length;
// console.log(`average is: ${avg}`);

// const arg1 = process.argv[2];
// const arg2 = process.argv[3];
// const arg3 = process.argv[4];


// function dice() {
//     console.log(Math.floor(Math.random()*6 +1));
// }

// function rollDice(num) {
//     for (let i = 0; i < num; i++){
//         dice();
//     }
// }

// console.log(`Roll the dice ${arg1} times: \n`)
// rollDice(arg1);
// console.log(`there are ${arg2} cunts`);
// console.log(`There are ${arg3} fucks`);

// const pword = process.argv[2];
// const usrnm = process.argv[3];

// function isValidPassword(pwd,username) {
//     const tooShort = pwd.length < 8;
//     const hasSpace = pwd.indexOf(' ') !== -1;
//     const hasUserName = pwd.indexOf(username) !== -1;
//     return (!tooShort && !hasSpace && !hasUserName);

//     // if (
//     //     pwd.length < 8 ||
//     //     pwd.includes(' ') ||
//     //     pwd.includes(username)
//     // ) {
//     //     return false;
//     // }
//     // return true;
// }

// console.log(isValidPassword(pword,usrnm));

// const sentence = process.argv[2];

// function isPangram(sent) {
//   let sentence = sent.toLowerCase();
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (sentence.indexOf(char) === -1) return false;
//   }
//   return true;
// }

// console.log(isPangram(sentence));

// function pick(arr) {
//     let idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }

// function getCard() {
//     const numberArray = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
//     const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

//     const card = {
//         Suit : pick(suit),
//         Num  : pick(numberArray)
//     }
//     return `${card.Num} of ${card.Suit}`;
// }


// for (let i = 0; i<=50; i++) {
//     console.log(getCard());
// }

// function add(x,y) {
//     return x + y;
// }

// function subtract(x,y) {
//     return x - y;
// }

// const multiply = function(x,y) {
//     return x * y;
// }

// const divide = function(x,y) {
//     return x / y;
// }

// const operations = [add, subtract, multiply, divide]

// const doSomething = {
//     add  : multiply,
//     2  : add,
//     3  : subtract,
//     4  : divide
// }

// for (let i of operations) {
//     let result = i(10, 3);
//     console.log(result);
// }

// for (let i=1; i<= 4; i++) {
//     let result = doSomething.add(5,10);
//     console.log(result);
// }

// function callThreeTimes(f) {
//     f();
//     f();
//     f();
// }

// function cry() {
//     console.log("BOOHOOO");
// }

// function rage() {
//     console.log("ANGRYYY");
// }

// function repeatNTimes(action, num) {
//     for (let i = 0; i < num; i++) {
//         action();
//     }
// }

// function pickOne(f1,f2) {
//     let rand = Math.random();
//     if (rand<0.5) {
//         f1();
//     } else {
//         f2();
//     }
// }

// pickOne(cry,rage);

// function subtractBy(num) {
//     return function(x){
//         return x - num;;
//     }
// }

// const byFive = subtractBy(5);
// const byTen = subtractBy(10);

// console.log(byFive(50));
// console.log(byTen(50));

// function grumpus() {
//     alert('GAH GO AWAY!');
// }

// setTimeout(function () {
//     alert("WELCOME CUNT!");
// }, 2000);

// const btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     alert("Why did you click my cunt?!")
// });

