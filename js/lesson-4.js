// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
// 1
const bodyEl = document.body;
console.log("1. body:", bodyEl);

// 2
const titleEl = document.getElementById("title");
console.log("2. title:", titleEl);

// 3
const listEl = document.querySelector(".list");
console.log("3. list:", listEl);

// 4
const dataTopicElements = document.querySelectorAll("[data-topic]");
console.log("4. elements with data-topic:", dataTopicElements);

// 5
const firstDataTopicEl = dataTopicElements[0];
console.log("5. first data-topic element:", firstDataTopicEl);

// 6
const lastDataTopicEl = dataTopicElements[dataTopicElements.length - 1];
console.log("6. last data-topic element:", lastDataTopicEl);

// 7
const h1Neighbor = titleEl.nextElementSibling;
console.log("7. h1 neighbor:", h1Neighbor);

// 8
const allH3 = document.querySelectorAll("h3");
console.log("8. all h3 elements:", allH3);

// 9
allH3.forEach((h3) => h3.classList.add("active"));

//
const style = document.createElement("style");
style.textContent = `
  .active {
    color: red;
  }
`;
document.head.appendChild(style);

// 10
const navigationLi = document.querySelector('[data-topic="navigation"]');
console.log('10. data-topic="navigation":', navigationLi);

// 11
navigationLi.style.backgroundColor = "yellow";

// 12
const navigationP = navigationLi.querySelector("p");
navigationP.textContent = "Я змінив тут текст!";

// 13
const currentTopic = "manipulation";
const currentTopicEl = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log("13. currentTopic element:", currentTopicEl);

// 14
currentTopicEl.style.backgroundColor = "lightblue";

// 15
const completedH3 = document.querySelector("h3.completed");
console.log('15. h3 with class="completed":', completedH3);

// 16
const completedLi = completedH3.closest("li");
completedLi.remove();

// 17
const newP = document.createElement("p");
newP.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.insertAdjacentElement("afterend", newP);

// 18
const newLi = document.createElement("li");
const newH3 = document.createElement("h3");
newH3.textContent = "Властивість innerHTML";
const newP2 = document.createElement("p");
newP2.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
newLi.append(newH3, newP2);
listEl.appendChild(newLi);

// 19
const newItemHTML = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>
`;
// 20
listEl.innerHTML = "";

// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// Генерація випадкового числа від 1 до 100
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.querySelector(".numberContainer");

for (let i = 0; i < 100; i++) {
  const number = randomNumber();
  const numberElement = document.createElement("div");
  numberElement.classList.add("number");

  if (number % 2 === 0) {
    numberElement.classList.add("even");
  } else {
    numberElement.classList.add("odd");
  }
  numberElement.textContent = number;
  numberContainer.appendChild(numberElement);
}

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
// Отримуємо елементи форми
const form = document.querySelector(".js-contact-form");
const usernameInput = document.querySelector(".js-username-input");
const policyCheckbox = document.querySelector(".js-policy-checkbox");
const usernameOutput = document.querySelector(".js-username-output");
const submitButton = document.querySelector(".js-contact-form-submit");

usernameInput.addEventListener("input", () => {
  if (usernameInput.value.length >= 6) {
    usernameInput.classList.add("success");
    usernameInput.classList.remove("error");
  } else {
    usernameInput.classList.add("error");
    usernameInput.classList.remove("success");
  }
});

usernameInput.addEventListener("focus", () => {
  if (usernameInput.value === "") {
    usernameInput.style.outline = "3px solid red";
  } else {
    usernameInput.style.outline = "3px solid green";
  }
});

usernameInput.addEventListener("blur", () => {
  if (usernameInput.value === "") {
    usernameInput.style.outline = "3px solid red";
  } else {
    usernameInput.style.outline = "3px solid lime";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = usernameInput.value;
  const isAccepted = policyCheckbox.checked;

  if (userName === "" || !isAccepted) {
    alert(
      "Будь ласка, введіть своє ім’я та погодьтеся з політикою конфіденційності."
    );
    return;
  }

  const formData = {
    userName: userName,
    acceptedPolicy: isAccepted,
  };
  console.log(formData);

  usernameOutput.textContent = userName;

  usernameInput.value = "";
  policyCheckbox.checked = false;
  usernameOutput.textContent = "Anonymous";
});
