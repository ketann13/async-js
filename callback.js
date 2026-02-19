function fetchWithTimeout(url, ms, callback) {
    const timer = setTimeout(() => {
        callback(new Error("Request Timed Out"));
    }, ms);

    fetch(url)
        .then(response => response.text())
        .then(data => {
            clearTimeout(timer);
            callback(null, data);
        })
        .catch(err => {
            clearTimeout(timer);
            callback(err);
        });
}

module.exports = fetchWithTimeout;
