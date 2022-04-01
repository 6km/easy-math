module.exports = {
    random() {
        return Math.random();
    },

    randomElement(arr: Array<any>) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};