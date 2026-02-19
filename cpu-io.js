function blockEventLoop(ms) {
    const start = Date.now();

    while (Date.now() - start < ms) {
        // Busy wait (do nothing)
    }
}

module.exports = blockEventLoop;
