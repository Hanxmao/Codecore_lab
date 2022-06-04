const a = parseInt(process.argv[2])

for (i=1; i<a+1;i++){
    console.log(' '.repeat(a-i) + '# '.repeat(i))
}