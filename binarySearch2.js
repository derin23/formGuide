//steps
//1) declare left and right pointer
//2) create a while loop that runs until left pointer passes right pointer
//3) declare mid point
//4) check if mid point is the target, if so return mid index
//5) else if check if target is to the left of mid and move the right pointer to one less than mid
//6) else check if targer is to the right of the mid and move left pointer to one after mid
//7) return -1 if target is not found
function binarySearch(arr, target){
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        
        let mid = Math.floor((left + right)/2);

        if(target == arr[mid]){
            return mid;
        }else if(target < arr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }

    }
    return -1;
}



console.log(binarySearch([1,2,3,4,5,6,7,8,11,45],11));