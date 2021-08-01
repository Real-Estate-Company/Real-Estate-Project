

let likeArr = [];
let dislikeArr = [];
let boughtArr = [];
let namesArr = [];

function updateStorage() {


  let stringArr = JSON.stringify(Product.all);
  localStorage.setItem('product', stringArr);


}

updateStorage();

let parent = document.getElementById('ontrolTable');
let table = document.createElement('table');
controlTable.appendChild(table);

// standing alone functios...

function headerRow() {
  let headingRow = document.createElement('tr');
  table.appendChild(headingRow);
  let emptyCell = document.createElement('th');
  headingRow.appendChild(emptyCell);
  emptyCell.textContent = 'Name';
  for (let i = 0; i < Product.all.length; i++) {
    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = Product.all[i].name;
    let firstTd = document.createElement('td');
    headingRow.appendChild(firstTd);
    firstTd.textContent = Product.all[i].like;
    let secondTd = document.createElement('td');
    headingRow.appendChild(secondTd);
    secondTd.textContent = Product.all[i].dislike;
    let lastTd = document.createElement('td');
    headingRow.appendChild(lastTd);
    lastTd.textContent = Product.all[i].bought;
  }

}

headerRow() 


function productsVotes() {
  let data = localStorage.getItem('product');
  let parsedArr = JSON.parse(data);






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

