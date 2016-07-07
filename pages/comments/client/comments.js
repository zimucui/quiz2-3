Template.comments.helpers({
	commentsdata: function(){
		return Comments.find({},{sort:{createdAt:-1}, limit:30000});},
	
	
})

Template.comments.events({
	"click .js-submit-comment": function(event){
	   event.preventDefault();
	   //console.dir(event);
	   const comment_text = $(".js-user-comment").val();
	   if (comment_text=="") {
	   	window.alert("you must enter a comment!");
	   	return;
	   }
		const comment_rating = parseInt($(".js-rating-comment").val());

	    Meteor.call('createCommentobj',comment_rating,comment_text);   

	    $(".js-user-comment").val("");
	    //Router.go('/');
	    console.log("Did we get here????")
	},
});

Template.commentRow.events({
	"click .js-delete-comment": function(event){
		console.log("clicked on the x");
		console.dir(this);
		Meteor.call('removeCommentobj',this.comment._id);  //"this.comment._id 来自html!!!"
	},
})





