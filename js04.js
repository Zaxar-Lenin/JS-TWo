function createPhoneNumber(numbers) {
    let str = '(';
    numbers.join();
    for (let i = 0; i < numbers.length; i++) {
        if (i == 2) {
            str = str + numbers[i] + ") ";
        } else if (i == 5) {
            str = str + numbers[i] + "-";
        } else str += numbers[i];
    }
    return str;
}