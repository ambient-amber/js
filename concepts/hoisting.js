// Функция без проблем может вызываться до ее объявления. То же относится к объявлению переменных через var.
test();

function test() {
    console.log('test');
}

// Обращение к переменной, объявленной позднее через var дает undefined
console.log(test_var);
var test_var = 'test_var';

// А вот let, const приводит уже к ошибке.

// 2 способа объявления функций:
// declaration function asdf()
// expression let asdf = function();
// hoisting работает только со способом declaration