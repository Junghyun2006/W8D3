Array.prototype.bubblesort = function () {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                sorted = false;
            }
        }

        return this;
    }
}



String.prototype.substrings = function () {
    let substrings = [];

    for (let i = 0; i <= this.length; i++) {
        for (let j = 0; j <= this.length; j++) {
            if ((this.slice(i, j) !== "") && (substrings.includes(this.slice(i, j)) === false)) {
            substrings.push(this.slice(i,j));
            }
        }
    }

    return substrings;
}   