s="madam speaks malayalam"
s=s+" "
s1=""
s2=""
//var t 
for(t of s)
{
    if(t!=" ")
    {
        s1=s1+t
        s2=t+s2
    }
    else{
        if(s1===s2)
        {
            console.log(s2)
        }
    }
    s1=""
    s2=""
}