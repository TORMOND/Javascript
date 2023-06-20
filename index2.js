
const date = new Date ;
console.log(date);

const time = date.getTime()
const day = date.getDay()
const today = date.getDate()
const time1 = date.getHours()
const time2 = date.getMinutes()
const time3 = date.getSeconds()

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// console.log(day);
// console.log(time1);
// console.log(time2);
// console.log(time3);
// console.log(newTime);


if (time1 >= 12){
   time1 + "PM";
   if(time1 > 12){
    const hours = date.getHours();
  const time1 = hours - 12 + ("PM");
console.log(time1);
}
}
else{
    time1 + "AM";
}

 

const weekday = weekDays[day];
console.log(weekday);
console.log(day);
// console.log("Today is " + weekday + "/n");

// console.log("Current time is:" + time1 +":" + time2 +":" + time3);



const currentDate = new Date();

var sum, x, y ;
sum = x + y;
x = 3;
y = 10;

var z;

z = x + y;
// alert(z) ;

var firstName = "David", secondName = "Johnson", age = 41 ;

var favouriteFood = "Ugali" ;

var favouriteFood;
favouriteFood = "Ugali";

// Detecting a String


var car1 = "Volvo" ;
var car2 = "Subaru" ;

// console.log(car1 + /n + car2);

// console.log(car1 );


// console.log(car2);

// Arrays 

// var cars = [ "volvo", "Subaru"]

// console.log(cars[0] + cars[1]) 

var fNumber = 5 ;
var sNumber = 10 ;

var sum = fNumber + sNumber;
// console.log(fNumber + sNumber + "/n");
// console.log("The sum of the numbers is" + sum + "/n");

// console.log("The sum of the numbers is" + (fNumber + sNumber) + "/n");

const empty = new Array();

const elements = new Array();

elements['Water'] = 'Emotion'
elements['Fire']  = 'Force'
elements['Earth'] = 'Body'
elements['Air']   = 'Mind'
elements['Ether'] = 'Soul'

Object.keys(elements).length

console.log(elements);



var todays =new Date();
var mm = todays.getMonth()+1;
console.log(mm);

// const favouriteMeals = ["Chicken", "Pilau", "Ugali", "fries"];

// console.log(favouriteMeals);

// console.log(favouriteMeals[2] + "/n" + favouriteMeals[0] + "and" + favouriteMeals[1] + "/n")


// for(var n = 0; n < favouriteMeals.length; n++){
//   console.log(favouriteMeals[n])
// }

const meals = new Array();
meals[0] = "pilau";
meals[1] = "githeri";
meals[2] = "tea";
meals[3] = "Chicken";

// console.log(meals[2] + "/n" + meals[0] + "and" + meals[1] + "/n")

console.log(meals.length);

meals.push("fish");

// console.log(meals.indexOf("pilau"));
// console.log(meals.indexOf("tea"));


