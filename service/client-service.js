//THIS JS WILL HAVE ALL THE HTTP REQUESTS TO THE SERVER

//get all the projects from the server
const listProducts = () => fetch("http://localhost:3000/producto").then(response => response.json());

//get all the cateogies of the products
const listCategories = () => fetch("http://localhost:3000/producto").then(response => response.json());






//export all the functions
export const clienteServices={
    listProducts,
    listCategories
}