
"use strict"

// First Constructor 
const SelectedItem = function (id, name, filePath) {
    this.id = id;
    this.name = name;
    this.filePath = filePath;
    SelectedItem.all.push(this);
    saveToLocalStorage();
}
SelectedItem.all = [];
const saveToLocalStorage = function () {
    localStorage.setItem('selectedItem', JSON.stringify(SelectedItem.all));
};

//Second Constructor
const Product = function (name, filePath, address, price, rooms, contactus, id, bought) {
    this.name = name;
    this.filePath = filePath;
    this.address = address;
    this.price = price;
    this.rooms = rooms;
    this.contactus = contactus;
    this.id = 
    this.bought = bought;
    Product.all.push(this);
    savingAllItems();
}
// Product.all = JSON.parse(localStorage.getItem('allProducts')) || [];
Product.all = [];

function savingAllItems() {
    // if (localStorage.getItem('allProducts') === null) {
    let stringedArr = JSON.stringify(Product.all)
    localStorage.setItem('allProducts', stringedArr)
    // }
}
//create 10 objects
function generateObjects() {
    new Product('Hacienda The Villa', 'img/p1/img1.jpg', 'Dubailand', 'USD 4,999,99', '5 Bed,5 Bath,2 parking', '600 52 2233', 0, 0, 0);
    new Product('Hattan, Arabian Ranches', 'img/p2/img1.jpg', 'Vision Tower, 42nd Floor, Dubai', 'USD 8,995,000', '4/5 Bedrooms,6 Bath , 3 Parking', '600 52 4444', 0, 0, 0);
    new Product('Joya Verde Residence', 'img/p3/img1.jpg', 'Vision Tower, 42nd Floor, Dubai', 'USD 495,000 ', '1 Bed,1 Bath', '600 78 1133', 0, 0, 0);
    new Product('Lila Villas, Arabian Ranches 2', 'img/p4/img1.jpg', 'Dubai', 'USD  3,900,000', '5 Bed,4 Bath', '700 32 2833', 0, 0, 0);
    new Product('Marina Crown, Dubai Marina', 'img/p5/img1.jpg', 'is situated just in front of Westin Hotel', 'USD 1,450,000', '2 Bed ,3 Bath,1 Parking', '800 45 233', 0, 0, 0);
    new Product('Nad Al Sheba', 'img/p6/img1.jpg', 'in the heart of Nad Al Shebba Second', 'USD 14,000,000', '5 bedrooms,5 Bath,4 Parking', '600 77 2133', 0, 0, 0);
    new Product('Oliva, Victory Heights', 'img/p7/img1.jpg', 'Vision Tower, 42nd Floor, Dubai', 'USD 7,200,000', '5 Bed,5 Bath,2 Parking', '600 66 2133', 0, 0, 0);
    new Product('Picadilly Green, DAMAC Hills ', 'img/p8/img1.jpg', 'between Al Qudra Road and Hessa Street', 'USD 550,000', '6 Bed ,7 Bath,2 Parking', '900 16 2133', 0, 0, 0);
    new Product('The Aldea, The Villa', 'img/p9/img1.jpg', 'Vision Tower, 42nd Floor, Dubai', 'USD 5,000,000 ', '5 Bed,6 Bath,2 Parking', '600 44 2133', 0, 0, 0);
    new Product('Villa Myra', 'img/p10/img1.jpg', 'Jumeirah Village Circle', 'USD 450,000', '1 Bed,1 Bath,1 Parking', '600 33 2663', 0, 0, 0);
}
//call function 
// if (localStorage.getItem('allProducts') == null) {
    generateObjects();
// }


let grandDivElementHome = document.getElementById('mainSlider');
function renderProducts() {

    if (window.location.pathname == '/index.html' || window.location.pathname == '/Real-Estate-Project/index.html') {
        let data = localStorage.getItem('allProducts');
        let parsedArr = JSON.parse(data);
        for (let i = 0; i < parsedArr.length; i++) {
            let imgNumber = parseInt(i) + 1;
            let productDivElement = document.createElement('div');
            productDivElement.id = "imgDiv" + i;
            productDivElement.className = "mySlides fade";
            grandDivElementHome.appendChild(productDivElement);

            let productIMG = document.createElement('img');
            productIMG.id = i;
            productIMG.src = "img/p" + imgNumber + "/img1.jpg";
            productIMG.style.width = "100%";
            productDivElement.appendChild(productIMG);
        }

    }
}

renderProducts();

//this code is from w3schools.com, the slideshow part
var slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");

if (window.location.pathname == '/index.html') { showSlides(slideIndex); }

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
showDots();

function showDots() {
    let data = localStorage.getItem('allProducts');
    let parsedArr = JSON.parse(data);
    for (let i = 1; i < 10; i++) {
        let dot = document.getElementById("dot" + i);
        dot.style.display = "none";
    }
    for (let i = 1; i < parsedArr.length; i++) {
        let dot = document.getElementById("dot" + i);
        console.log(dot);
        dot.style.display = "inline-block";
    }
}


function showSlides(n) {
    if (window.location.pathname == '/index.html') {

        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

    }
}
//add links to images
function prepareLinks() {

    if (window.location.pathname == '/index.html') {
        let data = localStorage.getItem('allProducts');
        let parsedArr = JSON.parse(data);
        for (let i = 0; i < parsedArr.length; i++) {
            let selectedImg = document.getElementById(i);
            selectedImg.addEventListener('mouseover', clickPicture);
        }
    }
}
function clickPicture(event) {
    let data = localStorage.getItem('allProducts');
    let parsedArr = JSON.parse(data);
    let chooseIndex = event.target.id;
    let name = parsedArr[chooseIndex].name;
    let filePath = parsedArr[chooseIndex].filePath;
    SelectedItem.all = [];
    let item = new SelectedItem(chooseIndex, name, filePath);
    renderFeatures(chooseIndex);
}

function renderFeatures(id) {
    if (window.location.pathname == '/index.html') {
        let data = localStorage.getItem('allProducts');
        let parsedArr = JSON.parse(data);

        let productName = document.getElementById('productName');
        let price = document.getElementById('price');
        let address = document.getElementById('address');
        let phoneNo = document.getElementById('contactus');
        let like = document.getElementById('like');
        productName.textContent = "NAME : " + parsedArr[id].name;
        price.textContent = "PRICE : " + parsedArr[id].price;
        address.textContent = "ADDRESS " + parsedArr[id].address;
        phoneNo.textContent = "PHONE NO. : " + parsedArr[id].contactus;
    }
}
function goToregister() {
    document.location.href = "register.html";
}

prepareLinks();
renderFeatures(0);//to render the features section om=n page load
