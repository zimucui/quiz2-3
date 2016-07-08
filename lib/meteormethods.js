Meteor.methods({
	'createCommentobj':function(comment_rating,comment_text){
		console.log("create comment obj");
		check(comment_text, String);
		check(comment_rating, Number);
		if (comment_rating<1 || comment_rating>5){
			throw new Meteor.Error(400,"rating out of range");
		}
		console.log("are we here");
	   
	   const comment_obj =
	   {text: comment_text,
	   	rating:comment_rating,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
	    userEmail: Meteor.user().emails[0].address};
	    //console.dir(comment_obj);
	    Comments.insert(comment_obj);
	},


	'quiz4comment': function(name,evaluation){
		const quiz4_obj =
		{name: name,
		commentparagraph:evaluation};
		Quizinput.insert(quiz4_obj);
	},












	'sayhilib': function(){
		console.log("hi!");
	},

	'removeCommentobj':function(id){
		check(id, String);
		console.log(id);
		console.log("removing comment");
		Comments.remove(id);
		
	},

	'createComment':function(name,classname,email,time,arr,grade,evaluation){
		check(name, String);
		check(classname, String);
		check(email, String);
		check(time, String);
		check(arr, [String]);
		
		check(evaluation, String);



		const teacher =
		{offeredBy:name, days: arr, classname:classname, email:email, time:time, grade:grade, evaluation:evaluation};
		console.dir(teacher);
		Rprofessor.insert(teacher);
	},


	'removeComment':function(id){
		
		Rprofessor.remove(id);
	}

})