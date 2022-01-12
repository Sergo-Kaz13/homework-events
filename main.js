"use strict";

//! Домашнє завдання

// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + Q, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + M замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

const wrapper = document.querySelector(".wrapper");
const h3 = document.createElement("h3");
h3.textContent = `Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + Q, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + M замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
`;
wrapper.prepend(h3);

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyQ" && event.ctrlKey) {
    const containerText = document.querySelector(".container-text").innerHTML;
    const textarea = containerText.replace(/div/g, "textarea");
    document.querySelector(".container-text").innerHTML = textarea;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyM" && event.ctrlKey) {
    const valueTextarea = document.querySelector("textarea").value;
    const containerText = document.querySelector(".container-text").innerHTML;
    const divText = containerText.replace(/textarea/g, "div");
    document.querySelector(".container-text").innerHTML = divText;
    const divBlockText = document.querySelector(".block-text");
    divBlockText.textContent = valueTextarea;
  }
});

// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
const task2 = document.createElement('h3');
task2.textContent = `Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.`;
wrapper.append(task2);

let alpha = "";
const aCode = 97;
for (let i = 0; i < 26; i++) {
  alpha += String.fromCharCode(aCode + i);
}

const arrAlpha = [];
for (let i = 0; i < 26; i++) {
  arrAlpha.push(alpha[Math.floor(Math.random() * (26 - 0 )) + 0]);
}

let numbers = [];
for (let i = 0; i < 26; i++) {
  numbers.push(Math.floor(Math.random() * 300) + 30);
}

const table = document.createElement("table");
table.classList.add('table');
const tr = document.createElement('tr');
tr.classList.add('table-header');
const thAlpha = document.createElement('th');
thAlpha.classList.add('alpha');
thAlpha.innerHTML = `Alpha <span class="sort-up alpha-up"></span><span class="sort-down alpha-down"></span>`;
tr.append(thAlpha);
const thNumbers = document.createElement('th');
thNumbers.classList.add('numbers');
thNumbers.innerHTML = `Numbers <span class="sort-up num-up"></span><span class="sort-down num-down"></span>`;
tr.append(thNumbers);
table.append(tr);
task2.after(table);

function enterTable(alpha, numbers) {

  for (let i = 0; i < numbers.length; i++) {
    const tr = document.createElement('tr');
    const tdAlpha = document.createElement('td');
    tdAlpha.textContent = alpha[i];
    tr.append(tdAlpha);
    const tdNumbers = document.createElement('td');
    tdNumbers.textContent = numbers[i];
    tr.append(tdNumbers);
    table.append(tr);
  }
}

enterTable(arrAlpha, numbers);

const alphaBtnUp = document.querySelector('.alpha-up');
alphaBtnUp.addEventListener('click', () => {
  // let tr = document.querySelectorAll('tr').forEach(e => e.parentNode.removeChild(e));
  let tr = document.querySelectorAll('tr')
  for (let i = 1; i < tr.length; i++) {
    tr[i].parentNode.removeChild(tr[i]);
  }
  enterTable(arrAlpha.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  }), numbers)
});

const alphaBtnDown = document.querySelector('.alpha-down');
alphaBtnDown.addEventListener('click', () => {
  let tr = document.querySelectorAll('tr')
  for (let i = 1; i < tr.length; i++) {
    tr[i].parentNode.removeChild(tr[i]);
  }
  enterTable(arrAlpha.sort((b, a) => {
    if (b < a) return -1;
    if (b > a) return 1;
    return 0;
  }), numbers)
});

const numBtnDown = document.querySelector('.num-down');
numBtnDown.addEventListener('click', () => {
  let tr = document.querySelectorAll('tr')
  for (let i = 1; i < tr.length; i++) {
    tr[i].parentNode.removeChild(tr[i]);
  }
  enterTable(arrAlpha, numbers.sort((a, b) => a - b));
});

const numBtnUp = document.querySelector('.num-up');
numBtnUp.addEventListener('click', () => {
  let tr = document.querySelectorAll('tr')
  for (let i = 1; i < tr.length; i++) {
    tr[i].parentNode.removeChild(tr[i]);
  }
  enterTable(arrAlpha, numbers.sort((a, b) => b - a));
});

// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

const rubberBlock = document.createElement("div");
rubberBlock.classList.add("rubber-block");
rubberBlock.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dolor nam, asperiores accusamus harum quos molestiae. Aliquid, error quod. Consequatur asperiores deleniti dolorum molestiae, quaerat iusto voluptatum dolor quasi perferendis pariatur laudantium, delectus nihil quis, ad praesentium. Sunt illo saepe aspernatur eveniet quae laudantium, vel quaerat unde nulla voluptate provident voluptatum doloribus consectetur repudiandae corrupti! Voluptatibus asperiores corrupti repellat nesciunt!";
wrapper.append(rubberBlock);
