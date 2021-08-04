"use strict"
//array of bought
let arrBought = [];
//global
let newItems;
//array to store the content of 'parseItem' on it

let arrayOfitem = [];

//varaible , integer datatype, to store the id of image on it 
let index;

//make function getItems 
let fixedarr = Product.all;


function saveProductdat() {
    localStorage.setItem('allProducts', JSON.stringify(fixedarr));
}
//array for load Product item
let arrayOfproduct = [];
// function
function getItems() {
    let parseItemProduct = JSON.parse(localStorage.getItem('allProducts')) || [];
    arrayOfproduct = parseItemProduct;
    
    saveProductdat();


}
getItems();


//load Information from localstorage
function loadInfo() {
    const parseItem = JSON.parse(localStorage.getItem('selectedItem')) || [];
    newItems = new SelectedItem(parseItem);
    


    arrayOfitem = parseItem;
    
    index = arrayOfitem[0].id;
   

}



//show the information of item ,image,name of Product,address,and price
function ShowItem() {

    let viewImg = document.getElementById('imgregister');

    viewImg.src = fixedarr[index].filePath;

    let productName = document.getElementById('one');
    productName.textContent = fixedarr[index].name;

    let price = document.getElementById('tow');
    price.textContent = fixedarr[index].price;

    let address = document.getElementById('Three');
    address.textContent = fixedarr[index].address;

    let phoneNo = document.getElementById('four');
    phoneNo.textContent = fixedarr[index].contactus;

}

// let boughtproduct = [];

//save information of user in localstorage 
const SaveUserInfo = function () {
    localStorage.setItem('user', JSON.stringify(User.all));
    // boughtproduct.push(Product.all[index]);
    // console.log('userCart',boughtproduct);
    // localStorage.setItem('boughtItem', JSON.stringify(boughtproduct));


}

//user constructor
function User(productid, user_name, Email, phoneNumber,) {
    this.productid = productid;
    this.user_name = user_name;
    this.Email = Email;
    this.phoneNumber = phoneNumber;


    User.all.push(this);
    SaveUserInfo();
}
User.all = JSON.parse(localStorage.getItem('user')) || [];


let form = document.getElementById('form');
form.addEventListener('submit', submitInfo);
function submitInfo(event) {

    event.preventDefault();

    let userName = event.target.nameField.value;
    let email = event.target.emailField.value;
    let number = parseInt(event.target.numberFiled.value);

    let enterInfo = new User(index, userName, email, number);
    
    if (index == arrayOfitem[0].id){

        Product.all[index].bought++;

        for (let i = 0; i < Product.all.length; i++) {

            arrBought.push(Product.all[i].bought);
            
        }
        //set local storage to null
    }
    console.log(Product.all);

    saveProductdat();
    swal("Good job!", "Thank you for buying House!", "success");
    // alert('Thank you for buying House');
    localStorage.removeItem('selectedItem');

    console.log('user info', arrayOfitem);
    // console.log('arrayOfproduct:', arrayOfproduct[index].name);
    console.log('arrayofselectedItem', arrayOfitem[0].name);

    function remove() {
        let Divelement = document.getElementById('clear');
        Divelement.textContent = '';
        // Divelement.parentNode.removeChild(Divelement);
        return false;
    }
    remove();

}


// arrBought.push(Product.all[index].bought);
// console.log('arrBought:',arrBought);
//call the functions
loadInfo();
ShowItem();

