main = [1,2,3,4,3]
main2 = [9, 25, 100, 36, 81]

Array.prototype.myEach = function (cb) { 
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

Array.prototype.myMap = function (cb) { 
    const mapped = [];
    this.myEach(ele => mapped.push(cb(ele)));

    return mapped;
}

// console.log(main.myMap(num => num *2));
// console.log(main2.myMap(Math.sqrt));


Array.prototype.myReduce = function (cb, initialvalue) {
    // like Ruby's Array#inject, optional initial value
    if (initialvalue === undefined) {
        var initialvalue = this[0]; 
    }

    let result = initialvalue;
    this.myEach(num => result = cb(result, num));
    return result;

}

[1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
});
[1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}, 25);