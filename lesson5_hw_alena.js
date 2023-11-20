/* Task - 1
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище).

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
- Напишіть метод getFullName(), який виводитиме повне ім'я.
*/
var person = {
    year: 1993,
    name: "Alena",
    surname: "Babchenko",

    getInfo: function() {
        for (var key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ": " + this[key]);
            }
        }
    },

    getFullName: function() {
        console.log("Full Name: " + this.name + " " + this.surname);
    }
};
person.getInfo();
person.getFullName();
/* Task - 2 (Not required)
   Створіть функцію createRobot, яка створить об'єкт "robot" з об'єкта "person", 
   додавши додаткову властивість до об'єкта "person". 
   "Robot" повинен мати властивість "batteryEnergy" (наприклад, batteryEnergy = 50)

 * ПРИМІТКА: використовуйте метод присвоєння об'єктів (Object.assign)
*/
function createRobot(personObj) {
    var robot = Object.assign({}, personObj, { batteryEnergy: 50 });
    return robot;
}
var robotPerson = createRobot(person);
console.log(robotPerson);

/* Task - 3 
   Створіть isARobot, який буде перевіряти, чи є об'єкт роботом
   перевіркою наявності у об'єкта властивості (batteryEnergy)
*/
function isARobot(obj) {
    return obj.hasOwnProperty("batteryEnergy");
}
function isARobot(obj) {
    return obj.hasOwnProperty("batteryEnergy");
}

/* Task - 4 (Not required)

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

Завдання:
- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price
*/
var services = {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100
};

var salon = {
    services: services,

    price: function() {
        var totalPrice = 0;
        for (var service in this.services) {
            totalPrice += this.services[service];
        }
        return totalPrice;
    },

    minPrice: function() {
        var prices = Object.values(this.services);
        return Math.min(...prices);
    },

    maxPrice: function() {
        var prices = Object.values(this.services);
        return Math.max(...prices);
    }
};
console.log(salon.price()); 
console.log(salon.minPrice());
console.log(salon.maxPrice());