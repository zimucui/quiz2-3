Meteor.publish("comments",
	function() {return Comments.find();})

Meteor.publish("rprofessor",
	function(teachername) {return Rprofessor.find({offeredBy:teachername});})

Meteor.publish("userData",function () {
	if (this.userId) {
		return Meteor.users.find({_ie: this.userId},
			{fields:{profile:1, "services.google.email":1}});
	} else {
		this.ready();
	}
});

Meteor.publish("settings", function() {
	if (this.userId) {
		console.log("logged in");
		return Settings.find({createdBy: this.userId});
	} else {
		// this.ready();
		console.log("not log in");
	}


	
});