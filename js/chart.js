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






// standing alone functios...
let parent = document.getElementById('tbody');
let data = localStorage.getItem('allProducts');
let parcedArray = JSON.parse(data);
console.log(data);

function headerRow() {
  console.log('parsedd', parcedArray);
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
  parent.appendChild(tr);
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
    tbody.appendChild(trElement);
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

}

// headerRow()

function renderCart() {
  productsVotes()
  clearCart();
  headerRow()


}

function clearCart() {
  tbody.textContent = "";
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


// protoype is not working for making the table !!!!

// Product.prototype.render = function () {



//   let trElement = document.createElement('tr')
//   table.appendChild(trElement);

//   let nameTd = document.createElement('td');
//   trElement.appendChild(nameTd);
//   nameTd.textContent = Product.all.name;

// console.log(Product.all);

//   for (let k = 0; k < Product.all.length; k++) {


//     let likesTd = document.createElement('td');
//     table.appendChild(likesTd);
//     likesTd.textContent = Product.all[k].like;
//     nameTd.textContent = Product.all[k].name;


//   }
// }



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










let User=[];



let usertButton = document.getElementById('selectionBar');
usertButton.addEventListener('change', chooseUser);

function chooseUser(event) {
  // userTable
  let tableUser = document.getElementById('userTable');
  let header = document.createElement('tr');
  tableUser.appendChild(header);

  let userNameTh = document.createElement('th');
  header.appendChild(userNameTh);
  userNameTh.textContent = 'user Name';

  let userNameInfo= document.createElement('td');
  userNameTh.appendChild(userNameInfo);
  userNameInfo.textContent = 'Suhaib';

  let EmailTh = document.createElement('th');
  header.appendChild(EmailTh);
  EmailTh.textContent = 'Email';

  let userEmailInfo= document.createElement('td');
  EmailTh.appendChild(userEmailInfo);
  userEmailInfo.textContent = 'Suhaib@gmail.com';

  let phoneNumberlTh = document.createElement('th');
  header.appendChild(phoneNumberlTh);
  phoneNumberlTh.textContent = 'phoneNumber';

  let phoneNumberInfo= document.createElement('td');
  phoneNumberlTh.appendChild(phoneNumberInfo);
  phoneNumberInfo.textContent = 'o77788889';
  

console.log(tableUser);
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



// function headerRow() {
//   let headingRow = document.createElement('tr');
//   table.appendChild(headingRow);
//   let emptyCell = document.createElement('th');
//   headingRow.appendChild(emptyCell);
//   emptyCell.textContent = 'Name';
//   for (let i = 0; i < Product.all.length; i++) {
//     let thElement = document.createElement('th');
//     headingRow.appendChild(thElement);
//     thElement.textContent = Product.all[i].name;

//     let firstTd = document.createElement('td');
//     headingRow.appendChild(firstTd);
//     firstTd.textContent = Product.all[i].like;

//     let secondTd = document.createElement('td');
//     headingRow.appendChild(secondTd);
//     secondTd.textContent = Product.all[i].dislike;

//     let lastTd = document.createElement('td');
//     headingRow.appendChild(lastTd);
//     lastTd.textContent = Product.all[i].bought;

// function productsVotes() {
//   let data = localStorage.getItem('product');
//   let parsedArr = JSON.parse(data);

//   }

//   // let contentRow=document.createElement('tr');
//   // headingRow.appendChild(contentRow);


// }

// headerRow()




// function showChart() {
//   const data = {
//     labels: namesArr,
//     datasets: [{
//       label: 'likes',
//       data: likeArr,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//       ],
//       borderColor: [
//         'rgb(255, 99, 132)',
//         'rgb(255, 159, 64)',
//         'rgb(255, 205, 86)',
//         'rgb(75, 192, 192)',
//         'rgb(54, 162, 235)',
//         'rgb(153, 102, 255)',
//         'rgb(201, 203, 207)'
//       ],
//       borderWidth: 1
//     },
//     {
//       label: 'dislikes',
//       data: dislikeArr,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//       ],
//       borderColor: [
//         'rgb(255, 99, 132)',
//         'rgb(255, 159, 64)',
//         'rgb(255, 205, 86)',
//         'rgb(75, 192, 192)',
//         'rgb(54, 162, 235)',
//         'rgb(153, 102, 255)',
//         'rgb(201, 203, 207)'
//       ],
//       borderWidth: 1
//     }
//       ,
//     {
//       label: 'bought',
//       data: boughtArr,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//       ],
//       borderColor: [
//         'rgb(255, 99, 132)',
//         'rgb(255, 159, 64)',
//         'rgb(255, 205, 86)',
//         'rgb(75, 192, 192)',
//         'rgb(54, 162, 235)',
//         'rgb(153, 102, 255)',
//         'rgb(201, 203, 207)'
//       ],
//       borderWidth: 1
//     }
//     ]
//   };
//   const config = {
//     type: 'bar',
//     data: data,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     },
//   };
//   var myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );
// }
// showChart();