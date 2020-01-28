//null, undefined, boolean, number, string, object, symbol

//console.log(typeof 0);
//console.log(typeof true);
//console.log(typeof 'JavaScript');// "" '' `` - литералы
//console.log(typeof 'JavaScript');
//console.log(typeof undefined);
//console.log(typeof Math);
//console.log(typeof Symbol('JS'));
//console.log(typeof null);
//console.log(typeof function() {});
//console.log(typeof NaN);

// приведение типов

// let language = "JavaScript";
// if (language) {
//     console.log('the best language is: ' + language);
// }
//
// console.log(Boolean (''));
// console.log(Boolean ('Hello'));
// console.log(Boolean ('0'));
// console.log(Boolean (0));
// console.log(Boolean (null));
// console.log(Boolean ([]));
// console.log(Boolean ({}));

// Строки и числа
// console.log(1 + '2');
// console.log(''+ 0 + 1);
// console.log('' - 1 + 0);
// console.log('3' * '8');
// console.log(4 + 10 + 'px');
// console.log('px' + 5 + 10);
// console.log('42px' - 2);
// console.log(null + 2);
// console.log(undefined + 42);

//== vs ===
// console.log(2 == '2');
// console.log(2 === '2');
// console.log(undefined == null);
// console.log(undefined === null);
// console.log('0' == false);
// console.log(0 == '0');
// console.log(0 == 0);


//=========== странные сравнения
console.log(false == '');
console.log(false == []);
console.log(false == {});

console.log('' == 0);
console.log('' == []);
console.log('' == {});

console.log(0 == []);
console.log(0 == {});
console.log(0 == null);