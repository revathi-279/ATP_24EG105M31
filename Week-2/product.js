export const products = [
{ id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
{ id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
{ id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
{ id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

// TODO: Implement these functions

export function getProductById(id) {
// Find and return product by ID
const product = products.filter(product => product.id === id)
if(product)
 return product
return 'Product is not available!'
}

export function getAllProducts() {
// Return all products
return products
}

export function getProductsByCategory(category) {
// Filter products by category
const productsByCategory = products.filter(product => product.category === category)
if (productsByCategory)
 return productsByCategory
return 'No products available in the provided category!'
}

export function searchProducts(query) {
// Search products by name (case-insensitive)
const searchProds = products.find(product => product.name === query)
if(searchProds)
    return searchProds
return 'Product with ${query} is not available!'
}

export function checkStock(productId, quantity) {
// Check if product has enough stock
// Return true/false
const stock = products.find((product,quantity) => {
       if(product.id === productId) {
        if(product.stock >= quantity)
            return true
    }
    return false
})
}

// export function reduceStock(productId, quantity) {
// // Reduce product stock after purchase
// const stock = products.map()
// }