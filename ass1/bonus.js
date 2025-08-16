/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init, maxCalls=1000) {
    if(! (-1000 <= init <= 1000)) {
        throw new Error("init should be btw -1000 and 1000");
    }
    let currentValue = init;
    const numberOfCalls = 0

    function incrementCalls() {
         if(numberOfCalls > 1000) {
            throw new Error("Max calls is 1000")
        }
    }
    function increment() {
        incrementCalls()
        currentValue += 1
        return currentValue;
    }
    function decrement() {
        incrementCalls()
        currentValue -= 1
        return currentValue ;
    }
    function reset() {
        incrementCalls()
        currentValue = init
        return currentValue
    }
    return {
        increment, decrement,reset
    }
};



const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
 