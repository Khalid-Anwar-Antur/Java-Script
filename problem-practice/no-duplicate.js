const biranyKhor =['abul', 'kabul', 'cabul', 'babul', 'romjan', 'fokir'];

function noDuplicate(arr){
    const unique = [];
    for(const element of arr){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

console.log(noDuplicate(biranyKhor)); // Output: ['abul', 'kabul', 'cabul', 'babul', 'romjan', 'fokir']