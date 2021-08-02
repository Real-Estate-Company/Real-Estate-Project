'use strict';

// let likeArr = [];
// let dislikeArr = [];
let boughtArrr = [];
let namesArrr = [];

// this is suhaib's part of coding up to line '248'.
// suhaib's function for saving

// function updateStorage() {


//   let stringArr = JSON.stringify(Product.all);
//   localStorage.setItem('product', stringArr);


// }

// updateStorage();


// savingAllItems();
// funtion to store all objects again in LS


// let Productbutton = document.getElementById('selectionBar');


// usertButton.addEventListener("click", chooseUser() {
//     let options = usertButton.querySelectorAll("option");
//     let count = options.length;
//     if(typeof(count) === "undefined" || count < 2)
//     {
//       headerRow();
//     }
// });

// usertButton.addEventListener("change", chooseUser() {
//     if(usertButton.value == "addNew")
//     {
//         addActivityItem();
//     }
// });


// }


// var x = document.getElementById("selectionBar").selectedIndex;
//   alert(document.getElementsByTagName("option")[x].value);

// standing alone functios...


// let parent = document.getElementById('tbody');
let data = localStorage.getItem('allProducts');
let parcedArray = JSON.parse(data);
console.log(data);


// document.getElementsByTagName("option")[Productbutton].value;
// let Productbutton = document.getElementById('selectionBar');

// Productbutton.addEventListener('change', headerRow);



// let ProductButton = document.getElementById('selectionBar');
// ProductButton.addEventListener('input', headerRow);

function headerRow() {
  let tableProductDiv = document.getElementById('controlTable');
   let productTable = document.createElement('table');
   tableProductDiv.appendChild(productTable);
  // let select=ev.target;
  
  let tableBody = document.createElement('tbody')
  productTable.appendChild(tableBody);
  
  // let headingRow = document.createElement('tr');
  // table.appendChild(headingRow);
  // let emptyCell = document.createElement('th');
  // headingRow.appendChild(emptyCell);
  // emptyCell.textContent = 'User Name';

  // let paraRow=document.createElement('tr');
  // headingRow.appendChild(paraRow);
  // let thPara=document.createElement('th');
  // paraRow.appendChild(thPara);
  // thPara.textContent=Product.all[i];

  // for(let w=0;w<Product.all.length;w++){
  //   let thPara=document.createElement('th');
  //   headingRow.appendChild(thPara);
  //   thPara.textContent=Product[w];
  // }

  let tr = document.createElement('tr')
  tableBody.appendChild(tr);
  let thElement = document.createElement('th');
  tr.appendChild(thElement);
  thElement.textContent = 'Products table';

  let thElement2 = document.createElement('td');
  tr.appendChild(thElement2);
  thElement2.textContent = 'Property';

  let thElement3 = document.createElement('td');
  tr.appendChild(thElement3);
  thElement3.textContent = 'File path';

  let thElement4 = document.createElement('td');
  tr.appendChild(thElement4);
  thElement4.textContent = 'address';

  let thElement5 = document.createElement('td');
  tr.appendChild(thElement5);
  thElement5.textContent = 'Price';

  let thElement6 = document.createElement('td');
  tr.appendChild(thElement6);
  thElement6.textContent = 'Rooms';

  let thElement7 = document.createElement('td');
  tr.appendChild(thElement7);
  thElement7.textContent = 'Contact us';

  let thElement8 = document.createElement('td');
  tr.appendChild(thElement8);
  thElement8.textContent = 'likes';

  let thElement9 = document.createElement('td');
  tr.appendChild(thElement9);
  thElement9.textContent = 'dislikes';

  let thElement10 = document.createElement('td');
  tr.appendChild(thElement10);
  thElement10.textContent = 'bought';

  let thElement11 = document.createElement('td');
  tr.appendChild(thElement11);
  thElement11.textContent = 'Remove button';


  for (let i = 0; i < parcedArray.length; i++) {

    let trElement = document.createElement('tr')
    tableBody.appendChild(trElement);
    trElement.textContent = '.';

    let firstTd = document.createElement('td');
    trElement.appendChild(firstTd);
    firstTd.textContent = parcedArray[i].name;

    let secondTd = document.createElement('td');
    trElement.appendChild(secondTd);
    secondTd.textContent = parcedArray[i].filePath;

    let thirdTd = document.createElement('td');
    trElement.appendChild(thirdTd);
    thirdTd.textContent = parcedArray[i].address;

    let forthTd = document.createElement('td');
    trElement.appendChild(forthTd);
    forthTd.textContent = parcedArray[i].price;

    let fifthTd = document.createElement('td');
    trElement.appendChild(fifthTd);
    fifthTd.textContent = parcedArray[i].rooms;

    let sixthTd = document.createElement('td');
    trElement.appendChild(sixthTd);
    sixthTd.textContent = parcedArray[i].contactus;

    let seventhTd = document.createElement('td');
    trElement.appendChild(seventhTd);
    seventhTd.textContent = parcedArray[i].like;

    let eighthTd = document.createElement('td');
    trElement.appendChild(eighthTd);
    eighthTd.textContent = parcedArray[i].dislike;

    let ninthTd = document.createElement('td');
    trElement.appendChild(ninthTd);
    ninthTd.textContent = parcedArray[i].bought;


    // let tr = document.createElement('tr');
    //     tbody.appendChild(tr);
    let tdDelete = document.createElement('td');
    trElement.appendChild(tdDelete);

    let deletebtn = document.createElement('button');
    deletebtn.textContent = 'X';
    deletebtn.id = i;
    tdDelete.appendChild(deletebtn);
    // let tdQuantity = document.createElement('td');
    // trElement.appendChild(tdQuantity);
    // tdQuantity.textContent = parcedArray[i].quantity;
    // let tdItem = document.createElement('td');
    // trElement.appendChild(tdItem);
    // tdItem.textContent = parcedArray[i].product;
    deletebtn.addEventListener('click', removeItemFromCart);

    namesArrr.push(parcedArray[i].name);
  }
  // productTable.textContent = "";
  // userTable.textContent="";
  
  // ProductButton.removeEventListener('change', headerRow);
}

// headerRow()

function renderCart() {
  clearCart();
  productsVotes();
  
  

}

function clearCart() {
  // productTable.textContent = "";
  // userTable.textContent="";
  
  
}

function removeItemFromCart(event) {
  if (event.target.id !== null) {
    parcedArray.splice(event.target.id, 1);
    localStorage.clear();
    let cartARR = JSON.stringify(parcedArray);
    localStorage.setItem('allProducts', cartARR);
    renderCart();
  }

}

renderCart();






function productsVotes() {
  let data = localStorage.getItem('allProducts');
  let parsedArr = JSON.parse(data);





  if (parsedArr !== null) {


    // parcedArray = [];

    parcedArray = parsedArr;
    // for (let i = 0; i < parsedArr.length; i++) {
    //   let newProduct = new Product(parsedArr[i].name, parsedArr[i].filePath, parsedArr[i].address, parsedArr[i].price, parsedArr[i].rooms, parsedArr[i].contactus, parsedArr[i].like, parsedArr[i].dislike, parsedArr[i].bought);
    //   // newProduct.name = parsedArr[i].name;

    //   newProduct.like = parsedArr[i].like;
    //   newProduct.dislike = parsedArr[i].dislike;
    //   newProduct.bought = parsedArr[i].bought;
    // namesArr.push(parsedArr.);
    //   likeArr.push(parsedArr[i].like);
    //   dislikeArr.push(parsedArr[i].dislike);
    //   boughtArr.push(parsedArr[i].bought)
    //   // console.log(likeArr);
    //   console.log(newProduct)

    // }

  }



}



function SelectRedirect() {
  switch (document.getElementById('selectionBar').value) {
    case "Product":
      headerRow();
      break;
    case "User":
      chooseUser();
      break;
    
  }

}
SelectRedirect();



let User = [];
// function getValue(){

// let usertButton = document.getElementById('selectionBar').value;
// usertButton.addEventListener('input', chooseUser);


// getValue();

// let usertButton = document.getElementById('selectionBar');
// usertButton.addEventListener('change', chooseUser);

function chooseUser() {
  // userTable
  // let select =ev.target;
  let tableUserDiv = document.getElementById('controlTable');
  let userTable = document.createElement('table');
  tableUserDiv.appendChild(userTable);

  let header = document.createElement('tr');
  userTable.appendChild(header);

  let userNameTh = document.createElement('th');
  header.appendChild(userNameTh);
  userNameTh.textContent = 'user Name';

  let userNameInfo = document.createElement('td');
  userNameTh.appendChild(userNameInfo);
  userNameInfo.textContent = 'Suhaib';

  let EmailTh = document.createElement('th');
  header.appendChild(EmailTh);
  EmailTh.textContent = 'Email';

  let userEmailInfo = document.createElement('td');
  EmailTh.appendChild(userEmailInfo);
  userEmailInfo.textContent = 'Suhaib@gmail.com';

  let phoneNumberlTh = document.createElement('th');
  header.appendChild(phoneNumberlTh);
  phoneNumberlTh.textContent = 'phoneNumber';

  let phoneNumberInfo = document.createElement('td');
  phoneNumberlTh.appendChild(phoneNumberInfo);
  phoneNumberInfo.textContent = 'o77788889';

  // usertButton.removeEventListener('change', chooseUser);
  // productTable.textContent = "";
  // userTable.textContent="";
  
}


function showChart() {
  const data = {
    labels: namesArrr,
    datasets: [{
      label: 'bought',
      data: boughtArrr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },

    ]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}
showChart();


productsVotes();








