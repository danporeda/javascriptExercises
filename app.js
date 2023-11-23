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
//     alert("WELCOME!");
// }, 2000);

// const btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     alert("Why did you click me?!")
// });

// const nums = [9,8,7,6,5,4,3,2,1];
// const words = ['asap', 'byob', 'rofl', 'rsvp'];

// const parityList = nums.map((n) => 
//     n % 2 === 0 ? 'even' : 'odd'
// )

// console.log(parityList);

// const doubles1 = nums.map(function (n) {
//     return n * 2;
// })

// const doubles2 = nums.map(n => {
//     return n * 2;
// })

// const doubles3 = nums.map(n => n * 2);

// console.log(doubles3);

// nums.forEach(function(num, id){
//     console.log(id, num);
// });

// const isEven = nums.map(function(n) {
//     return {
//         value: n,
//         even : n % 2 === 0
//     }
// })

// const upperWords = words.map(function (word) {
//     return word.toUpperCase().split('').join('.');
// })

// console.log(upperWords);

// function printTriple(n){
//     console.log(n * 3);
// }

const books = [{
    title : 'Good Omens',
    authors : ['Terry Pratchett', 'NEil Gaiman'],
    rating : 4.25
},
{
    title : 'Bone: The complete edition',
    authors : ['Jeff Smith'],
    rating : 4.2
},
{
    title : 'American Goons',
    authors : ['Neil Gaiman'],
    rating : 4.11
},
{
    title : 'A Gentleman in Moscow',
    authors : ['Amor Towles'],
    rating : 4.36
},
{
    title : "Shitty Cunt of a Book",
    authors: ['Hatem Bazien'],
    rating: 0.01
}
]

// const cuntLog = books.reduce((groupedBooks, book) => {
//     const key = Math.floor(book.rating);
//     if (!groupedBooks[key]) groupedBooks[key] = [];
//     groupedBooks[key].push(book)
//     return groupedBooks;
// }, {})
// console.log(cuntLog);
// books.sort((a,b) => a.rating - b.rating);
// console.log(books);

// let query = 'A';
// const bookSearch = books.filter((book) => {
//     let title = book.title.toLowerCase();
//     return title.includes(query.toLowerCase());
// })

// console.log(bookSearch);
// const goodBook = books.find(book => book.rating > 4.19);

// console.log(goodBook);

// const onlyBooks = books.map(book => book.title.toUpperCase());

// console.log(onlyBooks);

// books.forEach(book => console.log(book.title.toUpperCase()));


// const square = n => n * n;
// console.log(square(5));

const movies = [
    'Mrs. Doubtfire',
    'Mr. and Mrs. Smith',
    'The Fantastic Mr. Fox',
    'Mr. Deeds'
]

// const movie = movies.find(movie => movie.includes('Mrs'));

// console.log(movie)

// const mrsMovie = movies.filter(movie => movie.includes('Mrs'));
// const mrMovie = movies.filter(movie => movie.includes('Mr'));

// console.log(mrMovie);

const words = ['dog', 'lag', 'bag', 'fag', 'digf', 'log'];

const all3Lets = words.every(word => word.length === 3);

const allEndInG = words.every(word => {
    const lastL = word.length - 1;
    return word[lastL] === 'g';
});

const startsD = words.some(word => word[0] === 'd');

// console.log(startsD);

const prices = [400.5, 30000, 99.99, 35.99, 12, 9500];

// const sortedPrices = prices.sort();
// console.log('prices',prices);
// const ascSort = prices.slice().sort((a,b) => a - b);
// console.log('ascSort', ascSort);
// const descSort = prices.slice().sort((a,b) => b - a);
// console.log('descSort',descSort);
// // prices.sort((a,b) => a - b);
// console.log('ascSort again', ascSort);
// // prices.sort((a,b) => b - a);
// console.log('prices again',prices);
// console.log('descSort again', descSort);


// REDUCE!!!

// const nums = [3,4,5,6,7];
// const mean = nums.reduce((accumulator, currentVal) => {
//     console.log(accumulator, currentVal)
//     return (accumulator + currentVal) / nums.length});
// console.log(mean);

const grades = [87,64,96,92,88,99,73,70,64];

const maxGrade = grades.reduce((max,currVal) => {
    if (currVal > max) return currVal;
    return max;
})
const minGrade = grades.reduce((min, currVal) => {
    return Math.min(min, currVal);
})
// console.log(minGrade);

const sum = [10,20,30,40,50].reduce((sum, currVal) => {
    return sum + currVal;
}, 1000)
// console.log(sum);

const votes = ['y','n','y','y','y','n','y','n','n','y','n','n','y','y','n','n'];
const results = votes.reduce((tally, val) => {
//     if (tally[val]) {
//         tally[val]++;
//     } else {
//         tally[val] = 1;
//     }
//     return tally;
    tally[val] = (tally[val] || 0) +1;
    return tally;
}, {})
// console.log(results);

// const greeting = (person, greeting = 'hi') => greeting + ' ' + person + "!";
// console.log(greeting('cunt', 'yo'));

const nums = [9,3,2,8];
// console.log(Math.max(...nums));

function giveMeFour(a,b,c,d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

const colors = ['red', 'blue', 'green', 'yellow', 'turqouise'];

const str = 'GOAT';

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail','banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];
console.log(mollusca);

// console.log(giveMeFour(...str));
