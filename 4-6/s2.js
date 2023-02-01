function parseThenSquare(input) {
    let num = Number.parseInt(input);
    if (!Number.isNaN(num)) {
        return num * num;
    } else {
        return null;
    }
}

module.exports = parseThenSquare
