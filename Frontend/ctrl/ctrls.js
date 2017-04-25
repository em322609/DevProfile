app.controller('associateWelcomeCtrl', function ($scope, $state){

	$scope.studentPortal = function(){
		$state.go('studentReg');
	}

	google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChartTwo);
      google.charts.setOnLoadCallback(drawChartThree);
      google.charts.setOnLoadCallback(drawChartFour);


      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Front End Technologies', 'Industry Experience (in months)'],
          ['AngularJS',     9],
          ['HTML',      24],
          ['Bootstrap',  12],
          ['Javascript', 18],
          ['CSS',    8]
        ]);

        var options = {
          title: 'Front-end Technologies (Industry Experience in Months)',
          pieHole: 0.4,
          backgroundColor: { fill : 'transparent'},
          titleTextStyle: { color: '#FFF'},
          height: 300,
          width: 350,
          legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 10}}
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }

      function drawChartTwo() {
        var data = google.visualization.arrayToDataTable([
          ['Programming Languages', 'Industry Experience (in months)'],
          ['C#',     38],
          ['C++',      36],
          ['Java',  24],
          ['Javascript', 18],
          ['Python',    8]
        ]);

        var options = {
          title: 'Programming Languages (Industry Experience in Months)',
          pieHole: 0.4,
          backgroundColor: { fill : 'transparent'},
          titleTextStyle: { color: '#FFF'},
          height: 300,
          width: 350,
          legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 10}}
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchartTwo'));
        chart.draw(data, options);
      }

    function drawChartThree() {
        var data = google.visualization.arrayToDataTable([
          ['Business-Layer Technologies', 'Industry Experience (in months)'],
          ['ASP.NET MVC',     14],
          ['RESTful Web Services',      8],
          ['SOAP base Web Services',  6],
          ['Razor View Engine', 6]
        ]);

        var options = {
          title: 'Business-Layer Technologies(Industry Experience in Months)',
          pieHole: 0.4,
          backgroundColor: { fill : 'transparent'},
          titleTextStyle: { color: '#FFF'},
          height: 300,
          width: 350,
          legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 10}}
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchartThree'));
        chart.draw(data, options);
      }

      function drawChartFour() {
        var data = google.visualization.arrayToDataTable([
          ['Back-End Technologies', 'Industry Experience (in months)'],
          ['ADO.NET',     14],
          ['Entity Framework',      12],
          ['MySQL',  12],
          ['RDS', 12],
          ['SQL Server Management Studio', 10]
        ]);

        var options = {
          title: 'Back-End Technologies(Industry Experience in Months)',
          pieHole: 0.4,
          backgroundColor: { fill : 'transparent'},
          titleTextStyle: { color: '#FFF'},
          height: 300,
          width: 350,
          legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 10}}
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchartFour'));
        chart.draw(data, options);
      }


});