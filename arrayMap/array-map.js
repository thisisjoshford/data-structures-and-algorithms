function map(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i]);
    }
    return result;
}

module.exports = {
    map
}