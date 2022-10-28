function fixedSlidingWinodow(arr, num) {
    let currentSum = 0;
    let maxSum = -Infinity;
    if(arr.length < num || num < 1){
        return "Unable to compute";
    }

    for(let i = 0; i < arr.length; i++){
        currentSum += arr[i];
        if(i >= num - 1) {
            if(currentSum > maxSum) {
                maxSum = currentSum;
            }
            currentSum -= arr[i- (num - 1)];
        }
    }
    return maxSum;
}

console.log(fixedSlidingWinodow([9, 2, 3, 4], 3));