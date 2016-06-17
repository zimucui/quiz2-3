
Meteor.startup(function() {
if (Rprofessor.find().count()==0) {
	Rprofessor.insert({offeredBy:"Tim", coursesoffered:[10, 11], times:[1,3,5], classname:"123", email: "thickey@brandeis.edu"});
	Rprofessor.insert({offeredBy:"Zimu", coursesoffered:[10, 12], times:[1,3,5], classname:"123",email: "Zimu@brandeis.edu"});
	Rprofessor.insert({offeredBy:"Meteer", coursesoffered:[101, 102], times:[1,3,5],classname:"123", email: "Meteer@brandeis.edu"});
	}


})