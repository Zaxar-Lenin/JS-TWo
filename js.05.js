function squareDigits(num) {
    let c = num.toString().split("");
    let a = "";
    let b = c.length;
    for (let i = 0; i < b; i++) {
        c[i] = Math.pow(c[i], 2);
        //a += num[i];

    }
    for (let i = 0; i < b; i++) {
        a += c[i];

    }
    let sum = parseInt(a, 10);
    return sum;
}