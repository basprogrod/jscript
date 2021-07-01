// const answers = []

// const questions = ['Как Ваше имя?', 'Как Ваша фамилия?', 'Сколько Вам лет?']

// for (let i = 0; i < questions.length; i++) {
//   let ageAnswer

//   if (questions[i] === 'Сколько Вам лет?') {
//     while (!ageAnswer) {
//       ageAnswer = +prompt(questions[i], '')
//     }

//     answers[i] = ageAnswer
//   } else {
//     answers[i] = prompt(questions[i], '')
//   }
// }

// console.log(answers)

// const block = [];

// for (let i = 0; i < 10; i++){
  
//   block.push(i);
  
// };
// console.log(block);

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
  
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(menu);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     };
//   };
// };

// multiplyNumeric(menu);

// console.log(menu);


// let i = 0;

// while(i < 3){
//   alert( `number ${i}!` );
//   i++;
// }

// let num = prompt("Введите число меньше 10", '');;

// for(let i = num;;) {
//   if(i > 10){
//    prompt("Введите число меньше 10", '');
//   }else{
//     alert('Верно!');
//     break;
//   }
// }

// let num;

// do{
//   num = prompt("Введите число меньше 10", '');
// }while (num >= 10 && num);

// for(let i = 2; i <= 10; i++){
//   if(i % 1 == 0){
//     alert(i);
//   }

// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }


// let age = prompt("Сколько тебе лет?", '')


// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }

// checkAge(age);

// let age = prompt("Сколько тебе лет?", '')


// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// checkAge(age);
// Выполнят одинаковые действия


// function min(a, b) {
//   return a < b ? a : b;
// }

// function min(a,b) {
//   if(a > b){
//     return a;
//   }else{
//     return b;
//   }
  
// }

// console.log(min(26, 5));
// Аналогичные функции

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// function pow(x, n) {
//   return x**n;
// }


// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(x, n) );
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// function pow(x, n) {
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   }
//   return x**n;
  
// }

//  alert( pow(x, n) );

const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const close = document.getElementById('.modal__close');

button.addEventListener('click', () => {
  modal.classList.toggle('modal-active');
});


