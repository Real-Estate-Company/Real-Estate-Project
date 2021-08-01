

let likeArr = [];
let dislikeArr = [];
let boughtArr = [];
let namesArr = [];

function updateStorage() {


  let stringArr = JSON.stringify(Product.all);
  localStorage.setItem('product', stringArr);


}

updateStorage();




// standing alone functios...
let parent = document.getElementById('table');

function headerRow() {
  let headingRow = document.createElement('tr');
  table.appendChild(headingRow);
  let emptyCell = document.createElement('th');
  headingRow.appendChild(emptyCell);
  emptyCell.textContent = 'Name';

  // let paraRow=document.createElement('tr');
  // headingRow.appendChild(paraRow);
  // let thPara=document.createElement('th');
  // paraRow.appendChild(thPara);
  // thPara.textContent=Product.all[i];

for(let w=0;w<Product.all.length;w++){
  let thPara=document.createElement('th');
  headingRow.appendChild(thPara);
  thPara.textContent=Product[w];
}


  for (let i = 0; i < Product.all.length; i++) {

let trElement=document.createElement('tr')
table.appendChild(trElement);
trElement.textContent=Product.all[i].name;

let firstTd = document.createElement('td');
trElement.appendChild(firstTd);
firstTd.textContent = Product.all[i].name;

let secondTd = document.createElement('td');
trElement.appendChild(secondTd);
secondTd.textContent = Product.all[i].filePath;

let thirdTd = document.createElement('td');
trElement.appendChild(thirdTd);
thirdTd.textContent = Product.all[i].address;

let forthTd = document.createElement('td');
trElement.appendChild(forthTd);
forthTd.textContent = Product.all[i].price;

let fifthTd = document.createElement('td');
trElement.appendChild(fifthTd);
fifthTd.textContent = Product.all[i].rooms;

let sixthTd = document.createElement('td');
trElement.appendChild(sixthTd);
sixthTd.textContent = Product.all[i].contactus;

let seventhTd = document.createElement('td');
trElement.appendChild(seventhTd);
seventhTd.textContent = Product.all[i].like;

let eighthTd = document.createElement('td');
trElement.appendChild(eighthTd);
eighthTd.textContent = Product.all[i].dislike;

let ninthTd = document.createElement('td');
trElement.appendChild(ninthTd);
ninthTd.textContent = Product.all[i].bought;




  } 

}

headerRow() 







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
  let data = localStorage.getItem('product');
  let parsedArr = JSON.parse(data);





  if (parsedArr !== null) {
    Product.all = [];
    for (let i = 0; i < parsedArr.length; i++) {
      let newProduct = new Product(parsedArr[i].like, parsedArr[i].dislike, parsedArr[i].bought);
      // newProduct.name = parsedArr[i].name;

      newProduct.like = parsedArr[i].like;
      newProduct.dislike = parsedArr[i].dislike;
      newProduct.bought = parsedArr[i].bought;
      namesArr.push(parsedArr[i].name);
    }

  }



}

















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
