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
// array = [10,20]
// array.forEach(element => {
//     console.log(element)
    
// });
// declare values out of foreach loop
// => one liner function(fetch the elements)

const array = [10, 20, "Mayu", 23.08, Date()]
console.log("B4 Change:")
for (var ele in array){
    console.log(array[ele])
}
console.log("Af Change:")
array.push("3rd Year")

for (var ele of array){
    console.log(ele)
}
array.pop()
array.pop()
console.log("AFTER POP:")

if(array.length>0){
    console.log("elements present")
    for (var ele of array){
        console.log(ele)
    }
} else {
    console.log("no elements")
}

//OBJECTS: ==>NESTED OBJ

a = {
    car: 'Audi',
    airbags: 8,
    color: 'black'
}
// console.log(a['color'])

var s = 'color'
console.log(a[s])
a.sunroof = { isPresent: "YES", Shape: "Rectangle" };

console.log(a.sunroof.isPresent);
console.log(a.sunroof.Shape);

for (var ele in a) {
    console.log(ele + ":" + a[ele]);
    if(typeof a[ele] === "object")
    {
        for (var val in a[ele]){
            console.log(val +":" + a[ele][val])
        }
    }
}

