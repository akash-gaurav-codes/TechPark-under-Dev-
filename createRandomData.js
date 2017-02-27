// Created by Akash Gaurav
// on 26 Feb 2017
// akash.gaurav.coder@gmail.com


// The park has a fixed number of towers.
// Each tower has a multiple floors (chosen randomly here).
// Each floor has a fixed number of units.
// Each unit is owned by exactly one company, 
// while one company can own multiple units.


var numOfTowers = 4;
var numOfUnitsPerFloor = 10;


function genRandom(min, max){
	return Math.floor((Math.random()) * (max - min)) + min; 
}





//Populate companies
function company(name){
	this.name = name;
}

var companies = [];

var numOfCompanies = genRandom (75, 100);



for (var cmp = numOfCompanies-1; cmp > 0; cmp--) {

	// insert some companies to hold vacant units
	if(cmp%3==0)  companies.push(new company("vacant"));
	
	else          companies.push(new company("Cp" + cmp));
}
	console.log("\nNum of companies created : " + numOfCompanies);


//create a prototype of unit
function unit(name, owner, floor, tower) {
			this.name = name;
			this.owner = owner;
			this.floor = floor;
			this.tower = tower;
}

var units = [];  //will contain all the units in the park

var floorsInTowers = [];
	

//Populate Towers
for (var tower = 4; tower > 0; tower--) {
	//Each tower can have between 15 to 20 floors
	//Choose a value randomly
	var numOfFloors = genRandom(15, 20);
	floorsInTowers.push(numOfFloors);
	
	console.log("\nChosen " + numOfFloors + " floors for Tower number " + tower);

	for (var floor = numOfFloors; floor > 0; floor--) {
		//console.log("\n  Begin floor " + floor);

		for (var unitNum = 10; unitNum > 0; unitNum--) {
			var name = (unitNum<10 ? "0" + unitNum : unitNum) + "in"
					  + (floor<10 ? "0" + floor : floor)+ "in"
					  + tower ; 
			
			var owner = companies[genRandom(1, companies.length)];

			units.push(new unit (name, owner, floor, tower));

			//console.log("    Inserted " + name + " owned by " + owner.name);			
			}
	}
}

