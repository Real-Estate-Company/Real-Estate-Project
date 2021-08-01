let parent = document.getElementById('Control-table');
let table = document.createElement('table');
parent.appendChild(table);

console.log(table)

function makeHeader() {
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);
  
  let firstTd=document.createElement('td');
  headerRow.appendChild(firstTd);
  firstTd.textContent = 'name';

  let secondTd=document.createElement('td');
  headerRow.appendChild(secondTd);
  secondTd.textContent = 'like';

  let ThirdTd=document.createElement('td');
  headerRow.appendChild(ThirdTd);
  ThirdTd.textContent = 'dislikes';


  let ForthTD=document.createElement('td');
  headerRow.appendChild(ForthTD);
  ForthTD.textContent = 'bought';
}


makeHeader();







  function showChart() {
    data = {
      labels: "namesArr",
      datasets: [{
        label: 'likes',
        data: [1,2,3,4],
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
        data: [1,2,3,6,4],
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
        data: [1,2,3,3,5,6,7,7,4],
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

  showChart() ;