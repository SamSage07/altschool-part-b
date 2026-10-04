function createCounter() {
    let count = 0;
    return {
        increment () {
            count = count + 1;
        },
        decrement () {
            count = count - 1;
        },
        get value() {
            return count;
        }
    };
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.value)  // 1
console.log(counter.count)  // undefined — not directly accessible

        