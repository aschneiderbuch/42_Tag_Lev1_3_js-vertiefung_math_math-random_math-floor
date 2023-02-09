console.log("test");

/* 
Math.random()  // Zufall 0 - 1

Math.floor()   // abrunden 

*/
const array = [];
const array2 = [];

let randomNum = Math.random();
console.log(randomNum);


let randomNum10 = 0
for (let i = 0 ; i < 100 ; i++) {
//randomNum10 = Math.floor((Math.random()*(((max)+1)-min)+min));  zufallszahl 1-10
randomNum10 = Math.floor((Math.random()*(11-1)+1));  // zufallzahl 1-10

console.log(randomNum10);
array.push(randomNum10);
console.log(array);
console.log(array.length);
array.sort((a, b)=>{return a-b})  // sortiert richtig 0-10
array.sort(function(a,b){return a-b})  // sortiert richtig 0-10
}

let randomNum100 = 0
for (let i = 0 ; i < 1000 ; i++) {
    //randomNum10 = Math.floor((Math.random()*(((max)+1)-min)+min));  zufallszahl 1-10
    randomNum100 = Math.floor((Math.random()*(100+1-1)+1));  // zufallzahl 1-10
    
    console.log(randomNum100);
    array2.push(randomNum100);
    console.log(array2);
    console.log(array2.length);
    array2.sort((a, b)=>{return a-b})  // sortiert richtig 0-10
    array2.sort(function(a,b){return a-b})  // sortiert richtig 0-10
    }