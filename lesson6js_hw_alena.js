
/* Task - 1
Створіть масив (array1) з 5 любих елементівю
Створіть функцію, яка буде повертати другий елемент з масиву
*/
let array = [7, 8, 9, 10, 11];

function getSecondElement(arr) {
    return arr[1];
}
console.log(getSecondElement(array));
/* Task - 2
    Створіть функцію, який додасть 1 елемент до масиву з попередньої задачи (array1) (наприклад, "new item")
*/
function addElementToArray(arr, newItem) {
    arr.push(newItem);
}
addElementToArray(array, "new item");
console.log(array);
/* Task - 3
    Створіть другий масив (array2), потім створить функцію, яка отримує 2 масиви і повертає масив, що містить елементи з масивів array1 та array2
*/
var array2 = [21, 22, 23, 24, 25];

function mergeArrays(arr, arr2) {
    return arr.concat(arr2);
}
console.log(mergeArrays(array, array2));
/* Task - 4 (Not required)
    Створіть функцію, яка буде повертає новий масив заданої довжини, заповнений заданим значенням
    https://www.w3schools.com/jsref/jsref_fill.asp
*/
function createArrayWithValues(length, value) {
    return Array(length).fill(value);
}
console.log(createArrayWithValues(7, "qwerty"));
/* Task - 5 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
     не використовуйте цикли
*/
function countJohnOrUnder30(people) {
    return people.filter(person => person.name === "John" || person.age < 30).length;
}
var peopleArray = [
    { name: "John", age: 25 },
    { name: "Jane", age: 32 },
    { name: "Bob", age: 98 }
];
console.log(countJohnOrUnder30(peopleArray));

/* Task - 6 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
    * не використовуйте цикли
    * https://www.w3schools.com/jsref/jsref_filter.asp
*/
function countJohnOrUnder30WithFilter(people) {
    return people.filter(person => person.name === "John" || person.age < 30).length;
}
console.log(countJohnOrUnder30WithFilter(peopleArray));
/* Task - 7 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає новий масив усіх людей, старших за 30 років
*/
function filterPeopleAbove30(people) {
    return people.filter(person => person.age > 30);
}
console.log(filterPeopleAbove30(peopleArray));

/* Task - 8 (Not required)

    Створіть функцію, яка буде приймати масив об'єктів
    наприклад, [{ім'я: "Jane", вік: 45}, {ім'я: "Peter", вік: 18}].
    та поверне новий масив об'єктів, що містить додаткову властивість "state"
    state = "baby", якщо вік дорівнює 0 або 3,
    state = "preschooler", якщо вік від 4 до 5,
    state = "teenager", якщо вік від 13 до 18 років

 https://www.w3schools.com/jsref/jsref_map.asp
*/
function addStateToPeople(people) {
    return people.map(person => {
        if (person.age === 0 || person.age === 3) {
            person.state = "baby";
        } else if (person.age >= 4 && person.age <= 5) {
            person.state = "preschooler";
        } else if (person.age >= 13 && person.age <= 18) {
            person.state = "teenager";
        }
        return person;
    });
}
console.log(addStateToPeople(peopleArray));
/* Task - 9 (Not required)

    Створити функцію для знаходження індексу мінімального елементу масиву;
    наприклад,  console.log(minItem([6,8,2,9,1,3])) // 4
*/
function minItemIndex(arr) {
    return arr.indexOf(Math.min(...arr));
}
console.log(minItemIndex([56, 50, 23, 7, 0, 15]));
/* Task - 10 (Not required)

   Створити функцію, яка поверне кількість допустимих (НЕ not null/undefined) значень масиву
*/
function countValidValues(arr) {
    return arr.filter(value => value !== null && value !== undefined).length;
}
console.log(countValidValues([1, null, 3, undefined, 5]));
/* Task - 11 (Not required)

   Створити функцію, яка відфільтрує нульові та невизначені значення
  якщо кількість невірних записів більше 3 - потрібно згенерувати помилку "Дані потрібно переглянути"
*/
function filterUndefinedAndZeroValues(arr) {
    const filteredArray = arr.filter(value => value !== 0 && value !== undefined);
    if (arr.length - filteredArray.length > 3) {
        throw new Error("Дані потрібно переглянути");
    }
    return filteredArray;
}
console.log(filterUndefinedAndZeroValues([0, 2, undefined, 4, 0]));