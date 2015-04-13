
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

