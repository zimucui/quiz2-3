Comments = new Meteor.Collection("comments");
Rprofessor = new Meteor.Collection("rprofessor");

Comments.deny({
	insert() {return true;},
	update() {return true;},
	remove() {return true;},
});

Rprofessor.deny({
	insert() {return true;},
	update() {return true;},
	remove() {return true;},
});
