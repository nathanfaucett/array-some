var tape = require("tape"),
    arraySome = require("..");


tape("arraySome(array, callback) tests whether some element in the array passes the test implemented by the provided function", function(assert) {
    function fn(value, index) {
        return value === index;
    }

    assert.equals(arraySome([0, 1, 2, 3, 4], fn), true);
    assert.equals(arraySome([1, 2, 3, 4, 5], fn), false);

    assert.end();
});
