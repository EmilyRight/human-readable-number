module.exports = function toReadable (number) {
    let myStr = number.toString();

  let units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let dozens = [" ", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (number >= 0 && number <= 19) {
    return units[number];
   
    } else if (myStr.length == 2 && number%10 == 0){
         return dozens[number/10];
    } else if (myStr.length == 2 && number%10 > 0) {
        return (dozens[+myStr[0]] + " " + units[+myStr[1]]).trim();
    
    } else if (myStr.length == 3 && number % 10 == 0){
        return (units[+myStr[0]] + " hundred " + dozens[+myStr[1]]).trim();
    } else if (myStr.length == 3 && !number % 100){
        return (units[+myStr[0]] + " hundred").trim();
    } else if (myStr.length == 3 && number % 100 > 0 && number % 100 < 20){
        return (units[+myStr[0]]+ " hundred " + units[number%100]).trim();
    
    } else if (myStr.length == 3 && number % 100 > 19){
        return (units[+myStr[0]]+ " hundred " + dozens[+myStr[1]] + " " + units[+myStr[2]]).trim(); 
    }
}
