Session.set("results", "0");
Template.home.helpers({
	searchdata: function(){return Rprofessor.find({}, {sort:{searches:-1}});},
	// resultData: function(){
	// 	let loc = Session.get("results");
	// 	return Trips.find({destination: loc},{sort:{datecreated: -1}});
	// },
})


Template.commentresults.events({
	"click .js-gogo": function(event){
		event.preventDefault();
		const teachername=$(".js-loca").val().toLowerCase();
		
		Router.go('searchresults');
		Session.set("results", teachername);
	}
})