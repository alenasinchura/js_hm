// 'if' conditional

/* Task - 1
 Create a program that will store the value of the cat's weight. 
If the cat weighs less than 5 kg, then the cat is small and still needs to be fed, 
if it weighs more than 5, then the cat is very fluffy and needs to be combed :) */

// let  weight = 1 ;
//  if (weight < 5) {
//    console.log("the cat is small and still needs to be fed")
// } else if (weight > 5) {
//      console.log("Cat is very fluffy and needs to be combed")
//  }


/* Task - 2
// Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */
// let age = 43
// if (!(age >= 18 && age <= 50 ))
//     console.log("Hire")
// else console.log("not hired")

// if (hour < 10 || hour > 18)
//     console.log( 'Офіс зачинений.' );
// }


/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */

// let grade = "E"
// if (grade === "A" || grade === "B" ) {
//     console.log("the student has passed the exam")
// } else if (grade === "C" || grade === "D" ) {
//     console.log("we send them for a retake")
// } else if (grade === "E") {
//     console.log("expulsion")
// // } else {
// //     console.log("doesn't match the requirements")
// }




/* Task - 4
 Write a small program "Guess the number", where you need to enter a number from the console and tell the user whether he entered less or more or guessed the number. */
//  let x = 7
//  let y =
// if ( y === x){
//     console.log("WIN")
// } else if ( y > x) {
//     console.log("MORE")
// } else if ( y < x) {
//     console.log("LESS")
// } else  console.log("doesn't match the requirements")


 /* Task - 5
Rewrite the if statement using the conditional operator '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
// */
//  let height = 200
//  let result = height < 140 ? "Заборонено на атракціон": "Проходьте, будь ласка!"
//      console.log(result)


/* Task - 6

Rewrite if..else using several ternary operators '? 

if (height < 50) 
{
     console.log("Forbidden to use attraction"); 
    } else if (height >= 50 && height < 80) {
         console.log("Permit - attraction №1");
         } else if (height >= 80 && height < 120) {
             console.log("Permit - attraction №1 or №2"); 
            } else {
                console.log("Permit - All"); }
*/
// let height = 130
// let result = height < 50 ? "Forbidden to use attraction"
//     :height >= 50 && height < 80 ? "Permit - attraction №1"
//     :height >= 80 && height < 120 ? "Permit - attraction №1 or №2" : "Permit - All"
//      console.log(result)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'switch' conditinal

/* Task - 7
 Create a program that will print the day of the week according to the day number. */
//
//    let num = 33
//    let day ;
// switch (num) {
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
//     case 7:
//         day = "Sunday";
//         break;
//     default:
//         day = "Invalid day number";
// }
// console.log("The day is: " + day);


/* Task - 8
 Make a program that will display the time of year a particular month number belongs to (for example, I enter "1" and it tells me that it is winter, I enter "5" - spring, etc.) */

// let number = 5;
//
// let season;
//
// switch (number) {
//     case 1:
//     case 2:
//     case 12:
//         season = "Winter";
//         break;
//     case 3:
//     case 4:
//     case 5:
//         season = "Spring";
//         break;
//     case 6:
//     case 7:
//     case 8:
//         season = "Summer";
//         break;
//     case 9:
//     case 10:
//     case 11:
//         season = "Autumn";
//         break;
//     default:
//         season = "Invalid month number";
// }
//
// console.log("The season is: " + season);

 /* Task - 9
 Rewrite the "switch" into an "if"
 
 switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;


  default:
    console.log( 'We hope that this page looks ok!' );
}
 */

// let browser = "Firefox";
//  if (browser === "Edge") {
//      console.log( "You've got the Edge!" );
//  } else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
//      console.log('Okay we support these browsers too');
// }else {
//     console.log('We hope that this page looks ok!');
// }


/* Task - 10
Rewrite "if" into "switch" 

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job');
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
// */
//  let  age = 7
//  switch (true) {
//   case  age < 16 : console.log("We cant hire u!");
//   break;
//      case  age >= 18 : console.log("U can take full time job");
//   break ;
//      case(age == 16 || a == 17)  : console.log("U can take part time job") ;
//      break ;
//   default:
//     console.log( 'overqualified' );
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Task - 11
Create a program  - https://take.ms/mN65i 

If the visitor enters "Admin",
then prompt for a password, if the input is an empty line or Esc – show “Canceled”,
if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

Use only what've learned!

*/
// const prompt = require("prompt-sync")();
//
// let visitor = prompt("Who's there?: ");
//
// if ( visitor === "Admin") {
//     let password = prompt("Password: ");
//
//     if (password === "TheMaster") {
//         console.log("Welcome!");
//     } else if  (password ) {
//         console.log("Wrong password")
//     } else {
//         console.log("Canceled")
//     }
// } else {
//     console.log("I don't know you!")
// }


