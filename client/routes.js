Router.configure({
  layoutTemplate: 'BaseLayout'
});



// This route is for showing you a relevency sorted list of buttons, including your private buttons and all public buttons
Router.route('/', function () {
  this.render('Root', {
    data: function() {
      return {
        thing: 'hello',
        buttons: Buttons.find({
          'public': true
        })
      };
    }
  });
});

// This route is for showing you *your* buttons, both public and private
Router.route('/:handle', function () {

	// var user = Meteor.users.findOne({
	// 	'profile.handle': this.params.handle
	// });

  this.render('User', {
  	data: function() {
  		return Meteor.users.findOne({
				'profile.handle': this.params.handle
			});
  	}
  });
});