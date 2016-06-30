Meteor.methods({
	'createCommentobj':function(comment_rating,comment_text){
		console.log("create comment obj");
		
	   const comment_obj =
	   {text: comment_text,
	   	rating:comment_rating,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
	    userEmail: Meteor.user().emails[0].address};
	    //console.dir(comment_obj);
	    Comments.insert(comment_obj);
	},

	'sayhilib': function(){
		console.log("hi!");
	},

	'removeCommentobj':function(id){
		console.log(id);
		console.log("removing comment");
		Comments.remove(id);
		
	},

	'createComment':function(name,classname,email,time,arr,grade,evaluation){
		const teacher =
		{offeredBy:name, days: arr, classname:classname, email:email, time:time, grade:grade, evaluation:evaluation};
		console.dir(teacher);
		Rprofessor.insert(teacher);
	},


	'removeComment':function(id){
		
		Rprofessor.remove(id);
	},

	'givepersonal':function(firstname,lastname,id) {

		
		// const result = {firstname:firstname, lastname:lastname, createdBy:id};
		// Settings.remove({});
		// Settings.insert(result);



	   if(Settings.findOne({createdBy:id}) == null) {
            const result = {firstname:firstname, lastname:lastname, createdBy:id};
            Settings.insert(result);        
        } else {
            Settings.update({createdBy: id}, {
                    $set: { firstname: firstname, lastname:lastname }})
        }
       
      },

})