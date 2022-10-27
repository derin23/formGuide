// find the biggest subarray with the size of 3

// function slidingWindow(arr,size){
    
//     let left = 0;
//     let max = 0;
//     let currentValue = 0;
//     for(let right = size - 1; right < arr.length; right++){
        
//       currentValue = arr[left] + arr[left + 1] + arr[right];
//         if(currentValue > max){
//             max = currentValue;
//         }


//         left++;
//     }

//     return max;
// }

// console.log(slidingWindow([11,2,5,9,10,6,7,3],3));

//BETTER FIXED SLIDING WINDOW 

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