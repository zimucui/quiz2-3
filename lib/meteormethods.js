Meteor.methods({
	
	'sayhilib': function(){
		console.log("hi!");
	},

	'removeCommentobj':function(id){
		console.log(id);
		console.log("removing comment");
		Comments.remove(id);
		
	},

	'createComment':function(firstname,lastname,email,nickname,birthyear){
		const comment_obj =
	   {firstname: firstname,
	   	lastname:lastname,
	    email:email,
	    createdBy: Meteor.userId(),
	   	nickname:nickname,
	   	birthyear:birthyear};
	    //console.dir(comment_obj);
	    Rprofessor.insert(comment_obj);
	},


	'removeComment':function(id){
		
		Rprofessor.remove(id);
	},

	'givepersonal':function(firstname,lastname,id) {
	   if(Settings.findOne({createdBy:id}) == null) {
            const result = {firstname:firstname, lastname:lastname, createdBy:id};
            Settings.insert(result);        
        } else {
            Settings.update({createdBy: id}, {
                    $set: { firstname: firstname, lastname:lastname }})
        }
       
      },
    })
