function largestNumber (arr){
    let defauNum = -Infinity
    arr.forEach((ele)=>{
        if (ele>defauNum){
            defauNum=ele
        }
        
    })
    console.log(defauNum)

}

largestNumber([40, 2, 13, 34, 42])


//give a default value and compare each ele of the array to it if larger
//keep the value, then keep going