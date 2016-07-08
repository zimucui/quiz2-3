Template.quiz4.helpers({
	quizsubmit:function(){
		//const name = $(".js-name").val();
		return Quizinput.find({});
	},


});


Template.quiz4.events({


	"click .js-addBio": function(event){
		const name=$(".js-name").val();
		const evaluation =$(".js-evaluation").val();
		Meteor.call('quiz4comment',name,evaluation);
	}


});