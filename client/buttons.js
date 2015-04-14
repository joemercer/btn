Template.Button.onRendered(function(){
  this.subscribe('allClicksFor', this.data);
});

Template.Button.helpers({
  clicks: function() {
    return Clicks.find({
      buttonId: this._id
    });
  },
  count: function() {
    return Clicks.find({
      buttonId: this._id
    }).count();
  }
});

Template.Button.events({
  'click button': function(e){
    Clicks.insert({
      buttonId: this._id,
      userId: Meteor.userId(),
      clientCreatedTime: new Date()
    });
  }
});