public class Recursion {

    static int countDown(int i){
   //    System.out.println(i);
       if(i<=1){
           return i;
       }else{
         return  countDown(i-1);
       }
   }
   
   
       public static void main(String[] args){
           System.out.println(countDown(5));
       }
   }
   
   