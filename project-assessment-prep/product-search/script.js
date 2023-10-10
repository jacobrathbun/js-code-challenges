/* 
  Create a search feature. When the user makes a change to the input field,
  capture the user input and use it to filter through the product names - this should happen in real time.
  Then list the products on the page that pass the filter - this should be case insensitive. 
  You should allow products that contain all of the letters in order in the input to pass the filter. 
  Use a h3 tag for the product name and a p tag for the category. 
  Take a look at the HTML file to see where you should be appending your elements.
  */

const products = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Banana", category: "Fruits" },
    { id: 3, name: "Carrot", category: "Vegetables" },
    { id: 4, name: "Tomato", category: "Vegetables" },
    { id: 5, name: "Orange", category: "Fruits" },
    { id: 6, name: "Broccoli", category: "Vegetables" },
  ];


  const productList = document.getElementById("productList");
const inputElement = document.getElementById("searchInput");

inputElement.addEventListener('input', () => {
    clearChildren();
    const input = inputElement.value;
    filterByName(input).forEach(product => {

    })
});

function filterByName(input) {
    return products.filter(product => product.name.toLowerCase().startsWith(input.toLowerCase()));
}

function clearChildren() {
    if (productList.children.length !== 0) {
        for (let i = 0; i < productList.children.length; i++) {
            productList.removeChild(productList.children[i])
        }
    }
}