function add(n1,n2){
    return n1+n2;
}

function sub(n1,n2){
    return n1-n2;
}

function mult(n1,n2){
    return n1*n2;
}

function div(n1,n2){
    return n1/n2;
}

function calculator(a,b,oparation){
    if(oparation ==='add'){
        const result = add(a,b);
        return result;

    }else if(oparation==='sub'){
        const result = sub(a,b);
        return result;
    }else if(oparation==='mult'){
        const result = mult(a,b);
        return result;
    }else{
        const result=div(a,b);
        return result;
    }

}

const result = calculator(20,10,'add');
console.log(result)