/* Task - 1 (Not required)
    Написати свою реалізацію функції isNaN. 
    
    Нагадування: це глобальна функція в JavaScript, яка використовується для перевірки, чи є значення NaN (Not-a-Number). 
*/
function x(value) {
    return typeof value === 'number' && isNaN(value);
}
let example1 = 5;
let example2 = 'qwerty77';

console.log(x(example1));
console.log(x(example2));

/* Task - 2
    Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
    від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. 
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
    Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

    Функція виводить інформацію
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних
*/
// function checkProbabilityTheory(count) {
//     let generatedNumbers = [];
//     let evenCount = 0;
//     let oddCount = 0;
//
//
//     for (let i = 0; i < count; i++) {
//         let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
//         generatedNumbers.push(randomNumber);
//
//         if (randomNumber % 2 === 0) {
//             evenCount++;
//         } else {
//             oddCount++;
//         }
//     }
//     let evenPercentage = (evenCount / count) * 100;
//     let oddPercentage = (oddCount / count) * 100;
//
//     console.log(`Кількість згенерованих чисел: ${count}`);
//     console.log(`Парних чисел: ${evenCount}`);
//     console.log(`Непарних чисел: ${oddCount}`);
//     console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
// }
// checkProbabilityTheory(100);


/* Task - 3
    Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:
//
//     рядок, до якого буде додаватися символ.
//     символ, який буде додаватися.
//     Скільки додавати символів
//     булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
//     Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
// */
// function pad(str, char, count, isStart) {
//     if (typeof str !== 'string' || typeof char !== 'string' || typeof count !== 'number' || typeof isStart !== 'boolean') {
//         console.error('Invalid input. Please provide valid arguments.');
//         return str;
//     }
//
//     const currentLength = str.length;
//
//     if (count <= 0 || currentLength >= count) {
//         // Немає потреби розширювати рядок
//         return str;
//     }
//
//     const paddingCount = count - currentLength;
//     const padding = char.repeat(paddingCount);
//
//     if (isStart) {
//         return padding + str;
//     } else {
//         return str + padding;
//     }
// }
//
// const originalString = 'qwerty';
// const paddedStringStart = pad(originalString, '+', 10, true);
// const paddedStringEnd = pad(originalString, '-', 8, false);
//
// console.log(paddedStringStart);
// console.log(paddedStringEnd);
