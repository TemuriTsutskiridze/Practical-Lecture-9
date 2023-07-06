// Call Stack

// 1. დაწერეთ რეკურსიული ფუნქცია, რომელიც დაადგენს რიცხვის ლუწ-კენტობას

// function isEven(number) {
//     if (number === 0) {
//         return true;
//     } else if (number === 1){
//         return false;
//     } else if (number < 0) {
//         return isEven(-number);
//     } else {
//         return isEven(number - 2);
//     }
// }

// console.log(isEven(-2));

// (1) -> false
// (3) -> false
// (5) -> false

// 2. დაწერეთ რეკურსიული ფუნქცია, რომელიც გამოითვლის რიცხვის ფაქტორიალს

// function factorial(number) {
//   let result = 1;
//   for (let i = 1; i <= number; i++) {
//     result *= i;
//   }
//   return result;
// }

// function factorial(number) {
//     if (number === 1) {
//         return 1;
//     } else {
//         return number * factorial(number - 1);
//     }
// }

// console.log(factorial(10));

// (1) -> 1
// (2) -> 2
// (3) -> 6
// (4) -> 24

// 3. დაწერე პროგრამა რეკურსიის გამოყენებით, რომელიც გამოაკონსოლებს მართკუთხა სამკუთხედს #_ებით. სიმაღლე ფუნქციას გადაეცემა არგუმენტად.

// function drawTriangle(height) {
//     if (height === 0) {
//         return;
//     }

//     drawTriangle(height - 1);

//     let row = "";
//     for (let i = 0; i < height; i++) {
//         row += "#"
//     }
//     console.log(row);
// }

// drawTriangle(10000);

// (0) ->
// (1) -> #
// (2) -> ##
// (3) -> ###
// (4) -> ####
// (5) -> #####

// closure

// 4. closure_ის გამოყენებით დაწერეთ innerFunc და outerFunc ფუნქციები, რომლებიც საბოლოოდ გამოაკონსოლებენ მისალმებასა და სახელს, მაგალითად: "გამარჯობა, თემო"

// function outerFunc(greeting) {
//     let localGreeting = greeting;
//     function innerFunc(name) {
//         console.log(`${localGreeting}, ${name}`);
//     }
//     return innerFunc;
// }

// let greeting = outerFunc("გამარჯობა");
// greeting("თემო");

// 5. დაწერეთ ორი - outerFunc და innerFunc ფუნქცია. შიდა ფუნქციამ უნდა გაზარდოს გარე ფუნქციის ლოკალური ცვლადი 1_ით და დააბრუნოს ის

function outerFunc(count) {
  // return function() {
  //     return ++count;
  // }

  return () => ++count;
}

let counter = outerFunc(0);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
