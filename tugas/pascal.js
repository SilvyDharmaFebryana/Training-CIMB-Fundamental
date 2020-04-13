let result3 = []
const triangleFibo = (len) => {
    for(let i = 0; i<len; i++){
        result3[i] = []
        if(i==0){
            result3[0] = [0]
        } else if(i==1){
            result3[1] = [1,1]
        } else{
            for(let j=0; j <= i; j++){
                if(j==0){
                    let k = result3[i-1].length
                    result3[i][j] = result3[i-1][k-1] + result3[i-1][k-2]
                } else if(j==1){
                    result3[i][j] = result3[i][j-1] + result3[i-1][j]
                } else{
                    result3[i][j] = result3[i][j-1] + result3[i][j-2]
                }
            }
        }
    }
    return result3
}
console.log(triangleFibo(5))
