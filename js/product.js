'use strict';

let max = document.getElementById('maxContainer');
let image = document.getElementById('imageContainer');
let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let list3 = document.getElementById('list3');
let list4 = document.getElementById('list4');

// get items from LS

function getProducts() {
    let data = localStorage.getItem('allProducts');
    let parsedArr = JSON.parse(data);
    if (parsedArr !== null) {
        Product.all = parsedArr;
    }
}

console.log(Product.all)

function renderProducts() {

    for (let i = 0; i < Product.all.length; i++) 
    {
        list1.textContent = Product.all[0].name;
        list2.textContent = Product.all[0].address;
        list3.textContent = Product.all[0].price;
        list4.textContent = Product.all[0].rooms;
    }
}

getProducts();
renderProducts();