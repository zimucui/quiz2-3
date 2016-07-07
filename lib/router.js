Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {name:"home"});
Router.route('comments');

Router.route('showRatings');
Router.route('showcase');
Router.route('about');
Router.route('searchresults');
Router.route('commentresults');

Router.route('/showprofessor/:_id',
	{name:"showprofessor",
	 data: function(){
	 	check(this.params._id, String);
	 	return Rprofessor.findOne({_id:this.params._id});
	 }
	}
)


