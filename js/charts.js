
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const firstData = {
    labels:labels,
    datasets: [{
       label:"none",
      data: [0,10000,20000,30000,40000,50000],
      backgroundColor: "rgb(255,50,50,0.5)",
      borderColor: 'rgb(75, 192, 192)',
      
    }]
  }
  const firstConfig = {
      type:'line',
      data:firstData,
    //   options : {
    //       responsive:true,
    //       maintainAspectRatio:false,
         
    //       }
  }
const myFirstChart = new Chart(ordersChart,firstConfig)


  const bardata = {
    labels: labels,
    datasets: [{
      label: 'Men',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [1000, 5000, 10000, 20000,],
    },{
        label: 'weomen',
        backgroundColor: 'rgb(0, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [500, 5000, 10000,2000],
      }

]
  };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };
const Barconfig = {
    type: 'bar',
    data: bardata,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
    //   responsive:true,
    //   maintainAspectRatio:false
    },
  };

  const myBarChart = new Chart(
    visitorChart,
    Barconfig
  );

//   pie chart =====================================
const pieData = {
    datasets: [{
        backgroundColor: ["red", "blue", "green"],
        data: [10, 30, 30],
        // hoverOffset: 4,
        
    },],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Riyadh',
        'Jeddah',
        'Makkah'
    ]
};

const pieConfig = {
  type: 'pie',
  data: pieData,
  
  options : {
    responsive:false,
    // maintainAspectRatio:false,
    // aspectRatio: 1
    
    }
};
const myPieChart = new Chart(citiesChart,pieConfig)

// var citiesChart = document.getElementById("myPieChart");
// var myCitiesChart = new Chart(citiesChart, {
//   type: 'pie',
//   data: {
//     labels: ["Riyadh", "Jaddah", "Sharqia", "Mecca"],
//     datasets: [{
//       data: [40, 20.2, 10.11, 30],
//       backgroundColor: ["rgba(218,65,103,0.8)", "rgb(55, 49, 94, 0.8)", "rgba(218,65,99,0.8)", "rgb(25, 39, 90, 0.8)"],
//     }],
//     options : {
//         responsive:true,
//         maintainAspectRatio:false,
//         aspectRatio: 0,
//         }
//   },
// });


// line chart ==================================



  
const lineData = {
  labels: labels,
  datasets: [{
      label:"none",
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: "pink",
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
const lineConfig = {
    type: 'line',
    data: lineData,
    options: {
      responsive: false,
        legend: {
        display: false,
    }
}
    
    
  };

  const myLineChart = new Chart(ratChart , lineConfig)


  


  