//immediate invoke function expression

let result = [];

// for (var i = 0; i < 5; i++) {
//     result.push(function() {
//         console.log(i);
//     })
// }
//
// result[2]();

for (var i = 0; i < 5; i++) {
    (function (j) {
        result.push(function() {
            console.log(j);
        })
    })(i);
}
result[2]();

for (var i = 0; i < 5; i++) {
    (function () {
        var j = i;
        result.push(function() {
            console.log(j);
        })
    })();
}
result[2]();