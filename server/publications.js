

// Users

Meteor.publish('allUsers', function () {
  return Meteor.users.find({}, {
    fields: {
      profile: 1
    }
  });
});



// Buttons

Meteor.publish('allPublicButtons', function() {
  return Buttons.find({
  	'public': true
  });
});

Meteor.publish('allButtonsFor', function(user) {
  return Buttons.find({
    userId: user._id
  });
});

Meteor.publish('allPublicButtonsFor', function(handle) {
  // handle is unique among users
  var user = Meteor.users.findOne({
    'profile.handle': handle
  });

  return Buttons.find({
  	userId: user._id,
    'public': true
  });
});



// Clicks

Meteor.publish('allClicksFor', function(button) {
  return Clicks.find({
  	buttonId: button._id
  });
});