
function maxSubArraySum(nums, size) {
    
    let currSum = 0; 
    let maxSumSeen = -Infinity;

    for(let i = 0; i< nums.length; i++) {
        currSum += nums[i];
        if(i >= size -1) {
        //    maxSumSeen = Math.max(currSum, maxSumSeen);
            if(currSum > maxSumSeen) {
                maxSumSeen = currSum;
            }
            currSum -= nums[i - (size - 1)];
        }
    }
    return maxSumSeen;
}


console.log(maxSubArraySum([11,2,5,9,10,6,7,3],5));


function fixedSlidingWindow (arr,num){
    
    let currentSum = 0;
    let maxSum= -Infinity;

    for(let i = 0; i < arr.length; i++){
        currentSum += arr[i];
        if(i >= num -1){
            if(currentSum > maxSum){
                maxSum = currentSum;
            }

            currentSum -= arr[i - (num - 1)]
        }
    }
    return maxSum;
}


console.log(fixedSlidingWindow([1,2,3,4], 3));