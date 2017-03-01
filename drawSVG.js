	var screenHeight = 500;
	var screenWidth  = 800;

	var towerPadding = 20;
	var unitPadding  = 5;

	//Todo : these are all dummy value. Fetch them from database.
	var numOfTowers = 4;
	var numOfUnitsPerFloor = 10;


	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	var svgNS = svg.namespaceURI;

	var colorTower      = "#000000";
	var colorUnitVacant = "#ffffff";
	var colorUnitOwned  = "#fbff58	";
	var colorUnitQueryResult  = "#fbff00";



	//create the towers
	var towerWidth = (screenWidth - (towerPadding*(numOfTowers+1)))/4;
		//console.log(" +++floorsInTower " + floorsInTowers);
	
	for (var i = numOfTowers; i > 0; i--) {
			//console.log((i) + " floorsInTower " + floorsInTowers[4-i]);
		var towerHeight = screenHeight * (floorsInTowers[4-i]/25);
		
		var towerX = (i*towerPadding) + (i-1)*towerWidth;
		var towerY = (screenHeight - towerHeight);
		
		 	//console.log("\ntower height : " + towerHeight);
			//console.log("tower y : " + towerY);
		
		var rect = document.createElementNS(svgNS,'rect');
	    rect.setAttribute('x',towerX);
	    rect.setAttribute('y',towerY);
	    rect.setAttribute('width',towerWidth);
	    rect.setAttribute('height',towerHeight);
	    rect.setAttribute('fill',colorTower);
	    svg.appendChild(rect);		
	}





	//draw the units
		
	var unitHeight = (screenHeight - 26*unitPadding)/25;

	for (var i = units.length - 1; i >=0; i--) {
		//for (var i = units.length - 1; i >=units.length - 10; i--) {
		
		var unitNum  = Number(units[i]['name'].split('in')[0]);
		var floorNum = Number(units[i]['name'].split('in')[1]);
		var towerNum = Number(units[i]['name'].split('in')[2]);
		
			//console.info("name:" + units[i]['name'] + "\t" + unitNum + "\t" + floorNum + "\t" + towerNum)

		var unitWidth = (towerWidth - (numOfUnitsPerFloor+1)*unitPadding)/numOfUnitsPerFloor;
		
			//console.log("\n***" + towerWidth + "by" + unitWidth);
			//console.log("***" + towerHeight + "by" + unitHeight);

		var unitX = towerNum*towerPadding + (towerNum-1)*towerWidth
				   +unitNum*unitPadding + (unitNum-1)*unitWidth;

		var unitY = floorNum*unitHeight + floorNum*unitPadding;
		unitY = screenHeight - unitY;
	
				
		var fill = (units[i].owner.name=='vacant') ? colorUnitVacant : colorUnitOwned;
	    
	    var rect = document.createElementNS(svgNS,'rect');
	    rect.setAttribute('x',unitX);
	    rect.setAttribute('y',unitY);
	    rect.setAttribute('width',unitWidth);
	    rect.setAttribute('height',unitHeight);
	    rect.setAttribute('fill',fill);
	    svg.appendChild(rect);
	}
	    document.getElementById('asvg').appendChild(svg);
