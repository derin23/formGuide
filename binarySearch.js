// Binary Search

// Binary search is one of the most common algorithmic patterns to learn. The purpose of binary search is to find items faster in a sorted collection. By leveraging binary search, you are able to reduce your search time from O(n) to O(logn).

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){

        let mid = Math.floor((left + right)/2);
        
        if(arr[mid] == target){
            return mid;
        }else if(target < arr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }

    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5,6], 6));