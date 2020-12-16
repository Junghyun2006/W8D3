function range(start, end) {
    let arr = [start];

    if (start === end) {
        return [end];
    } else {
        return arr.concat(range(start+1, end))
    }
} 

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return arr[0] += sumRec(arr.slice(1,arr.length));
    }
}

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    } else {
        return base * exponent(base, exp-1);
    }
}

function fibonacci(n) {
    if (n === 1 ) {
        return [1];
    } 

    if (n === 2) {
        return [1,1];
    } 

    let prev_fib = fibonacci(n-1); 
    
    prev_fib.push(prev_fib[prev_fib.length - 1] + prev_fib[prev_fib.length - 2])

    return prev_fib 
}

function deepDup(arr) {
    let dup = []

    if (Array.isArray(arr) === false) {
        dup.push(arr); 
    } else {
        for (i = 0; i < arr.length; i++ ) {
            deepDup(arr[i])
        }
    }
    return dup
}
