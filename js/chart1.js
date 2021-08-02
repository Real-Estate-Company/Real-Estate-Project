'use strict';
let idArr = [];
let likeArr = [];
let dislikeArr = [];
let boughtArr = [];
let namesArr = [];


function updateStorage() {
  let stringArr = JSON.stringify(Product.all);
  localStorage.setItem('product', stringArr);
}

updateStorage();



let table = document.getElementById('table');
// let table = document.createElement('table');
// parent.appendChild(table);

// console.log(table)



let headerRow = document.createElement('tr');
table.appendChild(headerRow);


function makeHeader() {
  let idTh = document.createElement('th');
  headerRow.appendChild(idTh);
  idTh.textContent = 'id';

  let nameTh = document.createElement('th');
  headerRow.appendChild(nameTh);
  nameTh.textContent = 'name';

  let likesTh = document.createElement('th');
  headerRow.appendChild(likesTh);
  likesTh.textContent = 'Likes';

  let disLikesTh = document.createElement('th');
  headerRow.appendChild(disLikesTh);
  disLikesTh.textContent = 'DisLikes';

  let boughtTh = document.createElement('th');
  headerRow.appendChild(boughtTh);
  boughtTh.textContent = 'Bought';

  let deleteLink = document.createElement('th');
  headerRow.appendChild(deleteLink);
  deleteLink.textContent = 'Remove';

  for (let i = 0; i < Product.all.length; i++) {


    let listIdTh = document.createElement('tr');
    idTh.appendChild(listIdTh);
    listIdTh.textContent = SelectedItem.id;

    let listNameTh = document.createElement('tr');
    nameTh.appendChild(listNameTh);
    listNameTh.textContent = Product.all[i].name;
    let listlikesTh = document.createElement('tr');
    likesTh.appendChild(listlikesTh);
    listlikesTh.textContent = Product.all[i].likes;

    let listdislikesTh = document.createElement('tr');
    disLikesTh.appendChild(listdislikesTh);
    listdislikesTh.textContent = Product.all[i].dislikes;


    let listboughtTh = document.createElement('tr');
    boughtTh.appendChild(listboughtTh);
    listboughtTh.textContent = Product.all[i].dislikes;

    let listRemove = document.createElement('tr');
    deleteLink.appendChild(listRemove);
    listRemove.textContent = 'X';
    // deleteLink.setAttribute('href', '#');
    // deleteLink.setAttribute('dlt', 1);
    // let deletebtn = document.createElement('button');
    // deletebtn.textContent = 'X';
    // deletebtn.id = i;    
    // tdDelete.appendChild(deletebtn);

  }
}

// function removeItem(event) {
//   if (event.target.id !== null) {   
//     Product.items.splice(event.target.id, 1);
//     localStorage.clear();
//     let cartARR = JSON.stringify(cart.items);
//     localStorage.setItem('cart', cartARR);
//     renderCart();
//   }
// }
console.log(table);

// removeItem();
makeHeader();







function productsVotes() {
  let data = localStorage.getItem('product');
  let parsedArr = JSON.parse(data);
  Product.all = [];
  for (let i = 0; i < parsedArr.length; i++) {
    let newProduct = new Product(parsedArr[i].like, parsedArr[i].dislike, parsedArr[i].bought);
    newProduct.name = parsedArr[i].name;

    newProduct.like = parsedArr[i].like;
    newProduct.dislike = parsedArr[i].dislike;
    newProduct.bought = parsedArr[i].bought;
    namesArr.push(parsedArr[i].name);
    likeArr.push(parsedArr[i].like);
    dislikeArr.push(parsedArr[i].dislike);
    boughtArr.push(parsedArr[i].bought);
  }

}


// function addteStorage() {
//   let stringArr = JSON.stringify(User.all);
//   localStorage.setItem('User', stringArr);
// }
// addteStorage();


// event when click Product
// function User() {
//   let data = localStorage.getItem('product');
//   let parsedArr = JSON.parse(data);

//   User.all = [];
//   for (let i = 0; i < parsedArr.length; i++) {
//     let newUser = new User(parsedArr[i].user_name, parsedArr[i].Email, parsedArr[i].PhoneNumber[i]);
//     // newProduct.name = parsedArr[i].name;

//     newUser .user_name = parsedArr[i].user_name;
//     newUser .dislike = parsedArr[i].dislike;
//     newProduct.bought = parsedArr[i].bought;
//     namesArr.push(parsedArr[i].name);
//   }
// }

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

chooseUser();
function showChart() {
  const data = {
    labels: namesArr,
    datasets: [{
      label: 'likes',
      data: likeArr,
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
    {
      label: 'dislikes',
      data: dislikeArr,
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
    }
      ,
    {
      label: 'bought',
      data: boughtArr,
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
    }
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