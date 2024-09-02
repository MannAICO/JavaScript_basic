// Q1 - Given an array of numbers, use the map function with an arrow function to 
// square each element of the array.

// // const numbers = [1,2,3,4,5,6,7,8,9,10]

// // const square = numbers.map(num => {
// //     return num * num
// // })

// // console.log(square);



// Q2 - Write a JavaScript function that takes a student's score as 
// a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// const grade = score => { 
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
// }

// console.log(grade(89));



// // Q3 - Create an object representing a car with properties like Company name, model, and year. 
// // Write a function to change the car's year property. Also use object destructuring to extract 
// // and print the car's Model and Year.

// const car = {
//     companyName: 'Toyota',
//     model: 'Corolla',
//     year: 2019
// };

// // Arrow function to change the car's year property
// const changeYear = newYear => car.year = newYear;
// changeYear(2021);

// // Object destructuring to extract and print Model and Year
// const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`); 



// //Q4 - Given an array of numbers, use the filter function to create a new array containing 
// //only the prime numbers.


// const numbers = [8,5,66,78,54,91,88,85,74]

// const isPrime = num => {
//     if(num<=1) {
//         return false ;
//     } else {
//         for(let i = 2 ; i<num; i++) {
//             if(num % i === 0) {
//                 return false;
//             }
//             return true;
//         }
//     }
// }
// const primeNumbers = numbers.filter(isPrime);
// console.log(primeNumbers);


//Q5 -  State different use cases of map, filter and reduce functions.

// map: Used to transform an array by applying a function to each element.
// Example: Squaring all numbers in an array.

// filter: Used to create a new array with only the elements that pass a test. 
// Example: Extracting prime numbers from an array.

// reduce: Used to accumulate array elements into a single value. 
// Example: Summing all numbers in an array.


// Q6 - Write an asynchronous function using async-await  to fetch data from an API 
// (you can use the JSONPlaceholder API) and log the result.

// async function fetchdata(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         console.log(data);
        
//     } catch(error) {
//         console.log(error);
        
//     }
// }

// fetchdata();


// // Q7 - Define a nested object representing a person with properties like name, address, and contact. 
// // Use optional chaining to safely access the person's phone number, even if the contact property is missing.

// const person = {
//     name: 'John Doe',
//     address: {
//         city: 'New York',
//         zip: '10001'
//     },
//     contact: {
//         phone: '123-456-7890'
//     }
// };

// // Accessing the phone number safely using optional chaining
// const phoneNumber = person.contact?.phone;
// console.log(phoneNumber); 

// // Accessing a non-existent property
// const email = person.contact?.email;
// console.log(email); 

