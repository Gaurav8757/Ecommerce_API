
const Product = require('../../models/products');
module.exports.listProducts = async(req, res) => {
  try {
    // Fetching all the Products
    const products = await Product.find({}).exec(); // Only select the required fields
// console.log(products);
    // Formatting the data for a clearer understanding
    const formattedProducts =  products.map((product) => ({
        
      id: product.id,
      name: product.name,
      quantity: product.quantity,
    }));
    console.log(products);
// console.log(formattedProducts)
    // Return the formatted data on success
     res.status(200).json({
      data: {
        Products: formattedProducts,
      },
      message: "These are the Products in Inventory",
    });
  } catch (err) {
    // Log the error for debugging purposes
    console.error(err);
     res.status(501).json({
      message: "Error in fetching products",
    });
  }
};


module.exports.create = async function(req,res){
    // console.log(req.body.name, req.body.quantity);
    try{
        // Creating a new Product
        let newProduct = await Product.create({
            name:req.body.name,
            quantity:req.body.quantity
        });
        //Saving the created product
        await newProduct.save();
        // console.log(newProduct);
        // on success shows the created product 
        return res.status(200).json({
            data : {
                Product : {
                    name : newProduct.name,
                    quantity : newProduct.quantity
                }
            },
            message : "Product Added!!"
           
        });
    }catch(err){
        // To view error
        // console.log("****",err);
        //Throws error on failure
        return res.status(500).json({
            message : "Error in adding product to inventory"
        });
    }
};

module.exports.delete = async function(req,res){
    // console.log(req.params.id);
    try{
        //Extracting the id from the URL which are passed through params
        const id = req.params.id;
        // Fetching the product via its id
        let product = await Product.findById(id);
        
        // If product is not found
        if(!product){
            
            // Throws Error
            return res.status(404).json({
                message: "Product not found!!"
            });
        }
        
        // Deleting the particular product
        let deleteProduct = await product.deleteOne();
        
        // on success shows the deleted product
        return res.status(200).json({
            data : {
                product : {
                    id : deleteProduct.id,
                    name: deleteProduct.name,
                    quantity: deleteProduct.quantity
                }
            },
            message : "Product deleted successfully"
        });
        
    }catch(err){
        
        // To view error
        // console.log("****",err);
        
        //Throws error on failure
        return res.status(500).json({
            message : "Error in deleting product"
        });
    }
};

module.exports.updateQuantity = async function(req,res){
    
    try{
        
        //Extracting the Quantity to update from the URL which are passed through query
        let update_quantity = req.query.number;
        
        //Extracting the id from the URL which are passed through params
        const id = req.params.id;
        
        // Fetching the product by id
        let product = await Product.findById(id);
        
        // If product is not found
        if(!product){
            
            // Throws Error
            return res.status(404).json({
                message: "Product not found!!"
            });
        }
        
        
        update_quantity = parseInt(update_quantity,10);

        // checking if the update quantity is number
        if(!isNaN(update_quantity)){
            
            // Updating the quantity of the selected product
            product.quantity += update_quantity;
            
            // storing the updated product
            let updatedProduct = await product.save();
            
            
            // on success shows the updated product
            return res.status(200).json({
                data : {
                    product : {
                        id : updatedProduct.id,
                        name: updatedProduct.name,
                        quantity: updatedProduct.quantity
                    }
                },
                message : "Product updated successfully"
            });
        }
        else{
            // if not a number 
            return res.status(400).json({
                message : "Please enter a Number to update quantity"
            });
        }
        
        
    }catch(err){
        //Throws error on failure
        return res.status(500).json({
            message : "Error in updating quantity"
        });
    }
};

