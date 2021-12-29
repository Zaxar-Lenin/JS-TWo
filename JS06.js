function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
    } else return -1;
}