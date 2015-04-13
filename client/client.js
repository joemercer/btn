

Template.Root.onRendered(function(){
  this.subscribe('allPublicButtons');
});


AutoForm.hooks({
  insertButtonForm: {
    before: {
      insert: function(doc) {
        doc.userId = Meteor.userId();
        var now = new Date();
        doc.clientCreatedTime = now;
        return doc;
      },
    }
  }
});



Template.Button.onRendered(function(){
  this.subscribe('allClicksFor', this.data);
});

Template.Button.helpers({
  clicks: function() {
    return Clicks.find({
      buttonId: this._id
    });
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


Template.Clicks.helpers({
  count: function() {
    return this.count();
  }
});


Template.User.onRendered(function(){
  // if (this.data.user._id === Meteor.userId()) {
    // Meteor.subscribe('allMyButtons');
  // }
  // else {
  //   Meteor.subscribe('allPublicButtonsFor', this.data.user);
  // }
});