Router.configure({
  layoutTemplate: 'BaseLayout',
  loadingTemplate: 'Loading'
});



// This route is for showing you a relevency sorted list of buttons, including your private buttons and all public buttons
Router.route('/', {
  name: 'Home',
  template: 'Home',
  waitOn: function() {
    this.subscribe('allPublicButtons').wait();
  },
  data: function() {
    return {
      buttons: Buttons.find({
        'public': true
      })
    };
  },
  action: function() {
    if (this.ready()) {
      this.render();
    }
  }
});



// This route is for showing you *your* buttons, both public and private
Router.route('/:handle', {
  name: 'Profile',
  template: 'Profile',
  waitOn: function () {
    this.subscribe('allUsers').wait();

    if (Meteor.user() && Meteor.user().profile.handle === this.params.handle) {
      this.subscribe('allButtonsFor', Meteor.user()).wait();
    }
    else {
      this.subscribe('allPublicButtonsFor', this.params.handle).wait();
    }
  },
  data: function() {
    // seems bad, but we need to wait for this.ready()
    // https://github.com/iron-meteor/iron-router/issues/576
    if (this.ready()) {
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
    }
  },
  action: function() {
    if (this.ready()) {
      this.render();
    }
  }
});
