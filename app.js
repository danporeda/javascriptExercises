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
//     const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

//     // const card = {
//     //     Suit : pick(suit),
//     //     Num  : pick(numberArray)
//     // }
//     const value = pick(numberArray);
//     const suit = pick(suits);
//     return {
//         value,
//         suit
//     };
// }
// console.log(getCard());

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
//    return n * 2;
// })
// console.log(doubles2);

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

// const books = [{
//     title : 'Good Omens',
//     authors : ['Terry Pratchett', 'NEil Gaiman'],
//     rating : 4.25
// },
// {
//     title : 'Bone: The complete edition',
//     authors : ['Jeff Smith'],
//     rating : 4.2
// },
// {
//     title : 'American Goons',
//     authors : ['Neil Gaiman'],
//     rating : 4.11
// },
// {
//     title : 'A Gentleman in Moscow',
//     authors : ['Amor Towles'],
//     rating : 4.36
// },
// {
//     title : "Shitty Cunt of a Book",
//     authors: ['Hatem Bazien'],
//     rating: 0.01
// }
// ]

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

// const movies = [
//     'Mrs. Doubtfire',
//     'Mr. and Mrs. Smith',
//     'The Fantastic Mr. Fox',
//     'Mr. Deeds'
// ]

// const movie = movies.find(movie => movie.includes('Mrs'));

// console.log(movie)

// const mrsMovie = movies.filter(movie => movie.includes('Mrs'));
// const mrMovie = movies.filter(movie => movie.includes('Mr'));

// console.log(mrMovie);

// const words = ['dog', 'lag', 'bag', 'fag', 'digf', 'log'];

// const all3Lets = words.every(word => word.length === 3);

// const allEndInG = words.every(word => {
//     const lastL = word.length - 1;
//     return word[lastL] === 'g';
// });

// const startsD = words.some(word => word[0] === 'd');

// // console.log(startsD);

// const prices = [400.5, 30000, 99.99, 35.99, 12, 9500];

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

// const grades = [87,64,96,92,88,99,73,70,64];

// const maxGrade = grades.reduce((max,currVal) => {
//     if (currVal > max) return currVal;
//     return max;
// })
// const minGrade = grades.reduce((min, currVal) => {
//     return Math.min(min, currVal);
// })
// // console.log(minGrade);

// const sum = [10,20,30,40,50].reduce((sum, currVal) => {
//     return sum + currVal;
// }, 1000)
// console.log(sum);

// const votes = ['y','n','y','y','y','n','y','n','n','y','n','n','y','y','n','n'];
// const results = votes.reduce((tally, val) => {
//     if (tally[val]) {
//         tally[val]++;
//     } else {
//         tally[val] = 1;
//     }
//     return tally;
//     tally[val] = (tally[val] || 0) +1;
//     return tally;
// }, {})
// console.log(results);

// const greeting = (person, greeting = 'hi') => greeting + ' ' + person + "!";
// console.log(greeting('cunt', 'yo'));

// const nums = [9,3,2,8];
// console.log(Math.max(...nums));

// function giveMeFour(a,b,c,d) {
//     console.log('a', a);
//     console.log('b', b);
//     console.log('c', c);
//     console.log('d', d);
// }

// const colors = ['red', 'blue', 'green', 'yellow', 'turqouise'];

// const str = 'GOAT';

// const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

// const gastropods = ['giant african snail','banana slug', 'variable neon slug'];

// const cnidaria = ['fire coral', 'moon jelly'];

// const feline = { legs : 4, family : "Felidae"};
// const canine = { family : 'Canine', furry : true};
// const dog = { ...canine, isPet : true, adorable : true};
// const houseCat = {...feline, isGrumpy : true, personality : 'unpredictable'};
// const catDog = { ...canine, ...feline};
// const tripod = {...feline,legs : 3 };

// console.log(tripod);

// const mollusca = ['garden slug', ...cephalopods, ...gastropods];
// console.log(mollusca);

// console.log(giveMeFour(...str));

// function summa() {
//     const argsArray = [...arguments];
//     return argsArray.reduce((total,currVal) => {
//         return total+currVal;
//     })
// }

// function fullName(first,last, ...titles) {
//     console.log('first', first);
//     console.log('last', last);
//     console.log('titles', titles);
// }

// console.log(fullName('Dan', 'Poreda', 'The Cunt', 'Wadsworth'));

// const multiply = (...nums) => (
//     nums.reduce((total, currVal) => total * currVal)
// )

// console.log(multiply(3,6,9,2,7));

// const shitPie = ['clap', 'smack', 'blarp', 'clonk']

// const [primo, ...others] = shitPie;

// console.log(primo, others);

// const response = [
//     'HTTP/1.1',
//     '200 OK',
//     'application/json',
// ]

// function parseResponse([, statusCode]) {
//     console.log(`Status ${statusCode}`);
// }

// console.log(parseResponse(response));

// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         max,
//         min, 
//         sum,
//         avg
//     }
// }
// const reviews = [4.5,5.0,3.44,2.8,3.5,4.0,3.5];

// const stats = getStats(reviews);
// console.log(stats);

// const role = 'host';
// const person = 'Jools Holland';
// const role2 = 'Director';
// const person2 = 'James Cameron'

// const team = {};
// team[role] = person;
// team[role2] = person2;

// const team = {
//     [role]:person,
//     [role2]:person2
// }

// function addProp(obj,k,v) {
//     const copy = {...obj}
//     copy[k] = v;
//     return copy;
// }

// *computed properties
// const addProp = (obj,k,v) => ({...obj,[k] : v });

// console.log(addProp(team, 'happy', ':)'));

// const math = {
//     multiply : function(x, y) {
//         return x * y;
//     },
//     divide : function(x, y) {
//         return x / y;
//     },
//     square : function(x) {
//         return x * x;
//     }
// }

// const auth = {
//     name: 'TommyBoy',
//     login() {
//         console.log("LOGGGED IN")
//     },
//     logout() {
//         console.log("LOGGEDOUT")
//     }
// }

// console.log(auth.login);

// function sayHi() {
//     console.log(this);
// }

// console.log(sayHi());

// const person = {
//     first : 'Cherilyn',
//     last : 'Sarkisian',
//     nickName : 'Cher',
    // fullName() {
    //     console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
    // }
//     fullName() {
//         const {
//             first,
//             last,
//             nickName
//         } = this;
//         return `${first} ${last} AKA ${nickName}`;
//     },
//     printBio(){
//         const fullName = this.fullName();
//         console.log(`${fullName} is a person!`);
//     },
//     laugh(){
//         // console.log(this);
//         console.log(`${this.nickName} says HAHAA`)
//     }
// }

// // const printBio = person.printBio();

// console.log(person.laugh());

// const annoyer = {
//     phrases : ['literally','cray cray', 'I cant even', 'totes!', 
//     'YOLO!','cant stop wont stop'],
//     pickPhrase() {
//         const { phrases } = this;
//         const idx = Math.floor(Math.random() * phrases.length);
//         return phrases[idx];
//     },
//     start() {
//         this.timerId = setInterval(() => {
//             console.log(this.pickPhrase());
//         }, 1000)
//     },
//     stop() {
//         clearInterval(this.timerId);
//         console.log('its over');
//     }
//     }


// function makeDeck(){
//     const deck = [];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//     const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
//     for (let value of values.split(',')) {
//         for (let suit of suits) {
//             deck.push({
//                 value,
//                 suit
//             })
//         }
//     }
//     return deck;
// }

// function drawCard(deck) {
//     return deck.pop();
// }

// const myDeck = {
//     deck : [],
//     drawnCards : [],
//     suits : ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
//     values : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//     initializeDeck(){
//         const {suits, values, deck} = this;
//         for (let value of values.split(',')) {
//             for (let suit of suits) {
//                 deck.push({
//                     value,
//                     suit
//                 })
//             }
//         }
//     return deck;
//     },
//     drawCard(){
//         const card = this.deck.pop();
//         this.drawnCards.push(card);
//         return card;
//     },
//     drawMultiple(numCards){
//         const cards =[];
//         for (let i = 0; i < numCards; i++){
//             cards.push(this.drawCard());
//         }
//         return cards;
//     },
//     shuffle() {
//         const { deck } = this;
//         for (let i = deck.length - 1; i > 0; i--){
//             // pick random index before current element
//             let j = Math.floor(Math.random() * (i + 1));
//             //swap
//             [deck[i], deck[j]] = [deck[j], deck[i]];
//         }
//     }
// }
// myDeck.intializeDeck();
// myDeck.shuffle();
// console.log(myDeck.deck);

// Deck factory
// const makeDeck = () => {
//     return {
//         deck : [],
//         drawnCards : [],
//         suits : ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
//         values : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//         initializeDeck(){
//             const {suits, values, deck} = this;
//             for (let value of values.split(',')) {
//                 for (let suit of suits) {
//                     deck.push({
//                         value,
//                         suit
//                     })
//                 }
//             }
//         return deck;
//         },
//         drawCard(){
//             const card = this.deck.pop();
//             this.drawnCards.push(card);
//             return card;
//         },
//         drawMultiple(numCards){
//             const cards =[];
//             for (let i = 0; i < numCards; i++){
//                 cards.push(this.drawCard());
//             }
//             return cards;
//         },
//         shuffle() {
//             const { deck } = this;
//             for (let i = deck.length - 1; i > 0; i--){
//                 // pick random index before current element
//                 let j = Math.floor(Math.random() * (i + 1));
//                 //swap
//                 [deck[i], deck[j]] = [deck[j], deck[i]];
//             }
//         }
//     }
// }

// const deck1 = makeDeck();
// deck1.initializeDeck()
// deck1.shuffle();
// const deck2 = makeDeck();
// deck2.initializeDeck();
// console.log(deck1.deck);
// console.log(deck2.deck);


// const allLis = document.querySelectorAll('li');

// const colors = ['red', 'orange', 'green', 'blue', 'purple', 'yellow'];

// for (i = 0; i < allLis.length; i++) {
// for (let li of allLis) {
//     li.style.color = ;
// }

// allLis.forEach((el, i) => {
//     const color = colors[i];
//     el.style.color = color;
// })