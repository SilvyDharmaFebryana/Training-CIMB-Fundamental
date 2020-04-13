
    // ================== dengan array =======================
    
    const stringArr = ['aku', 'suka', 'buah', 'mangga'];
    
    for(let i = 0 ; i < stringArr.length ; i++){
        [satu, dua, tiga, empat] = stringArr
        stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].substr(1);
    }  

    console.log(satu)
    console.log(dua)
    console.log(tiga)
    console.log(empat)
    console.log(stringArr.join(' '))


    //============================ dengan string =========================

    const word = 'saya suka hal yang membuat bahagia'
    const splitWord = word.split(' ')

    for(let i = 0 ; i < splitWord.length ; i++){
        [one, ...rest] = splitWord
        splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].substr(1);
    }  
  
    console.log(one + ' ' + rest.join(' '))
    console.log(splitWord.join(' '))