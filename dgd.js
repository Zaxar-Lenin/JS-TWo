function getSum(a, b) {
    let vals = [];
    let sum = 0;
    function rangeRec(a, b, vals) {
        if (a == b) {
            sum = a;
        } else if (a > b) {
            return vals;
        } else {
            vals.push(a);
            sum += a;
            return rangeRec(a + 1, b, vals);
        }
        return sum;

    }
}

let n = getSum(3, 7);