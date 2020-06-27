function dis(val) 
{ 
    document.getElementById("result").value+=val 
} 
  
//function that evaluates the digit and return result 
function solve() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
  
//function that clear the display 
function clr() 
{ 
    document.getElementById("result").value = "" 
} 
// remove last digit 
function clrstr()
{
    let str = document.getElementById("result").value 
str = str.slice(0, -1); 
document.getElementById("result").value = str 
}