// Примитивные типы данных передаются как значения
let a = 10;
let b = a;
b++;
console.log(a, b); // 10, 11;

// Вычисляемые типы данных ({}, []) передают ссылки при объявлении переменных
let aa = [1,2,3];
let bb = a;
bb.push(4); // новое значение будет и у массива aa
// Избежать ссылки в случае массива можно через concat
// let bb = a.concat(); - без параметров метод создает копию массива

let cc = [1,2,3,4];
console.log(aa === bb); // true
console.log(cc === aa); // false не смотря на одинаковый состав массивов.