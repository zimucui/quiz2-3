Comments = new Meteor.Collection("comments");
Rprofessor = new Meteor.Collection("rprofessor");
Quizinput = new Meteor.Collection("quizinput");

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
