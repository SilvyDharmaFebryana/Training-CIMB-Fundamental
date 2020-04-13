

// const arrTriangle = (length) => {
//     let arr = []
//     let ganjil = []
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j <= i; j++) {
//             if (i==j) {
//                 arr[i] = j
//                 if( i %2 == 1){
//                     ganjil.push(arr[i])
//                 }
//             }

//         }
//         console.log(ganjil);
//     }
// }
// arrTriangle(5)


// function fib(num) {
//     var x = 0;
//     var y = 1;
//     var fibarray = [[0],[1 , 1]];

//     while(y < num) {
//         y += x;
//         x = y - x;
//         fibarray.push(y);
//     }

//     return fibarray;
//     }
//     console.log(fib(10));

// var fib = [0, 1];
// var panjang =
// for(var i=fib.length; i<10; i++) {
//   fib[i] = fib[i-2] + fib[i-1];
// }
// console.log(fib); 
// // look in your console


// const triangleOdd = limit => {
//     let arrResult = []
//     let counter = 1
//     for (let i = 0; i < limit; i++) {
//       let arr = []
//       for (let j = 0; j < i + 1; j++) {
//         arr[j] = counter
//         counter += 2
//       }
//       arrResult.push(arr)
//     }
//     return arrResult
//   }
//   console.log(triangleOdd(5))



//   const arrTriangle = (length) => {
//     let arr = []
//     let array = []
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j <= i; j++) {
//             arr[i] = i + 1
//            array.push(arr)
//         }

//         // console.log(array);
//     }
//    console.log(array)
// }
// arrTriangle(5)


// var fib = [0,1];
// let arrFib = []
// let count 

// const arrFibbo = (val) => {
//     for(let i=2; i<val; i++) {
//         let fib = []
//         for (let j = 0; j < i; j++) {
//             fib[j] = fib[j-2] + fib[j-1];
//             fib.push(fib[j])
//           }

//         arrFib.push(fib)
//     }
//     console.log(arrFib); 
// }

// arrFibbo(6)


// let arr = []
// function fib(num) {
//     var x = 0;
//     var count = 1;
//     var fibarray = [0, 1];

//     for ( count = 0; count < num; count++) {
//             count += x;
//             x = count - x;
//             fibarray.push(count);
//     }
//     arr.push(fibarray)
//     return arr;
// }
// console.log(fib(100));


const arrTriangle = (length) => {
    let arr = []
    for (let i = 0; i <length; i++) {
        for (let j = 0; j <= i; j++) {   
        arr[i] = i + 1
 }
        console.log(arr);
    }
}
arrTriangle(5)