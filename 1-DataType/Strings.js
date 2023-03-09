

// let Myname = 'Yeffer';
// let MyLastName = 'Moreno';
// const nickName = 'Yefire';

// console.log(Myname);
// console.log(MyLastName);
// console.log(nickName);
// console.log(Myname.length);
// console.log(MyLastName.toUpperCase());
// console.log(nickName.includes('e'));



function sumar (n1,n2,n3) {
    if (n1>20) {
        n1=19;
    }
    if (n2>20) {
        n2=19;
    }
    if (n3>20) {
        n3=19;
    }
    return n1 + n2 + n3;
}

let add = sumar(100,50,-1101)

if (add % 2 ==0 && add > 0) {
    console.log(`El resultados se la primera fncion es ${add} es un numero PAR y es Positivo`);
}else if (add % 2 ==0 && add < 0) {
    console.log(`El resultados se la primera fncion es ${add} es un numero PAR y es Negativo`);
} else if (add % 2!=0 && add>0){
    console.log(`El resultados se la primera fncion es ${add} es un numero IMPAR y es Positivo`);
} else {
    console.log(`El resultados se la primera fncion es ${add} es un numero IMPAR y es Negativo`);
}