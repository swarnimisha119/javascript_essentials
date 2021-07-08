var sum1=0,sum2=0,sum3=0
for(i=1;i<=100;i++)
{
    
    while(sum1<=i)
    {
        sum1=sum1+15
        
    }
    sum1-=15
    while(sum2<=i)
    {
        sum2=sum2+3
      
    }
    sum2-=3
    while(sum3<=i)
    {
        sum3=sum3+5
        
    }
    sum3-=5

    if(sum1==i)
    {
        console.log("FizzBuzz")
    }
    else if(sum2==i)
    {
        console.log("Fizz")
    }
    else if(sum3==i)
    {
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
    sum1=0
    sum2=0 
    sum3=0 
    
}