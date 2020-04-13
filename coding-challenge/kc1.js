function KaprekarsConstant(num) { 

    // code goes here  
    var input;
    var anum,dnum,result,iteration;
    for(var x=1;result!==6174;x++){
    debugger;
        if(x===1){ 
            input = num;
        }
        else{
            input = result;
        }
    anum = input.toString().split('').sort().join('');
    dnum = input.toString().split('').sort(function(a, b){return b-a}).join('');
    result = Math.abs(parseInt(dnum) - parseInt(anum));
    iteration = x;
    }
    return iteration + ' iterasi untuk mencapai 6174'; 
           
  }
     
  // keep this function call here 
 console.log(KaprekarsConstant(2005))                     
  