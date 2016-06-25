Template.searchresults.helpers({
	// searchdata: function(){return DestSearched.find({}, {sort:{searches:-1}});},
	resultData: function(){
		let teachername = Session.get("results");
		console.log(teachername);
		return Rprofessor.find({offeredBy: teachername},{sort:{datecreated: -1}});
	},
})