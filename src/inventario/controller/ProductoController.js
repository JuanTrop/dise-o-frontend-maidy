class ProductoController {

    constructor(products){
        this.products = products; 
    }

    create(code, name, brand, price, stock){
        let product = new Producto(code, name, brand, price, stock);
        this.products.push(product);
    }

    search(code){
        let busqueda = (value, index, array) => {
            return code == value;
        };

        return this.products.find(busqueda);
    }

    update(code, name, brand, price, stock){
        let product = this.search(code);
        product = new Producto(code, name, brand, price, stock);
    }

    delete(code) {
        for(i = 0; i < this.products.length; i++){
            for(j = i + 1; j <this.products.length - 1; j++) {

                        this.products = this.products.splice(i,j);
        
                }
            }
        
    }

}