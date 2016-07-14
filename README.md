array-some
=======

tests whether one element in the array pass the test implemented by the provided function.


```javascript
var arraySome = require("@nathanfaucett/array-some");


arraySome([0, 1, 2, 3, 4], function(value, index, array) {
    return value === 3;
}) === true;
```
