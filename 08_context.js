// const person = {
//     surname: 'Stark',
//     knows: function (what, name) {
//         console.log(`Ty ${what} znayesh, ${name} ${this.surname}`);
//     }
// };
// const john = {surname: 'Snow'};
//
// person.knows('vse', 'Bran');
//
// person.knows.call(john, 'nichego ne', 'John');
// person.knows.apply(john, ['nichego ne', 'John']);
// person.knows.call(john, ...['nichego ne', 'John']);
// person.knows.bind(john, 'nichego ne', 'John')();
// let bound = person.knows.bind(john, 'nichego ne', 'John');
// bound();

//=====================
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//
//     console.log(this);
// }
//
// const Elen = new Person('Elen', 20);

//===========явный байндинг
// function logThis(){
//     console.log(this);
// }
//
// const obj = {num: 42};
//
// logThis.apply(obj);
//
// //неявный implicit binding
// const animal = {
//     legs: 4,
//     logThis: function(){
//         console.log(this);
//     }
// };
//
// animal.logThis();

// стрелочные функции
function Cat(color) {
    this.color = color;
    console.log('This', this);
    (() => {console.log('Arrow this', this)})();
}

new Cat('red');