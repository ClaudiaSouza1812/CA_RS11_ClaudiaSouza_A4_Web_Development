// Lodash is a library that provides various inbuilt functions for collections, arrays, manipulated objects, and other utility methods that we can use directly instead of writing them from scratch. It makes it easier to iterate over the arrays, strings as well as objects. Its modular methods make the creation of composite functions easier.

// first we need to require the lodash library, setting the variable to be used, by default the sign _ ;
const _ = require('lodash');


let result01 = _.defaults({"a": 1}, {"a": 3, "b": 2});
console.log(result01); // {a: 1, b: 2}

let result02 = _.partition([1, 2, 3, 4], n => n % 2);
console.log(result02); // [[1, 3], [2, 4]]