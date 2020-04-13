// const segitiga = (row) => {

//     let arr = []
//     let result = ''
//     for (let i = 0; i < row; i++) {
//         result += ''
//         for (let j = 0; j < row; j++) {
//             if (i == j) {
//                 result += i + 1
//                 arr.push(result.split(''))
//             }
//         }
//     }
//     for (let a = 0; a < arr.length; a++) {
//         for (let b = 0; b < arr[a].length; b++) {
//             arr[a][b] = parseInt(arr[a][b])
//         }
//     }

//     console.log(arr)
// }
// segitiga(6)



// const arrTriangle = (length) => {
//     let arr = []
//     for (let i = 0; i <length; i++) {
//         for (let j = 0; j <= i; j++) {   
//         arr[i] = i + 1
//  }
//         console.log(arr);
//     }
// }
// arrTriangle(5)


// const segitigaGanjil = (val) => {
//     let arr = []
//     let array = []
//     let count = 1
//     for (let i = 0; i < val; i++) {
//         arr = []
//         for (let j = 0; j < i + 1; j++) {
//             arr[j] = count
//             count += 2
//         }
//         array.push(arr)
//     }
//     console.log(array)
// }
// segitigaGanjil(6)


const segitigaFibo = (value) => {
    let array = []
    for (let i = 0; i < value; i++) {
        let arr = []
        if (i == 0) {
            arr = [0]
        } else if (i == 1) {
            arr = [1, 1]
        } else {
            arr = [...array[i - 1]];
            for (let j = 0; j < i + 1; j++) {
                if (j == 0) {
                    arr[j] = arr[j] + arr[j + 1]
                } else if (j == 1) {
                    arr[j] = arr[j] + arr[j - 1]
                } else {
                    arr[j] = arr[j - 2] + arr[j - 1]
                }
            }
        }
        array.push(arr)
    }
    console.log(array)
}

segitigaFibo(6)


// const segitigaPascal = (value) => {
//     let array = []
//     for (let i = 0; i < value; i++) {
//         let arr = []
//         if (i == 0) {
//             arr = [1];
//         } else if (i == 1) {
//             arr = [1, 1]
//         } else {
//             let temp = [...array[i - 1]]
//             for (let j = 0; j < i + 1; j++) {
//                 if (j == 0 || j == i) {
//                     arr[j] = 1
//                 } else {
//                     arr[j] = temp[j] + temp[j - 1]
//                 }
//             }
//         }
//         array.push(arr)
//     }
//     console.log(array)
// }

// segitigaPascal(6)