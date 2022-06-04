const a = parseInt(process.argv[2])

if (a>=0 && a<=100) {
    if (a >= 86){
        console.log('A')
    } else if ( a >=73){
        console.log('B')
    } else if ( a >=67){
        console.log('C+')
    } else if ( a >=60){
        console.log('C')
    } else if ( a >=50){
        console.log('C-')
    } else {
        console.log('F')
    }
} else {
    console.log('Invalid grade.')
}