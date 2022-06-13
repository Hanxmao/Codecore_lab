const max= (arr)=>{
    let maxNum = -Infinity
    for(i=0;i<arr.length;i++){
        if (arr[i]>maxNum){
            maxNum = arr[i];
        }
    }return maxNum;
}

function maximumRecursion(arr){
    if(arr.length === 1) {
        return arr[0]
    } else {
        if(arr[0] > arr[1]) {
            arr[1] = arr[0]
        }
        return maximumRecursion(arr.slice(1))
    }
}
