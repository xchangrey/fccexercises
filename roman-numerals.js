//JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter

function convertToRoman(num) {
 const realNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 const romanNum = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
 let romanized = '';
  
 for(let i = 0; i < realNum.length; i++){
    while(num >= realNum[i]){
      romanized += romanNum[i];
      num -= realNum[i];
    }   
 }
  
return romanized;

}

convertToRoman(36);