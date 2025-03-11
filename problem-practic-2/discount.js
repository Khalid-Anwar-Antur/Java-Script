function discountedPrice(q){
    if(q<=100){
        const total =q*100;
        return total;
    }else if(q<=200){
        const total =q*90;
        return total;
    }else{
        const total =q * 70;
        return total;
    }
}

const total = discountedPrice(1220);
console.log(total)