Meteor.publish("comments",
	function() {return Comments.find();})

Meteor.publish("rprofessor",
	function() {return Rprofessor.find();})

Meteor.publish("quizinput",
	function() {return Quizinput.find();})

Meteor.publish("userData",function () {
	if (this.userId) {
		return Meteor.users.find({_ie: this.userId},
			{fields:{profile:1, "services.google.email":1}});
	} else {
		this.ready();
	}
});