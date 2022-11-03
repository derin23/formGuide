function countDown(i){
  
    if(i<=1){
        // console.log('return should happen: ', i);
        return i;
    }else{
       return countDown(i-1);
    }
}

console.log(countDown(3));