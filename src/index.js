module.exports = function reverse (n) {
    let res = Math.abs(n).toString().split('').reverse();
    while (res[0] === '0') {
        res.shift();
    }
    return Number(res.join(''));
}
