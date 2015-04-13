Router.configure({
  layoutTemplate: 'BaseLayout'
});



// This route is for showing you a relevency sorted list of buttons, including your private buttons and all public buttons
Router.route('/', {
  name: 'Home',
  template: 'Home',
  subscriptions: function() {
    this.subscribe('allPublicButtons');
  },
  data: function() {
    return {
      buttons: Buttons.find({
        'public': true
      })
    };
  },
  action: function() {
    this.render();
  }
});



// This route is for showing you *your* buttons, both public and private
Router.route('/:handle', {
  name: 'Profile',
  template: 'Profile',
  subscriptions: function() {
    var user = Meteor.users.findOne({
      'profile.handle': this.params.handle
    });
    if (user._id === Meteor.userId()) {
      this.subscribe('allButtonsFor', user);
    }
    else {
      this.subscribe('allPublicButtonsFor', user);
    }
  },
  data: function() {
    var user = Meteor.users.findOne({
      'profile.handle': this.params.handle
    });

    var buttons;
    if (user._id === Meteor.userId()) {
      buttons = Buttons.find({
        userId: user._id
      });
    }
    else {
      buttons = Buttons.find({
        userId: user._id,
        'public': true
      });
    }

    return {
      user: user,
      buttons: buttons
    };
  },
  action: function() {
    this.render();
  }
});



//   function () {

// 	var user = Meteor.users.findOne({
//     'profile.handle': this.params.handle
//   });

//   var buttons;
//   if (user._id === Meteor.userId()) {
//     this.subscribe('allButtonsFor', user);
//     buttons = Buttons.find({
//       userId: user._id
//     });
//   }
//   else {
//     this.subscribe('allPublicButtonsFor', user);
//     buttons = Buttons.find({
//       userId: user._id,
//       'public': true
//     });
//   }

//   this.render('Profile', {
//   	data: function() {
//   		return {
//         user: user,
//         buttons: buttons
//       };
//   	}
//   });
// });