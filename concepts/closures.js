// Замыкание - случай, когда функция имеет доступ до переменных вышестоящей области видимости.

// Методы print, add имеют доступ как бы к приватному свойству (переменной) fw. Методы замкнули в себе переменную,
// которая по другому никак не доступна из вне.
function frameworkManager() {
    const fw = ['angular', 'react'];

    return {
        print: function() {
            console.log(fw.join(' '));
        },
        add: function(framework) {
            fw.push(framework);
        }
    }
}

const manager = frameworkManager();
manager.print();
manager.add('VueJS');
manager.print();

// ------------------- Интересный пример -------------------
function makeCounter() {
    let count = 0;

    return function() {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
// ---------------------------------------------------------