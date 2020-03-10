const { map } = require('./array-map.js');

const array = [1, 2, 3];
const array2 = [10, 20, 30];

function addsFive(number){
    return number + 5;
}
function multipliesTen(number){
    return number * 10;
}

function dividesInHalf(number){
    return number / 2;
}

describe('basic validation', () => {
        it('should add five', () => {
        expect(map(array, addsFive)).toEqual([6, 7, 8]);
        });
        it('should multiply by ten', () => {
        expect(map(array, multipliesTen)).toEqual([10, 20, 30]);
        });
        it('should multiply by ten', () => {
        expect(map(array2, multipliesTen)).toEqual([100, 200, 300]);
        });
        it('should add five', () => {
        expect(map(array2, addsFive)).toEqual([15, 25, 35]);
        })
        it('should divide in half', () => {
        expect(map(array2, dividesInHalf)).toEqual([5, 10, 15]);
        })
})