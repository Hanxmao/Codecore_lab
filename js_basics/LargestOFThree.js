let firstNum = process.argv[2];
let secNum = process.argv[3];
let thirdNum = process.argv[4];


if (firstNum >secNum && firstNum > thirdNum) {
    console.log(firstNum);
} else if (secNum > firstNum && secNum> thirdNum){
    console.log(secNum);
} else if (thirdNum > firstNum && thirdNum>secNum){
    console.log(thirdNum);
}


