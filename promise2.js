async function sumPromises(p1, p2) {
    const [value1, value2] = await Promise.all([p1, p2]);
    return value1 + value2;
}

module.exports = sumPromises;
