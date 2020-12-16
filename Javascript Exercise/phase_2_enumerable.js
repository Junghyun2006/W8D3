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


Array.prototype.myReduce = function (cb[, initialvalue]) {
    // like Ruby's Array#inject, optional initial value

}


// without initialValue
[1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}); // => 6

// with initialValue
[1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}, 25); // => 31
