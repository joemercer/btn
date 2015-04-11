
Buttons.allow({
  insert: function() {
    return true;
  },
  remove: function() {
    return true;
  },
  update: function() {
    return true;
  }
});

Clicks.allow({
  insert: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});



Meteor.publish('allPublicButtons', function() {
  return Buttons.find({
  	'public': true
  });
});



Meteor.publish('allButtonsFor', function(user) {
  return Buttons.find({
  	owner: user._id
  });
});


Meteor.publish('allClicksFor', function(button) {
  return Clicks.find({
  	buttonId: button._id
  });
});