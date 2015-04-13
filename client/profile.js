
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

Template.Profile.onRendered(function(){
  // if (this.data.user._id === Meteor.userId()) {
    // Meteor.subscribe('allMyButtons');
  // }
  // else {
  //   Meteor.subscribe('allPublicButtonsFor', this.data.user);
  // }
});