let asideBtn = document.querySelector('.aside-btn ');
let aside = document.querySelector('.aside');
let backdrop = document.querySelector('.__backdrop');


asideBtn.addEventListener('click', () =>{
    aside.classList.add('show');
    backdrop.classList.add('offcanvas-backdrop');
    backdrop.classList.add('show');

    
})
backdrop.addEventListener('click', () =>{
    aside.classList.remove('show');
    backdrop.classList.remove('offcanvas-backdrop');
    backdrop.classList.remove('show');

    
})

// Chart-Js

const labels = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    

  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      borderRadius: 6,
      data: [0, 10, 5, 2, 20, 30, 45,4, 10, 5, 2,  5, 29, 20, 30, 4, 45,20,40,55],
    }
,{
    label: 'My First dataset',
    backgroundColor: 'rgb(255,255,102)',
    
    borderColor: 'rgb(255, 99, 132)',
    borderRadius: 6,
    data: [ 5, 2,  5, 29, 20, 30, 4, 45,20,40,55,0, 10, 5, 2, 20, 30, 45,4, 10,],
  },

]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio : false,
        scales : {
            x:{
                grid : {
                    
                    display :false,
                }
            },
            y:{
                grid : {
                    borderColor:'transparent',
                    borderDash: [5],
                },
                ticks: {
                    step: 20
                }
            }
            
        },
        plugins:{
            legend:{
                position: 'bottom',
                align: 'start',
                labels:{
                    usePointStyle: true
                }
            }
        }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );



  
// data-table

$(document).ready(function () {
    $('#tt').DataTable({
        pageLength:5,
    });
});

//   Visitors


  const vLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const vData = {
    labels: vLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      borderRadius:6,
      data: [3, 10, 5, 2, 20, 30, 45],
    },{
        label: 'My second dataset',
        backgroundColor: 'rgb(255, 99, 132,0.3)',
        borderColor: 'rgb(255, 99, 132)',
        borderRadius:6,
        data: [2, 14, 32, 2, 15, 34, 43],
      }]
  };

  const vConfig = {
    type: 'bar',
    data: vData,
    options: {
        maintainAspectRatio : false,
        scales : {
            x:{
                grid : {
                    
                    display :false,
                }
            },
            y:{
                grid : {
                    borderColor:'transparent',
                    borderDash: [5],
                },
                ticks: {
                    step: 20
                }
            }
            
        },
        plugins:{
            legend:{
                position: 'bottom',
                align: 'start',
                labels:{
                    usePointStyle: true
                }
            }
        }
    }
  };
  const vChart = new Chart(
    document.getElementById('myVisitor'),
    vConfig
  );


