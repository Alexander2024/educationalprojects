"use strict"
// + - * / - объекты
let incr = 10,
    decr = 10;

//incr++; //оператор инкримента
//decr--; //оператор дикримента
//если ++ или -- стоят до переменной то это префиксная форма записи если после постфиксная, в постфиксной форме значение сначала выводится потом производистся действие

console.log(incr++);
console.log(decr--);

console.log(5%2);  //остаток от деления

console.log(2*3 == 6); // сравнение без учёта типа данных
console.log(2*3 === '6'); // сравнение c учётом типа данных

// && и
// || или

const isChecked = true,
      isClose = false;

console.log(isChecked || isClose);