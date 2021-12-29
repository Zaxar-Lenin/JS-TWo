function good(num) {
    let all = 0;
    num = num.toString(10);
    while (num.legth > 1) {
        num = num.split('').map(Number).toString(10);
        all += 1;
    }
    return all;
}