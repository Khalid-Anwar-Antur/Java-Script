const array1 = [20];
const normalVar = 20;
console.log(Array.isArray(array1))
console.log(Array.isArray(normalVar))

if(Array.isArray(array1) && Array.isArray(normalVar)){
    console.log('both are array');
} else{
    console.log('not array')
}