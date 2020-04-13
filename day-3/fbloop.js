let len = 50
let fizzbuzz = 0

// BREAK
for (let i=1 ; i<= len ; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log('fizzbuzz')
        fizzbuzz += 1
        if (fizzbuzz == 2) {
            break
        }
    } else if (i%5 == 0) {
        console.log('buzz')
    } else if (i%3 == 0) {
        console.log('fizz') 
    } else {
        console.log(i)
    }
}



// //CONTINUE
// for (let i=1 ; i<= len ; i++) {
//     if (i%3 == 0 && i%5 == 0) {
//         console.log('fizzbuzz')
//         fizzbuzz += 1
//         if (fizzbuzz == 2) {
//             continue
//         }
//     } else if (i%5 == 0) {
//         console.log('buzz')
//     } else if (i%3 == 0) {
//         console.log('fizz') 
//     } else {
//         console.log(i)
//     }
// }