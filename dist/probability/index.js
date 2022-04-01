module.exports = {
    random() {
        return Math.random();
    },
    randomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};
