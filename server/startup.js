
Meteor.startup(function() {
if (Rprofessor.find().count()==0) {
	Rprofessor.insert({offeredBy:"Tim", days:[],  grade:"", evaluation:"", time:"", classname:"123", email: "thickey@brandeis.edu"});
	
	}


})