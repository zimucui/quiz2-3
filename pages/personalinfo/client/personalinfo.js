Template.personalinfo.helpers({
	commentsdata: function(){
		return Settings.find();
	},
})
Template.personalinfo.events ({
	"click .js-addDay": function(event){
		console.log("it works");
		const firstname =$(".js-fn").val();
		const lastname =$(".js-ln").val();
		const id = Meteor.userId();
		Meteor.call('givepersonal',firstname,lastname,id);
	},

	
})