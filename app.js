var arr1 = [1, 2, 3, 4, 5];
var numbers = [658, 63, 12, 69, 0, 32, 5, 34, 57, 19, 86];
var letters = ['a', 'b', 'c', 'd', 'e', 'b', 'c', 'a', 'e', 'd'];

// ##########################################################################################################
// FOR EACH
arr1.forEach((item, index, arr)=>{
    console.log(item)
    console.log('a['+index+ ']=' +item)
})

let sum = 0;
arr1.forEach(item=>{
sum +=item
})
console.log(sum)

let count = {}

letters.forEach(item=>{
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    }
})

console.log(count)


// ##########################################################################################################
// MAP
arr1.map((item, index, arr)=>{


})

console.log(arr1.map(n=> n))
const arr1Double = arr1.map(double)
function double(value, index, arr){
    return value*2
}
console.log(arr1Double)

// ##########################################################################################################
// REDUCE

const newSum = arr1.reduce((a,b)=> a + b)
console.log(newSum)


// ##########################################################################################################
// FILTER
 
numbers.filter(n => n < 50)
console.log(numbers)
console.log(numbers.filter(n => n < 50))

// ##########################################################################################################
// SPLICE
const countries = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Burundi', 'DRC', 'Ethiopia','Eritria', 'Zimbambwe'];

const eastAfricanCountries = countries.splice(0, 6)
console.log(eastAfricanCountries)

// ##########################################################################################################
// JOIN

const res = countries.join('-');

console.log(res);

// ##########################################################################################################
//SHIFT

const numberOfItems = [1, 2, 3, 4, 5];

const firstItem = numberOfItems.shift();
 
console.log(`Shift method:${numberOfItems}`);

// ##########################################################################################################
// #

const newItems = [
    {title:"", price: 80},
    {title:"", price: 100},
    {title:"", price: 50},
    {title:"", price: 20}
]
 let new_sum  = 0

 for(let i=0; i< newItems.length; i++){
new_sum += newItems[i].price
 }

 const new_num = newItems.map(n=> n.price).reduce((a, b)=> a + b)
 console.log(new_num)

 