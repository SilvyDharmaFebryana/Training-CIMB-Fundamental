//======================================== 1 ===============================================
// const caesarCipher = (word, num) => {
// 	if (num < 0)
//     return caesarCipher(word, num + 26);

//     var output = '';
//         for (var i = 0; i < word.length; i ++) {
//         var c = word[i];
//         if (c.match(/[a-z]/i)) {

//         var code = word.charCodeAt(i);
//         if ((code >= 65) && (code <= 90)){
//             c = String.fromCharCode(((code - 65 + num) % 26) + 65);
//         } else if ((code >= 97) && (code <= 122)){
//             c = String.fromCharCode(((code - 97 + num) % 26) + 97);
//         }
          
//     }
//     output += c;
// }
// return output;
// };

// console.log(caesarCipher('abc', 1))

    // Input: 'abc', 1
    // Output: 'bcd'

    // Input: 'abc', 28
    // Output: 'cde'



//======================================== 2 ================================================
// let arrNumb = [1,2,3,4]
// let hitung = arrNumb[0]
// let operator = 'tambah'
// const plusMinus = () => {
//     for(let i = 0; i <arrNumb.length; i++){
//         if(operator == 'tambah') {
//             hitung += arrNumb[i]
//             operator = 'kurang'
//         } else if (operator == 'kurang'){
//             hitung -= arrNumb[i]
//             operator = 'tambah'
//         }
//      } return hitung 
//  } 
   

//  console.log(plusMinus(arrNumb))

  // Input: [1,2,3,4]
  // Output: 1 + 2 - 3 + 4 = 4

  // Input: [1, 1, 1, 1, 1]
  // Output: 1 + 1 - 1 + 1 - 1 = 1



//======================================= 3 =================================================
 const isPalindrome = (kata) => {
    var len = Math.floor(kata.length / 2);
    kata = kata.replace(/\s/gi, '')
        for (let i = 0; i < len; i++)
          if (kata[i].toLowerCase() !== kata[kata.length - i - 1].toLowerCase())
            return false;
        return true;
      }
      
  console.log(isPalindrome('NuRsES ruN'))

  // Input: 'madam'
  // Output: true

  // Input: 'Racecar'
  // Output: true

  // Input: '123321'
  // Output: true

  // Input: 'NuRsES ruN'
  // Output: true

  // Input: 'hehe kocak'
  // Output: false
