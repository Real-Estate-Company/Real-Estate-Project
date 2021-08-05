'use strict';

//Declarations
let imgArr = Product.all;

let boughtArrr = [];
let namesArrr = [];
//Product Data
let data = localStorage.getItem('allProducts');
let parcedArray = JSON.parse(data);
// User Data
let userdata = localStorage.getItem('user');
let userDataArr = [];
if (userdata !== null) {
  userDataArr = JSON.parse(userdata);
}
// let originalData = parcedArray;//to revert the whole table
let originalData = Product.all;//to revert the whole table
console.log(Product.all);

//Product Table
function productTableDraw() {
  let productTable = document.getElementById('controlTable');
  productTable.textContent = '';

  let tableBody = document.createElement('tbody')
  productTable.appendChild(tableBody);

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

  let thElement11 = document.createElement('td');
  tr.appendChild(thElement11);
  thElement11.textContent = 'Remove button';

  for (let i = 0; i < parcedArray.length; i++) {

    let trElement = document.createElement('tr')
    tableBody.appendChild(trElement);
    trElement.textContent = i + 1;
    trElement.style.textAlign = "center";

    let firstTd = document.createElement('td');
    trElement.appendChild(firstTd);
    firstTd.textContent = parcedArray[i].name;

    let secondTd = document.createElement('td');
    trElement.appendChild(secondTd);
    let Pic = document.createElement('img')
    secondTd.appendChild(Pic);
    Pic.src = imgArr[i].filePath;

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

    let tdDelete = document.createElement('td');
    trElement.appendChild(tdDelete);

    let deletebtn = document.createElement('button');
    deletebtn.textContent = 'X';
    deletebtn.id = i;
    tdDelete.appendChild(deletebtn);
    deletebtn.addEventListener('click', removeItemFromCart);


  }
}

//Delete product from table and local storage.
function removeItemFromCart(event) {
  event.preventDefault();
  if (event.target.id !== null) {
    parcedArray.splice(event.target.id, 1);
    localStorage.clear();
    let deletedArr = JSON.stringify(parcedArray);
    localStorage.setItem('allProducts', deletedArr);
    productsToArr();
  }
}

productsToArr();

//Get data from local storage to array
function productsToArr() {
  let data = localStorage.getItem('allProducts');
  let parsedArr = JSON.parse(data);
  if (parsedArr !== null) {
    parcedArray = parsedArr;
    productTableDraw();
  }
}
showChart();

//Select Element
let ddlFilterElement = document.getElementById('ddlFilter');
ddlFilterElement.addEventListener('change', selectRedirect);
function selectRedirect(event) {
  event.preventDefault();
  if (event.target.value == "User") {
    console.log(event.target.value);
    chooseUser();
    hideChart();
  }
  else if (event.target.value == "Product") {
    productTableDraw();
    let chart = document.getElementById('myChart');
    chart.style.display = "block";
    // showChart();
  }

}

//User Table    
//Get User data from local storage to array
function UserToArr() {
  let userdata = localStorage.getItem('user');
  let userparsedArr = JSON.parse(userdata);
  if (userparsedArr !== null) {
    userDataArr = userparsedArr;
    chooseUser();
  }
}
function chooseUser() {
  let userTable = document.getElementById('controlTable');
  userTable.textContent = '';

  let tableBody = document.createElement('tbody')
  userTable.appendChild(tableBody);

  let tr = document.createElement('tr')
  tableBody.appendChild(tr);

  let userNameTh = document.createElement('th');
  tr.appendChild(userNameTh);
  userNameTh.textContent = 'User Name';

  let phoneNumberlTh = document.createElement('th');
  tr.appendChild(phoneNumberlTh);
  phoneNumberlTh.textContent = 'phoneNumber';

  let EmailTh = document.createElement('th');
  tr.appendChild(EmailTh);
  EmailTh.textContent = 'Email';

  let productth = document.createElement('th');
  tr.appendChild(productth);
  productth.textContent = 'Real-Estate';
  console.log(userDataArr);
  for (let i = 0; i < userDataArr.length; i++) {
    let trElement = document.createElement('tr')
    tableBody.appendChild(trElement);
    trElement.textContent = i;
    trElement.style.textAlign = "center";

    let userNameInfo = document.createElement('td');
    trElement.appendChild(userNameInfo);
    userNameInfo.textContent = userDataArr[i].user_name;


    let userEmailInfo = document.createElement('td');
    trElement.appendChild(userEmailInfo);
    userEmailInfo.textContent = userDataArr[i].Email;


    let phoneNumberInfo = document.createElement('td');
    trElement.appendChild(phoneNumberInfo);
    phoneNumberInfo.textContent = userDataArr[i].phoneNumber;

    let prodactName = document.createElement('td');
    trElement.appendChild(prodactName);
    let productIdbuy = userDataArr[i].productid;
    let productname = parcedArray[productIdbuy].name;
    prodactName.textContent = productname;
    // parcedArray[productIdbuy].bought++;
    // console.log(parcedArray[productIdbuy].bought);


  }
  if (localStorage.getItem('allProducts') !== null) {
    localStorage.clear();
  }

  let boughtarray = JSON.stringify(parcedArray);
  localStorage.setItem('allProducts', boughtarray);
}

//Revert all Data
let revertbtnElement = document.getElementById('revertbtn');
revertbtnElement.addEventListener('click', revertData);
function revertData() {
  parcedArray = originalData;
  let allDataArr = JSON.stringify(parcedArray);
  localStorage.setItem('allProducts', allDataArr);
  productsToArr();
}

//Chart is not working
function showChart() {
  let chartdata = localStorage.getItem('allProducts');
  let parcedArray = [];
  if (chartdata !== null) {
    parcedArray = JSON.parse(chartdata);
  }

  for (let i = 0; i < parcedArray.length; i++) {
    namesArrr.push(parcedArray[i].name);
    boughtArrr.push(parcedArray[i].bought);
  }
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
function hideChart() {
  let chart = document.getElementById('myChart');
  chart.style.display = "none";
  // var myChart = new Chart(
  //   document.getElementById('myChart'),
  //   myChart.remove()
  // );
}