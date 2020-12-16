
Array.prototype.uniq = function () {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        if ((newArray.indexOf(this[i])) < 0 ){
            newArray.push(this[i]);
        }
    }

    return newArray;
}

Array.prototype.twoSum = function () {
    let pairs = [];

    for ( let i = 0; i < this.length - 1; i++) {
        for ( let j = i+1; j < this.length; j++) {
            if(this[i]+this[j] === 0) {
                pairs.push([i,j]);
            }
        }
    }
    
    return pairs;
}

Array.prototype.transpose = function () {
    let transposed = [];

    for ( let i = 0; i < this.length; i++) {
        let pair = []
        for ( let j = 0; j < this.length; j++) {
            pair.push(this[j][i]);
        }
        transposed.push(pair)
    }

    return transposed;
}   