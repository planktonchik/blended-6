// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]
// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(function (number) {
//   return number * number;
// });

// console.log(squares); // [1, 4, 9, 16, 25]

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const result = data.reduce((acc, item) => acc.concat(item.values), []);
// console.log(result);

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const hasUnder20 = people.some((person) => person.age < 20);

// console.log(hasUnder20);

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const numbers = [2, 4, 6, 8, 10];

// const allElem = numbers.every((number) => number % 2 === 0);

// console.log(allElem);

//Завдання 5

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const firstOdd = numbers.find((number) => number % 2 !== 0);

// console.log(firstOdd);

//Завдання 6

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const numbersArray = [4, 2, 5, 1, 3];

// const sortedArray = numbersArray.sort((a, b) => a - b);

// console.log(sortedArray);

//Завдання 7

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const stringArray = ["banana", "orange", "apple", "pear"];

// const sortedArray = stringArray.sort();

// console.log(sortedArray);

// Завдання 8

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const sortedUsers = users.sort((a, b) => a.age - b.age);

// console.log(sortedUsers);

//Завдання 9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const filteredUsers = user.filter((person) => person.age > 20);

// console.log(filteredUsers);

// //Task 10

// // Дано масив чисел [1, 2, 3, 4, 5].
// // Застосуйте метод для обчислення суми елементів масиву.

// // const numbers = [1, 2, 3, 4, 5];
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log(sum);

//Task 11
// Розроби клас Calculator, який дозволяє виконувати арифметичні //  операції над числом за допомогою методів класу, підтримуючи // ланцюжковий виклик (method chaining). // // Вимоги до класу Calculator // - Метод number(value) // Встановлює початкове значення для наступних обчислень. // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів. // - метод getResult, Повертає поточний результат усіх операцій. // Не змінює значення, просто повертає його. // - метод add - Додає value до поточного значення. // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів. // - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів. // - метод multiply -Множить поточне значення на value. Повертає this. // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка // Приклад використання: // const calc = new Calculator();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24

// class Calculator {
//   constructor() {
//     this.value = 0;
//   }

//   number(value) {
//     this.value = value;
//     return this;
//   }

//   add(value) {
//     this.value += value;
//     return this;
//   }

//   subtract(value) {
//     this.value -= value;
//     return this;
//   }

//   multiply(value) {
//     this.value *= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       alert("Не можна ділити на 0");
//     }
//     this.value /= value;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10)
//   .add(5)
//   .subtract(3)
//   .multiply(4)
//   .divide(2)
//   .getResult();

// console.log(result);
