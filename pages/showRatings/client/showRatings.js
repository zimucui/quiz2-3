Template.Pname.onCreated(function() {
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('coinerChosen', false);
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('hickeyChosen', false);
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('epsteinChosen', false);
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('strogatzChosen', false);
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('cohenChosen', false);
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('funnyChosen', false);

  
});



Template.Pname.helpers({

	coinerChosen: function(){
		return Template.instance().templateDictionary.get('coinerChosen');
	},

	hickeyChosen:function(){
		return Template.instance().templateDictionary.get('hickeyChosen');
	},

	epsteinChosen:function(){
		return Template.instance().templateDictionary.get('epsteinChosen');
	},

	strogatzChosen:function(){
		return Template.instance().templateDictionary.get('strogatzChosen');
	},

	cohenChosen:function(){
		return Template.instance().templateDictionary.get('cohenChosen');
	},

	funnyChosen:function(){
		return Template.instance().templateDictionary.get('funnyChosen');
	},

});


Template.Pname.events({

	

	"change select": function(event, template){

		if($(event.target).val()==='coiner'){
			template.templateDictionary.set('coinerChosen',true);
			template.templateDictionary.set('hickeyChosen',false);
			template.templateDictionary.set('epsteinChosen',false);
			template.templateDictionary.set('strogatzChosen',false);
			template.templateDictionary.set('cohenChosen',false);
			template.templateDictionary.set('funnyChosen',false);
		}else if($(event.target).val()==='hickey'){
			template.templateDictionary.set('coinerChosen',false);
			template.templateDictionary.set('hickeyChosen',true);
			template.templateDictionary.set('epsteinChosen',false);
			template.templateDictionary.set('strogatzChosen',false);
			template.templateDictionary.set('cohenChosen',false);
			template.templateDictionary.set('funnyChosen',false);
			
		}else if($(event.target).val()==='epstein'){
			template.templateDictionary.set('coinerChosen',false);
			template.templateDictionary.set('hickeyChosen',false);
			template.templateDictionary.set('epsteinChosen',true);
			template.templateDictionary.set('strogatzChosen',false);
			template.templateDictionary.set('cohenChosen',false);
			template.templateDictionary.set('funnyChosen',false);
		}else if($(event.target).val()==='strogatz'){
			template.templateDictionary.set('coinerChosen',false);
			template.templateDictionary.set('hickeyChosen',false);
			template.templateDictionary.set('epsteinChosen',false);
			template.templateDictionary.set('strogatzChosen',true);
			template.templateDictionary.set('cohenChosen',false);
			template.templateDictionary.set('funnyChosen',false);
		}else if($(event.target).val()==='cohen'){
			template.templateDictionary.set('coinerChosen',false);
			template.templateDictionary.set('hickeyChosen',false);
			template.templateDictionary.set('epsteinChosen',false);
			template.templateDictionary.set('strogatzChosen',false);
			template.templateDictionary.set('cohenChosen',true);
			template.templateDictionary.set('funnyChosen',false);
		}else if($(event.target).val()==='funny'){
			template.templateDictionary.set('coinerChosen',false);
			template.templateDictionary.set('hickeyChosen',false);
			template.templateDictionary.set('epsteinChosen',false);
			template.templateDictionary.set('strogatzChosen',false);
			template.templateDictionary.set('cohenChosen',false);
			template.templateDictionary.set('funnyChosen',true);
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



