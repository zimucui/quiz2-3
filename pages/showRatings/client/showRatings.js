Template.showRatings.helpers({
	ratings:function(){
		//const name = $(".js-name").val();
		return Rprofessor.find({});
	}


})

Template.showRatings.events({


	"click .js-addDay": function(event){
		console.log("hey you clicked the button");
		const name =$(".js-name").val();
		const classname =$(".js-offered").val();
		const email =$(".js-email").val();
		const time =$(".js-time").val();
		const mon =$(".js-mon").val();
		const tue =$(".js-tue").val();
		const wed =$(".js-wed").val();
		const thu =$(".js-thu").val();
		const fri =$(".js-fri").val();
		const grade =$(".js-grade").val();
		const evaluation =$(".js-evaluation").val();
		const teacher =
		{offeredBy:name, days:[mon,tue,wed,thu,fri], classname:classname, email:email, time:time, grade:grade, evaluation:evaluation};
		console.dir(teacher);
		Rprofessor.insert(teacher);
	}

	








})

Template.commentRow.events({
	"click .js-delete-comment": function(event){
		Comments.remove(this._id);
		console.log("clicked on the x");
		console.dir(this);
		Comments.remove(this.comment._id);
	}
})