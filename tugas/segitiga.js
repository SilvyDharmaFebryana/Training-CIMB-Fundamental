// let result = ''

// for (let i = 0; i < 5; i++) {
//     result += "*****"
//     for(let j = i ; j > i; j++){
        
//     }
//     result += "\n"
// } 

  

// console.log(result)

let hasil = ''
for (let i = 0; i < 2; i++) { // i = 1  hasil = '*****\n'
  
  for (let j = 0; j < 2; j++) { // j = 4  hasil = '*****\n*****'
    hasil += '*'
  }
  hasil += "\n"
}
console.log(hasil)