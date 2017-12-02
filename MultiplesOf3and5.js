let num=1000;
let temp=1;
let sum=0;
let ans5=0,ans3=0;
for (var i=1;temp==1;i++){
        
        if(ans3>=num)
        {
                ans3=0;
        }
        if(ans5>=num){
                ans5=0;
        }
         sum=sum+ans3+ans5;
          ans3=i*3;
          ans5=i*5;
         let isMultiOf5=ans3%5;
         if(!isMultiOf5)
         ans3=0;
          
      if(ans5>=num&&ans3>=num)
      temp=0;
      
}

console.log(sum);
