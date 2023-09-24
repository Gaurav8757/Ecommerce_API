# Ecommerce API
The E-commerce API is built using Node.js, Express.js, and MongoDB, providing functionality for the admin to manage their product inventory. The API allows for viewing the inventory, creating new products, deleting existing products, and updating the quantity of products.

Tech Stack:
- Node.js: A JavaScript runtime environment that allows running JavaScript on the server-side.
- Express.js: A web application framework for Node.js, used for handling server-side logic and creating RESTful APIs.
- MongoDB: A NoSQL database used for storing and retrieving product inventory data.

Functionality:
1. View Inventory: The API provides endpoints to retrieve the product inventory, allowing the admin to view all the products currently available.

2. Create Products: The API includes endpoints for creating new products in the inventory. The admin can provide details such as product name, description, price, and quantity.

3. Delete Product: The API provides an endpoint to delete a specific product from the inventory based on its unique identifier.

4. Update Quantity of Products: The API allows the admin to update the quantity of a product in the inventory. The admin can specify the product ID and the new quantity to update the stock.

## Setup

   After cloning, use "npm install" and serve the app using "node server". The example provided here are from Postman.

    localhost:3000/api/v1 
    
## 1. View Inventory 

   Admin can view all the products available in inventory and sending a `GET` request.
   
    /products
![s2](https://github.com/RitikAmity0008/Ecommerce-API/assets/140295863/37135b61-2737-4130-ac90-5897db415a18)


    
    



## 2. Create Products
   Admin can enter new products by specifying the name and quantity in form  and sending a `POST` request.

    /products/create
    
   ![s1](https://github.com/RitikAmity0008/Ecommerce-API/assets/140295863/3c1fa010-44f6-4dc2-879c-217ae654ee07)

   
## 3. Delete Products
  
   Admin can delete products by passing the the product id and sending a `DELETE` request.
  
      /products/:id

![s4](https://github.com/RitikAmity0008/Ecommerce-API/assets/140295863/0012f329-dd6f-4c4d-9f73-0256b91deb6e)

      
      
    

   

## 4. Update Quantity of Products

   Admin can update  the quantity of a product by passing the product id and the quantity by which the product may be incremented or        decremented by and sending a `post` Request.
   
    /products/:id/update_quantity/?number=100


   
![S3](https://github.com/RitikAmity0008/Ecommerce-API/assets/140295863/38c9df13-ae94-432e-b320-0493989befb2)

   
   
   ## Folder Structure
   
```
Ecommerce-API
    |
    |                  |--->css
    |--->assets------->|--->img
    |                  |---> js
    |
    |--->config------->|--->mongoose.js
    |              
    |
    |                  
    |--->controllers-->|-->api-->|-->vi-->|-->productController.js
    |                  |-->homeController.js
    |
    |     
    |
    |--->models------->|-->products.js             
    |                  
    |--->routes------->|---->api------>|------>vi----->|-->product.js
    |                  |---->index.js                  |---->index.js
    |
    |
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
 ````


