
Meteor.subscribe('allPublicButtons');

AutoForm.hooks({
  insertButtonForm: {
    before: {
      insert: function(doc) {
        doc.owner = Meteor.userId();
        var now = new Date();
        doc.clientCreatedTime = now;
        return doc;
      },
    }
  }
});