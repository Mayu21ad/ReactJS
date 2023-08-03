let a = 5;
console.log(a)
{
    let a = 7;
    console.log(a)
}
console.log(a)
const b = 10;
console.log(b)

var c = 100;
if(a > 0) {
    console.log('positive')
}
else if(a < 0) {
    console.log('negative')
}

// loops: for, foreach, forin, forof, while, do... while

for (i = 0;i<a;i++) {
    console.log(i)
}

i = 1
while(i <=a ){
    console.log(i)
    i++
} 
// declare i out of the loop
array = [10,20]
array.forEach(element => {
    console.log(element)
    
});
// declare values out of foreach loop
// => one liner function(fetch the elements)