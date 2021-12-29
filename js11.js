function inArray(array1, array2) {
    let r = [];

    for (let i = 0; i < array1.length; i++) {
        let b = array1[i];
        let sum = (a) => a.includes(b);
        if (array2.some(sum)) {
            r.push(b);
        }
    }
    return r.sort();

}