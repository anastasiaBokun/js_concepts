// function sayHiTo(name) {
//     const message = 'Hello ' + name;
//
//     return function() {
//         console.log(message);
//     }
// }
//
// const hiToNastya = sayHiTo('Nastya');
// console.log(hiToNastya);
// hiToNastya();
//
// const hiToNata = sayHiTo('Nata');
// hiToNata();



// function createFrameWorkManager() {
//     const fw = ['React', 'Angular'];
//
//     return {
//         print: function () {
//             console.log(fw);
//         },
//         add: function (framework) {
//             fw.push(framework);
//         }
//     }
// }
//
// const manager = createFrameWorkManager();
// console.log(manager);
// manager.print();
// manager.add('Vue');
// manager.print();

//setTimeuot

// const fib = [1, 2, 3, 5, 8, 15];
// for (var i = 0; i < fib.length; i++) {
//     setTimeout(function() {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 1500)
// }

//sposob 1
// const fib = [1, 2, 3, 5, 8, 15];
// for (let i = 0; i < fib.length; i++) {
//     setTimeout(function() {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 1500)
// }

//sposob 2
// const fib = [1, 2, 3, 5, 8, 15];
//
// for (var i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(function() {
//             console.log(`fib[${j}] = ${fib[j]}`);
//         }, 1500)
//     })(i);
// }
