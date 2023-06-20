const getLaws = async () => {
    const response = await fetch('file2.json');
        if (response.status !== 200 ){
        throw new Error("Cannot get data");
        }else{
            const data = response.json(); 
          return data;
        }
    
}
getLaws().then( data => console.log(data))
.catch(err => console.log(err.message))


// You are given two sorted arrays that both only contain integers.
// Your task is to find a way to merge them into a single one, sorted in asc order. 
//Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2
// must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders.
// Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

var arr1 =[1,3,5,7,9,11,12];

var arr2 = [1,2,3,4,5,10,12];

function mergeArrays(arr1, arr2) { 
     var arr3 = arr1.concat(arr2).sort(function(a, b){return a - b})
     
    return  arr3.filter((item, index) => arr3.indexOf(item) === index)
}
console.log(mergeArrays(arr1,arr2));


const clothes = ['Jacket', 't-shirt'];
clothes.length = 0;

var a = clothes[0];

console.log("the value =", a);


function fillNumbers(n){
  return Array(n)
  .fill(0)
  .map( (_, indx)=> indx + 1)
}
const sum = fillNumbers(12).reduce(
  (accumulator, currentValue)=> accumulator + currentValue
)
console.log(sum)

console.log(fillNumbers(12));


/*  ################################################################################################## */

const queries = [1, 3, 5, 2, 6, 84, 31, 76, 9, 4, 3, 5, 7, 9, 1, 2, 11, 99, 1, 47, 67, 84];

function arrange(a){
 const y = Array.from(new Set(a))
 return y.sort(function(b,c){return b- c})
}

console.log(`Queries: ${arrange(queries)}`)

for(let w = 0 ; w < 10; w++){
  console.log(w)
}
 
// CONVERSION BINARY TO NUMBERS
var arr = [1, 1, 1, 1];

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2);
};

function binaryArrayToNumber2(arr) {
  return arr.reduce((a, b) => a << 1 | b );
}

console.log(binaryArrayToNumber(arr));
console.log(binaryArrayToNumber2(arr));

console.log(arr.length);

var arrr = ['1', '2', '3'];
// array of strings

var nums = arrr.map(function(str) {
   // using map() to convert array of strings to numbers

   return parseInt(str); });


console.log(parseInt(('1111'),2));

const itemsA = ['a', 'b', 'c','d', 'e','f', 'g'];

for(const [index, item] of itemsA.entries() ){
  console.log(`${index}: ${item}`)
}

var friends =["James", "Kieran", "Mark"] 
function friend(friends){
  return friends.filter(n => n.length === 4)
}


let masters = [
  {
    name: 'Fire Man',
    weapon: 'Fire',
    weakness: 'Water',
    difficulty: 5
  },
  {
    name: 'Water Man',
    weapon: 'Water',
    weakness: 'Electricity',
    difficulty: 6
  },
  {
    name: 'Wood Man',
    weapon: 'Leaf Shield',
    weakness: 'Fire',
    difficulty: 1
  },
  {
    name: 'Electric Man',
    weapon: 'Electricity',
    weakness: 'Leaf Shield',
    difficulty: 8
  }
 ]


//  In the classic Mega Man games, you'd start the game with one weapon (called 'Buster'), and you'd have to defeat 8 robot bosses. Each time you defeated a robot boss, you'd acquire that boss's weapon to use in future fights against the other robot bosses.

//  https://en.wikipedia.org/wiki/Mega_Man#Original_series [this link is purely optional]
 
//  There was a cycle among bosses, where each robot boss was weak to one of the other robot's weapons, so you'd have an easier time if you beat the bosses in a specific order so as to exploit their weaknesses (Mega Man 3 was weird, and didn't quite have a cycle). For instance, in Mega Man 2, Bubble Man was weak to Metal Man's Metal Blade weapon, so it made sense to beat Metal Man and acquire the Metal Blade before facing Bubble Man. Kind of like rock, paper, scissors, but in robot form :)
 
//  Your task in this kata is to find the 'easiest' boss order, given an array of boss objects.
 
//  class Boss {
//    constructor(name, weapon, weakness, difficulty) {
//      this.name = name; // string
//      this.weapon = weapon; // string
//      this.weakness = weakness; // string
//      this.difficulty = difficulty; // Integer in [1,8]
//    }
//  }
//  Each Boss object has a name, a weapon, a weakness, and a difficulty rating. Whenever you beat a boss, you acquire their weapon to use against future bosses. If you have the weapon a boss is weak against, you can assume you'll beat that boss no matter what.
 
//  However, since you start with only the Buster, which no boss is weak against, you'll always want to start with the boss with the lowest difficulty value (difficulty === 1). From there, you can completely ignore difficulty levels, and focus on exploiting weaknesses instead.
 
//  Given an array of boss objects, your task is to return an array containing the names of the bosses to fight, in 'easiest' order. 'Easiest' order means the following:
 
//  You always start with the boss with difficulty level === 1
 
//  After the first boss, you only pick a boss if it's weak to a weapon that you have.
 
//  For example, given the following excerpt of robot bosses:
 
//  let masters = [
//   {
//     name: 'Fire Man',
//     weapon: 'Fire',
//     weakness: 'Water',
//     difficulty: 5
//   },
//   {
//     name: 'Water Man',
//     weapon: 'Water',
//     weakness: 'Electricity',
//     difficulty: 6
//   },
//   {
//     name: 'Wood Man',
//     weapon: 'Leaf Shield',
//     weakness: 'Fire',
//     difficulty: 1
//   },
//   {
//     name: 'Electric Man',
//     weapon: 'Electricity',
//     weakness: 'Leaf Shield',
//     difficulty: 8
//   }
//  ]
//  the order in which you'd want to fight the bosses would be:
 
//  ["Wood Man", "Electric Man", "Water Man", "Fire Man"]
//  Because Wood man has difficulty === 1, you start there. Defeating Wood Man gives you his Leaf Shield weapon. From there, Electric Man is weak to Leaf Shield, and defeating Electric Man gives you Electricity. Water Man is weak to Electricity, and Fire Man is weak to Water, and so on.
 
//  Some things to keep in mind:
// There will be only one robot boss with difficulty === 1. Always start with this robot master.

// If you have the weapon a boss is weak againt, you can simply ignore their difficulty level. I.E. ignore difficulty levels after the first boss - they're used only because we have to start somewhere in the cycle.

// Each boss is weak to exactly one weapon

// No two bosses are weak to the same weapon

// Each random test is isolated, so don't worry if you see the same boss appearing in different orders in different random tests.

// Solutions are unique. There is exactly one correct ordering to the boss order array in this kata. This is not true in the real games, but this is a simplification :)

// It's up to you to choose how to keep track of weapons you've acquired. Enjoy, and please let me know if you have any suggestions!

function getMastersOrder(masters) {
  let order = [];
  order.push(masters.sort((a,b) => a.difficulty - b.difficulty)[0]);
  for(let i=0; i<masters.length-1; i++) {
    for(let j=0; j<masters.length; j++) {
      if(masters[j].weakness === order[i].weapon)
        order.push(masters[j]);
    }
  }
  return order.map(e => e.name);
}
console.log(`order is: ${getMastersOrder(masters)}`)


const arrx = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = arrx.reduce((a, b) => Math.min(a, b))
console.log(min);


const sentence = "Lets go to the movies";


 function vaporcode(string) {
  let str1=string.toUpperCase().split('')
  return str1.filter(element => element.trim()).join('  ')
 }

console.log(vaporcode(sentence))


 


 
// TIMER 
 

//  function getCurrentTime(){
//  const date = new Date();
//  const hour = date.getHours();
//  const minutes  = date.getMinutes();

//  if(minutes <10 ){
//   minutes = "0" + minutes
//  }
//  const seconds = date.getSeconds();
//  if(seconds < 10){
//   seconds = "0"+ seconds
//  }

//  const timerTime = 172200;
//  const currentTime  = hour.toString() + minutes.toString() + seconds.toString()


// // console.log(parseInt(currentTime))
// // const remainingTime = (timerTime -parseInt(currentTime))/ 60;
// //  console.log(currentTime)

// // const rem  = document.querySelector('.remaining-time')
// // rem.innerHTML = remainingTime
// //  const time = document.querySelector('.time')
// //  time.innerHTML = hour+ ":"+ minutes +":" + seconds

//  }

//  const clock = setInterval(getCurrentTime, 1000)
// // clearInterval(clock)

// const watch = setTimeout(getCurrentTime, 10000)


// const year = date.getFullYear()

// const month = date.getMonth()

// const day = date.getDate()

// // const time = day.getTime();

// console.log(year)


function likes(names) {
  // TODO
  if(names.length = 0) return "no one likes this"
  if(names.length = 1) return `${names[0]} likes this`
  if(names.length > 1) return `${names.join("and")} likes this`
  if(names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length -2} likes this`
  
}

const people = []
console.log(likes(people))


function updateLight(current) {
  
  var trafficLights = ["green", "yellow", "red"];
  
  var currentIndex = trafficLights.indexOf(current);
   var nextIndex;
  if(currentIndex = trafficLights.length-1){
    return trafficLights[0]
  }
   
  if(currentIndex < trafficLights.length-1 ){
  return trafficLights[currentIndex++]
  }
   
}

console.log(updateLight("green"))


//Shallow cloning

const existing = {a: 1, b: 2, c: 3};
const clone = Object.assign({}, existing)
const {... clone2} = existing;

console.log(clone2)

//older version

var clone3 = {}
for (var prop in existing){
  if(existing.hasOwnProperty(prop)){
    clone3[prop]= existing[prop]
  }
}

console.log(clone3)


// console.log(crypto.randomUUID())

// Two sum Algorithms

var nums = [2, 7, 11, 15];

var twoSum = function(nums, target){
  const previousValues = {};
  for(let i=0; i< nums.length; i++){
    const currentNumber = nums[i]
    const neededValue = target - currentNumber
    const index2 = previousValues[neededValue]
    if(index2 !=null){
      return [index2, i]
    } else{
      previousValues[currentNumber] = i
    }
  }
}

console.log(twoSum(nums, 9))

//BNB
//TRAVEL

