// // To make an empty array
// let students = [];

// // An array of strings
// let colors = ["red", "orange", "yellow"];

// //An array of numbers
// let lottoNums = [19, 22, 56, 12, 51];

// //A mixed array
// let stuff = [true, 68, "cat", null];
// let topSongs = [
// 	'First Time Ever I Saw Your Face',
// 	'God Only Knows',
// 	'A Day In The Life',
// 	'Life On Mars'
// ];

// // To add to the end of an array:
// topSongs.push('Fortunate Son');
// topSongs.push('Landslide');
// topSongs.push(12324166);

// // To remove the last item
// topSongs.pop(); //12324166
// let dishesToDo = [ 'large platter' ];

// //to add to the start:
// dishesToDo.unshift('plate');

// //add to the start again:
// dishesToDo.unshift('cereal bowl');
// dishesToDo.unshift('spoon');

// //remove from the start:
// dishesToDo.shift();
// let fruits = ["apple", "banana"];
// let veggies = ["asparagus", "brussel sprouts"];
// let meats = ["steak", "chicken breast"];

// console.log(fruits.concat(veggies));
// console.log(veggies.concat(fruits));

// let allFoods = fruits.concat(veggies, meats);

// ARRAYS ARE NOT IDEAL FOR STORING ALL TYPES OF DATA.

// We could use an array if we made sure we always follow the same pattern:
//index 0: total steps
//index 1: total floors
//etc.
// const fitbitData = [308756, 1814, 211];

//We have no insight into WHAT we are storing at each index

//And we could mess things up super easily if we're not careful
// const lucyFitbitData = [12344, 1814, 211];

// OBJECTS TO THE RESCUE!

// const student = {
//   firstName: "David",
//   lastName: "Jones",
//   strengths: ["Music", "Art"],
//   exams: {
//     midterm: 92,
//     final: 88,
//   },
// };

// const avg = (student.exams.midterm + student.exams.final) / 2;

// const shoppingCart = [
//   {
//     product: "Jenga Classic",
//     price: 6.88,
//     quantity: 1,
//   },
//   {
//     product: "Echo Dot",
//     price: 29.99,
//     quantity: 3,
//   },
//   {
//     product: "Fire Stick",
//     price: 39.99,
//     quantity: 2,
//   },
// ];

// const game = {
//   player1: {
//     username: "Blue",
//     playingAs: "X",
//   },
//   player2: {
//     username: "Muffins",
//     playingAs: "O",
//   },
//   board: [
//     ["O", null, "X"],
//     ["X", "O", "X"],
//     [null, "O", "X"],
//   ],
// };

// const palette = {
//   red: "#eb4d4b",
//   yellow: "#f9ca24",
//   blue: "#30336b",
// };

// const palette2 = palette;
// palette2.green = "#ebf876";

// let nums = [1, 2, 3];
// let mystery = [1, 2, 3];
// let moreNums = nums;

// const user = {
//   username: "hanamhn",
//   email: "hanamhn@gmail.com",
//   notifications: ["message", "alert"],
// };

// if (!user.notifications.length) {
//   console.log("No New Notifications");
// }

// [1, 2, 3];

// const word = "stressed";
// let reversed = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   reversed += word[i];
//   console.log(reversed);
// }

// let str = "LOL";
// for (let i = 0; i <= 4; i++) {
//   console.log("Outer: ", i);
//   for (let j = 0; j < str.length; j++) {
//     console.log(" Inner: ", str[j]);
//   }
// }

// Sum all elements in our 2048 board
// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2],
// ];

// let totalScore = 0;
// //outer loop iterates through the rows
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   //inner loop iterates over each cell in a given row
//   for (let j = 0; j < row.length; j++) {
//     totalScore += row[j];
//   }
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// let j = 0;
// while (j <= 5) {
//   console.log(j);
//   j++;
// }
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (true) {
//   // console.log(`Target: ${target} Guess: ${guess}`);
//   // guess = Math.floor(Math.random() * 10);
//   if (target === guess) break;
//   guess = Math.floor(Math.random() * 10);
// }

// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN!!!`);
let subreddits = ["soccer", "popheads", "cringe", "books"];

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(subreddits[i]);
// }

// for (let sub of subreddits) {
//   console.log(sub);
// }

// for (let char of "cockadoodledoo") {
//   console.log(char.toUpperCase());
// }

// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ];

// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let j = 0; j < row.length; j++) {
//     // console.log(row[j]
//     sum += row[j];
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// const words1 = ["mail", "milk", "bath", "black"];

// const words2 = ["box", "shake", "tub", "berry"];

// const movieReviews = {
//   Arrival: 9.5,
//   Alien: 9,
//   Amelie: 8,
//   "In Bruges": 9,
//   Amadeus: 10,
//   "Kill Bill": 8,
//   "Little Miss Sunshine": 8.5,
//   Coraline: 7.5,
// };

// for (let movie of Object.keys(movieReviews)) {
//   console.log(movie, movieReviews[movie]);
// }

// const rating = Object.values(movieReviews);
// let total = 0;
// for (let r of rating) {
//   total += r;
// }
// let avg = total / rating.length;
// console.log(avg);
// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// We CAN iterate over the keys of an object
// for (let movie of Object.keys(movieReviews)) {
//   console.log(`You rated ${movie} - ${movieReviews[movie]}`);
// }

// We can also iterate over the values
// To calculate the average movie rating:
// const ratings = Object.values(movieReviews);
// let total = 0;
// for (let r of ratings) {
//   total += r;
// }
// let avg = total / ratings.length;
// console.log("Average Rating: ", avg);

// const jeopardyWinnings = {
//   regularPlay: 2522700,
//   watsonChallenge: 300000,
//   tournametOfChampion: 500000,
//   battleOfTheDecades: 10000,
// };

// for (let props in jeopardyWinnings) {
//   console.log(props);
//   console.log(jeopardyWinnings[props]);
// }

// let total = 0;
// for (let props in jeopardyWinnings) {
//   total += jeopardyWinnings[props];
// }

// console.log(total);

// for (let k in [88, 99, 77, 66]) {
//   console.log(k);
// }
