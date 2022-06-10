// ----------- Objects -----------
const person = {
    name: 'Anton',
    age: 32,
    job: 'fullstack'
};

const person_proxy = new Proxy(person, {
    get(target, prop) {
        console.log('getting prop ' + prop);
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            throw new Error('No ' + prop + ' field in target');
        }
    },
    has(target, prop) {
        return ['age', 'job'].includes(prop);
    },
    deleteProperty(target, p) {
        console.log('deleting ' + p);
        delete target[p];
    }
});

console.log(person_proxy.name);
//person_proxy.religion = 'atheist';
person_proxy.job = 'unemployed';
console.log('job' in person_proxy);

// ----------- Functions -----------
const log = text => `log: ${text}`;

const function_proxy = new Proxy(log, {
   apply(target, thisArg, args) {
       console.log('calling fn');
       return target.apply(thisArg, args).toUpperCase();
   }
});

let hm = function_proxy('function_proxy');
console.log(hm);

// ----------- Classes -----------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person, {
   construct(target, argArray, newTarget) {
       console.log('construct');

       return new Proxy(new target(...args), {
           get(t, prop) {
               console.log(`getting prop ${prop}`);
               return t[prop];
           }
       })
   }
});

const p = new PersonProxy('Scott', 30);

// ----------- Practise -----------
// https://www.youtube.com/watch?v=mSbyhHfxs04