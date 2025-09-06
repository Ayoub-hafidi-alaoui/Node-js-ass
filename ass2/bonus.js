/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let counter = 0
    for(var i = 0;i<1000;i++) {
        if(arr.includes(i)) {
            continue
        }
        else {
            if (counter == k) {
                return i
            }
            else {
                counter ++
                continue
            }
        }
    }
};