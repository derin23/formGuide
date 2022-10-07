// N^2 runtime sorting algorithms

// First, let's make sure you understand all the common N^2 runtime sorting algorithms: Insertion Sort, Selection Sort and Bubble Sort. Watch these videos for a review of each:

// 1. pointer to parse through input and keep track of where we are in the algo
// 2. 2nd loop to compare 2 ints
// 3. if int to left is greater, swap
// 4. return answer

function bubbleSort(num) {

    for(let i = 1; i < num.length; i++) {
        for(let j = 0; j < num.length - 1; j++) {
            if(num[j] > num[j + 1]) {
                let numToSwap = num[j];
                num[j] = num[j + 1];
                num[j + 1] = numToSwap;
            }
        }
    }
    return num;
}

console.log("expect [1,2,3,4,5,6,7,8,9] ", bubbleSort([3,2,4,5,1,6,9,8,7]));