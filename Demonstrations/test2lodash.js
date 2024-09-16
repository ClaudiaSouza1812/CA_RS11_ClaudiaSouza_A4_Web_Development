const _ = require('lodash');

let result01 = _.defaults({"a": 1}, {"a": 3, "b": 2});
console.log(result01); // {a: 1, b: 2}

let result02 = _.partition([1, 2, 3, 4], n => n % 2);
console.log(result02); // [[1, 3], [2, 4]]