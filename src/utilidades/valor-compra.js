let valorProducto = 5000;
let porcentajeUtilidad = 0.3;
let porcentajeImpuesto = 0.19;

const valorVenta = (valProd, pUtilidad, pImpuesto) => {
    let utilidad = valProd * pUtilidad;
    let impuesto = valProd * pImpuesto;
    let venta = valProd + utilidad + impuesto;

    return venta;
};

const ganancia = valorProducto * porcentajeUtilidad;

//Outputs
console.log('El valor de venta es: ', '$ '+
valorVenta(valorProducto, porcentajeUtilidad, porcentajeImpuesto) );

console.log('Ganancia: ', '$ ' + ganancia );