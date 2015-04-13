Router.configure({
  layoutTemplate: 'BaseLayout'
});



// This route is for showing you a relevency sorted list of buttons, including your private buttons and all public buttons
Router.route('/', function () {
  this.render('Root', {
    data: function() {
      return {
        buttons: Buttons.find({
          'public': true
        })
      };
    }
  });
});

// This route is for showing you *your* buttons, both public and private
Router.route('/:handle', function () {

	var user = Meteor.users.findOne({
    'profile.handle': this.params.handle
  });

  var buttons;
  if (user._id === Meteor.userId()) {
    this.subscribe('allButtonsFor', user);
    buttons = Buttons.find({
      userId: user._id
    });
  }
  else {
    this.subscribe('allPublicButtonsFor', user);
    buttons = Buttons.find({
      userId: user._id,
      'public': true
    });
  }

  this.render('User', {
  	data: function() {
  		return {
        user: user,
        buttons: buttons
      };
  	}
  });
});