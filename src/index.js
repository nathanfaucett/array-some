module.exports = arraySome;


function arraySome(array, callback) {
    var i = -1,
        il = array.length - 1;

    while (i++ < il) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }

    return false;
}
