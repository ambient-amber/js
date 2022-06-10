let a = 'a';
let b = 'b';

// scope
{
    let b = 'local b';
    a = 'new a';

    console.log(a); // new a
    console.log(b); // local b
}

console.log(a); // new a
console.log(b); // b

// Содержимое объекта или массива, объявленного через const можно менять, нельзя поменять их тип на другой.
const obj = {};