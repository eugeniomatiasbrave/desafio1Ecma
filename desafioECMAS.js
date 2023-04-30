class ProductManager {
    constructor () {
        this.products = [];
    }

    getProducts() { 
        console.log (this.products)
        return this.products;
    }

    getProductById(id) {
        const searching = this.products.find(p => p.id == id);
          if (searching){
             return searching;
          } else {
            return undefined;
          }
        } 


        createId (){
            let maxId= 0;
            for (let i=0 ; i < this.products.length; i++ ) {  
            const prod = this.products [i];
            if (prod.id > maxId) {
               maxId=prod.id ;
            }   
        }
            return ++maxId;
        }
    

        addProduct(title ,description ,price ,thumbnail ,code ,stock) 
  
    { title= title || "required field";
      description= description || "required field";
      price= price || "required field";
      thumbnail= thumbnail || "required field"; 
      code = code ; 
      stock= stock ?? "required field"; //....................... uso del nullish para que tome el 0.
      
      let newproducts= {title,description, price,thumbnail, code ,stock, id: this.createId() };
      
     this.products = [...this.products, newproducts]; // .........uso de expredOperator

    

     return true;
    }

    
            
}

const productM = new ProductManager() ;

productM.addProduct(
    "shorts", 
    "T. XL", 
    1000, 
    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/530cd80f75104674bdf2acc60111e0a5_9366/shorts-aeroready-designed-2-move-tejidos-sport.jpg",
    "abc124",
    20
    );

productM.addProduct(
        "pants", 
        "T. L", 
        2000, 
        "https://alcatraz.com.ar/wp-content/uploads/2017/11/74369_070_s16_03.jpg",
        "abc125",
        30
        );

 
productM.addProduct(
         "",   //......................................................... uso de campo requerido.
        "T. M", 
        3000, 
        "https://img.todo-memes.com/meme-de/ups-donde-esta-530085.jpg",
        "abc126",
        40
        ); 
        
        productM.addProduct(
            "blue jeans",   
            "T. M",
           6000, 
           "https://www.vitamina.com.ar/media/wysiwyg/Recto-JEAN_MARLOW_CANE_PLAQUE.jpg",
           "abc127",
           0     // .....................................................toma el 0 por el nullish.
           
           ); 
           
           productM.addProduct(
            "shirt", 
            "T. SM", 
            1200, 
            "https://taverniti.vteximg.com.br/arquivos/ids/243813-2000-2500/19659_601X1.jpg?v=637940116848830000",
            "abc124",
            50
            );

    
    console.log(productM.products);