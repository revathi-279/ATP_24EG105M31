//http://localhost:3000/products
import exp from 'express'
export const productApp = exp.Router()

let products = []
productApp.get('/products',(req,res) => {
     res.json({message : "The products are", payload : products})
})
productApp.get('/products/:brand',(req,res) => {
     let brandOfUrl = req.params.brand
     let productWithBrand = products.find(productObj =>productObj.brand === brandOfUrl)
     if(!productWithBrand)
          res.json({message : "The product not found!"})
     res.json({message : "The product details are", payload : productWithBrand})
})
productApp.post('/products',(req,res) => {
     let newProduct = req.body
     products.push(newProduct)
     res.json({message : "Product added successfully"})
})
productApp.put('/products',(req,res) => {
     let updatedProduct = req.body
     let indOfProduct = products.findIndex(productObj => productObj.id === updatedProduct.id)
     if(!indOfProduct)
          res.json({message : "Product not found to update!"})
     products.splice(indOfProduct,1,updatedProduct)
     res.json({message : "Product details updated successfully"})
})
productApp.delete('/products/:id',(req,res) => {
     let idOfUrl = Number(req.params.id)
     let indexofproduct = products.findIndex(productObj => productObj.id === idOfUrl)
     if(!indexofproduct)
          res.json({message : "Product not found to be deleted!"})
     products.splice(indexofproduct,1)
     res.json({message : "Product deleted successfully"})
})