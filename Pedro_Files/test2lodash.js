let _ = require('lodash');

let result = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
console.log(result); // // { 'a': 1, 'b': 2 }
let result2 = _.partition([1, 2, 3, 4], n => n % 2);
console.log(result2); // [[1, 3], [2, 4]]