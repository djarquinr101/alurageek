import { clienteServices } from "../service/client-service.js";

//this is the div that has all the products
const productLine =  document.querySelector('[data-products]')

//this create the  div that will have the  product information 
const newBox = (url,name,price) => {
   const product = document.createElement('div');
   product.classList.add('card')
    const content = `
        <img src=${url} alt="Product Image">
        <div class="card-details">
        <h2>${name}</h2>
        <p>Price:${price}</p>
        <a href="#">Ver producto</a>`
    product.innerHTML = content;
    return product
}

//fetch all the product info and creates the div and add them to the div that stores all the products.
    clienteServices.listProducts().then((data) => {
        data.forEach(({url,name,price}) => {
        const newB = newBox(url,name,price)
        productLine.appendChild(newB);})
    })
    .catch((err) => {console.log('Ocurrio un Error' + err)});
