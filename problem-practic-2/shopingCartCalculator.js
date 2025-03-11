


const products = [
    {name: 'shampoo',price: 300},
    {name: 'chiruni',price: 100},
    {name: 'shirt',price: 700},
    {name: 'pant',price: 1200}
]


function getShopping(){
    let total= 0;
    for(const prodect of products){
         total = prodect.price + total
    }
    return total;
}

const total = getShopping(products);
console.log('total ajke khosabe', total)