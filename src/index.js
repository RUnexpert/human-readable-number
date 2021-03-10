module.exports = function toReadable (number) {


  let singles = ["", "one", "two", "three", "four", "five", "six", "seven",  "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", 
  "seventeen", "eighteen", "nineteen",];

  let couples = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  let numStr = String(number);

  if(number === 0) return "zero";

  if(number < 20) return singles[Number(number)];
  
  if(numStr.length === 2)
  {
    if(numStr[0] > 0 && numStr[1] > 0 )
    {
      return couples[numStr[0]] + " " + singles[numStr[1]];
    } else
    {
      return couples[numStr[0]] + "" + singles[numStr[1]];
    }
    
  }

  let result = [];

  if(numStr.length === 3)
  {
    if(numStr[1] === '0' && numStr[2] === '0')
    {
      result = singles[numStr[0]] +  " hundred";
    }
    else
    {
     result = singles[numStr[0]] + " hundred " + toReadable(numStr[1] + numStr[2]);
    }
  }

  return result.trim();
}


 

