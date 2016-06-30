

Template.myprofile.helpers({
	ratings:function(){
		//const name = $(".js-name").val();
		return Rprofessor.find({});
	}


})

Template.myprofile.events({


	"click .js-addDay": function(event){
		console.log("hey you clicked the button");
		const firstname =$(".js-firstname").val();
		const lastname =$(".js-lastname").val();
		const email =$(".js-email").val();
		const nickname =$(".js-nickname").val();
		const birthyear =$(".js-birthyear").val();
		
		
		Meteor.call('createComment',firstname,lastname,email,nickname,birthyear);
		Router.go("profiles");

		
		
	}



})

Template.comment.events({
	"click .js-delete-comment": function(event){
		// Comments.remove(this._id);
		console.dir(this);
		console.log(this.abc._id);
		Meteor.call('removeComment',this.abc._id);//"this.abc._id 来自html!!!"
	}
})



