Template.Pname.onCreated(function() {
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('cosiProChosen', false);
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('mathProChosen', false);

  
});



Template.Pname.helpers({

	cosiProChosen: function(){
		return Template.instance().templateDictionary.get('cosiProChosen');
	},

	mathProChosen:function(){
		return Template.instance().templateDictionary.get('mathProChosen');
	},

});


Template.Pname.events({

	

	"change select": function(event, template){

		if($(event.target).val()==='cosi'){
			template.templateDictionary.set('cosiProChosen',true);
			template.templateDictionary.set('mathProChosen',false);
			console.log("cosi true");
		}else if($(event.target).val()==='math'){
			template.templateDictionary.set('cosiProChosen',false);
			template.templateDictionary.set('mathProChosen',true);
			console.log("math true");
		}

				
	},



});



Template.showRatings.helpers({
	ratings:function(){
		//const name = $(".js-name").val();
		return Rprofessor.find({});
	},


});


Template.showRatings.events({


	"click .js-addDay": function(event){
		console.log("hey you clicked the button");
		const name =$(".js-name").val();
		const classname =$(".js-offered").val();
		const email =$(".js-email").val();
		const time =$(".js-time").val();
		const mon =$(".js-mon").val();
		var arr = []
		if ($('.js-mon').is(":checked")) {
			arr.push("monday");
		}
		const tue =$(".js-tue").val();
		
		if ($('.js-tue').is(":checked")) {
			arr.push("tuesday");
		}
		
		const wed =$(".js-wed").val();
		
		if ($('.js-wed').is(":checked")) {
			arr.push("wednesday");
		}
		const thu =$(".js-thu").val();
		
		if ($('.js-thu').is(":checked")) {
			arr.push("thursday");
		}
		const fri =$(".js-fri").val();
		
		if ($('.js-fri').is(":checked")) {
			arr.push("friday");
		}
		const grade =$(".js-grade").val();
		const evaluation =$(".js-evaluation").val();
		
		Meteor.call('createComment',name,classname,email,time,arr,grade,evaluation);

		$(".js-evaluation").val("");
		$(".js-name").val("");
		$(".js-offered").val("");
		$(".js-email").val("");
		$(".js-grade").val("");
		document.getElementById("1").checked = false;
		document.getElementById("2").checked = false;
		document.getElementById("3").checked = false;
		document.getElementById("4").checked = false;
		document.getElementById("5").checked = false;
		$(".js-time").val("");

	},

	


})

Template.comment.events({
	"click .js-delete-comment": function(event){
		// Comments.remove(this._id);
		console.dir(this);
		console.log(this.abc._id);
		Meteor.call('removeComment',this.abc._id);//"this.abc._id 来自html!!!"
	}
})



