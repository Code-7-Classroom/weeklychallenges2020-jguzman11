var a,b,c;
       
a=parseInt(prompt("ENTER ANY Number"));
b=parseInt(prompt("ENTER ANY Number"));
c=prompt("ENTER Operator");

var d=confirm("Are you ready for your answer?");  

if(d==true)
{

switch(c)
  {
    
    case "+":
        c=a+b;
       document.write("your answer is "+c);
        break;

    case "-":
        c=a-b;
        document.write("your answer is "+c);
        break;
        
    case "*":
       c=a*b;
       document.write("your answer is "+c);
       break;
       
     case "/":
       c=a/b;
       document.write("your answer is "+c);
       break;
   }
}    