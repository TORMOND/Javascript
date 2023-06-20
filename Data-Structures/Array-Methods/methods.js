// Big O Notation

// O(n^2)
const data = ['A', 'B','C'];

const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < data.length; i++){
    for(let j =0; j < data1.length; j++){
        console.log(data[i] + data1[j]);
    }    
}
//#####################################################################################################
/*
1. Reduce
2. Filter
3.Map
4.find
5. splice
6.slice
7.shift
8.unshift
9.every
10.some
11.Fill
12.Join
13.Push
14.IndexOf
15.Concat
16.Sort
17.Pop
18.ForEach
19.Includes
20.Flat
21.From
22.FindIndex
23.Reverse
24.IsArray

*/



// Array Reduce

const numbers = [1, -1, 2, 3];

// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// },0);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue )

console.log(sum)

// Array Filters
var arr = [5, 38, -47, 93, 190, 1860];

var odd = arr.filter(function(n){
  return  n % 2 !==0; 
})

console.log(odd);

// Math pow 
var a = 9;
var b = 3;

var c = Math.pow(a,b);
 console.log(c);
 var sq = Math.sqrt(a)

 
 // Map Array


var girlsBodyCounts = [0, 1, 2, 5, 8, 10, 12, 17, 21, 25, 30, 40, 60, 100, 150, 200, 300, 500, 700, 1000, 3000];

 const dateAble = girlsBodyCounts.filter(x=> x < 8)
 .map(n=> (n.name, n.count))
 
console.log(dateAble);


var takeTwo = [
    {name: 'Victor', age: 21},
    {name: 'John', age: 27},
    {name: 'Peter', age: 34},
    {name: 'Tim', age: 49},
    {name: 'Chris', age: 13}
]

// Slice
const array = [1, 2, 3, 4, 5, 6, 7];

const array2 = array.slice(1,6);

console.log(array2);

const array3 = array.slice(-3);

console.log(array3);

const take3 = takeTwo.slice(0,3);
console.log(take3);

// Splice

const countries = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Burundi', 'DRC', 'Ethiopia','Eritria', 'Zimbambwe'];
// const ke = countries.find(country)
// console.log(ke)
const eastAfricanCountries = countries.splice(0,6);

console.log(eastAfricanCountries);

console.log(countries);

// Fill 

const digits = [1, 2, 3, 4, 5, 6];

const digits2 = digits.fill(9, 1, 3);

console.log(digits);
console.log(digits2);

const digits3 = digits2.fill(0);


console.log(digits2); // Value of digits2 changes

console.log(digits3);

function fillNumbers(n){
    return Array(n)
    .fill(0)
    .map( (_, indx)=> indx + 1)
}

console.log(fillNumbers(12));


//join

const res = countries.join('-');

console.log(res);

//shift

const numberOfItems = [1, 2, 3, 4, 5];

const firstItem = numberOfItems.shift();
 
console.log(`Shift method:${numberOfItems}`);

//unshift

numberOfItems.unshift(0)

console.log(`Unshift method:${numberOfItems}`)

numberOfItems.unshift(0, -1);

console.log(`Unshift  method 2: ${numberOfItems}`)
// every

const arr2 = [1, 2, 3, 4, 5];

const res2 = arr2.every(isPositive)

function isPositive(element){
    return element > 0
}

console.log(res2);

const arrys = [[1, 2, 3], [4, 5, 6], [7,8], 9];

const rs = arrys.every(a => Array.isArray(a));
console.log(rs);

//some

const rs2 = arrys.some(a => Array.isArray(a));
console.log(rs2);

// Find

const randomNames = [ 'Jane', 'Sam', 'Buck', 'Cecil'];

const finder = randomNames.find(findName);

function findName(person){
     return person === 'Cecil'
}

console.log(`finding value: ${finder}`);

//findIndex
 const indexing = randomNames.findIndex(findPersonIndex);

 function findPersonIndex(value){
   return value === "Buck"
 }

console.log(indexing);

//from
const str ='123456789';

const str2 = Array.from(str, (y)=> Number(y))

console.log(str2);

const queries = [1, 3, 5, 2, 6, 84, 31, 76, 9, 4, 3, 5, 7, 9, 1, 2, 11, 99, 1, 47, 67, 84];

const arranged = Array.from(new Set(queries));

console.log(arranged);

//isArray

console.log(Array.isArray(str));

// flat

const arr3 = [1, [2, [3, [4, [5 ]]]]];

const res3 = arr3.flat();
const res4 = arr3.flat(3);
const res5 = arr3.flat(Infinity);

console.log(res3);
console.log(res4);
console.log(res5);


// string slice similar to substring

let fruits = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);

console.log(part);

//replace
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

// sort

let arr4 = [23, 14, 35, 1, 9, 6, 647, 7];

console.log(arr4.sort(function(a, b){return a - b})); // ascending order

console.log(arr4.sort(function(a, b){return b - a})); // descending order

