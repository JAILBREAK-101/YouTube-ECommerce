import products from "./products.js";

const productCategories = [
    {
        id: 0,
        category: "Everyday Essentials",
        products: products[0].products
    },
    {
        id: 1,
        category: "Cleaning Essentials",
        products: products[1].products
    },
    {
        id: 2,
        category: "Immunity & Health",
        products: products[2].products
    },
    {
        id: 3,
        category: "Electronics",
        products: products[3].products
    },
    {
        id: 4,
        category: "Foods",
        products: products[4].products
    },
    {
        id: 5,
        category: "Home Appliances",
        products: products[5].products
    },
    {
        id: 6,
        category: "Fruits",
        products: products[6].products
    },
    {
        id: 7,
        category: "Wears",
        products: products[7].products
    }
]

const totalNumberOfProducts = document.querySelector(".products-count");

const categoriesButtonGroupContainer = document.querySelector(".collections-products-categories-button-group");

function createCategoryButtons() {
    // Create each buttons based on their category
    productCategories.forEach(category => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = category.category;
        buttonElement.classList.add("button");
        buttonElement.classList.add("category-button");

        // Button Click to render products based on their categories
        buttonElement.addEventListener('click', () => {
            displayProducts(category.products);
        })

        appendCategoryButtons(buttonElement); 
    })
}

function appendCategoryButtons(button) {  
    // Appends the buttons to the container
    categoriesButtonGroupContainer.append(button)
    // setTimeout(() => {
        // console.log(document.getElementsByClassName("category-button"))
    // }, 3000);
}

// For the Products
const collectionProductsContainter = document.querySelector(".collections-products-container");


function displayProducts(productsList) {
    // Remove the existing products
    collectionProductsContainter.innerHTML = "";

    const productsGrid = document.createElement("div");
    productsGrid.classList.add('collections-products-grid');

     productsList.forEach(product => {
        const productElement = `
            <div class="collections-products-item">
                <div>
                    <img class="img-300-x-300" src=${product.productImage} alt=${product.productName}>
                </div>
                
                <p class="poppins-bold">${product.productName}</p>
                <span class="poppins-regular">₹ ${product.productPrice}</span>
            </div>
        `
        productsGrid.innerHTML += productElement;
    }) 
    
    collectionProductsContainter.appendChild(productsGrid)
}

function calculateTotalNumberOfProducts(products) {
    // Filters all the products (By name) and returns the total sum of them as a variable
    const totalNumberOfProducts = products.filter(eachProduct => {

    })
}

// Function Calls
createCategoryButtons();