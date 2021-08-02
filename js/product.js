'use strict';

// get items from LS
let chosenFilePath = [];
function getProducts() {
    let data = localStorage.getItem('allProducts');
    let parsedArr = JSON.parse(data);
    if (parsedArr !== null) {
        Product.all = parsedArr;
    }
}

let grandDivElement = document.getElementById('grand');
function renderProducts() {
    let data = localStorage.getItem('allProducts');
    let parsedArr = JSON.parse(data);


    for (let i = 0; i < parsedArr.length; i++) {
        let productDivElement = document.createElement('div');
        productDivElement.style.display = "inline";

        grandDivElement.appendChild(productDivElement);
        productDivElement.id = "productDiv" + i;

        let componentsListElement = document.createElement('ul');
        componentsListElement.id = "componentsList" + i;
        productDivElement.appendChild(componentsListElement);
        componentsListElement.style.border = 'solid';
        componentsListElement.style.padding = "20pt";
        componentsListElement.style.margin = "20pt";

        let liProductImg = document.createElement('li');
        liProductImg.id = "productIMGLi" + i;

        componentsListElement.appendChild(liProductImg);

        let productIMG = document.createElement('img');
        productIMG.id = "img" + i;

        liProductImg.appendChild(productIMG);

        productIMG.src = parsedArr[i].filePath;
        chosenFilePath.push(parsedArr[i].filePath);

        productIMG.style.width = "450pt";
        productIMG.style.height = "300pt";

        let featuresDiv = document.createElement('div');
        featuresDiv.id = "featuresDiv" + i;
        liProductImg.appendChild(featuresDiv);

        let nameElement = document.createElement('label');
        nameElement.id = "name" + i;
        nameElement.textContent = "Name : " + parsedArr[i].name;
        let breakTag = document.createElement('br');
        nameElement.appendChild(breakTag);
        featuresDiv.appendChild(nameElement);


        let addressElement = document.createElement('label');
        addressElement.id = "address" + i;
        addressElement.textContent = "address : " + parsedArr[i].address;
        let breakTag2 = document.createElement('br');
        addressElement.appendChild(breakTag2);
        featuresDiv.appendChild(addressElement);

        let priceElement = document.createElement('label');
        priceElement.id = "price" + i;
        priceElement.textContent = "price : " + parsedArr[i].price;
        let breakTag3 = document.createElement('br');
        priceElement.appendChild(breakTag3);
        featuresDiv.appendChild(priceElement);

        let roomsElement = document.createElement('label');
        roomsElement.id = "rooms" + i;
        roomsElement.textContent = "rooms : " + parsedArr[i].rooms;
        let breakTag4 = document.createElement('br');
        roomsElement.appendChild(breakTag4);
        featuresDiv.appendChild(roomsElement);

        let buybtn = document.createElement('button');
        buybtn.id = i;
        buybtn.textContent = "ADD TO CART";
        featuresDiv.appendChild(buybtn);

        // let filePath = parsedArr[i].filePath;

        buybtn.addEventListener('click', clickBtn);

        // document.getElementById(i).onclick = function () {
        //     location.href = "register.html";
        // };

    }
}



getProducts();
renderProducts();

function clickBtn(event) {

    if (event.target.id !== null) {
        let chooseIndex = event.target.id;
        let name = document.getElementById('name' + chooseIndex).textContent;
        let filePath = chosenFilePath[chooseIndex];
        // console.log(chooseIndex, name, filePath);
        SelectedItem.all = [];
        let item = new SelectedItem(chooseIndex, name, filePath)
        saveToLocalStorage();
        // console.log();
        document.location.href = "register.html";

    }

}