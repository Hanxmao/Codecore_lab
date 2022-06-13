//Write a script `largestOfThree.js` that takes three numbers as arguments then logs the largest of 
//the three numbers as "The largest number is X".


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


