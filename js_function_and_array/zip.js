function zip(a,b){
    if(a.length!==b.length){
        return undefined
    }
    c=[]
    for (i=0;i<a.length;i++){
       c.push([a[i],b[i]])
    }
    console.log(c) 
}

zip([1, 2, 3], [4, 5, 6]) // [[1, 4], [2, 5], [3, 6]]

zip(['firstName', 'lastName'], ['Jon', 'Snow']) // [['firstName', 'Jon'], ['lastName', 'Snow']]

zip([0, 0, 0], []) // undefined

zip(['x', 'y', 'z'], [5, 6, 10]) // [['x', 5], ['y', 6], ['z', 10]]