
const arr = [80, 80, 50]; 

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(arr));

function calculateGrade(marks) {
    let avg = calculateAverage(marks)
    if (avg < 60) {
        return 'F'
    } else if (avg < 70) {
        return 'D'
    } else if (avg < 80) {
        return 'C'
    } else if (avg < 90) {
        return 'B'
    } else{
        return 'A'
    }
} 

function calculateAverage(arr) {
let av = 0
    for( i = 0 ; i < arr.length ; i++){
    av += arr[i] / arr.length
    }
return av
} 
