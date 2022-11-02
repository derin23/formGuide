function addNum(num1,num2){
    

let answer = num1 + num2;

if(answer < 10){
    console.log('inside if statement::', answer);
    addNum(1, answer + 2);
    
}
console.log('outside the if: ', answer);
return answer;

// let counter = 0; 
// if (counter > 100) {
//     return -1;
// }
}


console.log(addNum(1,1));