// The Merge Sort algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm. 
// In this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner.

// Merge Sort Working Process:
// Think of it as a recursive algorithm continuously splits the array in half until it cannot be further divided. 
// This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion. 
// If the array has multiple elements, split the array into halves and recursively invoke the merge sort on each of the halves. 
// Finally, when both halves are sorted, the merge operation is applied. Merge operation is the process of taking two smaller sorted arrays and combining them to eventually make a larger one.

function mergeSort(arr,lb,ub){
    if(lb < ub){
        let mid = Math.floor((lb+ub)/2);
        mergeSort(arr, lb, mid);
        mergeSort(arr, mid + 1, ub);
        merge(arr,lb,mid,ub);
    }
    return arr;
}

function merge(arr,lb,mid,ub){
    let i = lb;
    let j = mid + 1;
    let k = lb;

    let b = [];

    while(i <= mid && j <= ub){
        if(arr[i] <= arr[j]){
            b[k] = arr[i];
            i++;
        }else{
            b[k] = arr[j];
            j++;
        }
        k++;
    }

    if(i > mid){
        while(j <= ub){
            b[k] = arr[j];
            j++;
            k++;
        }
    }else{
        while(i <= mid){
            b[k] = arr[i];
            i++;
            k++;
        }
    }
    for( lb; lb < b.length; lb++){
        arr[lb] = b[lb];
    }
     return arr;
}
let arr = [3,8,2,7,3,25,80,44];
console.log(mergeSort(arr, 0, arr.length - 1));