function fixedSlidingWindow(arr, size){

    let currentSum = 0;
    let maxSum = -Infinity;

    if(size > arr.length || size < 0){
        return "dont want to answer"
    }

    for(let i = 0; i < arr.length; i++){
        currentSum += arr[i];
        if(i >= size - 1){
            if(currentSum > maxSum){
                maxSum = currentSum;
            }

            currentSum -=  arr[i -(size-1)];
        }
    }
    return maxSum
}


console.log("expect 72: ",fixedSlidingWindow([9,20,8,4,60],3))