// N^2 runtime sorting algorithms

// First, let's make sure you understand all the common N^2 runtime sorting algorithms: Insertion Sort, Selection Sort and Bubble Sort. Watch these videos for a review of each:


//steps
//parse through array
//create a var to hold current value
//check if current value is bigger than value on the left
//swap values until value on left is smaller
function insertionSort (array){
   for(let i = 1; i < array.length; i ++){
    let j = i;
    while(j > 0 && array[j-1] > array[j]){
            let currentValue = array[j -1];
            array[j - 1] = array[j]; 
            array[j] = currentValue;
            j = j -1;
    }
   }
   return array;
}



console.log(insertionSort([1,2,3,6,7,8,5]));