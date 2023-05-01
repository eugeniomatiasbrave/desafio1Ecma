class ProductManager {
    constructor () {
        this.products = [];
    }

    getProducts() { 
        console.log (this.products)
        return this.products;
    }

    getProductById(id) {
        const searching = this.products.find(prod => prod.id === id);
          if (searching){
             return searching;
          } else {
            return  console.log("Not found");  
          }
        } 

    #createId ()
        { 
        let maxId= 0;  // con variable privada no estaria perdiendo el 0
        for (let i=0 ; i < this.products.length; i++ ) { 
        const prod = this.products [i];

        if (prod.id > maxId){ 
                maxId=prod.id ; 
             }}
            return ++maxId;
         }

    addProduct( title ,description ,price ,thumbnail ,code ,stock) 
        { 
        if (this.products.find(prod => prod.code === code)) {  // permite encontrar codigo repetido
         return console.log( `The code ${code} is repeated`); 
             }
    

     let newproducts= {id: this.#createId(), title,description, price,thumbnail, code ,stock };

     if (!Object.values(newproducts).includes(undefined)) {  // todos los campos son obligatorios tienen un valor, si no falta un valor todo OK, sino sera un valor UNDEFINED. 

     this.products = [...this.products, newproducts]; // .........uso de expredOperator

     } else {  console.log("All fields are required")}

     return  "addObjet"

    }          
}

const productM = new ProductManager() ;

productM.addProduct("shorts", "T. XL", 1000, "thumbnail 1", "abc124", 20 );
productM.addProduct("shirt", "T. SL", 2000, "thumbnail 2", "abc124", 30 ); // uso de codigo repetido
productM.addProduct("blue jean", "T. ML", 1000, "thumbnail 3", "abc125" ); // falta un valor   
productM.addProduct("pats", "T. XL", 3000, "thumbnail 4", "abc126", 50 );
    

    console.log(productM.products); // testing...
    productM.getProductById(2) // testing...