let input = 10;
let tipoInput = 0;
let tipoOutput = 0;

/* Equivalencias
0 = byte
3 = kilobyte
6 = megabyte
9 = gigabyte
12 = terabyte
*/
const equivalencia = (i, tI, tO) => {
    if(tI > tO) {
        return i * Math.pow(10,tI);
    } else if(tI < tO) {
        return i * Math.pow(10,-tO);
    } else {
        return i;
    }
};

console.log(equivalencia(input,tipoInput,tipoOutput));