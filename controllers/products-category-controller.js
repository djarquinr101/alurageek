import { clienteServices } from "../service/client-service.js";

//this is the section that has all the product lines
const productSection =  document.querySelector('[data-sectionProducts]')


//this creates the title of the section
const newSectionTitle = (categoryTitle) =>{
    const divCategoryTitle = document.createElement('div');
    divCategoryTitle.classList.add('product__title__div')
    const content = `
    <h1 class="prodcut__title">${categoryTitle}</h1>
    <a href="/allproducts.html">Ver todo<span class="material-symbols-outlined">arrow_forward</span></a>`
    divCategoryTitle.innerHTML = content
    return divCategoryTitle
}

//this creates the product line where  all the products will be displayed
const productLine = () => {
    const productLine = document.createElement('div')
    productLine.classList.add('producto__linea')
    return productLine
}

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
        //this gets all the categoties available inside data
        const getCategories = data.map(items => items.category)
        const categories = [...new Set(getCategories)]
        
        //get all the products based on category
       for (let i = 0; i < categories.length; i++) {
                  //this adds the title of the section and the div where the products will be displayed  
                  const newSection = newSectionTitle(categories[i]);  
                  productSection.appendChild(newSection)
                  const newProductLine = productLine(); 

                  //this filters all the products based on the current category
                  const products = data.filter(item => item.category == categories[i]);
                   
                  //add all the filter proeucts into the product line (div)
                  products.forEach(({url,name,price}) => {
                    const newB = newBox(url,name,price)
                    newProductLine.appendChild(newB);})

                  //add the product line to the section   
                 productSection.appendChild(newProductLine);    
        }
    })
    .catch((err) => {console.log('Ocurrio un Error' + err)});