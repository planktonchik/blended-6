/*"use strict";
const number = prompt("enter number");
if (+number === 10) {
  alert("Вірно ");
}
alert("невірно");
console.log(number); */

/* const min = Math.floor(Math.random() * (59 - 0) + 0);
if (min >= 0 && min < 15) {
  alert;
} */

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

 let(num) = ('1', ('2'), ('3'), ('4'));

const num = prompt('1', '2', ('3'), ('4'));
let result;
switch (num) {
    case '1':
    result = 'зима';
    break;
    case '2':
    result = 'весна';
    break;
 case '3':
 result = 'літо';
    break;
  case '4':
    result = 'осінь';
        break;
     default:
    result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
}
