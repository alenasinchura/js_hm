/*Task - 1
  Replace the "for" loop with a "while" loop


for (let i = 0; i < 8; i++) {
  console.log( `число - ` + i);
}

*/

/*let i = 0;
while ( i < 8) {i++}
  console.log( `число - ` + i);
 */


/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */

// for loop
// x = 0
// y = 0
//  for (let y = 0; y <= 50; y++) {
//     if (y % 3 !==0)  {x += y;} }
//     console.log('сума ' + x);

// while loop
//   x = 0;
//   y = 0;
// while ( y <= 50 ){
//     if (y % 3 !==0){ x += y}
//     y++;
// }  console.log('сума ' + x);

// do while loop
//Цикл спочатку виконує тіло, а потім перевіряє умову, і поки умова є true, цикл виконується знову і знову.*/
// let x = 0;
// let y = 0;
// do {
//     if (y % 3 !== 0) {
//         x += y;
//     }
//     y++;
// } while (y <= 50);
// console.log('сума ' + x);


/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop
*/
//
// let firstNumber = -100;
// let secondNumber = 250;
// let sum = 0;
//
//  for (let x = firstNumber; x <= secondNumber; x++) {sum += x}
//  console.log("sum "+sum);


/* Task - 4
  Make a timer that will count from 10 to 0


  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/

// let x = 0;
// let y = 0;
// for ( let x = 10; x >= 0, x --;)
//     console.log( x + " seconds left" )
// console.log("no time");

/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */
// let x = 0;
// for (let x = 7; x <= 49; x += 7) {
//     console.log(x);
// }

/* Task - 6
  implement algorithm which calculates factorial for 
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/

//for loop
/*let number = 7;
let fact = 1;

for (let x = 1; x <= number; x++) {
    fact *= x;
}

console.log(`Factorial: ${fact}`);

 */
//while loop
// let number = 7;
// let fact = 1;
// let x = 1;
// while ( x<=number ) {
//     fact *= x; x++
// }
// console.log(`Factorial: ${fact}`);

//do while loop
// let number = 7;
// let fact = 1;
// let x = 1;
// let number = 7;
// let fact = 1;
// let x = 1;
//
// do {
//     fact *= x;
//     x++;
// } while (x <= number);
//
// console.log(`Factorial: ${fact}`);

/* Task - 7
  implement algorithm filling a bathtub using buckets. 
  we know how many liters the bathtub holds and the capacity of one bucket, but we don't know how many buckets we need. 
  We need to fill the bathtub without overflowing it.
  Use while loop 
*/

// let bucket = 5;
// let initialBathState = 0;
// let bathCapacity = 60;
// let x = 0;
// while (initialBathState < bathCapacity) {
//     if (initialBathState + bucket <= bathCapacity) {
//         initialBathState += bucket;
//         x++;
//     }
//     else {
//         break;
//     }
//
// }
// console.log(`потрібно ${x} .`)



